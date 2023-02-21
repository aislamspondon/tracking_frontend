import { combineReducers } from "redux";
import {
  addWordsReducer,
  wordsDeleteReducer,
  wordsListReducer,
  wordsUpdateReducer,
} from "./blackList/blackListReducer";
import {
  trackingAPIDetailsReducer,
  trackingAPIReducer,
  trackingOrderAddReducer,
  trackingOrderDeleteReducer,
  trackingOrderUpdateReducer,
  trackingOrderViewReducer,
} from "./trackAPI/trackUserReducer";
import { userLoginReducer } from "./user/userReducer";
const rootReducer = combineReducers({
  login: userLoginReducer,
  trackAPI: trackingAPIReducer,
  trackAPIDetails: trackingAPIDetailsReducer,
  trackOrderAdd: trackingOrderAddReducer,
  trackOrderView: trackingOrderViewReducer,
  trackOrderUpdate: trackingOrderUpdateReducer,
  trackOrderDelete: trackingOrderDeleteReducer,
  addWords: addWordsReducer,
  wordsList: wordsListReducer,
  wordsUpdate: wordsUpdateReducer,
  wordsDelete: wordsDeleteReducer,
});

export default rootReducer;
