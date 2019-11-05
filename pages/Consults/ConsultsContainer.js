import { connect } from 'react-redux';

import withRedux from 'lib/redux';

import Consults from './Consults';
import { consultOperations } from './duck';

function mapStateToProps(state) {
  const {
    consultKeys,
    consultKeysInfo: {
      keyUnitPrice,
      total,
      discountedTotal,
      percentageDiscount,
    },
  } = state.consult;
  // const { keyUnitPrice, total, discountedTotal, percentageDiscount } = state.consultKeysInfo;

  return {
    consultKeys,
    keyUnitPrice,
    total,
    discountedTotal,
    percentageDiscount,
  };
}

// function mapDispatchToProps(dispatch) {
//   function setConsultKeys(amount) {
//     operations.setConsultKeys(dispatch, amount);
//   }

//   // TODO this should also carry user info
//   function checkPrice(amount) {
//     operations.checkPrice(dispatch, amount);
//   }

//   function completeOrder(amount, total, userInfo) {
//     operations.completeOrder(dispatch, amount, total, userInfo);
//   }

//   return {
//     setConsultKeys,
//     checkPrice,
//     completeOrder,
//   };
// }

const ConsultsContainer = connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Consults);

export default withRedux(ConsultsContainer);
