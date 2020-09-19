import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { postReducer } from "./postReducer";

export const rootReducer = combineReducers({
  postsState: postReducer,
  alertState: alertReducer,
});