import Api from 'resources/api';

import creators from './actions';

const {
  receiveCheckoutSuccess,
  requestCheckout,
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

export default {
  checkout,
};
