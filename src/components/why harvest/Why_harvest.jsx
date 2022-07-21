import React from "react";
import styles from "./Why_harvest.module.css";

function Why_harvest() {
  return (
    <div>
      <div id={styles.head}>
        <h1>Help your team spend time wisely</h1>
        <p>
          Harvest time tracking makes it easy to capture time, gain insights
          from past projects, and get paid for your work.
        </p>
        <div>
          <button>Try Harvest Free</button>
          <p>Free 30-day trial. No credit card required.</p>
        </div>
      </div>

      <hr />
      {/* Second section */}
      <div id={styles.feat}>
        <div id={styles.left}>
          <h1>Empower your team with insight</h1>
          <h3>
            By tracking time and expenses in Harvest, you capture critical
            project data that allows you to learn from the past, keep current
            projects on track, and better estimate future projects.
          </h3>
          <div>
            <p>Review past data to improve how you scope and price work</p>
            <p>Understand which projects are profitable — and why</p>
            <p>Know when to take on new business (or grow your team)</p>
          </div>
          <button>Browse features</button>
        </div>
        <div id={styles.right}>
          <img
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-reflect.svg"
            alt=""
          />
          <p id={styles.p1}>
            "As a growing business, with Harvest we get a lot of insights and
            intelligence that we couldn’t get before."
          </p>
          <p id={styles.p2}>Ben Graham, Turnstyle</p>
        </div>
      </div>

      <hr style={{ width: "80%" }} />
      {/* third section */}

      <div id={styles.feat2}>
        <div id={styles.left2}>
          <img
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-keep.svg"
            alt=""
          />
          <p id={styles.need}>
            "We needed something super simple because we don’t want to have to
            teach people how to use it as part of onboarding."
          </p>
          <p id={styles.need2}>Nick Frandsen, Dovetail</p>
        </div>
        <div id={styles.right2}>
          <h1>Time tracking that works the way your team works</h1>
          <h3>
            Time tracking software is only useful if it’s actually used. That’s
            why we designed Harvest to be easy to adopt, integrated with your
            favorite apps, and flexible enough for all types of teams.
          </h3>
          <div>
            <p>Integrated with the tools your team already knows and loves</p>
            <p>Track time wherever you work - desktop, browser, and mobile</p>
            <p>Intuitive and easy to learn</p>
          </div>
          <button>Browse features</button>
        </div>
      </div>

      <hr style={{ width: "80%" }} />

      {/* third section */}

      <div id={styles.feat3}>
        <div id={styles.left3}>
          <h1>Keep your projects on track</h1>
          <h3>
            Harvest provides visibility into the key aspects of your
            projects—budget, team capacity, and costs—enabling you to keep
            everything on time and on budget.
          </h3>
          <div>
            <p>
              Clear visual reports allow you to compare actual time vs. budget
            </p>
            <p>Get more accurate timesheet and cost data</p>
            <p>Pinpoint which tasks are impacting costs</p>
          </div>
          <button>Browse features</button>
        </div>

        <div id={styles.right3}>
          <img
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-track.svg"
            alt=""
          />
          <p id={styles.p1}>
            "We can see if a project is in danger of going off track and
            course-correct way before it actually becomes a problem."
          </p>
          <p id={styles.p2}>Michael Kucera, Zehner</p>
        </div>
      </div>

      <hr style={{ width: "80%" }} />

      {/* fourth section */}

      <div id={styles.feat4}>
        <div id={styles.left4}>
          <img
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-invest.svg"
            alt=""
          />
          <p id={styles.need}>
            "Harvest gives us feedback on how we’re doing so we can be
            competitive, make a profit, and keep ourselves afloat."
          </p>
          <p id={styles.need2}>John Wall, Public</p>
        </div>
        <div id={styles.right4}>
          <h1>Trusted by thousands of teams worldwide</h1>
          <h3>
            We’ve been serving teams of all sizes, across all types of
            industries for over 15 years. Today, with more than 70,000
            customers, you can be sure that Harvest will work for your team’s
            unique needs.
          </h3>
          <div>
            <p>
              Flexible timekeeping and invoicing, whether you bill by time or by
              project
            </p>
            <p>
              Scalable one-product-fits-all approach, that can grow with your
              team
            </p>
            <p>
              Used by companies of all types, from creative agencies to
              management consulting
            </p>
          </div>
          <button>Browse features</button>
        </div>
      </div>
      <hr style={{ width: "80%" }} />

      {/* images section */}

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

export default Why_harvest;
