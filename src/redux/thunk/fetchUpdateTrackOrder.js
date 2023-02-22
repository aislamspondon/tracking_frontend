import { updateTrackOrder } from "../trackAPI/actions";
import {
  UPDATE_TRACKING_ORDER_FAIL,
  UPDATE_TRACKING_ORDER_REQUEST,
} from "../trackAPI/actionType";
import axios from "./utils/axios";

const fetchUpdateTrack = (id, trackingNumber, orderNumber) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_TRACKING_ORDER_REQUEST });
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
        `api/tracking/${id}/update/`,
        { tracking_number: trackingNumber, order_number: orderNumber },
        config
      );
      dispatch(updateTrackOrder(data));
    } catch (error) {
      dispatch({
        type: UPDATE_TRACKING_ORDER_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};
export default fetchUpdateTrack;
