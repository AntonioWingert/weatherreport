import { combineReducers } from "redux";
import { weatherApiReducer } from "./weatherApiReducer";

const rootReducer = combineReducers({
  weatherApiReducer,
});

export default rootReducer;