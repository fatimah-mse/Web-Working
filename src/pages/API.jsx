import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import ApiSec1 from '../Components/ApiSec1'
import ApiSec2 from '../Components/ApiSec2'

export default function API() {
    return (
        <>
            <NavBar />
            <Hero image={'api.png'} cla={'hide'}/>
            <ApiSec1 />
            <ApiSec2 />
            <Footer />
        
        </>
    )
}
