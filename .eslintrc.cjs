module.exports = {
  ignorePatterns: ['public/'],
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx'] }],
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': 'off',
  },
  settings: {
    react: { version: 'detect' },
  },
};
