import {
  ADD_CAR
} from '../actions/actionTypes';

const initialState = {
  isOpen: false
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};

export default carsReducer;

