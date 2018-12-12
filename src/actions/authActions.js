import {
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR
} from './actionTypes';

export const signIn = credentials => {
  return (dispatch, getSate, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({
        type: SIGN_IN_SUCCESS
      });
    }).catch(err => {
      dispatch({
        type: SIGN_IN_ERROR, err
      });
    });
  };
};

export const signOut = () => {
  return (dispatch, getSate, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({
        type: SIGN_OUT_SUCCESS
      });
    });
  };
};

export const signUp = credentials => {
  return (dispatch, getSate, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(response => {
      return firestore.collection('users').doc(response.user.uid).set({
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        initials: credentials.firstName[0] + credentials.lastName[0]
      });
    }).then(() => {
      dispatch({
        type: SIGN_UP_SUCCESS
      });
    }).catch(err => {
      dispatch({
        type: SIGN_UP_ERROR,
        err
      });
    });
  };
};
