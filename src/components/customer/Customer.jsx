import react from "react";
import styles from "./Customer.module.css"

const Customer=()=>{
    return (

        <div className={styles.body_container}>
            <div className={styles.body_container2}>
                <div className={styles.body_container3}>
                    <div className={styles.text1_container}>
                        <h1>See how Harvest helps teams like yours thrive</h1>
                    </div>
                    <div className={styles.text2container}>
                        <p>Teams of all sizes, across industries, and around the world track time with Harvest.</p>
                    </div>
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
                </div>
                
            </div>
        </div>
             

    )
}


export default Customer;