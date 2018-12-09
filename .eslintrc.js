module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/airbnb"
  ],
  "rules": {
    "semi": [2, "never"],
    "comma-dangle": 0,
    "no-console": 0,
    "no-unused-expressions": 0,
    "max-len": 0,
    "object-curly-newline": 0,
    "class-methods-use-this": 0,
    "no-nested-ternary": 0,
    "no-return-assign": 0
  },
  "parserOptions": {
    "parser": "babel-eslint"
  }
}