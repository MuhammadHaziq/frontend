import {
  SERVER_ERROR,
  SNACKBAR_CLOSE,
  MESSAGE_SNACKBAR,
  USER_PROFILE_DATA
} from "./ActionType.js";
import axios from "axios";
import jwt from "jsonwebtoken";
//  User Profilr

export const userProfile = token => {
  return dispatch => {
    console.log(token);
    // const token = localStorage.jwttoken;
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
        console.log(response);
      })
      .catch(err => {
        dispatch({ type: SERVER_ERROR, response: err.message });
        // console.log(err.message);
      });
  };
};

export const SaveUserProfile = data => {
  return dispatch => {
    const options = {
      url: "/saveprofile",
      method: "POST",
      data: data
    };
    axios(options)
      .then(response => {
        dispatch({
          type: USER_PROFILE_DATA,
          response: response.data.data
        });
        console.log(response);
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};
