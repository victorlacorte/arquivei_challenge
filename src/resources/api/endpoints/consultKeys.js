import Api from '../base';

/**
 * 200 ->
 * {
 *  "keyUnitPrice": value,
 *  "total": value,
 *  "discountedTotal": value,
 *  "percentageDiscount": value
 * }: http://www.mocky.io/v2/5dc59d0f320000abc9769c15
 * 404 -> {}: http://www.mocky.io/v2/5dc2e0da2f000069004be459
 */
function checkConsultKeysPrice(numOfKeys) {
  return Api.request('http://www.mocky.io/v2/5dc59d0f320000abc9769c15', {
    params: {
      keys: numOfKeys,
    },
  });
}

export default {
  checkConsultKeysPrice,
};
