import React, { useEffect, useState } from 'react'
import Navbar2 from '../../Components/navbar2/Navbar2'
import {Routes,Route} from 'react-router-dom'
import Expenses from '../../Components/Expenses/Expenses'
import axios from 'axios'

const User = () => {
  
  const [user, setUser] = useState(null);



	const getUser = async () => {
		try {
			const url = `https://punypotato4945.herokuapp.com/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
      console.log(data.user._json)
      fetch(url)
      .then(res => res.json())
      .then(data => console.log(data)).catch(err => console.log(err))
	
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);
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