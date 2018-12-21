import {
  ADD_CAR,
  ADD_DETAILS_ERROR,
  ADD_DETAILS_SUCCESS,
  OPEN_ADD_CAR,
  CLOSE_ADD_CAR
} from '../actions/actionTypes';

const initialState = {
  open: false,
  addDetailsError: null
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR:
      return {
        ...state,
        open: false
      };
    case ADD_DETAILS_SUCCESS:
      return {
        ...state,
        addDetailsError: null
      };
    case ADD_DETAILS_ERROR:
      return {
        ...state,
        addDetailsError: action.err.message
      };
    case OPEN_ADD_CAR:
      return {
        ...state,
        open: action.payload
      };
    case CLOSE_ADD_CAR:
      return {
        ...state,
        open: action.payload
      };
    default:
      return state;
  }
};

export default carsReducer;

