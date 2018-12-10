import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import carsReducer from './carsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  authReducer: authReducer,
  carsReducer: carsReducer,
  firestoreReducer: firestoreReducer,
  firebaseReducer: firebaseReducer
});

export default rootReducer;
