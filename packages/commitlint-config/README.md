# `commitlint-config`

> TODO: description

## Usage

```
const commitlintConfig = require('commitlint-config');

// TODO: DEMONSTRATE API
```
## 安装
```bash
npm install en-commitlint-config @commitlint/cli --save-dev
```
commitlint/cli 这个node > 18

## 使用
在 `commitlint.config.js` 中集成本包:

```javascript
module.exports = {
  extends: ['en-commitlint-config'],
};
```

## 设置 git hook

可通过 [husky](https://www.npmjs.com/package/husky) 设置在 `git commit` 时触发 `commitlint`。

首先安装 husky：

```bash
npm install husky --save-dev
```

然后执行添加`commit-msg`:

```bash
npx husky add .husky/commit-msg 'npx commitlint --edit $1'
```

更多信息可参考 [commitlint 文档](https://commitlint.js.org/#/guides-local-setup?id=install-husky)。