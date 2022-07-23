import React from 'react'
import style from './box.module.css'
const Box = ({img,heading,discription}) => {
  return (
    <div className={style.box}>
    <div className={style.boxup}>
      <div className={style.boximg}>
        <img src={img} alt="" />
      </div>
      <div className={style.boxheading}>
        <h2>{heading}</h2>
      </div>
    </div>
    <div className={style.boxdown}>
      <p>{discription}</p>
    </div>
    </div>
  )
}

export default Box