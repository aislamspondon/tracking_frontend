import { updateWords } from "../blackList/actions";
import {
  UPDATE_BLACKLIST_WORD_FAIL,
  UPDATE_BLACKLIST_WORD_REQUEST,
} from "../blackList/actionType";
import axios from "./utils/axios";

const fetchUpdateWords = (id, blacklistWord, replaceBlacklistWord) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_BLACKLIST_WORD_REQUEST });
      const {
        login: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `api/blacklist/${id}/update/`,
        { word: blacklistWord, replace_word: replaceBlacklistWord },
        config
      );
      dispatch(updateWords(data));
    } catch (error) {
      dispatch({
        type: UPDATE_BLACKLIST_WORD_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};
export default fetchUpdateWords;
