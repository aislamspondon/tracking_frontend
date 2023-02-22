import { addWords } from "../blackList/actions";
import {
  ADD_BLACKLIST_WORD_FAIL,
  ADD_BLACKLIST_WORD_REQUEST,
} from "../blackList/actionType";
import axios from "./utils/axios";

const fetchAddWords = (blacklistWord, replaceBlacklistWord) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: ADD_BLACKLIST_WORD_REQUEST });
      const {
        login: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        "api/blacklist/create/",
        { word: blacklistWord, replace_word: replaceBlacklistWord },
        config
      );
      dispatch(addWords(data));
    } catch (error) {
      dispatch({
        type: ADD_BLACKLIST_WORD_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};
export default fetchAddWords;
