import { themes as prismThemes } from 'prism-react-renderer';

const simplePlantUML = require("@akebifiky/remark-simple-plantuml"); // объявляем плагин для plantuml

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AdminHelper', //Название сайта на начальной странице
  tagline: 'Start', // Описание сайта на начальной странице
  favicon: 'img/favicon.ico', // Иконка сайта
  url: 'https://LyubovGorelik.github.io/', // Адрес gitlab pages, обычно https://<username>.github.io
  baseUrl: '/AdminHelper/', // Базовый url, обычно название репозитория
  organizationName: 'LyubovGorelik', // Имя GitHub пользователя
  projectName: 'AdminHelper', // Имя репозитория
  onBrokenLinks: 'warn', // Чтобы не падать при наличии неработающих ссылок
  onBrokenMarkdownLinks: 'warn', // Чтобы не падать при наличии неработающих ссылок
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

//подключаем плагин для drawio
  plugins: [
    ['drawio', {}]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/LyubovGorelik/AdminHelper',
          remarkPlugins: [simplePlantUML], //подключаем плагин для plantuml
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    // подключаем плагин для OPENAPI
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'AdminHelper_API',
            spec: 'api_specs/openapi.yaml',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AdminHelper', //Название на навбаре
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg', //Логотип на навбаре
        },
        // тут можно настроить элементы навбара
        items: [
          {
            href: 'https://github.com/LyubovGorelik/AdminHelper',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // тут можно настроить элементы футера
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;