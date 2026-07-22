import React from 'react'
import { Zap } from "lucide-react";

const Hero = () => {
  return (
    
     <section className='w-full  text-white py-16 md:py-24'>
        <div className='max-w-6xl mx-auto px-5 flex flex-col items-center text-center'> 
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-lime-400 flex items-center justify-center shadow-lg shadow-lime-500/30">
          <Zap className="text-black w-8 h-8 md:w-10 md:h-10" />
        </div>
         

         <h1 className='mt-8 text-4xl md:text-6xl font-bold'>

            About
            <span className='text-lime-400'> SkyMart</span>
         </h1>

         <p className='mt-4 max-w-2xl text-gray-300 text-base md:text-xl'>
               SkyMart is a next-generation e-commerce platform built to make online
          shopping fast, fair, and enjoyable for everyone.
         </p>
         </div>
     </section>
    
  )
}

export default Hero
