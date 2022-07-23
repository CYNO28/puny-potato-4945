import React, { useState } from "react";
import styles from "./Pricing.module.css";


function Pricing() {
  const [faq, setFaq] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  const [faq6, setFaq6] = useState(false);
  const [faq7, setFaq7] = useState(false);
  return (
    <div id={styles.main}>
      <div id={styles.content}>
        <p id={styles.head}>Simple, flexible pricing</p>
        <p id={styles.info}>
          Every plan includes every feature, and can scale as your team does.
        </p>
        <div id={styles.pContain}>
          <p id={styles.p1}>Pay monthly</p>
          <p id={styles.p}>Pay yearly (Save 10%)</p>
        </div>
      </div>

      <div id={styles.unitContain}>
        <div id={styles.unit1}>
          <div id={styles.left}>
            <p>Free</p>
            <h3 id={styles.h3}>1 Seat</h3>
            <h3>2 Projects</h3>
          </div>
          <div id={styles.right}>
            <h1>0</h1>
            <h4>forever</h4>
          </div>
        </div>

        <div id={styles.unit2}>
          <div id={styles.left2}>
            <p id={styles.pro}>Pro</p>
            <h3 id={styles.seat}>Unlimited seats</h3>
            <h3>Unlimited projects</h3>
          </div>
          <div id={styles.right2}>
            <h1>12</h1>
            <h4>per seat per month</h4>
          </div>
        </div>
      </div>
<div id={styles.dayContain}>
<button id={styles.btn}>Start Your Free Trial</button>
      <p id={styles.day}>
        Fully functional 30-day trial. No credit card required.
      </p>
</div>
    
      <div id= {styles.imgContain}>
         <img src="https://images.squarespace-cdn.com/content/v1/578f1057be6594d57854f841/1586983405162-O5R9715W1AFSG7SJP2LR/Volkswagen_greyscale.png" alt="" />
         <img src="https://brandslogos.com/wp-content/uploads/images/large/aclu-logo-black-and-white.png" alt="" />
         <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Conde_Nast_logo.png" alt="" />
         <img src="https://i.pinimg.com/originals/77/bb/5d/77bb5d345c6211d14227cbd47834a456.png" alt="" />
         <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize" alt="" />\
         <img src="https://www.actis.co.in/wp-content/uploads/2016/06/deloitte-logo-grey-300x171.png" alt="" />
         <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize" alt="" />
         <img src="https://beinecke.library.yale.edu/sites/default/files/yalelogo-book_0_12.jpg" alt="" />
     </div>
      <hr />


                    {/* Features */}

      <div id={styles.features}>
        <h2>Every feature your team needs</h2>
        <div>
          <p>Easy time and expense tracking</p>
          <p>Apps for all your devices</p>
          <p>Integrations that fit your workflow</p>
          <p>Insight into your projects and team</p>
          <p>Seamless invoicing and payments</p>
          <p>Support from real humans</p>
        </div>
      </div>
      <hr style={{ marginTop: "80px" }} />

      <div id={styles.msgContain}>
        <img
          src="https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-dovetail.jpg?width=1120&name=home-photo-dovetail.jpg"
          alt=""
        />

        <div id={styles.msg}>
          <h3>
            <span id= {styles.span}>"</span>We needed something that worked, something super simple, because we
            don’t want to have to teach people how to use it as part of
            onboarding.<span id= {styles.span}>"</span>
          </h3>
          <h2>Nick Frandsen</h2>
          <p>Co-founder and managing partner, Dovetail</p>
        </div>
      </div>

               {/* FAQ Sections */}

      <div id={styles.faqContain}>
        <h3 id= {styles.frequent}>Frequently asked questions</h3>

        <div id={styles.queContain}>
          <hr />
          <div onClick={() => setFaq(!faq)}>
            <h3>How do i signup for the free plan?</h3>
            {faq ? (
              <p>
                When your trial account meets the free plan’s requirements, you
                can sign up for the free version during the upgrade process. On
                the Upgrade Your Harvest Plan page, click the switch to the free
                version link below the plan options.
              </p>
            ) : (
              <></>
            )}
          </div>
          <hr />

          <div onClick={() => setFaq2(!faq2)}>
            <h3>What happens at the end of my trial?</h3>
            {faq2 ? (
              <p>
                When your trial account meets the free plan’s requirements, you
                can sign up for the free version during the upgrade process. On
                the Upgrade Your Harvest Plan page, click the switch to the free
                version link below the plan options.
              </p>
            ) : (
              <></>
            )}
          </div>
          <hr />
          <div onClick={() => setFaq3(!faq3)}>
            <h3>Does my team qualify for any discounts?</h3>
            {faq3 ? (
              <p>
                When your trial account meets the free plan’s requirements, you
                can sign up for the free version during the upgrade process. On
                the Upgrade Your Harvest Plan page, click the switch to the free
                version link below the plan options.
              </p>
            ) : (
              <></>
            )}
          </div>

          <hr />
          <div onClick={() => setFaq4(!faq4)}>
            <h3>How can i get a quote for my team?</h3>
            {faq4 ? (
              <p>
                When your trial account meets the free plan’s requirements, you
                can sign up for the free version during the upgrade process. On
                the Upgrade Your Harvest Plan page, click the switch to the free
                version link below the plan options.
              </p>
            ) : (
              <></>
            )}
          </div>

          <hr />
          <div onClick={() => setFaq5(!faq5)}>
            <h3>What are our payment options?</h3>
            {faq5 ? (
              <p>
                When your trial account meets the free plan’s requirements, you
                can sign up for the free version during the upgrade process. On
                the Upgrade Your Harvest Plan page, click the switch to the free
                version link below the plan options.
              </p>
            ) : (
              <></>
            )}
          </div>

          <hr />
          <div onClick={() => setFaq6(!faq6)}>
            <h3>What happens if my team size changes?</h3>
            {faq6 ? (
              <p>
                When your trial account meets the free plan’s requirements, you
                can sign up for the free version during the upgrade process. On
                the Upgrade Your Harvest Plan page, click the switch to the free
                version link below the plan options.
              </p>
            ) : (
              <></>
            )}
          </div>

          <hr />
          <div onClick={() => setFaq7(!faq7)}>
            <h3>Can we change our billing frequency?</h3>
            {faq7 ? (
              <p>
                When your trial account meets the free plan’s requirements, you
                can sign up for the free version during the upgrade process. On
                the Upgrade Your Harvest Plan page, click the switch to the free
                version link below the plan options.
              </p>
            ) : (
              <></>
            )}
          </div>
          <hr />
        </div>
      </div>
   <hr style= {{marginTop: "100px", width: "100%"}}/>

                        {/* Bottom section */}

   <div id= {styles.track}>
          <div>
               <h3>Start tracking time today</h3>
               <p>Join 70,000+ companies spending their time wisely with Harvest.</p>
               <div>
                   <button id= {styles.btn2}>Try Harvest free</button>
                   <p>Free 30-day trial. No credit card required.</p>
               </div>
          </div>
          <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg" alt="" />
   </div>



    </div>
  );
}

export default Pricing;
