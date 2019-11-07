import types from './types';

function requestConsultInfo(keysAmount) {
  return {
    type: types.REQUEST_CONSULT_INFO,
    keysAmount,
  };
}

function receiveConsultInfo(info) {
  return {
    type: types.RECEIVE_CONSULT_INFO,
    info,
  };
}

function setInvalidConsultInfo(info) {
  return {
    type: types.SET_INVALID_CONSULT_INFO,
    info,
  };
}

export default {
  requestConsultInfo,
  receiveConsultInfo,
  setInvalidConsultInfo,
};
