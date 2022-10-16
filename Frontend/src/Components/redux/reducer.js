import { ADD_ERROR, ADD_REQUEST, ADD_SUCCESS, GET_ERROR, GET_REQUEST, GET_SUCCESS } from "./actionTypes"

const initState = {
    loading : false,
    error : false,
    expense: []
}

export const expenseReducer = (state = initState,action)=>{
     switch(action.type){
        case GET_REQUEST : {
           
            return{
                ...state,
                loading : true,
                error : false,
                expense: []
            }
        }
        case GET_SUCCESS : {
            console.log('data',action.payload)
            return{
                ...state,
                loading : false,
                error : false,
                expense: action.payload
            }
        }
        case GET_ERROR : {
            return{
                ...state,
                loading : false,
                error : true,
                expense: []
            }
        }
        case ADD_REQUEST : {
            return{
                ...state,
                loading : true,
                error : false,
                expense: []
            }
        }
        case ADD_SUCCESS : {
            return{
                ...state,
                loading : false,
                error : false,
            }
        }
        case ADD_ERROR : {
            return{
                ...state,
                loading : false,
                error : true,
                expense: []
            }
        }
        default : {
             {return state}
        }
     }
}