module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'prettier', '@typescript-eslint/eslint-plugin', 'eslint-plugin-tsdoc'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'react/jsx-indent': ['error', 2],
    'arrow-body-style': ['error', 'always'],
    'react/function-component-definition': [0],
    'react/button-has-type': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [0],
    'tsdoc/syntax': 'warn',
  },
};
