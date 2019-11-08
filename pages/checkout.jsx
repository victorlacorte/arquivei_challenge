import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import withRedux from 'lib/redux';

import Checkout from './Checkout';
import Consult from './consult';

function CheckoutPage(props) {
  const { redirect } = props;

  useEffect(() => {
    if (redirect) {
      Router.replace('/checkout', '/consult', { shallow: true });
    }
  }, [redirect]);

  if (redirect) {
    return <Consult />;
  }

  return <Checkout />;
}

CheckoutPage.propTypes = {
  redirect: PropTypes.bool.isRequired,
};

CheckoutPage.getInitialProps = (ctx) => {
  const { reduxStore } = ctx;
  const consultSlice = reduxStore.getState().consult;

  return { redirect: !consultSlice.keysAmount };
};

export default withRedux(CheckoutPage);
