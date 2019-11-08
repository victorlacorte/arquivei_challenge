// TODO sanitize these functions and remove unnecessary ones

function required(value) {
  if (value) {
    return undefined;
  }

  return 'Obrigatório';
}

function minLength(min) {
  return function validate(value) {
    if (value && value.length < min) {
      return `São necessários no mínimo ${min} caracteres`;
    }

    return undefined;
  };
}

// Meant to be applied to values with "mask" characters
function minNumLength(min) {
  return function validate(value) {
    const onlyNums = value.toString().replace(/[^\d]/g, '');

    if (onlyNums && onlyNums.toString().length < min) {
      return `São necessários no mínimo ${min} caracteres`;
    }

    return undefined;
  };
}

function minValue(min) {
  return function validate(value) {
    if (value && value < min) {
      return `Deve ser no mínimo ${min}`;
    }

    return undefined;
  };
}

function normalizeAsNumber(value) {
  if (!value) {
    return value;
  }

  const onlyNums = value.toString().replace(/[^\d]/g, '');

  return onlyNums;
}

export default {
  minLength,
  minNumLength,
  minValue,
  normalizeAsNumber,
  required,
};
