import {
  ADD_TRACKING_ORDER_FAIL,
  ADD_TRACKING_ORDER_REQUEST,
  ADD_TRACKING_ORDER_SUCCESS,
  DELETE_TRACKING_ORDER_FAIL,
  DELETE_TRACKING_ORDER_REQUEST,
  DELETE_TRACKING_ORDER_SUCCESS,
  TRACKING_API_DETAILS_FAIL,
  TRACKING_API_DETAILS_REQUEST,
  TRACKING_API_DETAILS_SUCCESS,
  TRACKING_API_FAIL,
  TRACKING_API_REQUEST,
  TRACKING_API_SUCCESS,
  UPDATE_TRACKING_ORDER_FAIL,
  UPDATE_TRACKING_ORDER_REQUEST,
  UPDATE_TRACKING_ORDER_SUCCESS,
  VIEW_TRACKING_ORDER_FAIL,
  VIEW_TRACKING_ORDER_REQUEST,
  VIEW_TRACKING_ORDER_SUCCESS,
} from "./actionType";

export const trackingAPIReducer = (state = {}, action) => {
  switch (action.type) {
    case TRACKING_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TRACKING_API_SUCCESS:
      return {
        loading: false,
        trackingAPI: action.payload,
        success: true,
        isError: false,
      };
    case TRACKING_API_FAIL:
      return {
        loading: false,
        trackingAPI: [],
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const trackingAPIDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case TRACKING_API_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TRACKING_API_DETAILS_SUCCESS:
      return {
        loading: false,
        trackingAPI: action.payload,
        success: true,
        isError: false,
      };
    case TRACKING_API_DETAILS_FAIL:
      return {
        loading: false,
        trackingAPI: [],
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const trackingOrderAddReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TRACKING_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TRACKING_ORDER_SUCCESS:
      return {
        loading: false,
        trackOrder: action.payload,
        success: true,
        isError: false,
      };
    case ADD_TRACKING_ORDER_FAIL:
      return {
        loading: false,
        trackOrder: {},
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const trackingOrderViewReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW_TRACKING_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case VIEW_TRACKING_ORDER_SUCCESS:
      return {
        loading: false,
        trackOrder: action.payload,
        success: true,
        isError: false,
      };
    case VIEW_TRACKING_ORDER_FAIL:
      return {
        loading: false,
        trackOrder: [],
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const trackingOrderUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TRACKING_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TRACKING_ORDER_SUCCESS:
      return {
        loading: false,
        trackOrder: action.payload,
        success: true,
        isError: false,
      };
    case UPDATE_TRACKING_ORDER_FAIL:
      return {
        loading: false,
        trackOrder: {},
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const trackingOrderDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TRACKING_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TRACKING_ORDER_SUCCESS:
      return {
        loading: false,
        trackOrder: action.payload,
        success: true,
        isError: false,
      };
    case DELETE_TRACKING_ORDER_FAIL:
      return {
        loading: false,
        trackOrder: {},
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
