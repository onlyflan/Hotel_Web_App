
import { cartReducer } from "./cart";
import { combineReducers } from "redux";

export const allReducer = combineReducers({
    cartReducer,
    //Them cac reducer khac vao day
});