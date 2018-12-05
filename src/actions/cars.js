import {SET_CARS} from "./actionTypes";

export const setCars = cars => ({
    type: SET_CARS,
    payload: cars
});