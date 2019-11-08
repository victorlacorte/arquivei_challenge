import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'components/Main';
import theme from 'commons/styles/theme';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Arquivei FE Challenge</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
