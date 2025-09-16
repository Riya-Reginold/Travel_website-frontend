
import React from 'react'
import Hero from './HeroSection/Hero'
import TopDestinations from './TopDestinations/TopDestinations'
import Hotel from './Hotel/Hotel'
import AdSection from './AdSection/AdSection'
import WhyEaseVoyage from './WhyEaseVoyage/WhyEaseVoyage'
import NewsLetter from './NewsLetter/NewsLetter'



const Home = () => {

  return <div className='overflow-hidden'>
    <Hero/>
    <TopDestinations/>
    <AdSection/>
    <Hotel/>
    <WhyEaseVoyage/>
    <NewsLetter/>
  </div>
}

export default Home
