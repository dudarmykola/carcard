import { SIGN_IN_ERROR, SIGN_IN_SUCCESS } from '../actions/actionTypes';
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
        authError: 'Login failed'
      };
    default:
      return state;
  }
};
export default authReducer;

