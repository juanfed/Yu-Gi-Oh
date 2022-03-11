import {cosultarReducer} from "./consultarReducer";
import { combineReducers } from "redux";
export default combineReducers({
    info: cosultarReducer
})