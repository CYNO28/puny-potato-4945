import React from 'react'
import styles from "./Why_harvest.module.css"

function Why_harvest() {
  return (
    <div>
         <div id={styles.head}>
            <h1>Help your team spend time wisely</h1>
            <p>Harvest time tracking makes it easy to capture time, gain insights from past projects, and get paid for your work.</p>
            <div>
                <button>Try Harvest Free</button>
                <p>Free 30-day trial. No credit card required.</p>
            </div>
         </div>

         <hr />
                         {/* Second section */}
         <div id= {styles.feat}>
              <div id= {styles.left}>
                <h1>Empower your team with insight</h1>
                <h3>By tracking time and expenses in Harvest, you capture critical project data that allows you to learn from the past, keep current projects on track, and better estimate future projects.</h3>
                <div>
                <p>Review past data to improve how you scope and price work</p>
                <p>Understand which projects are profitable — and why</p>
                <p>Know when to take on new business (or grow your team)</p>
                </div>
                <button>Browse features</button>
              </div>
              <div id= {styles.right}>
              <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-reflect.svg" alt="" />
              <p id= {styles.p1}>"As a growing business, with Harvest we get a lot of insights and intelligence that we couldn’t get before."</p>
              <p id= {styles.p2}>Ben Graham, Turnstyle</p>
              </div>          
         </div>

         <hr style= {{width: "80%"}}/>
                      {/* third section */}

         <div id= {styles.feat2}>
         <div id= {styles.left2}>
              <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-keep.svg" alt="" />
              <p id= {styles.need}>"We needed something super simple because we don’t want to have to teach people how to use it as part of onboarding."</p>
              <p id= {styles.need2}>Nick Frandsen, Dovetail</p>
              </div>
              <div id= {styles.right2}>
                <h1>Time tracking that works the way your team works</h1>
                <h3>Time tracking software is only useful if it’s actually used. That’s why we designed Harvest to be easy to adopt, integrated with your favorite apps, and flexible enough for all types of teams.</h3>
                <div>
                <p>Integrated with the tools your team already knows and loves</p>
                <p>Track time wherever you work - desktop, browser, and mobile</p>
                <p>Intuitive and easy to learn</p>
                </div>
                <button>Browse features</button>
              </div>
         </div>

         <hr style= {{width: "80%"}}/>

         
    </div>
  )
}

export default Why_harvest