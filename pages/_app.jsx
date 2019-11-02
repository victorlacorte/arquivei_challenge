import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from 'commons/styles/theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <fragment>
        <Head>
          <title>Arquivei FE Challenge</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          {/* <CssBaseline /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </fragment>
    );
  }
}
