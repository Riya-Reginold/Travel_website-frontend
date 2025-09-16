'use client';
import { destinationData } from '@/data/data';
import Image from "next/image";
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};
const DestinationSlider = () => {
  return <Carousel 
            responsive={responsive} 
            infinite={true} 
            autoPlay={true} 
            autoPlaySpeed={2000} 
            keyBoardControl={true}  
            containerClass="pb-10"
            itemClass="px-3">
            {destinationData.map((data)=>{
              return (
                <div key={data.id}  className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition duration-500 hover:scale-105">
                    <Image 
                    src={data.image}
                    alt={data.country}
                    width={500}
                    height={500}
                    className="h-[400px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                    <div className="absolute bottom-6 left-6 text-white z-10">
                      <h1 className="text-2xl font-bold drop-shadow-lg">{data.country}</h1>
                      <p className="text-sm opacity-90">{data.travelers} Travelers</p>
                    </div>
                </div>
              );
            })}
         </Carousel>
  
}

export default DestinationSlider
