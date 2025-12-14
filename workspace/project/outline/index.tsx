import { firebaseDB, GeminiAimodel } from './../../../config/FirebaseConfig';
import { doc,getDoc } from 'firebase/firestore';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import SliderStyle from '../../../src/components/custom/SliderStyle';
import OutlineSection from '@/components/custom/OutlineSection';

const OUTLINE_PROMPT=`
Generate a PowerPoint slide outline for the topic {userInput}. Create {noofslide} in total. Each slide should include a topic name and a 2-line descriptive outline that clearly explains what content the slide will cover.
Include the following structure:
The first slide should be a Welcome screen.
The second slide should be an Agenda screen.
The final slide should be a Thank You screen.
Return the response only in JSON format, following this schema:
[
 {
 "slideNo": "",
 "slidePoint": "",
 "outline": ""
 }
]
`

type Project={
   userInputPrompt:string,
   projectId:string,
   createdBy:string,
   createdAt:number,
   noofslider:string,
   outline:Outline[],
}

export type Outline={
  slideNo:string,
  slidePoint:string,
  outline:string,
}






const Outline = () => {
  const {projectId}=useParams();
  const [projectDetail,setProjectDetail]=useState<Project>();
  const [Loading,setLoading] = useState(false);
  const [Outline,setOutline] = useState<Outline[]>([]);

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
      if(!docsnap.data()?.outline){
      generateslidersoutline(docsnap.data())
  }
}

  const generateslidersoutline=async(projectData : Project)=>{
    setLoading(true);
    // Provide a prompt that contains text
  const prompt = OUTLINE_PROMPT
  .replace('{userInput}',projectData?.userInputPrompt)
  .replace('{noofslide}',projectData?.noofslider)
  // To generate text output, call generateContent with the text input
  const result = await GeminiAimodel.generateContent(prompt);

  const response = result.response;
  const text = response.text();
  console.log(text);
  const rawJson=text.replace('```json','').replace('```','');
  const JSONData=JSON.parse(rawJson);
  setOutline(JSONData);
  setLoading(false);
  }

    const handleUpdateOutline=(index:string,value:Outline)=>{
      setOutline((prev)=>
      prev.map((item)=>
      item.slideNo==index?{...item,...value}:item
    )
    )
    }
    
    const onGenerateSlider=()=>{
      
    }

  return (
    <div className='flex justify-center'>
      <div className='max-w-3xl w-full'>
        <h2 className='font-bold text-2xl'>Settings and Sliders</h2>
        <SliderStyle/>
        <OutlineSection loading={Loading} outline={Outline ||[]}
         handleUpdateOutline={(index:string,value:Outline)=>handleUpdateOutline(index,value)}/>
      </div>
      </div>
  )
}

export default Outline