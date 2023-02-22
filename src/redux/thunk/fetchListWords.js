import { listWords } from "../blackList/actions";
import {
  LIST_BLACKLIST_WORD_FAIL,
  LIST_BLACKLIST_WORD_REQUEST,
} from "../blackList/actionType";
import axios from "./utils/axios";

const fetchListWords = async (dispatch, getState) => {
  try {
    dispatch({ type: LIST_BLACKLIST_WORD_REQUEST });
    const {
      login: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`api/blacklist/`, config);
    dispatch(listWords(data));
  } catch (error) {
    dispatch({
      type: LIST_BLACKLIST_WORD_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export default fetchListWords;
