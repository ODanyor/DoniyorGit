import { SET_MESSAGE, SET_ERRORS, LOADING } from "../types";

const initialState = {
  message: null,
  errors: null,
  loading: false
};

export const clientReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
        loading: false
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
