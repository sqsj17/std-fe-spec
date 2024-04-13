import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config';

export default defineConfig4CustomTheme({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'std-fe-spec',
      description: '前端编码规范工程化',
    },
  },
  base: '/std-fe-spec/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/index.md' },
    ],
    sidebar: [],
    logo: 'https://avatars.githubusercontent.com/u/22335467?v=4',
    repo: 'sqsj17/std-fe-spec',
    searchMaxSuggestions: 10,
    docsDir: 'docs',
    footer: {
      createYear: 2023,
      copyrightInfo:
        'encode studio | <a href="https://github.com/sqsj17/std-fe-spec" target="_blank">github</a>',
    },

    extendFrontmatter: {
      author: {
        name: '拾七',
        link: 'https://github.com/sqsj17/std-fe-spec',
      },
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '前端编码规范工程化',
      },
    ],
  ],

  plugins: <UserPlugins>[
    [
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false,
      },
    ],

    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
  ],
  extraWatchFiles: ['.vuepress/config.ts'],
});
