import axios from "axios";
import { apiTrackDetails } from "../trackAPI/actions";
import {
  TRACKING_API_DETAILS_FAIL,
  TRACKING_API_DETAILS_REQUEST,
} from "../trackAPI/actionType";

const fetchTrackingDetails = (orderId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TRACKING_API_DETAILS_REQUEST });
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.get(`/api/trackOrder/${orderId}/`, config);
      dispatch(apiTrackDetails(data));
    } catch (error) {
      dispatch({
        type: TRACKING_API_DETAILS_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchTrackingDetails;
