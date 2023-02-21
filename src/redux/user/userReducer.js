import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./actionType";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        isError: false,
      };

    case USER_LOGIN_FAIL:
      return {
        loading: false,
        userInfo: "",
        isError: true,
        error: action.payload,
      };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
