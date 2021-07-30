import {
  USER_SIGNOUT,
  USER_SINGIN_FAIL,
  USER_SINGIN_REQUEST,
  USER_SINGIN_SUCCESS,
} from "../constants/userConstants";

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SINGIN_REQUEST:
      return { loading: true };
    case USER_SINGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SINGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};
