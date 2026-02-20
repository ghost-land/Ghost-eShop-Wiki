// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ghost eShop Wiki',
  tagline: 'An Alternative eShop for 3DS, DS, DSi, Wii U, Wii, and Switch',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.ghosteshop.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ghost-land', // Usually your GitHub org/user name.
  projectName: 'ghost-eshop-wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  staticDirectories: ['static'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ghost-land/Ghost-eShop-Wiki/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ghost-land/Ghost-eShop-Wiki/edit/main/',
          // Useful options to enforce blogging best practices
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Ghost eShop Wiki',
        logo: {
          alt: 'Ghost eShop logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://github.com/ghost-land/Ghost-eShop-Wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/docs/intro',
              },
              {
                label: 'Nintendo 3DS',
                to: '/docs/category/citra--nintendo-3ds',
              },
              {
                label: 'Nintendo DS',
                to: '/docs/category/nitro--nintendo-ds',
              },
              {
                label: 'Nintendo Switch',
                to: '/docs/category/nx--nintendo-switch',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/ghosteshop/',
              },
              {
                label: 'Social Hub',
                href: 'https://social.ghostland.at/',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/geshhome',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'DMCA',
                href: 'https://ghostland.at/dmca',
              },
              {
                label: 'Privacy Policy',
                href: 'https://ghostland.at/privacy',
              },
              {
                label: 'Service Status',
                href: 'https://status.ghostland.at/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ghost eShop`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
