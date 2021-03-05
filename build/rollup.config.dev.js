process.env.NODE_ENV = 'production';

// import path from 'path';

import configFn from './rollup.config';

import serve from 'rollup-plugin-serve';

// const PORT = 3002;

// const devSite = `http://127.0.0.1:${PORT}`;
// const devPath = path.join('public', 'index.html');
// const devUrl = `${devSite}/${devPath}`;

export default () => {
  const config = configFn('dev');
  config.plugins.push(serve());
  return config;
};
