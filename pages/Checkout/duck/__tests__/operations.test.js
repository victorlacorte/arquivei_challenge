import configureStore from 'redux-mock-store';

import Api from 'resources/api';

import operations from '../operations';
import types from '../types';

const mockStore = configureStore([]);

describe('Checkout operations', () => {
  it('creates RECEIVE_CHECKOUT_SUCCESS when a checkout is performed', () => {
    jest.spyOn(Api.checkout, 'performCheckout').mockImplementation(() => Promise.resolve());

    const expectedActions = [
      { type: types.REQUEST_CHECKOUT },
      { type: types.RECEIVE_CHECKOUT_SUCCESS },
    ];

    const store = mockStore();

    return operations.checkout(store.dispatch)
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates SET_CHECKOUT_ERROR when a checkout receives an error', () => {
    jest.spyOn(Api.checkout, 'performCheckout').mockImplementation(() => Promise.reject());

    const expectedActions = [
      { type: types.REQUEST_CHECKOUT },
      { type: types.SET_CHECKOUT_ERROR },
    ];

    const store = mockStore();

    return operations.checkout(store.dispatch)
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates RESET_STATE when the checkout needs a reset', () => {
    const expectedActions = [
      { type: types.RESET_STATE },
    ];

    const store = mockStore();

    operations.resetCheckout(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });
});
