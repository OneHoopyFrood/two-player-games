module.exports = {
  root: true,
  env: { es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
  },
  overrides: [
    {
      files: ['packages/**/*'],
    },
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error', // Require return types
    '@typescript-eslint/no-explicit-any': 'error', // Disallow usage of 'any' type
    '@typescript-eslint/no-unsafe-assignment': 'error', // Disallow unsafe assignments
    '@typescript-eslint/no-unsafe-call': 'error', // Disallow unsafe function calls
    '@typescript-eslint/no-unsafe-member-access': 'error', // Disallow unsafe member access
    '@typescript-eslint/no-unsafe-return': 'error', // Disallow unsafe returns
  },
}
