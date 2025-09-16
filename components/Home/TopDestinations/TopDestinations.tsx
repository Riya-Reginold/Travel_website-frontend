import SectionHeadings from '@/components/Helper/SectionHeadings'
import React from 'react'
import { FaPlaneDeparture } from 'react-icons/fa'
import DestinationSlider from './DestinationSlider'

const TopDestinations = () => {
  return (
    <div className='pt-20 pb-20'>
        <FaPlaneDeparture className="text-blue-400 text-4xl mb-4 mx-auto animate-bounce" />
        <SectionHeadings heading='Popular Destinations' subheading='Your Next Dream Destination Awaits'/>
        <div className='mt-14 w-[80%] mx-auto'>
            <DestinationSlider/>
        </div>
    </div>
  )
}

export default TopDestinations
