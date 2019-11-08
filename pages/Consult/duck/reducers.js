import types from './types';

const INITIAL_STATE = {
  keysAmount: 0,
  consultKeysInfo: {
    keyUnitPrice: 0,
    total: 0,
  },
  loading: false,
  error: false,
};

function consultReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REQUEST_CONSULT_INFO: {
      return {
        ...state,
        keysAmount: Number(action.keysAmount),
        loading: true,
      };
    }

    case types.RECEIVE_CONSULT_INFO: {
      return {
        ...state,
        consultKeysInfo: action.info,
        loading: false,
        error: false,
      };
    }

    case types.RESET_STATE: {
      return INITIAL_STATE;
    }

    case types.SET_INVALID_CONSULT_INFO: {
      return {
        ...state,
        consultKeysInfo: action.info,
        loading: false,
        error: true,
      };
    }

    default: return state;
  }
}

export default consultReducer;
