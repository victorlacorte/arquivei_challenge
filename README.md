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

General form philosophy: no maxLength, normalize to achieve this result

# TODO

* Modal
* CreditCardForm
* CreditCardReducer
* Footer
* SuccessScreen
* Return nav button
* Provavelmente retirar o código de validação de CNPJ do front
* Não consigo desabilitar o overflow do body quando a modal é aberta :(
* Modal de erros!
* Padronizar os components (styles, etc)

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

# CNPJ validations
// Blacklist common values.
const BLACKLIST = [
  '0'.repeat(14),
  '1'.repeat(14),
  '2'.repeat(14),
  '3'.repeat(14),
  '4'.repeat(14),
  '5'.repeat(14),
  '6'.repeat(14),
  '7'.repeat(14),
  '8'.repeat(14),
  '9'.repeat(14),
];

const STRICT_STRIP_REGEX = /[-/.]/g;
const LOOSE_STRIP_REGEX = /[^\d]/g;

/**
* Compute the CNPJ's Verifier Digit (or "Dígito Verificador (DV)" in portuguese).
*
* More info on [wikipedia (pt-br)](https://pt.wikipedia.org/wiki/D%C3%ADgito_verificador)
*
* @param {string} numbers the CNPJ string with only numbers.
* @returns {number} the verifier digit.
*/
function verifierDigit(numbers) {
  let index = 2;
  const reverse = numbers.split('').reduce((buffer, number) => [parseInt(number, 10)].concat(buffer), []);

  const sum = reverse.reduce((buffer, number) => {
    const newBuffer = buffer + number * index;

    index = (index === 9 ? 2 : index + 1);

    return newBuffer;
  }, 0);

  const mod = sum % 11;

  return (mod < 2 ? 0 : 11 - mod);
}

/**
* Remove some characters from the input.
*
* Example:
* ```
* strip('54550[752#0001..$55'); // Result: '54550752000155'
* strip('54550[752#0001..$55', true); // Result: '54550[752#0001..$55' - Atention!
* ```
*
* @param {string} cnpj the CNPJ text.
* @param {boolean} [isStrict] if `true`, it will remove only `.` and `-` characters.
* Otherwise, it will remove all non-digit (`[^\d]`) characters. Optional.
* @returns {string} the stripped CNPJ.
*/
function strip(cnpj, isStrict) {
  const regex = isStrict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;

  return (cnpj || '').toString().replace(regex, '');
}

/**
* Transform the input into a pretty CNPJ format.
*
* Example:
* ```
* format('54550752000155');
* // Result: '54.550.752/0001-55'
* ```
*
* @param {string} cnpj the CNPJ.
* @returns {string} the formatted CNPJ.
*/
function format(cnpj) {
  return strip(cnpj).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
}

/**
* Validate the CNPJ.
*
* @param {string} cnpj the CNPJ number.
* @param {boolean} [isStrict] if `true`, it will accept only `digits`, `.` and
* `-` characters. Optional.
* @returns {boolean} `true` if CNPJ is valid. Otherwise, `false`.
*/
function isValidCnpj(cnpj, isStrict) { // eslint-disable-line complexity
  const stripped = strip(cnpj, isStrict);

  // CNPJ must be defined
  if (!stripped) { return false; }

  // CNPJ must have 14 chars
  if (stripped.length !== 14) { return false; }

  // CNPJ can't be blacklisted
  if (BLACKLIST.includes(stripped)) { rcnpj

  let numbers = stripped.substr(0, 12);cnpj
  numbers += verifierDigit(numbers);
  numbers += verifierDigit(numbers);

  return numbers.substr(-2) === stripped.substr(-2);
}

// cnpj.test.js
it('blacklists common numbers', () => {
    expect(cnpj.isValidCnpj('00000000000000')).toBe(false);
    expect(cnpj.isValidCnpj('11111111111111')).toBe(false);
    expect(cnpj.isValidCnpj('22222222222222')).toBe(false);
    expect(cnpj.isValidCnpj('33333333333333')).toBe(false);
    expect(cnpj.isValidCnpj('44444444444444')).toBe(false);
    expect(cnpj.isValidCnpj('55555555555555')).toBe(false);
    expect(cnpj.isValidCnpj('66666666666666')).toBe(false);
    expect(cnpj.isValidCnpj('77777777777777')).toBe(false);
    expect(cnpj.isValidCnpj('88888888888888')).toBe(false);
    expect(cnpj.isValidCnpj('99999999999999')).toBe(false);
  });

  it('rejects falsy values', () => {
    expect(cnpj.isValidCnpj('')).toBe(false);
    expect(cnpj.isValidCnpj(null)).toBe(false);
    expect(cnpj.isValidCnpj(undefined)).toBe(false);
  });

  it('validates formatted strings', () => {
    expect(cnpj.isValidCnpj('54.550.752/0001-55')).toBe(true);
  });

  it('validates unformatted strings', () => {
    expect(cnpj.isValidCnpj('54550752000155')).toBe(true);
  });

  it('validates messed strings', () => {
    expect(cnpj.isValidCnpj('54550[752#0001..$55')).toBe(true);
  });

  it('strictly validates strings', () => {
    expect(cnpj.isValidCnpj('54550[752#0001..$55', true)).toBe(false);
    expect(cnpj.isValidCnpj('54.550.752/0001-55', true)).toBe(true);
    expect(cnpj.isValidCnpj('54550752000155', true)).toBe(true);
  });

  it('returns stripped number', () => {
    const number = cnpj.strip('54550[752#0001..$55');

    expect(number).toBe('54550752000155');
  });

  it('returns formatted number', () => {
    const number = cnpj.format('54550752000155');

    expect(number).toBe('54.550.752/0001-55');
  });
