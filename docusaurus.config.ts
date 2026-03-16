import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '釧路高専プログラミング研究部',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  plugins: ['docusaurus-plugin-sass'],

  // Set the production url of your site here
  url: 'https://nitkpc.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KNCT-KPC', // Usually your GitHub org/user name.
  projectName: 'nitkpc.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KNCT-KPC/nitkpc.com/',
        },
        blog: {
          blogSidebarTitle: "全ての投稿",
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KNCT-KPC/nitkpc.com/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'NIT-KPC',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentsSidebar',
          position: 'left',
          label: '講習会資料',
        },
        {
          to: '/blog',
          label: 'ブログ',
          position: 'left'
        },
        {
          href: 'https://github.com/KNCT-KPC/nitkpc.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'SITEMAP',
          items: [
            {
              label: '講習会資料',
              to: '/docs/intro',
            },
            {
              label: 'ブログ',
              to: '/blog'
            }
          ],
        },
        {
          title: 'PORTAL',
          items: [
            {
              label: '釧路工業高等専門学校',
              href: 'https://www.kushiro-ct.ac.jp',
            },
            {
              label: '旧プロ研ホームページ',
              href: 'https://old.nitkpc.com',
            },
            {
              label: 'U-16プログラミングコンテスト 釧路大会',
              href: 'https://procon.946oss.net',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/KNCT-KPC',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} National Institute of Technology, Kushiro College. Programming Club.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
