
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import VuePlugin from 'rollup-plugin-vue';

const pluginOptions = [
  resolve({
    browser: true
  }),
  commonjs(),
  VuePlugin(),
  babel({
    exclude: 'node_modules/**'
  }),
  copy({
    'typings': 'dist',
    verbose: true
  })
];

module.exports = {
  input: './src/index.js',
  output: {
    name: 'VueToc', 
    file: 'dist/vue-toc.js',
    format: 'umd'
  },
  plugins: pluginOptions
}