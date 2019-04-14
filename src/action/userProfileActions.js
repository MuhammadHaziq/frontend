import {
  SERVER_ERROR,
  SNACKBAR_CLOSE,
  MESSAGE_SNACKBAR,
  USER_PROFILE_DATA
} from "./ActionType.js";
import axios from "axios";
import jwt from "jsonwebtoken";
//  User Profilr

export const userProfile = () => {
  return dispatch => {
    const token = localStorage.jwttoken;
    // console.log(axios.defaults.headers.common["Authorize"]);
    const options = {
      url: "/profile",
      headers: {
        "x-access-token": token
      },
      method: "get"
    };
    axios(options)
      .then(response => {
        dispatch({ type: USER_PROFILE_DATA, response: response.data.message });
        // console.log(response);
      })
      .catch(err => {
        dispatch({ type: SERVER_ERROR, response: err.message });
        // console.log(err.message);
      });
  };
};
