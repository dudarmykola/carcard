import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import carsReducer from './carsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    authReducer: authReducer,
    carsReducer: carsReducer,
    firestore: firestoreReducer
});

export default rootReducer;