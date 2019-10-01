import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

const pkg = require('../package.json');

const isProduction = process.env.NODE_ENV === 'production';

const input = './src/index.js';
const globals = {
  react: 'React',
  'prop-types': 'PropTypes',
};

const babelOptions = {
  exclude: /node_modules/,
  runtimeHelpers: true,
};

const watchOptions = {
  include: './src/**',
};

const devConfig = {
  input,
  output: {
    file: 'lib/index.js',
    format: 'umd',
    name: pkg.name,
    globals,
  },
  watch: watchOptions,
  external: Object.keys(globals),
  plugins: [
    nodeResolve(),
    babel(babelOptions),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};

const prodConfig = {
  input,
  output: {
    file: 'lib/index.js',
    format: 'umd',
    name: pkg.name,
    globals,
  },
  external: Object.keys(globals),
  plugins: [
    nodeResolve(),
    babel(babelOptions),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    sizeSnapshot(),
    uglify(),
  ],
};

export default isProduction ? prodConfig : devConfig;
