import react from "react";
import Footer from "../../Components/HomePage/Footer/Footer";
import styles from "./Customer.module.css"

const Customer=()=>{
    return (

        <div className={styles.body_container}>
            <div className={styles.body_container2}>
                <div className={styles.body_container3}>
                    <br></br>
                    <br></br>
                    <div className={styles.text1_container}>
                        <h1>See how Harvest helps teams like yours thrive</h1>
                    </div>
                    
                    <div className={styles.text2container}>
                        <h3>Teams of all sizes, across industries, and around the world track time with Harvest.</h3>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className={styles.boxcontainer}>
                    <div className={styles.box1}>
                        <div className={styles.box11}>
                            <h2>70,000+</h2>
                            <h4>customers</h4>
                        </div>
                        <div className={styles.box12}>
                            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-person.svg"></img>
                        </div>
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.box21}>
                            <h2>2 billion</h2>
                            <h4>hours tracked</h4>
                        </div>
                        <div className={styles.box22}>
                            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-keep.svg"></img>
                        </div>
                    </div>
                    <div className={styles.box3}>
                        <div className={styles.box31}>
                            <h2>19.6 million</h2>
                            <h4>invoices paid</h4>
                        </div>
                        <div className={styles.box32}>
                            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-money.svg"></img>
                        </div>
                    </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className={styles.feature_story}>
                        <div className={styles.feature_story_box1}>
                            <img src="https://www.getharvest.com/hs-fs/hubfs/customer-profile.jpg?width=1181&name=customer-profile.jpg"></img>
                        </div>
                        <div className={styles.feature_story_box2}>
                            <div className={styles.feature_story_box21}>
                                <p>FEATURED STORY</p>
                                <h3>Startup studio Dovetail tracks time with Harvest to build trust with clients.</h3>
                                <button>Read Customer Story</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.logo}>
                    <div className={styles.logo1}>
                        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize"></img>
                    </div>
                    <div className={styles.logo2}>
                        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize"></img>
                    </div>
                    <div className={styles.logo3}>
                        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize"></img>
                    </div>
                    <div className={styles.logo4}>
                        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize"></img>
                    </div>
                    <div className={styles.logo5}>
                        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize"></img>
                    </div>
                    <div className={styles.logo6}>
                        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize"></img>
                    </div>
                    <div className={styles.logo7}>
                        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize"></img>
                    </div>
                    <div className={styles.logo8}>
                        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize"></img>
                    </div>
                    </div>
                </div>       
            </div>

            <div className={styles.story}>
                <div className={styles.story_box}>
                    <div className={styles.story_box_top}>
                        <h2>Find stories from teams like yours</h2>
                    </div>
                    <div className={styles.story_box_content}>
                        <div className={styles.story_box_left}>
                            <div className={styles.sidebar}>
                                <button><a>All industries</a></button>
                                <button><a>Architecture</a></button>
                                <button><a>Creative-services</a></button>
                                <button><a>Engineering & design</a></button>
                                <button><a>Management consulting</a></button>
                                <button><a>Web development & IT</a></button>
                            </div>
                        </div>
                        <div className={styles.story_box_right}>
                            <div className={styles.right_box1}>
                                <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/rana/rana-logo.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Rana, an ecological design company, uses Harvest to keep track of their projects and billable hours in one place. </p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                                <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/centric-digital/tras.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Digital transformation company Centric Digital relies on Harvest’s reports and invoicing.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/mutual-mobile/mutual-mobile-logo.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Harvest supported mobile development agency Mutual Mobile in their recent growth.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/public-logo.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>An architecture firm focused on the public realm uses Harvest to keep fixed-fee projects profitable. </p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/hashrocket/hashrocket-logo.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Design &amp; development agency Hashrocket uses timers to track time throughout their day.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/columbia/columbia-logo.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p><p>Columbia's creative team uses Harvest to balance internal stakeholders.</p></p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/cooper-perkins/logo-cooper-perkins.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Engineering practice Cooper Perkins uses Harvest to project future needs.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/logo-dovetail.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Startup studio Dovetail tracks time with Harvest to build trust with clients.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/luminary-labs/logo-index-luminarylabs-0fe6b11e1f976e648dc6907ba9a2a677a71ed9013820ed9dba0415aaa4c6bd5a-1.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Strategy &amp; innovation consultancy Luminary Labs manages team utilization with Harvest.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/tekna/tekna-logo.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Harvest helps product design company Tekna save time by streamlining their process.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/thecharles/the-charles-logo.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>The Charles uses time tracking to reinforce client and employee happiness.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/clinovations/clinovations-logo-1.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Healthcare strategists Clinovations streamlined their time tracking with Harvest.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/turnstyle/turnstyle-logo.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Harvest enables design agency Turnstyle to stay mindful of smart business practices.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/vayner-media/vayner-media-logo.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Consulting agency VaynerMedia uses Harvest to surface patterns and opportunities.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/yld/yld-logo-1.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Engineering consultancy YLD relies on Harvest to plan, staff, and manage their projects.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/juicyorange/juicyorange-logo-2.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Harvest helps web design company Juicyorange justify their pricing.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/area-17/area-17-logo.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Harvest helped culinary company CCD innovation step up their operational efficiency.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/adamick/adamick-logo.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p>Digital agency Zehner manages their team’s bandwidth with Harvest</p>
                                </div>
                            </div>
                            {/* <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/ccd-innovation/ccd-logo-1.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p></p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/zehner/zehner-logo.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p></p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                            <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hubfs/customers/crossley-acoustics/crossley-acoustics-logo.svg"></img>
                                </div>
                                <div className={styles.b12}>
                                    <p></p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.bottom_content}>
                    <div className={styles.bottom_box}>
                        <div className={styles.bottom_box1}>
                            <h2>Start tracking time today</h2>
                            <h4>Join 70,000+ companies spending their time wisely with Harvest.</h4>
                            <div className={styles.bottom_box12}>
                            <a href="/signup" className={styles.button_trial}>Try Harvest free</a>
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
             

    )
}


export default Customer;