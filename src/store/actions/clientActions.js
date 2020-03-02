import axios from "axios";
import { SET_MESSAGE, SET_ERRORS, LOADING } from "../types";

export const sendContacts = data => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post("/", data)
    .then(res => {
      dispatch({
        type: SET_MESSAGE,
        payload: res.data.message
      });
      dispatch({
        type: SET_ERRORS,
        payload: null
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.errors
      });
    });
};

export const messageToNull = () => dispatch => {
  dispatch({
    type: SET_MESSAGE,
    payload: null
  });
};
