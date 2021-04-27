import counter from "./counter";
import logged from "./islogged";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counter,
  logged,
});

export default allReducer;
