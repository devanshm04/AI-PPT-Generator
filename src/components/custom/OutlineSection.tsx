import React from 'react'
import { Skeleton } from '../ui/skeleton'
import type { Outline } from 'workspace/project/outline'
import { Button } from '../ui/button'
import { ArrowRight, Edit, Ghost, Sparkle, Sparkles } from 'lucide-react'

type Props={
   loading : boolean
   outline : Outline[]
}

const OutlineSection = ({loading,outline}:Props) => {
  return (
    <div className='mt-7'>
        <h2 className='font-bold text-xl'>Sliders Outline</h2>
        {loading&&
          <div>
            {[1,2,3,4] .map((item,index)=>(
                <Skeleton key={index} className='h-[60px] w-full rounded-2xl mb-4'/>
            ))}
          </div>
        }

        <div className='mb-24'>
            {outline?.map((item,index)=>(
                <div key={index} className='bg-white p-3 rounded-xl flex gap-6 items-center border mt-5 justify-between px-6'>
                    <div className='flex gap-6 items-center'>
                    <h2 className='font-bold text-2xl p-5 bg-gray-200 rounded-xl'>{index+1}</h2>
                    <div>
                    <h2 className='font-bold'>{item.slidePoint}</h2>
                    <p>{item.outline}</p>
                    </div>
                    </div>
                         
                    <Button variant={'ghost'} size={'icon-sm'} >  <Edit/> </Button>

                </div>
            ))}
        </div>
          <Button size={'lg'} className='fixed bottom-6
          transform left-1/2 -translate-x-1/2'>
            Generate Sliders <ArrowRight/>
          </Button>
    </div>
  )
}

export default OutlineSection