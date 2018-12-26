import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from '../config/fbConfig';
import { routerMiddleware } from 'react-router-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory({
  basename: process.env.PUBLIC_URL
});

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}
middlewares.push(routerMiddleware(history), thunk.withExtraArgument({
  getFirebase,
  getFirestore
}));

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig, {
    useFirestoreForProfile: true,
    userProfile: 'users',
    attachAuthIsReady: true,
    firebaseStateName: 'firebaseReducer'
  })
);

export const store = createStore(rootReducer, enhancer);

