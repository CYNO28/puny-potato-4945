import React from "react";
// import styles from "../Styles/Refund.css";
import styles from "../styles/Features.css";

export const Features = () => {
  return (
    <div>
      Features
      <div className="mainDiv">
        <div className="everythingDiv">
          <div className="textDiv-everything">
            <h1>Everything your team needs to keep ticking</h1>
            <p>
              Intuitive time tracking and powerful insights that help your team
              thrive.
            </p>
          </div>
          <div className="three-everything-div">
            <div>
              {" "}
              <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-time.svg"
                alt=""
              />
              <p>Time tracking</p>
            </div>
            <div>
              {" "}
              <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-report.svg"
                alt=""
              />
              <p>Reports & analysis</p>
            </div>
            <div>
              {" "}
              <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-invoice.svg"
                alt=""
              />
              <p>Invoice & payments</p>
            </div>
          </div>
        </div>

        <div className="time-tracking-main-div">
          <div className="time-tracking-div">
            <div className="time-tracking-text-div1">
              <h5>Time tracking</h5>
              <p>
                An intuitive, lightweight time
                <br /> tracking experience that’s easy to <br /> adopt and use
                every day.
              </p>
              <button className="start-button">Start your free trail</button>
            </div>
            <div className="time-tracking-img-div">
              <img
                src="https://www.getharvest.com/hs-fs/hubfs/screenshot-features-timesheets.png?width=1181&name=screenshot-features-timesheets.png"
                alt=""
              />
            </div>
          </div>
          <div className="time-tracking-three-main-div">
            <div className="time-tracking-three-div">
              <div className="time-tracking-img-text-div">
                <img
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-stopwatch.svg"
                  alt=""
                />
                <p>
                  Track time from browser,
                  <br /> desktop, and mobile
                </p>
              </div>
              <div className="time-tracking-text-div">
                <p>
                  Make it as easy as possible for your,
                  <br /> team to capture their time with <br />
                  dedicated apps across devices.
                </p>
              </div>
            </div>
            <div className="time-tracking-three-div">
              <div className="time-tracking-img-text-div">
                <img
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-integrations.svg"
                  alt=""
                />
                <p>Integrated with your workflow</p>
              </div>
              <div className="time-tracking-text-div">
                <p>
                  Harvest integrates with the tools your <br />
                  team knows and loves — capture time
                  <br /> the way your team already works.
                </p>
              </div>
            </div>
            <div className="time-tracking-three-div">
              <div className="time-tracking-img-text-div">
                <img
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-stopwatch.svg"
                  alt=""
                />

                <p>
                  Custom reminders for <br />
                  consistent time tracking
                </p>
              </div>
              <div className="time-tracking-text-div">
                <p>
                  Create automated reminders to help
                  <br /> your team track time regularly and
                  <br /> accurately.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Harvest-easy-main-div">
          <div className="Harvest-easy-img-div">
            <img
              src="https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-1.jpg?width=563&name=features-quote-1.jpg"
              alt=""
            />
          </div>
          <div className="Harvest-easy-txt-div">
            <p>
              "Harvest’s easy, clean time tracking allows us to focus on <br />{" "}
              the tough engineering problems where we bring value to
              <br /> our clients."
            </p>
            <div className="Harvest-easy-txt-name-div">
              <h5>Genevieve Laing</h5>
              <p>Director of Engineering, Cooper Perkins</p>
            </div>
          </div>
        </div>

        {/* *********Time****** */}

        <div className="time-tracking-main-div">
          <div className="time-tracking-div">
            <div className="time-tracking-text-div1">
              <h5>Reports & analysis</h5>
              <p>
                A wide selection of visual reports
                <br /> keep projects running smoothly
                <br /> and your team supported.
              </p>
              <button className="start-button">Start your free trail</button>
            </div>
            <div className="time-tracking-img-div">
              <img
                src="https://www.getharvest.com/hs-fs/hubfs/screenshot-features-projects.png?width=1181&name=screenshot-features-projects.png"
                alt=""
              />
            </div>
          </div>
          <div className="time-tracking-three-main-div">
            <div className="time-tracking-three-div">
              <div className="time-tracking-img-text-div">
                <img
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-budget.svg"
                  alt=""
                />
                <p>
                Keep budgets on target
                </p>
              </div>
              <div className="time-tracking-text-div">
                <p>
                Harvest updates budgets as your team <br/>tracks time, so you can keep your<br/> projects on track and profitable.
                </p>
              </div>
            </div>
            <div className="time-tracking-three-div">
              <div className="time-tracking-img-text-div">
                <img
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-capacity.svg"
                  alt=""
                />
                <p>Visualize team capacity</p>{" "}
              </div>
              <div className="time-tracking-text-div">
                <p>
                See who’s overworked and who’s<br/> under-utilized at a glance with capacity<br/> reporting.
                </p>
              </div>
            </div>
            <div className="time-tracking-three-div">
              <div className="time-tracking-img-text-div">
                <img
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-costs.svg"
                  alt=""
                />

                <p>
                Understand costs
                </p>
              </div>
              <div className="time-tracking-text-div">
                <p>
                Keep track of internal costs and review<br/> past project data to inform future <br/>project scope and estimates.
                </p>
              </div>
            </div>
          </div>
          <div className="time-tracking-three-main-div">
            <div className="time-tracking-three-div">
              <div className="time-tracking-img-text-div">
                <img
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-analyze.svg"
                  alt=""
                />
                <p>
                Analyze time spent
                </p>
              </div>
              <div className="time-tracking-text-div">
                <p>
                See which projects and tasks are<br/> consuming your team’s time and<br/> impacting costs.
                </p>
              </div>
            </div>
            <div className="time-tracking-three-div">
              <div className="time-tracking-img-text-div">
                <img
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-details.svg"
                  alt=""
                />
                <p>Dive into the details</p>{" "}
              </div>
              <div className="time-tracking-text-div">
                <p>
                Powerful filters give you the detailed<br/> data needed to understand where your <br/>time goes and plan what’s next.
                </p>
              </div>
            </div>
            <div className="time-tracking-three-div">
              <div className="time-tracking-img-text-div">
                <img
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-costs.svg"
                  alt=""
                />

                <p>
                  Custom reminders for <br />
                  consistent time tracking
                </p>
              </div>
              <div className="time-tracking-text-div">
                <p>
                  Create automated reminders to help
                  <br /> your team track time regularly and
                  <br /> accurately.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ********Harvest*** */}

        <div className="Harvest-easy-main-div1">
          <div className="Harvest-easy-img-div1">
            <img
              src="https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-2.jpg?width=563&name=features-quote-2.jpg"
              alt=""
            />
          </div>
          <div className="Harvest-easy-txt-div1">
            <p>
              "We really focus on work-life balance in remote work…
              <br /> Time tracking reveals if somebody is overburdened and
              <br /> that becomes an immediate conversation."
            </p>
            <div className="Harvest-easy-txt-name-div1">
              <h5>Noah Gedrich</h5>
              <p>CTO, Zehner</p>
            </div>
          </div>
        </div>
        <div className="time-tracking-main-div">
          <div className="time-tracking-div">
            <div className="time-tracking-text-div1">
              <h5>Invoicing & payments</h5>
              <p>
              Turn your team’s tracked time and<br/> expenses into invoices and <br/>collect payment quickly with <br/>integrated online payments.
              </p>
              <button className="start-button">Start your free trail</button>
            </div>
            <div className="time-tracking-img-div">
              <img
                src="https://www.getharvest.com/hs-fs/hubfs/screenshot-features-invoices-1.png?width=1181&name=screenshot-features-invoices-1.png"
                alt=""
              />
            </div>
          </div>
          <div className="time-tracking-three-main-div">
            <div className="time-tracking-three-div">
              <div className="time-tracking-img-text-div">
                <img
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-invoice.svg"
                  alt=""
                />
                <p>
                Streamline your <br/>invoicing
                </p>
              </div>
              <div className="time-tracking-text-div">
                <p>
                Easily create and send accurate<br/> using your team’s time and expenses<br/> already tracked in Harvest.
                </p>
              </div>
            </div>
            <div className="time-tracking-three-div">
              <div className="time-tracking-img-text-div">
                <img
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-payments.svg"
                  alt=""
                />
                <p>Get paid fast with<br/> online payments</p>
              </div>
              <div className="time-tracking-text-div">
                <p>
                PayPal and Stripe integrations let your <br/>clients quickly and conveniently pay <br/>invoices online.
                </p>
              </div>
            </div>
            <div className="time-tracking-three-div">
              <div className="time-tracking-img-text-div">
                <img
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-books.svg"
                  alt=""
                />

                <p>
                Keep your books<br/> up to date
                </p>
              </div>
              <div className="time-tracking-text-div">
                <p>
                Automatically copy your Harvest <br/>invoices and payments to QuickBooks <br/>Online or Xero for simplified accounting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
