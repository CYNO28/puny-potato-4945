import React from "react";
import styles from './track.module.css';
const Track = () => {
  return (
    <div>
      <div className={styles.bottom}>
        <div className={styles.bottom_content}>
          <div className={styles.bottom_box}>
            <div className={styles.bottom_box1}>
              <h2>Start tracking time today</h2>
              <h4>
                Join 70,000+ companies spending their time wisely with Harvest.
              </h4>
              <div className={styles.bottom_box12}>
                <a href="/signup" className={styles.button_trial}>
                  Try Harvest free
                </a>
                <p>Free 30-day trial. No credit card required.</p>
              </div>
            </div>
            <div className={styles.bottom_box2}>
              <div className={styles.bottom_box2_img}>
                <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
