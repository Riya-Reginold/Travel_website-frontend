import SectionHeadings from '@/components/Helper/SectionHeadings'
import React from 'react'
import { FaTags } from 'react-icons/fa'
import { MdOutlineTravelExplore, MdSecurity, MdSupportAgent } from 'react-icons/md'

import { FaRegCalendarCheck } from 'react-icons/fa'
import WhyEaseVoyageCard from './WhyEaseVoyageCard'

const WhyEaseVoyage= () => {
  return (
    <div className='pt-16 pb-24 bg-gray-50'>
        <div className="w-14 h-14 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-6">
          <MdOutlineTravelExplore className="w-7 h-7 text-white transition-transform duration-500 hover:rotate-180" />
        </div>
        <SectionHeadings heading="Why EaseVoyage" subheading='Elevating every journey with ease and comfort.'/>

       <div className='grid w-[85%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16'>
          <div>
            <WhyEaseVoyageCard 
                icon={<FaRegCalendarCheck className="w-8 h-8 text-blue-500" />}
                title="Easy Booking"
                description="Book flights and hotels quickly in just a few clicks"/>
  
          </div>
          <div>
            <WhyEaseVoyageCard
                icon={<MdSupportAgent className="w-8 h-8 text-blue-500" />}
                title="24/7 Support"
                description="Get help anytime from our friendly support team"/>
  
          </div>
          <div>
            <WhyEaseVoyageCard
                icon={<FaTags className="w-8 h-8 text-blue-500" />}
                title="Great Prices"
                description="ind the best deals for your trips every time"/>
  
          </div>
          <div>
            <WhyEaseVoyageCard
                icon={<MdSecurity className="w-8 h-8 text-blue-500" />}
                title="Trusted & Safe"
                description="Travel with confidence knowing we prioritize your safety and satisfaction"/>
  
          </div>
        </div>
          
    </div>
  )
}

export default WhyEaseVoyage
