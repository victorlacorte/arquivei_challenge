import Api from 'resources/api';

import creators from './actions';

const {
  receiveCheckoutSuccess,
  requestCheckout,
  resetState,
  setCheckoutError,
} = creators;

function checkout(dispatch, total, userInfo) {
  dispatch(requestCheckout());

  return Api.checkout.performCheckout(total, userInfo)
    .then(() => {
      dispatch(receiveCheckoutSuccess());
    })
    .catch(() => {
      dispatch(setCheckoutError());
    });
}

function resetCheckout(dispatch) {
  dispatch(resetState());
}

export default {
  checkout,
  resetCheckout,
};
