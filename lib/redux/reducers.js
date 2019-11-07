import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import checkoutReducer from 'pages/Checkout/duck';
import consultReducer from 'pages/Consult/duck';

export default combineReducers({
  checkout: checkoutReducer,
  consult: consultReducer,
  form: formReducer,
});
