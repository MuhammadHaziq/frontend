import {
  SERVER_ERROR,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  SNACKBAR_CLOSE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOGOUT,
  FORGOTPASSWORD_SUCCESS,
  FORGOTPASSWORD_START,
  FORGOTPASSWORD_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  MESSAGE_SNACKBAR
} from "./ActionType.js";
import axios from "axios";
import jwt from "jsonwebtoken";
import SetAuthorizeToken from "../utils/SetAuthorizeToken.js";

export const setCurrentUser = token => {
  return {
    type: USER_LOGIN_SUCCESS,
    response: token
  };
};

export const UserLogin = (data, location) => {
  return dispatch => {
    dispatch({
      type: USER_LOGIN_START
    });
    axios
      .post("/login", data)
      .then(response => {
        if (response.data.success === true) {
          const token = response.data.token;
          const user = jwt.decode(token);
          dispatch(setCurrentUser(user));
          // dispatch({
          //   type: USER_LOGIN_SUCCESS,
          //   response: response.data
          // });
          localStorage.setItem("jwttoken", token);
          SetAuthorizeToken(token);
          location.push("/home");
        } else {
          dispatch({ type: USER_LOGIN_FAIL, response: response.data.message });
        }
      })
      .catch(error => {
        dispatch({ type: SERVER_ERROR, response: error.message });
      });
  };
};

export const UserRegister = (data, location) => {
  return dispatch => {
    // console.log(data);
    dispatch({ type: SIGNUP_START });
    axios
      .post("/signup", data)
      .then(response => {
        console.log(response);
        if (response.data.success === true) {
          dispatch({ type: SIGNUP_SUCCESS, response: response.data.message });
        } else {
          dispatch({ type: SIGNUP_FAIL, response: response.data.message });
        }
      })
      .catch(error => {
        dispatch({ type: SERVER_ERROR, response: error.message });
      });
  };
};

export const forgotpassword = email => {
  return dispatch => {
    dispatch({ type: FORGOTPASSWORD_START });
    console.log(email);
    axios
      .post("/forgotPassword", { email })
      .then(response => {
        if (response.data.success === true) {
          dispatch({
            type: FORGOTPASSWORD_SUCCESS,
            response: response.data.message
          });
        } else {
          dispatch({
            type: FORGOTPASSWORD_FAIL,
            // response: "Error"
            response: response.data.message.responseMessage
          });
          console.log(response);
        }
      })
      .catch(err => {
        dispatch({ type: SERVER_ERROR, response: err.message });
      });
  };
};
// Password Reset
export const passwordReset = (data, activationcode) => {
  return dispatch => {
    axios
      .post("/passwordreset", data)
      .then(response => {
        console.log(response);
        if (response.data.status == true) {
          dispatch({
            type: PASSWORD_RESET_SUCCESS,
            response: response.data.message
          });
        } else {
          dispatch({
            type: PASSWORD_RESET_FAIL,
            response: response.data.message
          });
        }
      })
      .catch(err => {
        dispatch({ type: SERVER_ERROR, response: err.message });
        console.log(err.message);
      });
  };
};
// export const resetPassword =
export const logout = location => {
  return dispatch => {
    localStorage.removeItem("jwttoken");
    SetAuthorizeToken(false);
    dispatch({ type: USER_LOGOUT });
    // location.push("/login");
  };
};

export const messages = message => {
  return dispatch => {
    dispatch({ type: MESSAGE_SNACKBAR, response: message });
  };
};

export const snackbarclose = () => {
  return dispatch => {
    dispatch({ type: SNACKBAR_CLOSE });
  };
};
// let error = {};
// console.log("login Start");
// dispatch({ type: USER_LOGIN_START });
// if (data.email !== "" && data.password !== "") {
//   dispatch({ type: USER_LOGIN_SUCCESS, response: data });
//   console.log("Loged in");
// } else {
//   error.email = "Email already Exist";
//   dispatch({
//     type: USER_LOGIN_FAIL,
//     response: error
//   });
//   console.log("Loged in Fail");
// }
