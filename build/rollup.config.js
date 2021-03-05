import path from 'path';

// import buble from '@rollup/plugin-buble';

import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';

const resolve = (filePath) => {
  return path.join(__dirname, '..', filePath);
};

const TSPLUGIN = typescript({
  clean: true,
  useTsconfigDeclarationDir: true,
});

const BABELPLUGIN = babel({
  extensions: ['.js', '.ts'],
  exclude: 'node_modules/**',
  babelHelpers: 'bundled',
});

export { resolve };

export default (dirName) => {
  return {
    input: resolve('src/index.ts'),
    output: [
      {
        file: resolve(`${dirName}/index.es.js`),
        format: 'es',
        // name: '$l',
        // exports: 'default',
      },
      {
        file: resolve(`${dirName}/index.cjs.js`),
        format: 'cjs',
        // name: '$l',
        // exports: 'named',
      },
    ],
    plugins: [TSPLUGIN, BABELPLUGIN],
    external: ['js-base64', 'js-cookie'],
  };
};
