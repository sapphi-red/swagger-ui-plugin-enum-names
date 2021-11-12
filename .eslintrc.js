module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  env: {
    browser: true,
  },
  rules: {
    'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'react/prop-types': 'off'
  }
}
