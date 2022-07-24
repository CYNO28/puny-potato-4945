import React from 'react'
import Elevate from '../Components/HomePage/Elevate/Elevate'
import Features from '../Components/HomePage/Features/Features'
import Finally from '../Components/HomePage/Finally/Finally'
import Logos from '../Components/HomePage/Logos/Logos'
import Navbar from '../Components/HomePage/Navbar/Navbar'
import Integration from '../Components/HomePage/Integrations/Integration'
import Footer from '../Components/HomePage/Footer/Footer'
import Track from '../Components/HomePage/Track/Track'
const HomePage = () => {
  return (
    <div>

        <Finally/>  
        <Logos/> 
        <Features/>     
        <Integration/>
        <Track/>
        <Footer/>
    </div>
  )
}

export default HomePage