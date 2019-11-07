import { connect } from 'react-redux';

import withRedux from 'lib/redux';

import Checkout from './Checkout';
import { checkoutOperations } from './duck';

function mapStateToProps(state) {
  const {
    loading,
    error: checkoutError,
    success: checkoutSuccess,
  } = state.checkout;

  const {
    keysAmount,
    consultKeysInfo: {
      keyUnitPrice,
      total,
      discountedTotal,
      percentageDiscount,
    },
  } = state.consult;

  return {
    loading,
    checkoutError,
    checkoutSuccess,
    keysAmount,
    keyUnitPrice,
    total,
    discountedTotal,
    percentageDiscount,
  };
}

function mapDispatchToProps(dispatch) {
  function checkout(total, userInfo) {
    checkoutOperations.checkout(dispatch, total, userInfo);
  }

  function resetCheckout() {
    checkoutOperations.resetCheckout(dispatch);
  }

  return {
    checkout,
    resetCheckout,
  };
}

const CheckoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout);

export default withRedux(CheckoutContainer);
