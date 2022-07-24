import React, { useEffect, useState } from 'react'
import {Routes,Route, useParams }from "react-router-dom"
import Expenses from './Components/Expenses/Expenses'
import Navbar from './Components/HomePage/Navbar/Navbar'
import Customer from './Pages/customer/Customer'
import { Features } from './Pages/Features'
import HomePage from './Pages/HomePage'
import Integrations from './Pages/Integrations/Integrations'
import Pricing from './Pages/Pricing/Pricing'
import Signin from './Pages/Signin/Signin'
import Signup from './Pages/SIgnUp/SIgnUp/Signup'
import User from './Pages/User/User'
import Why_harvest from './Pages/whyharvest/Why_harvest'
import Navbar2 from './Components/navbar2/Navbar2'
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




<Route path={'Signin'} element={<Signin/>}/>
<Route path={'Signup'} element={<Signup/>}/>

<Route path={"User//*"} element ={<User ></User>}>

</Route>



</Routes>

</>
  )
}

export default App