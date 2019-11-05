import { connect } from 'react-redux';
import Consults from './Consults';

import { operations } from './duck';

function mapStateToProps(state) {
  const {
    amount,
    keyUnitPrice,
    originalTotal,
    discountedTotal,
    percentageDiscount,
  } = state.consults;

  return {
    amount,
    keyUnitPrice,
    originalTotal,
    discountedTotal,
    percentageDiscount,
  };
}

function mapDispatchToProps(dispatch) {
  function setConsultKeys(amount) {
    operations.setConsultKeys(dispatch, amount);
  }

  // TODO this should also carry user info
  function checkPrice(amount) {
    operations.checkPrice(dispatch, amount);
  }

  function completeOrder(amount, total, userInfo) {
    operations.completeOrder(dispatch, amount, total, userInfo);
  }

  return {
    setConsultKeys,
    checkPrice,
    completeOrder,
  };
}

const ConsultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Consults);

export default ConsultsContainer;
