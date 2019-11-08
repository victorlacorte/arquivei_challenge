import checkoutReducer, { INITIAL_STATE } from '../reducers';
import types from '../types';

describe('Checkout reducer', () => {
  it('should return the initial state', () => {
    expect(checkoutReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle REQUEST_CHECKOUT', () => {
    expect(checkoutReducer([], {
      type: types.REQUEST_CHECKOUT,
    }))
      .toEqual({ loading: true });
  });
});
