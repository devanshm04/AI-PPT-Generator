import React, { useState } from 'react'
import { Button } from '../ui/button';
import { ArrowRight, Ghost, Loader2Icon, Sparkles, X } from 'lucide-react';

type props={
    position:{x:number,y:number} | null
    onClose:()=>void
    loading:boolean
    handleAiChange:any,
}
function FloatingActionTool({position,onClose,loading,handleAiChange}: props) {
    const [userAiPrompt,setUserAiPromppt] = useState<string>();
    if(!position){
        return ;
    }
  return (
    <div className='absolute z-50 bg-white  text-sm px-2 py-2 rounded-lg shadow-xl border flex items-center'
    style={{
        top:position.y+60,
        left:position.x,
        transform:"translateX(-80%)"
    }}
    >

       <div className='flex gap-2 items-center'>
        <Sparkles className='h-4 w-4'/>
        <input type="text" placeholder='Edit with ai' className='outline-none border-none'
        onChange={(event)=>setUserAiPromppt(event.target.value)}
        disabled={loading}
        value={userAiPrompt}
        />
        {userAiPrompt&&<Button variant={'ghost'} size={'icon-sm'} onClick={()=>{handleAiChange(userAiPrompt);setUserAiPromppt('')}}>
            <ArrowRight className='h-4 w-4'/>
        </Button>}
        {loading&&<Loader2Icon className='animate-spin h-4 w-4'/>}
       </div>
        <Button variant={'ghost'} size={'icon-sm'}
        onClick={onClose}>
        
            <X/></Button>
    </div>
  )
}

export default FloatingActionTool