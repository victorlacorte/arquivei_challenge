import { down, up } from './utils';

const Roboto = 'Roboto, sans-serif';
const Rubik = 'Rubik, sans-serif';

// https://material.io/resources/color/#!/?view.left=0&view.right=1
const baseTheme = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 960,
    xl: 960,
  },
  palette: {
    primary: {
      light: '#4076fa30',
      main: '#4076fa',
      dark: '#004bc6',
    },
    success: {
      light: '#00d23330',
      main: '#00d233',
      dark: '#009f00',
    },
    error: {
      light: '#f1502530',
      main: '#f15025',
      dark: '#b71300',
    },
    alert: {
      light: '#e8c54730',
      main: '#e8c547',
      dark: '#b2950b',
    },
    dark: {
      light: '#00163430',
      main: '#001634',
      dark: '#00000f',
    },
    extraDark: {
      light: '#09122330',
      main: '#091223',
      dark: '#0000002',
    },
    grey100: {
      light: '#f5f5f530',
      main: '#f5f5f5',
      dark: '#c2c2c2',
    },
    grey200: {
      light: '#eeeeee30',
      main: '#eeeeee',
      dark: '#bcbcbc',
    },
    grey300: {
      light: '#e0e0e030',
      main: '#e0e0e0',
      dark: '#aeaeae',
    },
    grey400: {
      light: '#bdbdbd30',
      main: '#bdbdbd',
      dark: '#8d8d8d',
    },
  },
  typography: {
    fontFamily: {
      Roboto,
      Rubik,
    },
    h1: {
      fontFamily: Rubik,
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 1,
    },
    h2: {
      fontFamily: Rubik,
      fontWeight: 700,
      fontSize: 22,
      lineHeight: 1,
    },
    body1: {
      fontFamily: Rubik,
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1,
    },
    body2: {
      fontFamily: Roboto,
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1,
    },
    button: {
      fontFamily: Roboto,
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1.75,
      textTransform: 'uppercase',
    },
    link: {
      fontFamily: Roboto,
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1,
    },
  },
  zIndex: {
    header: 1000,
  },
};

const theme = {
  ...baseTheme,

  breakpoints: {
    ...baseTheme.breakpoints,
    down: (breakpoint) => down(breakpoint, baseTheme),
    up: (breakpoint) => up(breakpoint, baseTheme),
  },
};

export default theme;
