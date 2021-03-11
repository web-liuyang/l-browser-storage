process.env.NODE_ENV = 'production';

// import path from 'path';

import configFn from './rollup.config';

import serve from 'rollup-plugin-serve';

const SERVE = {
  open: true,
  contentBase: ['dev'],
  // execute function after server has begun listening
  // onListening(server) {
  //   const address = server.getAddress();
  //   const host = address.host === '::' ? 'localhost' : address.host;
  //   // by using a bound function, we can access options as `this`
  //   const protocol = this.https ? 'https' : 'http';
  //   console.log(`Server listening at ${protocol}://${host}:${address.port}/`);
  // },
};

export default () => {
  const config = configFn('dev');
  config.plugins.push(serve(SERVE));
  return config;
};
