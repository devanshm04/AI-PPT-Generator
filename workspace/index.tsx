import React from "react";
import { Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { firebaseDB } from "./../config/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useContext } from "react";
import { UserDetailContext } from './../context/UserDetailContext.tsx'; 
import Header from "../src/components/custom/Header.tsx";
import Promtbox from "@/components/custom/Promtbox.tsx";
import { useLocation } from "react-router-dom";
import MyProjects from "@/components/custom/MyProjects.tsx";


function Workspace() {
  const { user, isLoaded } = useUser();
  const {userDetails,setUserDetails}=useContext(UserDetailContext);
  const location = useLocation();

   useEffect(() => {
    user && CreateNewUser();
   },[user]) 
  

  const CreateNewUser = async () => {
    if (user) {

      // if user exists in firestore
      const docRef = doc(
        firebaseDB,
        "user",
        user?.primaryEmailAddress?.emailAddress ?? '');
      const docSnap = await getDoc(docRef);


      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserDetails(docSnap.data());
      } else {
         const data ={
            fullname: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress,
            createdAt: new Date(),
            credits:2, 
         }


      //  insert new user
        await setDoc(doc(firebaseDB,"user",
        user?.primaryEmailAddress?.emailAddress??''),
        {
          ...data
        })
        setUserDetails(data);
  };
    }
  if (!user && isLoaded) {
    return <div>Please sign in to access the workspace.</div>;
  }
}
  return (
    <div>
      <Header/>
         {location.pathname==='/Workspace' && 
         <div>
         <Promtbox/>
         <MyProjects/>
         </div>}
      <Outlet />
    </div>
  );
}
export default Workspace;
