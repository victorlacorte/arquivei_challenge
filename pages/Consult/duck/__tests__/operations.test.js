import configureStore from 'redux-mock-store';

import Api from 'resources/api';

import operations from '../operations';
import types from '../types';

const mockStore = configureStore([]);

describe('Consult operations', () => {
  it('creates RECEIVE_CONSULT_INFO when a consult is performed', () => {
    const info = { foo: 'bar' };

    jest.spyOn(Api.consultKeys, 'checkConsultKeysPrice').mockImplementation(() => Promise.resolve({ data: info }));

    const expectedActions = [
      {
        keysAmount: 200,
        type: types.REQUEST_CONSULT_INFO,
      },
      {
        info,
        type: types.RECEIVE_CONSULT_INFO,
      },
    ];

    const store = mockStore();

    return operations.fetchConsultInfo(store.dispatch, 200, {})
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates SET_INVALID_CONSULT_INFO when a consult receives an error', () => {
    const info = { foo: 'bar' };

    jest.spyOn(Api.consultKeys, 'checkConsultKeysPrice').mockImplementation(() => Promise.reject(info));

    const expectedActions = [
      {
        keysAmount: 200,
        type: types.REQUEST_CONSULT_INFO,
      },
      {
        info,
        type: types.SET_INVALID_CONSULT_INFO,
      },
    ];

    const store = mockStore();

    return operations.fetchConsultInfo(store.dispatch, 200, info)
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates RESET_STATE when the consult needs a reset', () => {
    const expectedActions = [
      { type: types.RESET_STATE },
    ];

    const store = mockStore();

    operations.resetConsult(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });
});
