import { combineReducers } from "redux";
import testReducer from "./testReducer";
import historyReducer from "./historyReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  test: testReducer,
  history: historyReducer,
  errors: errorReducer
});
