import { USER_PROFILE_DATA } from "../action/ActionType.js";

const Initial_State = {
  userProfile: ""
};

const userProfileReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case USER_PROFILE_DATA:
      {
        return {
          ...state,
          userProfile: action.response
        };
      }
      break;
    default:
      return state;
  }
};
export default userProfileReducer;
