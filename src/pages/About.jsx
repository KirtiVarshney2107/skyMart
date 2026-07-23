import React from 'react'
import Navbar from '../components/HomeCom/Navbar'
import Hero from  '../components/AboutCom/Hero'
import StatsCards from '../components/AboutCom/StatsCards'
import StorySection from '../components/AboutCom/StorySection'
import ValueSection from '../components/AboutCom/ValueSection'
import TeamSection from '../components/AboutCom/TeamSection'
import CTA from '../components/AboutCom/CTA'
import Bottom from '../components/AboutCom/Bottom'
const About = () => {
  return (
    <div className='bg-[#0f111a]'>
 
     <Hero/>
     <StatsCards></StatsCards>
     <StorySection></StorySection>
     <ValueSection></ValueSection>
   <TeamSection></TeamSection>
   <CTA></CTA>
   <Bottom></Bottom>
    </div>
  )
}

export default About
