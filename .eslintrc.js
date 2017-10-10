module.exports = {
  extends: [
    '@uncovertruth/eslint-config-react',
  ],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'no-undef': 1,
    'react/no-unused-prop-types': 1,
    'react/prop-types': 1
  }
}