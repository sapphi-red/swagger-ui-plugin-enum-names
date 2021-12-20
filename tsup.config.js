const { defineConfig } = require('tsup')

module.exports = defineConfig((options) => ({
  entry: ['src/index.js'],
  platform: 'browser',
  target: 'es2015',
  sourcemap: true,
  minify: !options.watch,
  format: ['cjs', 'esm', 'iife'],
  esbuildOptions(options, context) {
    options.globalName = 'EnumNamesPlugin'
  }
}))
