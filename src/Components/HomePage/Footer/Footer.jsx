import React from 'react'
import style from "./footer.module.css"
const Footer = () => {
  return (
    <div>
        <div className={style.upperbox}>
            <div className={style.box_up}>
                {/* logo */}
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
        <div className={style.searchbox}></div>
    </div>
  )
}

export default Footer