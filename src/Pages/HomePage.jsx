import React from 'react'
import Elevate from '../Components/HomePage/Elevate/Elevate'
import Features from '../Components/HomePage/Features/Features'
import Finally from '../Components/HomePage/Finally/Finally'
import Logos from '../Components/HomePage/Logos/Logos'
import Navbar from '../Components/HomePage/Navbar/Navbar'

const HomePage = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Finally/>  
        <Logos/> 
        <Features/>     
    </div>
  )
}

export default HomePage