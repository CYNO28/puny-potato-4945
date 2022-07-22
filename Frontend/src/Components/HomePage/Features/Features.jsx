import React from "react";
import Box from "./Box";
import style from "./features.module.css";
const Features = () => {
  return (
    <div className={style.container}>
      <div className={style.subheading}>
        <h2>FEATURES</h2>
      </div>
      <div className={style.heading}>
        <h1>Everything you need to keep your team ticking</h1>
      </div>
      <div className={style.description}>
        <p>Time tracking software that helps you keep time and get insights.</p>
      </div>
      <div className={style.flexbox}>
        <Box
          img={"/images/small/time.webp"}
          heading={"Time tracking"}
          discription={"Simple and intuitive time tracking your team will love."}
        />
        <Box
          img={"/images/small/reports.webp"}
          heading={"Reports & analysis"}
          discription={"Unlock the insights that help your business thrive."}
        />
        <Box
          img={"/images/small/invoicing.webp"}
          heading={"Invoicing & payments"}
          discription={"Seamless invoicing and fast online payments. "}
        />
      </div>
      <div className={style.button}>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Features;
