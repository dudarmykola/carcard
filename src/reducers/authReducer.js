import {
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR } from '../actions/actionTypes';

const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        authError: action.err.message
      };
    case SIGN_OUT_SUCCESS:
      return state;
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};
export default authReducer;

