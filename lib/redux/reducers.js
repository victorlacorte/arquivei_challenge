import { combineReducers } from 'redux';

import consultReducer from 'pages/Consults/duck';

const rootReducer = combineReducers({
  consult: consultReducer,
});

export default rootReducer;
