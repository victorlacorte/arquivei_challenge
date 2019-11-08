import checkoutReducer, { INITIAL_STATE } from '../reducers';
import types from '../types';

describe('Consult reducer', () => {
  it('should return the initial state', () => {
    expect(checkoutReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle REQUEST_CONSULT_INFO', () => {
    expect(checkoutReducer([], {
      type: types.REQUEST_CONSULT_INFO,
      keysAmount: '200',
    }))
      .toEqual({
        loading: true,
        keysAmount: 200,
      });
  });
});
