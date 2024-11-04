// @ts-check
import { html } from 'framer-motion/client';
import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  favicon: '/img/icon.png',
  title: '中南大学电子协会',
  url: 'https://eacsu.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/MigoXV/ea-web/tree/main',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'EA-CSU',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '知识库',
        },
        { to: '/blog', label: '协会动态', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '联系方式',
          items: [
            {
              html: 'QQ群：960042332',
              // href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    math: {
      strict: 'ignore',
    },
  },

  // 添加 markdown 配置项，自动检测 .md 和 .mdx 格式
  markdown: {
    format: 'detect', // 自动选择 CommonMark 或 MDX 解析格式
  },
};

export default config;
