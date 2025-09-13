import { defineConfig } from 'tsdown'

export default defineConfig((options) => {
  const common = defineConfig({
    entry: ['src/index.js'],
    platform: 'browser',
    target: 'es2015',
    globalName: 'EnumNamesPlugin',
    inputOptions: {
      transform: {
        jsx: {
          runtime: 'classic',
          pragma: 'system.React.createElement',
          pragmaFrag: 'system.React.Fragment',
        },
      },
    },
  })

  const entryFileNames = {
    cjs: 'index.js',
    esm: 'index.mjs',
    iife: 'index.global.js',
  }

  return ['cjs', 'esm', 'iife'].map((format) =>
    defineConfig({
      ...common,
      sourcemap: format === 'iife',
      outputOptions: {
        entryFileNames: entryFileNames[format],
        minify: {
          compress: !options.watch,
          mangle: !options.watch,
          codegen: !options.watch && format === 'iife',
        },
      },
      format,
    }),
  )
})
