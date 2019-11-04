import { down, up } from '../utils';

describe('Testing theme utils', () => {
  const theme = {
    breakpoints: {
      sm: 100,
      lg: 200,
    },
  };

  it('Correctly shortcuts a max-width media query', () => {
    const expected = '@media (max-width:,100,px){,}';

    expect(`${down('sm', theme)``}`).toEqual(expected);
  });

  it('Correctly shortcuts a min-width media query with additional styles', () => {
    const expected = '@media (min-width:,200,px){,display: none;,}';

    expect(`${up('lg', theme)`display: none;`}`).toEqual(expected);
  });
});
