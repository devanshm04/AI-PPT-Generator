import React, { useState } from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2Icon, PlusIcon } from 'lucide-react'
import { ArrowUp } from 'lucide-react'

// use uuid that generated ui id random automatically
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from 'firebase/firestore';
import { useUser } from '@clerk/clerk-react';
import { firebaseDB } from './../../../config/FirebaseConfig';
import { useNavigate } from 'react-router-dom'

const Promtbox = () => {
   
     const [userInput, setUserInput] = useState<string>();
     const {user}=useUser();
     const[loading,setLoading]=useState(false);
     const navigate = useNavigate();
     const[noofslider,setNoofslider]=useState<string>('4 to 6');



     const CreateAndSaveProject = async () => {
      // save project to db logic here
        const projectId = uuidv4();
        setLoading(true);
        await setDoc(doc(firebaseDB,'projects',projectId),{
          projectid: projectId,
          userInputPrompt:userInput,
          createdBy:user?.primaryEmailAddress?.emailAddress,
          createdAt:Date.now(),
          noofslider:noofslider,
        })
        setLoading(false);
        navigate('/workspace/project/'+projectId+'/outline');
     }

  return (
    <div className='w-full flex items-center justify-center mt-28'>
    <div className='flex flex-col items-center justify-center space-y-3'>
        <h1 className='font-bold text-4xl'>Describe your topic, we’ll design the <span className='text-primary'>PPT</span> slides!</h1>
        <p className='text-xl text-gray-500'>Your design will be saved as new project</p>

        <InputGroup>
          <InputGroupTextarea
            placeholder="E.g., A presentation on the impact of climate change on global ecosystems."
            rows={4}
            cols={50}
            className='min-h-32'
            onChange={(e) => setUserInput(e.target.value)}
          />
          <InputGroupAddon align={'block-end'}>
            {/* <InputGroupButton>
              <PlusIcon/>
            </InputGroupButton> */}
              <Select onValueChange={(value)=>setNoofslider(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select No of Slider" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Slides</SelectLabel>
          <SelectItem value="4 to 6">4-6 Sliders</SelectItem>
          <SelectItem value="6 to 8">6-8 Sliders</SelectItem>
          <SelectItem value="8 to 10">8-10 Sliders</SelectItem>
          <SelectItem value="10 to 12">10-12 Sliders</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
     <InputGroupButton 
     variant={'default'}
     className='rounded-full ml-auto'
     size={'icon-sm'}
      onClick={()=>CreateAndSaveProject()}
      disabled={!userInput}
    >
       {loading?<Loader2Icon className='animate-spin'/>: <ArrowUp/>}
     </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
    </div>
    </div>
  )
}

export default Promtbox