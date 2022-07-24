import { useDebugValue } from "react";
import { ADD_ERROR, ADD_REQUEST, ADD_SUCCESS, GET_ERROR, GET_REQUEST, GET_SUCCESS } from "./actionTypes";

// getting the entries

export const get_request = ()=>({
     type: GET_REQUEST
})

export const get_success = (data)=>({
    type: GET_SUCCESS,
    payload: data,
})

export const get_error = () =>({
    type: GET_ERROR
})


export const getExpense = ()=> async(dispatch)=>{
    dispatch(get_request());
    try {
        let res= await fetch("http://localhost:8080/data");
        let data = await res.json();     
    //    console.log(data)
      dispatch(get_success(data));
    } catch (error) {
        dispatch(get_error());
    }
}


// adding the entries

export const add_request = ()=>({
    type: ADD_REQUEST
})

export const add_success = ()=>({
   type: ADD_SUCCESS,
})

export const add_error = () =>({
   type: ADD_ERROR
})


export const addExpense = (value)=> async(dispatch)=>{
    dispatch(add_request());
    try {
        let res= await fetch("http://localhost:8080/data",{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                project: value.project,
                category: value.category,
                amount : value.amount
            })
        })
        let data= await res.json();
        // console.log(data);
        dispatch(add_success())
    } catch (error) {
        dispatch(add_error());
    }
}