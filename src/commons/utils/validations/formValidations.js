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

function maxLength(max) {
  return function validate(value) {
    if (value && value.length > max) {
      return `São necessários no máximo ${max} caracteres`;
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

function maxValue(max) {
  return function validate(value) {
    if (value && value > max) {
      return `Deve ser no máximo ${max}`;
    }

    return undefined;
  };
}

function email(value) {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Email inválido';
  }

  return undefined;
}

export {
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
  email,
};
