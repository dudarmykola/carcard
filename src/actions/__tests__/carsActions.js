import * as actions from '../../actions/carsActions';
import * as types from '../../actions/ActionTypes';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('select_actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('close modal', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'type': types.CLOSE_ADD_CAR,
          'payload': false
        }
      ];

      store.dispatch(actions.closeModal());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('open modal', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'type': types.OPEN_ADD_CAR,
          'payload': true
        }
      ];

      store.dispatch(actions.openModal());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
