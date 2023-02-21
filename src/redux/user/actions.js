import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "./actionType";

export const login = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};

export const logout = (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
  localStorage.removeItem("valley_hatghery_userInfo");
};
