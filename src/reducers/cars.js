import { ADD_CAR, REMOVE_CAR, SET_CARS } from "../actions/actionTypes";

const initialState = {
    isReady: false,
    cars: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CARS:
            return {
                ...state,
                cars: action.payload,
                isReady: true,
            };
        case ADD_CAR:
            return {
                ...state,
                cars: [
                    ...state.cars,
                    action.payload,
                ]
            };
        case REMOVE_CAR:
            return {
                ...state,
                cars: state.cars.filter(o => o.carId !== action.payload)
            };
        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;

    }
}