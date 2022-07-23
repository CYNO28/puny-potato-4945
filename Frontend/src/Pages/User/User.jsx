import React from 'react'
import Navbar2 from '../../Components/navbar2/Navbar2'
import {Routes,Route} from 'react-router-dom'
import Expenses from '../../Components/Expenses/Expenses'

const User = ({user}) => {
  console.log(user)
  return (
<>
<Navbar2 user={user}></Navbar2>
<Routes>
<Route path={'/user/Expen'} element={<Expenses></Expenses>}></Route>
<Route path={'/user/Time'} element={<></>}></Route>
  <Route path={'/user/projects'} element={<></>}></Route>
  </Routes>

</>
  )
}

export default User