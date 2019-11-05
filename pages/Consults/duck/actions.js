import types from './types';

function requestConsultKeysJson(consultKeys) {
  return {
    type: types.REQUEST_CONSULT_KEYS_JSON,
    consultKeys,
  };
}

function receiveConsultKeysJson(consultKeysInfo) {
  return {
    type: types.REQUEST_CONSULT_KEYS_JSON,
    consultKeysInfo,
  };
}

function setConsultKeys(consultKeys) {
  return {
    type: types.SET_CONSULT_KEYS,
    consultKeys,
  };
}


export default {
  requestConsultKeysJson,
  receiveConsultKeysJson,
  setConsultKeys,
};
