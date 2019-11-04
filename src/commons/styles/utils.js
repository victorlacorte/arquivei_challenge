import { css } from 'styled-components';

const down = (breakpoint, theme) => (...args) => css`
    @media (max-width: ${theme.breakpoints[breakpoint]}px) {
      ${css(...args)}
    }
`;

const up = (breakpoint, theme) => (...args) => css`
    @media (min-width: ${theme.breakpoints[breakpoint]}px) {
      ${css(...args)}
    }
`;

export {
  down,
  up,
};
