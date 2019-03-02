import { combineReducers } from "redux";
import userFunctions from "./user";
import posts from "./posts";

const reducers = combineReducers({
  userFunctions,
  posts
});
export default reducers;
