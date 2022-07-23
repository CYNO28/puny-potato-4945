import React from "react";
import style from "./elevate.module.css";
const Elevate = () => {
  return (
    <div className={style.Container}>

      <div className={style.RightSide}>
        <img src="/images/hero.svg" alt="" />
      </div>
      <div className={style.LeftSide}>
        <div className={style.LeftSideHeading}>
          <h1 className={style.heading}>
          Integrated with the tools your team already knows and loves
          </h1>
        </div>
        <div>
          <p>
          Your favorite apps work seamlessly with Harvest so you can keep projects on track however you work.

          </p>
        </div>
        <div>
            <button className={style.button}>Browse Integrations</button>
        </div>
      </div>
    </div>
  );
};

export default Elevate;
