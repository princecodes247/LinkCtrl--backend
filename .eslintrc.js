module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: { 'linebreak-style': 0, 'class-methods-use-this': 0, 'no-underscore-dangle': 0 },
};
