import react from "react";
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
                    {/* <br></br> */}
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
                    <div className={styles.story_box_top}></div>
                    <div className={styles.story_box_content}>
                        <div className={styles.story_box_left}>
                            <div className={styles.sidebar}></div>
                        </div>
                        <div className={styles.story_box_right}></div>
                    </div>
                </div>
            </div>
        </div>
             

    )
}


export default Customer;