/**
* Transform the input into a pretty CNPJ format and limit its length to 14 (numeric) characters
*
* Example:
* ```
* format('54550752000155');
* // Result: '54.550.752/0001-55'
* ```
*
* @param {string} value the CNPJ value.
* @returns {string} the formatted CNPJ.
*/
function normalizeCNPJ(value) {
  if (!value) {
    return value;
  }

  const onlyNums = value.toString().replace(/[^\d]/g, '');

  if (onlyNums.length < 3) {
    return onlyNums;
  }

  if (onlyNums.length < 6) {
    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2)}`;
  }

  if (onlyNums.length < 9) {
    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(5)}`;
  }

  if (onlyNums.length < 13) {
    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(5, 8)}/${onlyNums.slice(8)}`;
  }

  return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(5, 8)}/${onlyNums.slice(8, 12)}-${onlyNums.slice(12, 14)}`;
}

export default {
  normalizeCNPJ,
};
