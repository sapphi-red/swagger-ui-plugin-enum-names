module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  rules: {
    'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'react/prop-types': 'off'
  }
}
