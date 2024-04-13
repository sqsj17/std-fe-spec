# std-fe-spec

前端编码规范工程化

## :mountain: 能力支持

### 1. 全面的前端生态

支持前端全部生态，无需关注环境，支持直接使用

### 2. 完善的规范配件

支持对全部前端配置实现一键接入、一键扫描、一键修复、一键升级

### 3. 完整的测试用例

配套完整的测试用例，提升项目健壮性

## :star: 设计目的

随着前端技术的发展，前端项目正在变得越来越复杂。`JavaScript` 作为一门弱类型解释性编程语言，其灵活多变的语法极大的提高了前端开发效率，但同时也存在一系列问题。在大型项目开发过程中，代码维护所占的时间比重往往大于新功能的开发。因此编写符合团队编码规范的代码是至关重要的。 一致性的代码规范可以增强团队开发协作效率、提高代码质量、减少遗留系统维护的负担。但是每个人的代码编写喜好不同，代码风格也会迥然不同，若要一个团队内所有的成员都能发挥最大程度的价值，一个具有普适性的标准是必不可少的。

那么，如何制定前端团队的代码规范，如何在团队内进行最小成本的推广，就是一个合格的前端架构师面临的一大难题。很多团队的基础建设都只是简单地知晓其中一部分规范工具的使用，但却没有一套完整的工程化产出来助力研发同学实现规范落地。因此，如果我们能够产出一套完整化的前端编码规范工具，都会对不仅能够解决存量项目的编码异味，还能够保证后续所有项目的编码质量。

## :bulb: 为什要学习前端工程化

1. 通过 `monorepo` 和 `pnpm` 的多包管理方式开发一套多 `npm` 包的管理方式，以及如何将发包流程植入 `CI` 实现自动化发布，以及`CHANGLOG`的自动化更新部署；
2. 现有前端前沿的研发流程下，我们可以通过哪些工具提升项目的编码规范，并提供配套工具的最佳实践，包括但不限于`eslint`、`stylelint`、`commitlint`、`markdownlint`、`husky`等，以及如何将单元测试植入配套工具的具体实现；
3. 如何通过脚手架的方式，以交互式形式一键接入，实现对`JavaScript`、`Typescript`、`React`、`Vue`等不同类型的前端项目下的标准的语法限制；
4. 如何对存量项目进行优化：对于存量代码不符合规范的问题，支持一键扫描和一键修复，一键式的修复存量问题，最小化存量代码的更新成本；
5. 学习如何对新项目添加规范：支持一键接入新增项目，通过结合`gitpre-commit`钩子，对提交文件进行编码规范的扫描；同时通过`husky`的`commit-msg`钩子，对本次代码提交`message`的格式进行扫描。

## :couch_and_lamp: 配套工具

多个业界流行的 `Linter` 作为规范文档的配套工具，并根据规范内容定制了对应的规则包，它们包括：

| 规范                                                              | Lint 工具                                                      | npm 包                                                                                 |
| ----------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| JavaScript 编码规范 <br/> TypeScript 编码规范 <br/> Node 编码规范 | [ESLint](https://eslint.org/)                                  | [eslint-config](https://www.npmjs.com/package/std-eslint-config)             |
| CSS 编码规范                                                      | [stylelint](https://stylelint.io/)                             | [stylelint-config](https://www.npmjs.com/package/std-stylelint-config)       |
| Git 规范                                                          | [commitlint](https://commitlint.js.org/#/)                     | [commitlint-config](https://www.npmjs.com/package/std-commitlint-config)     |
| 文档规范                                                          | [markdownlint](https://github.com/DavidAnson/markdownlint)     | [markdownlint-config](https://www.npmjs.com/package/std-markdownlint-config) |
| Eslint 插件                                                       | [ESlint Plugin](https://eslint.org/docs/latest/extend/plugins) | [eslint-plugin](https://www.npmjs.com/package/std-eslint-plugin)             |

[std-fe-lint](https://www.npmjs.com/package/std-fe-lint) 收敛屏蔽了上述依赖和配置细节，提供简单的 `CLI` 和 `Node.js API`，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规范的成本。

您可以使用[std-fe-lint](https://www.npmjs.com/package/std-fe-lint) 方便地为项目接入全部规范。

## 其他

## 测试`markdown config`

全局安装`markdownlint-cli`

```bash
npm i -g markdownlint-cli
pnpm run lint
```

### 生成`CHANGELOG`

参考[conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)，全局安装`conventional-changelog-cli`：

```bash
npm install -g conventional-changelog-cli
pnpm run changelog
```
# 前端编码规范工程化

前端规范 对应规范工具

1、react vue js ts node eslint
2、css 预处理器 stylelint
3、git commitlint husky
4、markdownlint

lint 收敛 - cli

1、一键接入 一键扫描 一键修复 一键升级
2、多包结构 ： monorepo lerna 
3、包管理工具： pnpm
4、lint工具：
    markdownlint
    commitlint
    stylelint
    eslint
    prettier
5、CLI
6、jest mocha

## 安排

1、项目初始化： markdownlint changelog commitlint npm scripts 发包 lerna 
2、HTML GIT markdown changelog 文档规范 vuepress 静态资源站点 githubIO 
3、git action deploy

## 测试`markdown config`
全局安装`std-markdownlint-cli`

```bash

npm i -g std-markdownlint-cli
pnpm run lint
```

发布前使用npm login --registry https://registry.npmjs.org 登陆
自动构建站点 git action

vuepress 支持node 16 | 从github上配置workflow


1、css stylelint 
2、eslint JS  TS vue node eslint定制化能力
3、prettier

1、eslint plugins
2、CLI NODE API

1、husky 代码规范的扫描
2、fix
3、完整的流程梳理 如何实现项目优势
  lint-cli
  1、husky git commit 针对有问题的内容进行拦截
  2、fix 一键修复 一键扫描 lint
  3、Q&A

  支持模板初始化创建 init
  lint-cli scan 在根目录执行 扫描出来项目关于规范化的问题
  lint-cli fix  prettier + lint
  lint-cli commit-file-scan git pre-commit
  lint-cli commit-msg-scan 针对信息进行扫描 commit-msg commitlint

  scan: 不prettier 直接获取所有的报错信息
  fix: 先prettier 再获取未处理的报错信息

  一键扫描一键修复
  1、通过注入script  添加git hooks
    1、pre-commit scan
    2、commit-msg commitlint
  2、通过四个lint工具
    1、获取当前项目的lint config 先读取当前项目已有的配置项 没有使用默认配置
    2、使用lint 工具，根据options.fix进行是否自动修复
    3、按照scan result标准化输出

  3、完善了cli的基本能力
    1、init安装基础包
    2、scan: scanAction
    3、fix: scanAction fix配置是否自动修复
    4、commit-file-scan
    5、commit-msg-scan

  -main: 整个入口
  -bin: lint-cli实现脚手架
  -commitlint
  -stylelint
  -eslint
  -eslint-plugin
  -commitlint
  -markdownlint


cli node实战 linter规范 ts的使用 静态站点的展示 前端工程化的标准 包含哪些内容
业务研发->前端架构（for developer）
  通过工具约束前端开发的张力，保证项目规范的标准化