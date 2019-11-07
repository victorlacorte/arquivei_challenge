import Api from '../base';

/**
 * 200 -> <expected>: http://www.mocky.io/v2/5dc1b53233000021091a54f1
 * 404 -> {}: http://www.mocky.io/v2/5dc2e0da2f000069004be459
 */
function checkConsultKeysPrice(numOfKeys) {
  return Api.request('http://www.mocky.io/v2/5dc1b53233000021091a54f1', {
    params: {
      keys: numOfKeys,
    },
  });
}

export default {
  checkConsultKeysPrice,
};
