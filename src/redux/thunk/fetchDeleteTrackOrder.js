import { deleteTrackOrder } from "../trackAPI/actions";
import {
  DELETE_TRACKING_ORDER_FAIL,
  DELETE_TRACKING_ORDER_REQUEST,
} from "../trackAPI/actionType";
import axios from "./utils/axios";

const fetchDeleteTrack = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: DELETE_TRACKING_ORDER_REQUEST });
      const {
        login: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.delete(`api/tracking/${id}/delete/`, config);
      dispatch(deleteTrackOrder(data));
    } catch (error) {
      dispatch({
        type: DELETE_TRACKING_ORDER_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};
export default fetchDeleteTrack;
