import React from "react";
import { Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { firebaseDB } from "./../config/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useContext } from "react";
import { UserDetailContext } from './../context/UserDetailContext.tsx'; 


function Workspace() {
  const { user, isLoaded } = useUser();
  const {userDetails,setUserDetails}=useContext(UserDetailContext);

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
      Workspace
      <Outlet />
    </div>
  );
}
export default Workspace;
