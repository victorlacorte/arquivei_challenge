import { connect } from 'react-redux';

import withRedux from 'lib/redux';

import Consult from './Consult';
import { consultOperations } from './duck';

function mapStateToProps(state) {
  const {
    consultKeysInfo: {
      keyUnitPrice,
      total,
      discountedTotal,
      percentageDiscount,
    },
    loading,
    error: consultError,
  } = state.consult;

  return {
    keyUnitPrice,
    total,
    discountedTotal,
    percentageDiscount,
    loading,
    consultError,
  };
}

function mapDispatchToProps(dispatch) {
  function fetchConsultInfo(amount, defaultInfo) {
    consultOperations.fetchConsultInfo(dispatch, amount, defaultInfo);
  }

  return {
    fetchConsultInfo,
  };
}

const ConsultContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Consult);

export default withRedux(ConsultContainer);
