import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Store from "./store/Store.js";
import { Provider } from "react-redux";
import Routes from "./route/Routes.js";
import SetAuthorizeToken from "./utils/SetAuthorizeToken.js";
import { setCurrentUser } from "./action/authActions.js";
import { userProfile } from "./action/userProfileActions.js";
import jwt from "jsonwebtoken";

if (localStorage.jwttoken) {
  SetAuthorizeToken(localStorage.jwttoken);
  Store.dispatch(setCurrentUser(jwt.decode(localStorage.jwttoken)));
  Store.dispatch(userProfile(localStorage.jwttoken));
}
ReactDOM.render(
  <Provider store={Store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
