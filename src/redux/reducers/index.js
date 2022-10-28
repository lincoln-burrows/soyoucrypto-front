import { combineReducers } from "redux";
import momentumReducer from "./momentumReducer";
import legacyReducer from "./legacyReducer";
import stableReducer from "./stableReducer";

export default combineReducers({
    momentumData : momentumReducer, 
    stableData : stableReducer, 
    legacy : legacyReducer,
})