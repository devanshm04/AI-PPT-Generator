import { firebaseDB } from './../../../config/FirebaseConfig';
import { doc,getDoc } from 'firebase/firestore';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import SliderStyle from '../../../src/components/custom/SliderStyle';

type Project={
   userInputPrompt:string,
   projectId:string,
   createdBy:string,
   createdAt:number,
}



const Outline = () => {
  const {projectId}=useParams();
  const [projectDetail,setProjectDetail]=useState<Project>()

   useEffect(()=>{
       projectId && GetProjectDetails();
   }, [projectId])
  
  const GetProjectDetails=async()=>{
      const docref=doc(firebaseDB,"projects",projectId??'');
      const docsnap:any=await getDoc(docref);
      if(!docsnap.exists()){
        return ;
      }
      console.log("Project Data:",docsnap.data());
      setProjectDetail(docsnap.data());
  }

  return (
    <div className='flex justify-center'>
      <div className='max-w-3xl w-full'>
        <h2 className='font-bold text-2xl'>Settings and Sliders</h2>
        <SliderStyle/>
      </div>
      </div>
  )
}

export default Outline