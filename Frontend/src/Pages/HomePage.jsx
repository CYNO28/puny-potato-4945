import React from 'react'
import Elevate from '../Components/HomePage/Elevate/Elevate'
import Features from '../Components/HomePage/Features/Features'
import Finally from '../Components/HomePage/Finally/Finally'
import Logos from '../Components/HomePage/Logos/Logos'
import Navbar from '../Components/HomePage/Navbar/Navbar'
import Integration from '../Components/HomePage/Integrations/Integration'
const HomePage = () => {
  return (
    <div>

        <Finally/>  
        <Logos/> 
        <Features/>     
        <Integration/>
    </div>
  )
}

export default HomePage