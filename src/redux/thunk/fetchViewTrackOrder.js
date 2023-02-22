import { viewrackOrder } from "../trackAPI/actions";
import {
  VIEW_TRACKING_ORDER_FAIL,
  VIEW_TRACKING_ORDER_REQUEST,
} from "../trackAPI/actionType";
import axios from "./utils/axios";

const fetchViewTrack = async (dispatch) => {
  try {
    dispatch({ type: VIEW_TRACKING_ORDER_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(`api/tracking/`, config);
    dispatch(viewrackOrder(data));
  } catch (error) {
    dispatch({
      type: VIEW_TRACKING_ORDER_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export default fetchViewTrack;
