module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 0,
    'react/prop-types': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
      },
    ],
  },
  globals: {
    React: 'writable',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
  },
};
