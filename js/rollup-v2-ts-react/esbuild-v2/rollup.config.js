import resolve from '@rollup/plugin-node-resolve'
import commonJS from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import css from 'rollup-plugin-css-only'
import esbuild from 'rollup-plugin-esbuild'

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    // Bundle src
    esbuild({
      exclude: undefined
    }),
    css({ output: 'dist/bundle.css' }),
    // Bundle vendors
    resolve(),
    commonJS({
      include: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};