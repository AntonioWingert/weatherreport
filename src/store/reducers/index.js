import { combineReducers } from "redux";
import { weatherApiReducer } from "./weatherApiReducer";

const rootReducer = combineReducers({
  datesApi: weatherApiReducer,
});

export default rootReducer;