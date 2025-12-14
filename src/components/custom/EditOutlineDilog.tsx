// imported default ui from shadcn


import React, { Children, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '../ui/textarea'

// User se input lena

// Temporary changes store karna

// Parent ko batana: “update kar do”

const EditOutlineDilog = ({children, outlineData, onUpdate}: any) => {
    // outlineData → slide ka current data
    // onUpdate → parent ka function (callback)


    const[LocalData,setLocalData]=useState(outlineData)
    // User jab type kare, parent ka data turant change na ho


    const[OpenDialog,setOpenDialog]=useState(false)

    const handlechange=(field:string,value:string)=>{
        // taking previous data and updating local data 
           setLocalData({...LocalData,[field]:value})
        //    Sirf local copy update ho rahi hai
    }

    const updatechange=()=>{
        // otlineData slideno => data of particular slide
        // localdata => data whiich u want to update 
        onUpdate(outlineData?.slideNo,LocalData)
        // Is slide number ka data ye raha, isko update kar do
        setOpenDialog(false)
    }

  return (
    <div>
         <Dialog open={OpenDialog} onOpenChange={setOpenDialog}>
      <form>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Slider Outline</DialogTitle>
            <DialogDescription>
              <div>
                <label>Slider Title</label>
                <Input placeholder='Slider Title'
                  value={LocalData.slidePoint}
                  onChange={(event)=>handlechange('slidePoint',event.target.value)}
                  />
                   <div className='mt-3'>
                  <label>Outline</label>
                  <Textarea placeholder='Outline'
                     value={LocalData.outline}
                     onChange={(event)=>handlechange('outline',event.target.value)}
                     />
                     </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={updatechange}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
    </div>
  )
}

export default EditOutlineDilog