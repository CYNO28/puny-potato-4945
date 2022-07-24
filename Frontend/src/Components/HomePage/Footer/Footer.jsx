import React from 'react'
import { useLocation } from 'react-router-dom'
import style from "./footer.module.css"
const Footer = () => {
  const {pathname}=useLocation()
  const paga=pathname.split('/')[1]
  if(paga=="Signin"||paga=="Signup"||paga=="User"||paga=="Integrations")return null
  return (
    <div className={style.wrapper}>
        <div className={style.upperbox}>
            <div className={style.box_up}>
           <img src="/logo.png" alt=""  className={style.img}/>
            </div>
            <div className={style.linkbox}>
                <a href="">Harvest</a>
                <a href="">Home</a>
                <a href="">Why Harvest?</a>
                <a href="">Freatues</a>
                <a href="">Pricing</a>
                <a href="">Integrations</a>
                <a href="">Apps</a>
                <a href="">Security</a>
            </div>
            <div className={style.linkbox}>
                <a href=""> Community</a>
                <a href=""> Customer stories</a>
                <a href=""> Resources</a>
                <a href=""> Webinars</a>
                <a href=""> Help & support</a>
                <a href=""> Integrate with Harvest</a>
                <a href=""> Time Well Spent</a>
                <a href=""> Time in This Time</a>
            </div>
            <div className={style.linkbox}>
                <a href="">Company</a>
                <a href="">About us</a>
                <a href="">Blog</a>
                <a href="">Careers</a>
                <a href="">Legal</a>
                <a href="">Contact us</a>
            </div>
        </div>
        <div className={style.searchbox}>
        We also make: <strong>Harvest Forecast</strong> – the fast and simple way to schedule your team across projects.
        </div>
        <div className={style.ending}>
            <div>
            © 2006-2022 Harvest
            </div>
            <div className={style.iconbox}>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M20 3.8c-.7.3-1.5.5-2.4.6.8-.5 1.5-1.3 1.8-2.3-.801.5-1.7.8-2.601 1-.7-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.8-4.1 4.1 0 .3 0 .6.1.9-3.399-.1-6.399-1.7-8.399-4.2-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.8 3.4-.6 0-1.2-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.2 1.8-5.1 1.8-.3 0-.7 0-1-.1 1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.7-6.2 11.7-11.7v-.5c.9-.5 1.6-1.2 2.1-2z"></path>
          </svg>
                    <a>Twitter</a>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M20 17.5v-15.1c0-1.3-1.1-2.4-2.4-2.4h-15.2c-1.3 0-2.4 1.1-2.4 2.4v15.1c0 1.4 1.1 2.5 2.4 2.5h15.2c1.3 0 2.4-1.1 2.4-2.5zm-14.1-.5h-2.9v-9.5h3v9.5h-.1zm-1.5-10.8c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7c1 0 1.7.8 1.7 1.7.1.9-.7 1.7-1.7 1.7zm12.6 10.8h-3v-4.6c0-1.101 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.5v4.6h-3v-9.5h2.8v1.3c.6-.8 1.5-1.5 3-1.5 3 0 3.6 2 3.6 4.5v5.2h-.1z"></path>
          </svg>
                    <a>LinkedIn</a>
                </div>
                <div>
                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.999 1.801c2.67 0 2.986.011 4.04.059a5.523 5.523 0 0 1 1.857.345c.434.16.827.417 1.15.75.332.322.589.715.75 1.15.22.594.337 1.222.344 1.855.048 1.055.059 1.375.059 4.041 0 2.666-.011 2.986-.059 4.041a5.524 5.524 0 0 1-.345 1.856 3.305 3.305 0 0 1-1.897 1.897 5.524 5.524 0 0 1-1.856.345c-1.055.048-1.375.059-4.04.059-2.667 0-2.987-.011-4.042-.059a5.524 5.524 0 0 1-1.856-.345 3.09 3.09 0 0 1-1.15-.75 3.09 3.09 0 0 1-.75-1.15 5.523 5.523 0 0 1-.344-1.855c-.048-1.055-.059-1.375-.059-4.041 0-2.666.011-2.986.059-4.041a5.523 5.523 0 0 1 .345-1.856 3.09 3.09 0 0 1 .75-1.15 3.09 3.09 0 0 1 1.15-.75 5.523 5.523 0 0 1 1.855-.345C7.015 1.81 7.335 1.8 10.002 1.8L10 1.8Zm0-1.801C7.283 0 6.943.011 5.874.06A7.334 7.334 0 0 0 3.45.525a4.884 4.884 0 0 0-1.771 1.154c-.51.499-.903 1.103-1.154 1.77A7.334 7.334 0 0 0 .06 5.875C.011 6.943 0 7.283 0 10s.011 3.056.06 4.124c.017.829.174 1.649.465 2.425.25.667.644 1.272 1.154 1.771.499.51 1.103.903 1.77 1.154a7.336 7.336 0 0 0 2.428.465c1.066.048 1.406.06 4.122.06s3.056-.012 4.124-.06a7.336 7.336 0 0 0 2.427-.465 5.117 5.117 0 0 0 2.925-2.925 7.336 7.336 0 0 0 .465-2.427c.049-1.066.06-1.406.06-4.125 0-2.718-.011-3.056-.06-4.124a7.335 7.335 0 0 0-.467-2.422 4.886 4.886 0 0 0-1.154-1.771A4.885 4.885 0 0 0 16.548.525 7.334 7.334 0 0 0 14.123.06C13.055.011 12.715 0 10 0Z" fill="currentColor"></path><path d="M10.004 4.864a5.134 5.134 0 1 0 0 10.269 5.134 5.134 0 0 0 0-10.269Zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666ZM15.337 5.862a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" fill="currentColor"></path></svg>
                    <a>Instagram</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer