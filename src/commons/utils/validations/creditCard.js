/**
* Transform the input into a pretty mm/aa date format and limit its length to 4 (numeric) characters
*
* Example:
* ```
* format('0123');
* // Result: '01/23'
* ```
*
* @param {string} value the expiration date value.
* @returns {string} the formatted expiration date.
*/
function normalizeExpirationDate(value) {
  if (!value) {
    return value;
  }

  const onlyNums = value.toString().replace(/[^\d]/g, '');

  if (onlyNums.length < 3) {
    return onlyNums;
  }

  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}`;
}

function normalizeCVV(value) {
  if (!value) {
    return value;
  }

  const onlyNums = value.toString().replace(/[^\d]/g, '');

  return onlyNums.toString().slice(0, 4);
}

export default {
  normalizeCVV,
  normalizeExpirationDate,
};
