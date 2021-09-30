import commonjs from '@rollup/plugin-commonjs'
import path from 'path'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

const bundle = (input, i) => ({
  input: path.join('src', input),
  output: [
    {
      file: path.join('dist', path.basename(input).replace(/\.tsx?$/, '.js')),
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    '@testing-library/react',
    'path',
    'util',
  ],
  plugins: [
    commonjs({
      include: ['node_modules/util/**'],
    }),

    typescript({
      // use locally installed typescript instead of
      // rollup-plugin-typescript2's version of typescript
      typescript: require('typescript'),
      tsconfigOverride: {
        compilerOptions: {
          // only emit declarations the first time around
          declaration: i === 0,
        },
        include: ['src/**/*'],
        exclude: ['**/*.test.ts', '**/*.test.tsx'],
      },
    })
  ],
})

export default ['index.tsx'].map(bundle)
