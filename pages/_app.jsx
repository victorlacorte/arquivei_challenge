import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import theme from 'commons/styles/theme';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <fragment>
        <Head>
          <title>Arquivei FE Challenge</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </fragment>
    );
  }
}

export default MyApp;
