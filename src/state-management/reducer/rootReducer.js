import { combineReducers } from "redux";
import { profileModeReducer } from "./profileModeReducer";
import { profileReducer } from "./profileReducer";
export default combineReducers({
    profileState:profileReducer,
    profileModeState:profileModeReducer
})