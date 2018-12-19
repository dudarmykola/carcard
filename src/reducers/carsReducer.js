import { ADD_CAR, ADD_DETAILS_ERROR, ADD_DETAILS_SUCCESS } from '../actions/actionTypes';

const initialState = {
  isOpen: false,
  addDetailsError: null
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR:
      return {
        ...state,
        isOpen: false
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
    default:
      return state;
  }
};

export default carsReducer;

