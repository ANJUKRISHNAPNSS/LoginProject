import { combineReducers } from "redux";
import { dashboardReducers } from "./dashBoardReducers";

export const rootReducer = combineReducers({

    dashboardReducers: dashboardReducers

})