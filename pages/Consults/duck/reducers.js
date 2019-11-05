import types from './types';

const INITIAL_STATE = {
  consultKeys: 0,
  consultKeysInfo: {
    keyUnitPrice: 0,
    total: 0,
  },
  loading: false,
};

function consultReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_CONSULT_KEYS: {
      return {
        ...state,
        consultKeys: action.consultKeys,
      };
    }

    // TODO notice we didn't include any action parameter here
    case types.REQUEST_CONSULT_KEYS_PRICE: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.RECEIVE_CONSULT_KEYS_PRICE: {
      return {
        ...state,
        consultKeysInfo: action.consultKeysInfo,
        loading: false,
      };
    }

    default: return state;
  }
}

export default consultReducer;
