import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Hero from '../Components/Hero/Hero'
import Section1 from '../Components/Section1'
import Footer from '../Components/Footer/Footer'

export default function Main() {
  return (
    <>
        <NavBar />
        <Hero image={"./web.webp"} firstSec={'#FM-section-1'}/>
        <Section1 />
        <Footer />
    </>
    
  )
}
