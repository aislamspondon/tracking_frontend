import axios from "axios";
import { addTrackOrder } from "../trackAPI/actions";
import {
  ADD_TRACKING_ORDER_FAIL,
  ADD_TRACKING_ORDER_REQUEST,
} from "../trackAPI/actionType";

const fetchAddTrack = (trackingNumber, orderNumber) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: ADD_TRACKING_ORDER_REQUEST });
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
        "api/tracking/create/",
        { tracking_number: trackingNumber, order_number: orderNumber },
        config
      );
      dispatch(addTrackOrder(data));
    } catch (error) {
      dispatch({
        type: ADD_TRACKING_ORDER_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};
export default fetchAddTrack;
