import { combineReducers } from "redux";
import { auth } from "./auth";
import { message } from "./message";
import { productReducer } from "./product";

export default combineReducers({
  auth,
  message,
  productReducer,
});
