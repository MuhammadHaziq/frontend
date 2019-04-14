import { createStore } from "redux";
import AuthReducer from "../reducer/AuthReducer.js";
import userProfileReducer from "../reducer/userProfileReducer.js";
import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  AuthReducer,
  userProfileReducer
});
const Store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;
