import React from "react";
import style from "./signin.module.css";
const Signin = () => {
  return (
    <div className={style.wrapper}>

      <div className={style.logo}></div>
      <h1> Sign in to Harverst</h1>
      <div className={style.container}>
        <div className={style.googlebox}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><defs><path id="a" d="M12.5 6.1c2 0 3.3.9 4.1 1.6l3-2.9c-1.9-1.8-4.3-2.8-7.1-2.8-4.1 0-7.7 2.4-9.4 5.8l3.4 2.6c.9-2.5 3.2-4.3 6-4.3z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><rect id="c" x="-15.5" y="-15.5" width="225.2" height="56"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><rect x="-2.7" y="-3.8" clip-path="url(#d)" fill="#EA4335" width="28.1" height="20.1"/></g><defs><path id="e" d="M22.6 12.7c0-.9-.1-1.5-.2-2.1h-9.9v3.9h5.8c-.1 1-.7 2.4-2.1 3.4l3.3 2.6c1.9-1.9 3.1-4.6 3.1-7.8z"/></defs><clipPath id="f"><use xlink:href="#e" overflow="visible"/></clipPath><g clip-path="url(#f)"><defs><rect id="g" x="-15.5" y="-15.5" width="225.2" height="56"/></defs><clipPath id="h"><use xlink:href="#g" overflow="visible"/></clipPath><rect x="6.7" y="4.8" clip-path="url(#h)" fill="#4285F4" width="21.7" height="21.5"/></g><defs><path id="i" d="M6.5 14.6c-.2-.7-.4-1.4-.4-2.1 0-.7.1-1.4.3-2.1l-3.3-2.6c-.7 1.4-1.1 3-1.1 4.7s.4 3.3 1.1 4.7l3.4-2.6z"/></defs><clipPath id="j"><use xlink:href="#i" overflow="visible"/></clipPath><g clip-path="url(#j)"><defs><rect id="k" x="-15.5" y="-15.5" width="225.2" height="56"/></defs><clipPath id="l"><use xlink:href="#k" overflow="visible"/></clipPath><rect x="-3.8" y="2" clip-path="url(#l)" fill="#FBBC05" width="16.2" height="21.1"/></g><defs><path id="m" d="M12.5 23c2.8 0 5.2-.9 7-2.5l-3.3-2.6c-.9.6-2.1 1.1-3.6 1.1-2.8 0-5.1-1.8-6-4.4l-3.4 2.6c1.7 3.4 5.2 5.8 9.3 5.8z"/></defs><clipPath id="n"><use xlink:href="#m" overflow="visible"/></clipPath><g clip-path="url(#n)"><defs><rect id="o" x="-15.5" y="-15.5" width="225.2" height="56"/></defs><clipPath id="p"><use xlink:href="#o" overflow="visible"/></clipPath><rect x="-2.7" y="8.7" clip-path="url(#p)" fill="#34A853" width="28" height="20.1"/></g></svg>
          <a href="https://punypotato4945.herokuapp.com/auth/google/callback">Sign in with Google</a>

        </div>
        <span className={style.line}></span>
        <p>or with your email below</p>
        <span className={style.line}></span>
        <input type="text" className={style.input}/>
        <input type="text" className={style.input}/>
        <button type="submit">Sign in</button>
      </div>
    </div>
  );
};

export default Signin;
