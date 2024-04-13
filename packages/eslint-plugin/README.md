# `std-eslint-plugin`

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
$ npm install std-eslint-plugin eslint --save-dev
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ['std-eslint-config'],
  rules: {
    'std-eslint-plugin/no-secret-info': 'error',
  },
};
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  extends: 'plugin:std-eslint-plugin/recommended',
};
```

## 支持的规则

