import axios from 'axios';

import config from 'generalConfig';

const base = axios.create({
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'pt-BR',
  },
  timeout: config.api.timeout,
});

export default base;
