import { combineReducers } from "redux";
import { music } from "./music.js";
// import { routerReducer } from "react-router-redux";
// 这里这个Reducer名称对应到全局state的命名空间（如 state.HomeReducer)
const rootReducer = combineReducers({
  // router: routerReducer,
  // HomeReducer
});
export default rootReducer;
