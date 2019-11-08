/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount, shallow } from 'enzyme';

import defaultTheme from 'commons/styles/theme';

function mountWithTheme(child) {
  return mount(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={defaultTheme}>
        {children}
      </ThemeProvider>
    ),
  });
}

function shallowWithTheme(child) {
  return shallow(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={defaultTheme}>
        {children}
      </ThemeProvider>
    ),
  });
}

export {
  mountWithTheme,
  shallowWithTheme,
};
