function normalizeConsultKeys(value, maxValue) {
  if (!value) {
    return value;
  }

  if (Number(value) > Number(maxValue)) {
    return Number(maxValue);
  }

  return Number(value);
}

export default {
  normalizeConsultKeys,
};
