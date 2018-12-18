import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';
import carsReducer from './carsReducer';

const rootReducer = combineReducers({
  authReducer: authReducer,
  carsReducer: carsReducer,
  firestoreReducer: firestoreReducer,
  firebaseReducer: firebaseReducer,
  routing: routerReducer
});

export default rootReducer;
