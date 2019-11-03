import React, { useEffect } from 'react';
import Router from 'next/router';

import Consults from './consults';

// Our index simply redirects to the /consults page, where all action will happen.
function Index() {
  useEffect(() => {
    Router.replace('/index', '/consults', { shallow: true });
  }, []);

  return <Consults />;
}

export default Index;
