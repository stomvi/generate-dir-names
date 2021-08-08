module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'prettier', 'jest'],
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
      },
    ],
  },
  globals: {
    TimeoutID: true,
  },
};
