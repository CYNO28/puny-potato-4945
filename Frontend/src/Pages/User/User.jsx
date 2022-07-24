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
<Expenses />
<Routes>

<Route path={'/user/Time'} element={<></>}></Route>
  <Route path={'/user/projects'} element={<></>}></Route>
  </Routes>

</>
  )
}

export default User