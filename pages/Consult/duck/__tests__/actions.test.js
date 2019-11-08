import actions from '../actions';
import types from '../types';

describe('Consult actions', () => {
  it('should create an action to request a consult', () => {
    const numKeys = 1000;

    const expectedAction = {
      keysAmount: numKeys,
      type: types.REQUEST_CONSULT_INFO,
    };

    expect(actions.requestConsultInfo(1000)).toEqual(expectedAction);
  });

  it('should create an action to receive a consult information', () => {
    const info = { foo: 'bar' };

    const expectedAction = {
      info,
      type: types.RECEIVE_CONSULT_INFO,
    };

    expect(actions.receiveConsultInfo(info)).toEqual(expectedAction);
  });

  it('should create an action to set an invalid consult info', () => {
    const info = { foo: 42 };

    const expectedAction = {
      info,
      type: types.SET_INVALID_CONSULT_INFO,
    };

    expect(actions.setInvalidConsultInfo(info)).toEqual(expectedAction);
  });

  it('should create an action to reset the consult state', () => {
    const expectedAction = {
      type: types.RESET_STATE,
    };

    expect(actions.resetState()).toEqual(expectedAction);
  });
});
