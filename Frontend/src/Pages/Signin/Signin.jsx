import React, { useState } from "react";
import style from "./signin.module.css";
const Signin = () => {
const [state ,setState]=useState({
  username:'',
  password:''
})
 const changeHandler=(e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }


  
  return (
    <div className={style.wrapper}>
      <div className={style.logo}></div>
      <h1> Sign in to Harverst</h1>
      <div className={style.container}>
        <div className={style.googlebox}>
          <div className={style.img}></div>
          <a href="https://punypotato4945.herokuapp.com/auth/google/callback">
            Sign in with Google
          </a>
        </div>
        <span className={style.line}></span>
        <p>or with your email below</p>
        <span className={style.line}></span>
        <input type="text" className={style.input} name='username' onChange={changeHandler} placeholder="Work email" />
        <input type="text" className={style.input} name='password'onChange={changeHandler} placeholder="Password" />
        <button type="submit">Sign in</button>
      </div>
    </div>
  );
};

export default Signin;
