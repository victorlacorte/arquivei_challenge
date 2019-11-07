import React, { useEffect } from 'react';
import Router from 'next/router';

import Consult from './consult';

// Our index simply redirects to the /consults page, where the initial action will happen.
function Index() {
  useEffect(() => {
    Router.replace('/index', '/consult', { shallow: true });
  }, []);

  return <Consult />;
}

export default Index;
