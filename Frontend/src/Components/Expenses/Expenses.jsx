import React, { useEffect, useState } from "react";
import { addExpense, getExpense } from "../redux/actions";
import {useDispatch, useSelector} from "react-redux"
import styles from "./Expenses.module.css";

function Expenses() {
  const [value, setValue] = useState(false);
  const [data,setData] = useState({});
  const dispatch = useDispatch()

  const info = useSelector((state)=> state.expense.expense)

  console.log('info',info)
  const handleChange = (e)=>{
      let inputName= e.target.name;
      setData({
          ...data,
          [inputName]: e.target.value
      })
  }
 
  // const postData = async({project,category,amount})=>{
  //       let res = await fetch("http://localhost:8080/data",{
  //         method: "POST",
  //         headers: {"Content-Type": "application/json"},
  //         body: JSON.stringify({
  //           project,
  //           category,
  //           amount
  //         })
  //       });
  //       let data = await res.json();
  //       console.log(data)
  // }

  const handleClick =()=>{
      let value= data;
    dispatch(addExpense(value)).then(()=>{
      dispatch(getExpense())
     })
  }

  useEffect(()=>{
    dispatch(getExpense());
  },[])

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
            <select name="project" id={styles.selec} onChange={handleChange}>
              <option value="">Choose a Project....</option>
              <option value="Project1">Project1</option>
              <option value="Project2">Project2</option>
              <option value="Project3">Project3</option>
            </select>
            <select name="category" id={styles.selec2} onChange={handleChange}>
              <option value="">Choose a category....</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Lodging">Lodging</option>
              <option value="Meals">Meals</option>
              <option value="Mileage">Mileage</option>
              <option value="Other">Other</option>
              <option value="Transportation">Transportation</option>
            </select>
            <input type="description" placeholder="Notes (optional" />
            <div id={styles.expense}>
              <input type="checkbox" />
              <p>This expense is billable</p>
            </div>
            <div>
              <button onClick={handleClick} id={styles.btn2}>Save expense</button>
              <button id={styles.btn3}>Cancel</button>
            </div>
          </div>

          <div id={styles.third}>
            <h3>Amount</h3>
            <input type="text" name= "amount" onChange={handleChange}/>
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


{value?<div id={styles.entry}>
     <div id= {styles.upperPart}>
         <a id= {styles.a} href="">Submit for approval</a>
      </div>  
      {info.map((ele)=>(
           <div id= {styles.division} key= {ele.id}>
                <div>
                  <h3>Project Name: {ele.project}</h3>
                  <p>Category: {ele.category}</p>
                  </div>
                <div>
                  <p id= {styles.amount}>Amount :  ${ele.amount}.00</p> 
                </div>
           </div>
      ))}
        
    </div> : <></> }
 

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
