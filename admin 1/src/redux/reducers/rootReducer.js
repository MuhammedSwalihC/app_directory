import { combineReducers } from "redux";
import { appsReducer } from "./apps.reducers";

export const rootReducer = () => 
    combineReducers({
        apps:appsReducer,
    })