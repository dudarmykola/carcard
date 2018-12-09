import {ADD_CAR, ADD_CAR_ERROR, REMOVE_CAR, EDIT_CAR} from "../actions/actionTypes";

const initialState = {
    car: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAR:
            return state;
        case EDIT_CAR:
            return {
                car: action.payload
            };
        case ADD_CAR_ERROR:
            console.log('added car error', action.err);
            return state;
        case REMOVE_CAR:
            return {
                ...state,
                cars: state.cars.filter(o => o.carId !== action.payload)
            };
        default:
            return state;

    }
}