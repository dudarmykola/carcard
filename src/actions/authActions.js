import { SIGN_IN_ERROR, SIGN_IN_SUCCESS } from './actionTypes';

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
