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
* @param {boolean} [isStrict] if `true`, it will accept only `digits`, `.` and `-` characters. Optional.
* @returns {boolean} `true` if CNPJ is valid. Otherwise, `false`.
*/
function isValidCnpj(cnpj, isStrict) { // eslint-disable-line complexity
  const stripped = strip(cnpj, isStrict);

  // CNPJ must be defined
  if (!stripped) { return false; }

  // CNPJ must have 14 chars
  if (stripped.length !== 14) { return false; }

  // CNPJ can't be blacklisted
  if (BLACKLIST.includes(stripped)) { return false; }

  let numbers = stripped.substr(0, 12);
  numbers += verifierDigit(numbers);
  numbers += verifierDigit(numbers);

  return numbers.substr(-2) === stripped.substr(-2);
}

export default {
  format,
  isValidCnpj,
  strip,
  verifierDigit,
};
