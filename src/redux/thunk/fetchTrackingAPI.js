import axios from "axios";
import { apiTrack } from "../trackAPI/actions";
import {
  TRACKING_API_FAIL,
  TRACKING_API_REQUEST,
} from "../trackAPI/actionType";

const fetchTrackAPI = (orderID) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TRACKING_API_REQUEST });
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "api/track/",
        {
          order_number: orderID,
        },
        config
      );
      dispatch(apiTrack(data));
    } catch (error) {
      dispatch({
        type: TRACKING_API_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchTrackAPI;
