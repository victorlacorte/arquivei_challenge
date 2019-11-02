const aliases = require('./alias-config');

module.exports = {
  webpack(config) {
    // https://github.com/benmosher/eslint-plugin-import/issues/1286
    const { alias } = config.resolve;

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...alias,
      ...aliases,
    };

    return config;
  },
};
