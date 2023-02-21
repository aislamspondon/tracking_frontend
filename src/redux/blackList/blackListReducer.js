import {
  ADD_BLACKLIST_WORD_FAIL,
  ADD_BLACKLIST_WORD_REQUEST,
  ADD_BLACKLIST_WORD_SUCCESS,
  DELETE_BLACKLIST_WORD_FAIL,
  DELETE_BLACKLIST_WORD_REQUEST,
  DELETE_BLACKLIST_WORD_SUCCESS,
  LIST_BLACKLIST_WORD_FAIL,
  LIST_BLACKLIST_WORD_REQUEST,
  LIST_BLACKLIST_WORD_SUCCESS,
  UPDATE_BLACKLIST_WORD_FAIL,
  UPDATE_BLACKLIST_WORD_REQUEST,
  UPDATE_BLACKLIST_WORD_SUCCESS,
} from "./actionType";

export const addWordsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_BLACKLIST_WORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_BLACKLIST_WORD_SUCCESS:
      return {
        loading: false,
        words: action.payload,
        success: true,
        isError: false,
      };
    case ADD_BLACKLIST_WORD_FAIL:
      return {
        loading: false,
        words: {},
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const wordsListReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_BLACKLIST_WORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_BLACKLIST_WORD_SUCCESS:
      return {
        loading: false,
        words: action.payload,
        success: true,
        isError: false,
      };
    case LIST_BLACKLIST_WORD_FAIL:
      return {
        loading: false,
        words: [],
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const wordsUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BLACKLIST_WORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_BLACKLIST_WORD_SUCCESS:
      return {
        loading: false,
        words: action.payload,
        success: true,
        isError: false,
      };
    case UPDATE_BLACKLIST_WORD_FAIL:
      return {
        loading: false,
        words: {},
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const wordsDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BLACKLIST_WORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BLACKLIST_WORD_SUCCESS:
      return {
        loading: false,
        words: action.payload,
        success: true,
        isError: false,
      };
    case DELETE_BLACKLIST_WORD_FAIL:
      return {
        loading: false,
        words: {},
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
