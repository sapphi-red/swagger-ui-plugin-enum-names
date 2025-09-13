import eslint from '@eslint/js'
import react from 'eslint-plugin-react'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig(
  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    settings: {
      react: {
        version: '18.3.1',
      },
    },
  },
  eslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
)
