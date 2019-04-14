import {
  SERVER_ERROR,
  USER_LOGIN_FAIL,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
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
} from "../action/ActionType.js";

const Initial_State = {
  auth: false,
  currentuser: {},
  loader: false,
  message: null,
  open: false
};

const AuthReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case USER_LOGIN_START: {
      return {
        ...state,
        loader: true
      };
    }

    case USER_LOGIN_FAIL: {
      return {
        ...state,
        message: action.response,
        open: true
      };
    }

    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        currentuser: action.response,
        auth: true,
        open: false
      };
    }

    case USER_LOGOUT: {
      return Object.assign({}, state, {
        currentuser: {},
        auth: false,
        open: false,
        message: null
      });
    }

    case SIGNUP_START: {
      return {
        ...state,
        loader: true
      };
    }

    case SIGNUP_SUCCESS: {
      return Object.assign({}, state, {
        currentuser: action.response,
        open: true,
        message: action.response
      });
    }

    case SIGNUP_FAIL: {
      return Object.assign({}, state, { open: true, message: action.response });
    }

    case SERVER_ERROR: {
      return Object.assign({}, state, { open: true, message: action.response });
    }

    case MESSAGE_SNACKBAR: {
      return {
        ...state,
        open: true,
        message: action.response
      };
    }

    case FORGOTPASSWORD_START: {
      return Object.assign({}, state, { loader: true });
    }

    case FORGOTPASSWORD_SUCCESS: {
      return Object.assign({}, state, { open: true, message: action.response });
    }

    case FORGOTPASSWORD_FAIL: {
      return Object.assign({}, state, { open: true, message: action.response });
    }
    case PASSWORD_RESET_SUCCESS: {
      return Object.assign({}, state, { open: true, message: action.response });
    }
    case PASSWORD_RESET_FAIL: {
      return Object.assign({}, state, { open: true, message: action.response });
    }
    case SNACKBAR_CLOSE: {
      return {
        ...state,
        open: false
      };
    }
    default:
      return state;
  }
};
export default AuthReducer;
