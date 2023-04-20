import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import TickReducer from "./TickReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  ticks: TickReducer
})

export default rootReducer;