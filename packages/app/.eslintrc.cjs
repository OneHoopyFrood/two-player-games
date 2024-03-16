module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    '../../.eslintrc.cjs', // Extend the root .eslintrc.cjs file
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
