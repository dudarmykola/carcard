import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from '../config/fbConfig';
import { routerMiddleware } from 'react-router-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();

const enhancer = composeEnhancers(
  applyMiddleware(logger, routerMiddleware(history), thunk.withExtraArgument({
    getFirebase,
    getFirestore
  })),
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig, {
    useFirestoreForProfile: true,
    userProfile: 'users',
    attachAuthIsReady: true,
    firebaseStateName: 'firebaseReducer'
  })
);

const store = createStore(rootReducer, enhancer);

export default store;

