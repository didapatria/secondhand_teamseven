import { combineReducers } from "redux";
import { auth } from "./auth";
import { message } from "./message";
import { productReducer } from "./product";
import { userReducer } from "./user";

export default combineReducers({
  auth,
  message,
  productReducer,
  userReducer,
});
