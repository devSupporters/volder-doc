// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "volder",
  tagline: "schema builder and data validation and parsing",
  url: "https://volder.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "github/alguerocode",
  projectName: "volder",
  trailingSlash: false,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/devSupporters/volder-doc/tree/main",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/devSupporters/volder-doc/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "27MGXFKBZP",
        apiKey: "69dfce7d3b18954b83faa0f3c71fdb72",
        indexName: "devSupporters",
        contextualSearch: true,
      },
      navbar: {
        title: "VOLDER",
        items: [
          {
            type: "doc",
            docId: "get-started",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/devSupporters/volder",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "API",
                to: "/docs/get-started",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Portfolio",
                href: "https://alguero.vercel.app/",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/15742951/alguerocode",
              },
              {
                label: "GitHub",
                href: "https://github.com/alguerocode",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "dev.to",
                to: "https://dev.to/alguercode",
              },

              {
                label: "instagram",
                href: "https://www.instagram.com/alhashmis246/",
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 salah alhashmi.  All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // additionalLanguages: ['powershell'],
      },
    }),
};

module.exports = config;
