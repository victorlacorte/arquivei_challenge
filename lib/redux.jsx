// https://github.com/zeit/next.js/blob/canary/examples/with-redux/store.js

import React from 'react';
import PropTypes from 'prop-types';
import App from 'next/app';
import { Provider } from 'react-redux';

import { initializeStore } from '../store';

let reduxStore;

function getOrInitializeStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (typeof window === 'undefined') {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }

  return reduxStore;
}

function withRedux(PageComponent, { ssr = true } = {}) {
  function WithRedux({ initialReduxState, ...props }) {
    const store = getOrInitializeStore(initialReduxState);

    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  }

  WithRedux.propTypes = {
    initialReduxState: PropTypes.oneOfType([PropTypes.object]).isRequired,
  };

  // Make sure people don't use this HOC on _app.js level
  if (process.env.NODE_ENV !== 'production') {
    const isAppHoc = PageComponent === App || PageComponent.prototype instanceof App;

    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents');
    }
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';

    WithRedux.displayName = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async (ctx) => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const store = getOrInitializeStore();

      // Provide the store to getInitialProps of pages
      ctx.reduxStore = store;

      // Run getInitialProps from HOCed PageComponent
      const pageProps = typeof PageComponent.getInitialProps === 'function'
        ? await PageComponent.getInitialProps(ctx)
        : {};

      // Pass props to PageComponent
      return {
        ...pageProps,
        initialReduxState: store.getState(),
      };
    };
  }

  return WithRedux;
}

export default withRedux;
