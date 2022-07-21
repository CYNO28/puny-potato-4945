import React from 'react'
import style from './finally.module.css'
const Finally = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.rating}>
                <img src="/images/Rate_stars.svg" alt="" />
                <p className={style.ratingdarktext}>4.6  </p>
                <p className={style.ratingfadedtext}> {'  '}  ( 491 reviews )</p>
            </div>
            <div className={style.heading}>
                <h1>
                Finally, time tracking that your team actually wants to use.
                </h1>
                <p>
                Intuitive time tracking. Instant report generation. Automatic invoice creation.
                </p>
            </div>
            <div className={style.button}>
                <button>Try Harvest free</button>
                <p> free 30-day trial. NO credit card required.</p>
            </div>
            <div className={style.imagebox}>
                    <img src="/images/imgbox1.webp" alt="" />
                 </div>
            
        </div>
    </div>
  )
}

export default Finally