let path = require('path');

module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "standard-react"
  ],
  "plugins": [
    "babel",
    "react",
    "promise",
    "import"
  ],
  "env": {
    "browser": true,
    "es6": true
  },
  "rules": {
    "class-methods-use-this": 0,
    "key-spacing": 0,
    "jsx-quotes": [2, "prefer-single"],
    "max-len": [2, 120, 2, {
      "ignoreStrings": true
    }],
    "no-param-reassign": ["error", {
      "props": false
    }],
    "object-curly-spacing": [2, "always"],
    "prefer-const": 0,
    "func-names": 0,
    "import/no-named-as-default": 0,
    "no-case-declarations": 0, //Need to fix
    "no-script-url": 0,
    "no-underscore-dangle": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-has-content": 0,
    "jsx-a11y/anchor-is-valid": 0
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.resolve(__dirname, "config/webpack.config.js"),
      }
    }
  }
};
