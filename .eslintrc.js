module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'unicorn/prefer-module': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
    },
  ],
};
