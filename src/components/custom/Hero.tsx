// import React from 'react'
import { Play } from 'lucide-react'
import { Button } from '../ui/button'
import { HeroVideoDialog } from '../ui/hero-video-dialog'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-28 y-gap-6 text-center px-4'>
        <h1 className='font-bold text-5xl '>From Idea to <span className='text-primary'>Presentation</span> in One Click ⚡</h1>
        <p className='text-lg mt-4 text-gray-600 max-w-2xl text-center'>Generate sleek, editable PPT decks in minutes. AI handles slide design, formatting, and visual content so you can focus on your message, impress your audience, and work smarter, not harder.</p>
       <div  className=' flex mt-6 gap-4 '>
        <Button variant = {'outline'} size={'lg'}>Watch Video <Play /></Button>
        <Button size={'lg'}>Get Started </Button>
        </div> 
         <div className="relative max-w-3xl mt-14">
            <h2 className='text-center my-3 font-bold'>Watch How to create AI PPT</h2>
        <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
       <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
      
    </div>
  )
}

export default Hero