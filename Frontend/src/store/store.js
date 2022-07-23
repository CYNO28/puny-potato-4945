import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { expenseReducer } from "../Components/redux/reducer";

const rootReducer = combineReducers({
     expense: expenseReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));
