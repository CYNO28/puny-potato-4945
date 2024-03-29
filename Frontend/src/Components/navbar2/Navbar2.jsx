import react from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar2.module.css"

const Navbar2=({user})=>{
   let data= JSON.parse(localStorage.getItem("token"))
    return (

        <div className={styles.navbar}>
            <div className={styles.navbar_content}>
                <div className={styles.navbar_left}>
                    <button className={styles.left1}>
                        {/* <img src="https://s3.amazonaws.com/freestock-prod/450/freestock_570913414.jpg"></img> */}
                    </button>
                    <button className={styles.left2}><a href="https://masai2.harvestapp.com/time">Time</a></button>
                    <button className={styles.left3}><Link to={'/user/Expen'}>Expenses</Link></button>
                    <button className={styles.left4}><a href="">Projects</a></button>
                    <button className={styles.left5}><a href="">Team</a></button>
                    <button className={styles.left6}><a href="">Reports</a></button>
                    <button className={styles.left7}><a href="">Invoices</a></button>
                    <button className={styles.left8}><a href="">Manage</a></button>
                </div>
                <div className={styles.navbar_right}>
                    <button className={styles.right1}><a href="">Settings</a></button>
                    <button className={styles.right2}>
                        <img className={styles.right_img} src={user?user.picture:'/avatar.png'}></img>
                        <span className={styles.right_name}>{user?user.given_name:data.username}</span>
                    </button>
                </div>
            </div>
        </div>

    )
}




export default Navbar2;    