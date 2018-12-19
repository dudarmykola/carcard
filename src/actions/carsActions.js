import { ADD_CAR, EDIT_CAR, ADD_DETAILS_SUCCESS, ADD_DETAILS_ERROR } from './actionTypes';

export const addCar = (uid, car) => {
  return (dispatch, getState, { getFirestore }) => {
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

export const addDetails = (uid, carId, newDetails) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection(uid).doc(carId).get().then(doc => {
      if (doc.exists) {
        const prevObj = doc.data();
        if (prevObj.details) {
          firestore.collection(uid).doc(carId).update({
            details: Object.assign(prevObj.details, newDetails)
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
          firestore.collection(uid).doc(carId).set({
            details: newDetails
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
