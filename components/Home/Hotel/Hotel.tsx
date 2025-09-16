import SectionHeadings from '@/components/Helper/SectionHeadings'
import { hotelsData } from '@/data/data'
import React from 'react'
import { FaHotel } from 'react-icons/fa'
import HotelCard from './HotelCard'


const Hotel = () => {
  return (
    <div className='pt-5 pb-20'>
      <FaHotel className="text-blue-500 text-5xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-500" />
      <SectionHeadings heading='Recommended Hotels' subheading='Find the ideal place to rest, relax, and recharge'/>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16'>
       {hotelsData.map((data)=>{
        return(
          <div key={data.id}>
            <HotelCard hotel={data}/>
          </div>
        );
       })}
      </div>
    </div>
  )
}

export default Hotel
