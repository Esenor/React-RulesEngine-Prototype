module.exports = {
  root: true,
  extends: 'standard',
  plugins: [
    'standard', 'promise', 'html', 'react'
  ],
  rules: {
    'arrow-parens': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
};