import fetch from 'isomorphic-unfetch';

import creators from './actions';

/**
 * TODO we should have a resources folder where we override/provide request handlers and URLs
 * https://github.com/developit/unfetch
 */

const {
  requestConsultKeysJson,
  receiveConsultKeysJson,
  setConsultKeys,
} = creators;

function fetchConsultKeysJson(dispatch, amount) {
  dispatch(requestConsultKeysJson(amount));

  return fetch('http://www.mocky.io/v2/5dc1b53233000021091a54f1')
    .then((resp) => resp.json())
    .then((json) => {
      dispatch(receiveConsultKeysJson(json));
    });
}

export default {
  setConsultKeys,
  fetchConsultKeysJson,
};
