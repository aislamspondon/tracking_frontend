import {
  ADD_BLACKLIST_WORD_SUCCESS,
  DELETE_BLACKLIST_WORD_SUCCESS,
  LIST_BLACKLIST_WORD_SUCCESS,
  UPDATE_BLACKLIST_WORD_SUCCESS,
} from "./actionType";

export const addWords = (data) => {
  return {
    type: ADD_BLACKLIST_WORD_SUCCESS,
    payload: data,
  };
};

export const listWords = (data) => {
  return {
    type: LIST_BLACKLIST_WORD_SUCCESS,
    payload: data,
  };
};

export const updateWords = (data) => {
  return {
    type: UPDATE_BLACKLIST_WORD_SUCCESS,
    payload: data,
  };
};

export const deleteWords = (data) => {
  return {
    type: DELETE_BLACKLIST_WORD_SUCCESS,
    payload: data,
  };
};
