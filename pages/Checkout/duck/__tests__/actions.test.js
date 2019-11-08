import actions from '../actions';
import types from '../types';

describe('Checkout actions', () => {
  it('should create an action to request a checkout', () => {
    const expectedAction = {
      type: types.REQUEST_CHECKOUT,
    };

    expect(actions.requestCheckout()).toEqual(expectedAction);
  });

  it('should create an action to receive a checkout success confirmation', () => {
    const expectedAction = {
      type: types.RECEIVE_CHECKOUT_SUCCESS,
    };

    expect(actions.receiveCheckoutSuccess()).toEqual(expectedAction);
  });

  it('should create an action to receive a checkout error', () => {
    const expectedAction = {
      type: types.SET_CHECKOUT_ERROR,
    };

    expect(actions.setCheckoutError()).toEqual(expectedAction);
  });

  it('should create an action to reset the checkout state', () => {
    const expectedAction = {
      type: types.RESET_STATE,
    };

    expect(actions.resetState()).toEqual(expectedAction);
  });
});
