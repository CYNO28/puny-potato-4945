import React from 'react'
import style from './integration.module.css'
const Integration = () => {
  return (
    <div className={style.container}>
        <div className={style.leftbox}>
            <img src="/images/integrations-home.svg" alt="" />
        </div>
        <div className={style.rightbox}>
            <div className={style.subheading}>
                
INTEGRATIONS
            </div>
            <div className={style.heading}>Integrated with the tools your team already knows and loves</div>
            <div className={style.description}>Your favorite apps work seamlessly with Harvest so you can keep projects on track however you work.</div>
            <div className={style.button}>
                <button> Browse integrations</button>
            </div>
        </div>
        
    </div>
  )
}

export default Integration