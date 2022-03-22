import { combineReducers } from "redux";
import consultarReducer from "./consultarReducer";

export default combineReducers({
    info: consultarReducer
})