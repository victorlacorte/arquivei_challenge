import axios from 'axios';

import config from 'config';

// No CORS since we're only mocking API calls
const base = axios.create({
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'pt-BR',
  },
  timeout: config.api.timeout,
});

export default base;
