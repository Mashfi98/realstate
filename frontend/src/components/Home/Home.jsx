import React from 'react'
import Herosection from '../../subComponents/Herosection'
import TopVillas from '../../subComponents/TopVillas'
import Regions from '../../subComponents/Regions'
import OurSpecialities from '../../subComponents/OurSpecialities'
import Host from '../../subComponents/Host'
import About from '../../subComponents/About'
import Contact from '../../subComponents/Contact'

const Home = () => {
  return (
  <>
  
  <article>
    <Herosection/>
    <TopVillas/>
    <Regions/>
    <OurSpecialities/>
    <Host/>
    <About/>
    <Contact/>
  </article>
  </>
  )
}

export default Home

