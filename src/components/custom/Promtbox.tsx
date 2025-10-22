import React from 'react'
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
import { PlusIcon } from 'lucide-react'
import { ArrowUp } from 'lucide-react'

const Promtbox = () => {
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
          />
          <InputGroupAddon align={'block-end'}>
            {/* <InputGroupButton>
              <PlusIcon/>
            </InputGroupButton> */}
              <Select>
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
     size={'icon-sm'}>
        <ArrowUp/>
     </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
    </div>
    </div>
  )
}

export default Promtbox