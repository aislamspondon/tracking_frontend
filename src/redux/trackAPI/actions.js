import {
  ADD_TRACKING_ORDER_SUCCESS,
  DELETE_TRACKING_ORDER_SUCCESS,
  TRACKING_API_DETAILS_SUCCESS,
  TRACKING_API_SUCCESS,
  UPDATE_TRACKING_ORDER_SUCCESS,
  VIEW_TRACKING_ORDER_SUCCESS,
} from "./actionType";

export const apiTrack = (data) => {
  return {
    type: TRACKING_API_SUCCESS,
    payload: data,
  };
};
export const apiTrackDetails = (data) => {
  return {
    type: TRACKING_API_DETAILS_SUCCESS,
    payload: data,
  };
};

export const addTrackOrder = (data) => {
  return {
    type: ADD_TRACKING_ORDER_SUCCESS,
    payload: data,
  };
};

export const viewrackOrder = (data) => {
  return {
    type: VIEW_TRACKING_ORDER_SUCCESS,
    payload: data,
  };
};

export const updateTrackOrder = (data) => {
  return {
    type: UPDATE_TRACKING_ORDER_SUCCESS,
    payload: data,
  };
};

export const deleteTrackOrder = (data) => {
  return {
    type: DELETE_TRACKING_ORDER_SUCCESS,
    payload: data,
  };
};
