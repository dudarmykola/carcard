import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  authReducer: authReducer,
  firestoreReducer: firestoreReducer,
  firebaseReducer: firebaseReducer,
  routing: routerReducer
});

export default rootReducer;
