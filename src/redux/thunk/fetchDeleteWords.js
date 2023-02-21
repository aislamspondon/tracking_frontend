import axios from "axios";
import { deleteWords } from "../blackList/actions";
import {
  DELETE_BLACKLIST_WORD_FAIL,
  DELETE_BLACKLIST_WORD_REQUEST,
} from "../blackList/actionType";

const fetchDeleteWords = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: DELETE_BLACKLIST_WORD_REQUEST });
      const {
        login: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.delete(
        `api/blacklist/${id}/delete/`,
        config
      );
      dispatch(deleteWords(data));
    } catch (error) {
      dispatch({
        type: DELETE_BLACKLIST_WORD_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};
export default fetchDeleteWords;
