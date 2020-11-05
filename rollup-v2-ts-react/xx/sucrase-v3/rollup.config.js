import sucrase from '@rollup/plugin-sucrase';
import css from 'rollup-plugin-css-only'

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    sucrase({
      transforms: ['jsx', 'imports', 'typescript']
    }),
    css({ output: 'bundle.css' }),
  ]
};