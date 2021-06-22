module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": 2015,
      "sourceType": "module"
  },
  "rules": {
      "no-unused-vars": [0],
      // 最大空行100
      "no-multiple-empty-lines": [0],
      "no-mixed-spaces-and-tabs": [0],
      //未定义变量不能使用
      "no-undef": 0,
  }
};