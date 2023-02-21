import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
const userInfoFromStroge = localStorage.getItem("valley_hatghery_userInfo")
  ? JSON.parse(localStorage.getItem("valley_hatghery_userInfo"))
  : null;
const initialState = {
  login: { userInfo: userInfoFromStroge },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
// composeWithDevTools(applyMiddleware(thunk)
// "redux-devtools-extension": "^2.13.9",

export default store;
