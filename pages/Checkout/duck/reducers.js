import types from './types';

const INITIAL_STATE = {
  loading: false,
  error: false,
  success: false,
};

function checkoutReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.RECEIVE_CHECKOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
      };
    }

    case types.REQUEST_CHECKOUT: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.RESET_STATE: {
      return INITIAL_STATE;
    }

    case types.SET_CHECKOUT_ERROR: {
      return {
        ...state,
        error: true,
      };
    }

    default: return state;
  }
}

export default checkoutReducer;
