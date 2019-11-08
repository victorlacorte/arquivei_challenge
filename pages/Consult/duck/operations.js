import Api from 'resources/api';

import creators from './actions';

const {
  requestConsultInfo,
  receiveConsultInfo,
  resetState,
  setInvalidConsultInfo,
} = creators;

function fetchConsultInfo(dispatch, numOfKeys, defaultInfo) {
  dispatch(requestConsultInfo(numOfKeys));

  return Api.consultKeys.checkConsultKeysPrice(numOfKeys)
    .then((resp) => {
      dispatch(receiveConsultInfo(resp.data));
    })
    .catch(() => {
      dispatch(setInvalidConsultInfo(defaultInfo));
    });
}

function resetConsult(dispatch) {
  dispatch(resetState());
}

export default {
  fetchConsultInfo,
  resetConsult,
};
