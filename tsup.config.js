const { defineConfig } = require('tsup')

module.exports = defineConfig((options) => ({
  entry: ['src/index.js'],
  sourcemap: true,
  minify: !options.watch,
  format: ['cjs', 'esm', 'iife'],
  esbuildOptions(options, context) {
    options.globalName = 'EnumNamesPlugin'
    options.external = ['immutable', 'react']
  }
}))
