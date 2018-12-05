import { combineReducers } from 'redux';

import carsReducer from './cars';

const rootReducer = combineReducers({
    carsReducer
});

export default rootReducer;