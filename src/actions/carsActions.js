import { ADD_CAR, EDIT_CAR } from './actionTypes';

export const addCar = (uid, car) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection(uid).add({
      ...car
    }).then(data => {
      dispatch({
        type: ADD_CAR,
        payload: car
      });
    }).catch(err => {
      dispatch({
        type: 'ADD_CAR_ERROR',
        err
      });
    });
  };
};

export const editCar = car => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({
      type: EDIT_CAR,
      payload: car
    });
  };
};
