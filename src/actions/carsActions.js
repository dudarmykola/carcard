import {
  ADD_CAR,
  EDIT_CAR,
  ADD_DETAILS_SUCCESS,
  ADD_DETAILS_ERROR,
  OPEN_ADD_CAR,
  CLOSE_ADD_CAR } from './actionTypes';

export const addCar = (uid, car) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection(uid).add({
      ...car
    }).then(() => {
      dispatch({
        type: ADD_CAR
      });
    }).catch(err => {
      dispatch({
        type: 'ADD_CAR_ERROR',
        err
      });
    });
  };
};

export const addDetails = (uid, carId, newDetails) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection(uid).doc(carId).get().then(doc => {
      if (doc.exists) {
        const prevObj = doc.data();

        if (prevObj.details) {
          firestore.collection(uid).doc(carId).update({
            'details': Object.assign(prevObj.details, newDetails)
          }).then(() => {
            dispatch({
              type: ADD_DETAILS_SUCCESS
            });
          }).catch(err => {
            dispatch({
              type: ADD_DETAILS_ERROR,
              err
            });
          });
        } else {
          firestore.collection(uid).doc(carId).update({
            'details': newDetails
          });
        }
      } else {
        dispatch({
          type: ADD_DETAILS_ERROR,
          err: {
            message: 'No such document!'
          }
        });
      }
    }).catch(err => {
      dispatch({
        type: ADD_DETAILS_ERROR,
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

export const openModal = () => {
  return dispatch => {
    dispatch({
      type: OPEN_ADD_CAR,
      payload: true
    });
  };
};

export const closeModal = () => {
  return dispatch => {
    dispatch({
      type: CLOSE_ADD_CAR,
      payload: false
    });
  };
};

