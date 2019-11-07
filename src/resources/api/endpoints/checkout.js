import Api from '../base';

/**
 * 200 -> {}: http://www.mocky.io/v2/5dc331e42f0000ac044be681
 * 500 -> {}: http://www.mocky.io/v2/5dc331b52f0000aa014be680
 */
function performCheckout(total, userInfo) {
  return Api.request('http://www.mocky.io/v2/5dc1b53233000021091a54f1', {
    method: 'POST',
    data: {
      total,
      ...userInfo,
    },
  });
}

export default {
  performCheckout,
};
