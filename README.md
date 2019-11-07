# Usage
Don't forget the .env file

# Initial draft
Whenever the user selects a quantity we need to consult an external endpoint
that will return us the following (note that, in addition to consulting this
endpoint, we need to trigger a Redux Form's onChange event with the Field
(Input) quantity):

1) A price with discount

{
  "keyUnitPrice": <number>,
  "total": <number>,
  "discountedTotal": <number>,
  "percentageDiscount": <number>
}

2) A price without discount

{
  "keyUnitPrice": <number>,
  "total": <number>
}

(TODO what happens when it returns nothing at all? Maybe render a snackbar if
that is the case, and if we have time to create this component)

Whenever we receive these values we update our Redux store since these values,
specifically discountedTotal (when present) or originalTotal will be utilized
in the checkout form.

Also, when the user types its CNPJ and credit card info, we need to dispatch
this information, and the order total, to another endpoint.

So we can name a few actions:

* const SET_CONSULT_KEYS
* const CHECK_PRICE
* const COMPLETE_ORDER

Optional, but recommended:

* const IS_LOADING (maybe needs a timeout mechanism)
* const OPEN_SNACKBAR
* const CLOSE_SNACKBAR

# Explain

Project's structure and why index.jsx is an exception

# TODO

* Modal
* CreditCardForm
* CreditCardReducer
* Footer
* SuccessScreen
* Return nav button
* Comprar button is flickering! Should only be enabled when we have an api return

# A note on isomorphic-unfetch
import fetch from 'isomorphic-unfetch';

// https://developer.mozilla.org/en-US/docs/Web/API/Response
function checkStatus(response) {
  const { ok, ...rest } = response;

  if (ok) {
    return rest;
  }

  return Promise.reject(rest);
}

// TODO test
function parseUrlOptions(url, options) {
  const { params, ...otherOptions } = options;
  let constructedUrl = url;

  if (Object.keys(params).length) {
    const urlParams = new URLSearchParams(Object.entries(params));
    constructedUrl += `?${urlParams.toString()}`;
  }

  return [constructedUrl, otherOptions];
}

function customFetch(url, options) {
  const [parsedUrl, parsedOptions] = parseUrlOptions(url, options);

  return fetch(parsedUrl, parsedOptions)
    .then(checkStatus);
}

export default customFetch;

# Consults algorithm
const discounts = [
  {
    max: 1000,
    price: 0.09,
  },
  {
    max: 1000,
    price: 0.16,
  },
  {
    max: Infinity,
    price: 0.24,
  },
];

/**
 *
 * @param {*} numberConsults
 * @param {*} discounts
 */
function price(numberConsults) {
  let total = 0;

  for (let i = 0; i < discounts.length; i += 1) {
    if (numberConsults > discounts[i].max) {
      total += discounts[i].max * discounts[i].price;
      numberConsults -= discounts[i].max;
    } else {
      return total + numberConsults * discounts[i].price;
    }
  }
}

import price from '../consults';

describe('Consult keys discount algorithm', () => {
  it('correctly calculates a purchase price', () => {
    expect(price(0)).toEqual(0);
    expect(price(2)).toEqual(0.18);
    expect(price(1000)).toEqual(90);
    expect(price(1024)).toEqual(93.84);
    expect(price(2500)).toEqual(370);
    expect(price(10000)).toEqual(2170);
  });
});
