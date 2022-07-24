import React, { useState } from "react";
import styles from "./Expenses.module.css";

function Expenses() {
  const [value, setValue] = useState(false);
  return (
    <div>
      <h2 id={styles.h2}>Expenses</h2>
      
      <button onClick={()=> setValue(!value)} id={styles.btn}>+ Track Expenses</button>

      {value ? (
        <div id={styles.form}>
          <div id={styles.first}>
            <h4>Date</h4>
            <input type="date" />
          </div>
          <div id={styles.second}>
            <h4>Project/Category</h4>
            <select name="" id={styles.selec}>
              <option value="">Choose a Project....</option>
              <option value="">Project1</option>
              <option value="">Project2</option>
              <option value="">Project3</option>
            </select>
            <select name="" id={styles.selec2}>
              <option value="">Choose a category....</option>
              <option value="">Entertainment</option>
              <option value="">Lodging</option>
              <option value="">Meals</option>
              <option value="">Mileage</option>
              <option value="">Other</option>
              <option value="">Transportation</option>
            </select>
            <input type="description" placeholder="Notes (optional" />
            <div id={styles.expense}>
              <input type="checkbox" />
              <p>This expense is billable</p>
            </div>
            <div>
              <button id={styles.btn2} >Save expense</button>
              <button id={styles.btn3}>Cancel</button>
            </div>
          </div>

          <div id={styles.third}>
            <h3>Amount</h3>
            <input type="text" />
          </div>
        </div>
      ) : (
        <div id={styles.bottom}>
          <img
            src="https://cache.harvestapp.com/static/illustrations/expense_onboard-AAC9C67E.png"
            alt=""
          />
          <p>
            Record those airline tickets, meals, miles, and other expenses in
            Harvest so you can more accurately budget projects and invoice
            clients.
          </p>
        </div>
      )}

      <div id= {styles.terms}>
         <p>Terms</p>
         <p>Privacy</p>
         <p>Integrations</p>
         <p>Apps</p>
         <p>Blog</p>
         <p>Webinar</p>
         <p>Help</p>
      </div>
    </div>
  );
}

export default Expenses;
