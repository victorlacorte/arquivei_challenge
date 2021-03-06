import types from './types';

function requestCheckout() {
  return {
    type: types.REQUEST_CHECKOUT,
  };
}

function receiveCheckoutSuccess() {
  return {
    type: types.RECEIVE_CHECKOUT_SUCCESS,
  };
}

function setCheckoutError() {
  return {
    type: types.SET_CHECKOUT_ERROR,
  };
}

function resetState() {
  return {
    type: types.RESET_CHECKOUT_STATE,
  };
}

export default {
  requestCheckout,
  receiveCheckoutSuccess,
  setCheckoutError,
  resetState,
};
