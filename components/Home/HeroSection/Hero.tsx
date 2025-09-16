"use client";
import SearchBox from '@/components/Helper/SearchBox';
import React from 'react'
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
        <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'>  </div>
        <video src="/images/bg_video.mp4" autoPlay muted loop preload='metadata' className='w-full h-full object-cover'/>    
        <div className='absolute z-[100] w-full h-full top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <div className='flex items-center justify-center flex-col w-full h-full'>
            <div>
              <h1 className='text-[20px] mb-4 md:mb-0 text-center md:text-[25px] lg:text-[35px] tracking-[0.7rem] text-white font-bold uppercase animate-pulse'>
                Your Easy Way to Discover the World
              </h1>
               <p className="text-sm sm:text-base md:text-lg text-white text-center mt-4 tracking-wider">
                  <Typewriter
                  words={[
                   "Find the best deals on stays worldwide",
                    "Make every journey unforgettable"
                     ]}
                  loop={0}        
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}   
                  deleteSpeed={50} 
                  delaySpeed={1500} 
                  />
                </p>
            </div>
            <SearchBox/>    
          </div>
        </div>   
    </div>
  )
}

export default Hero
