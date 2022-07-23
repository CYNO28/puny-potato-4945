import React from 'react'
import {Routes,Route }from "react-router-dom"
import Navbar from './Components/HomePage/Navbar/Navbar'
import Customer from './Pages/customer/Customer'
import { Features } from './Pages/Features'
import HomePage from './Pages/HomePage'
import Integrations from './Pages/Integrations/Integrations'
import Pricing from './Pages/Pricing/Pricing'
import Why_harvest from './Pages/whyharvest/Why_harvest'
const App = () => {
  return (<>
   <Navbar/>
<Routes>
<Route path={'/'} element={<HomePage/>}></Route>
<Route path={"/whyHarvest"} element={<Why_harvest></Why_harvest>}/>
<Route path={"/Features"} element={<Features></Features>}/>
<Route path={"/Customer"} element={<Customer></Customer>}/>
<Route path={"/Integrations"} element={<Integrations></Integrations>}/>
<Route path={'/Pricing'} element={<Pricing/>}/>
</Routes>
</>
  )
}

export default App