import { defineConfig } from 'vitepress';
import { nav, sidebar } from './menu';

const PREFIX = '/vitepress-site/';

export default defineConfig({
  base: process.env.PROJECT_PATH || PREFIX,
  outDir: '../public',
  head: [['link', { rel: 'icon', href: PREFIX + 'head.jpg', type: 'image/x-icon' }]],
  title: 'Gadget Docs',
  titleTemplate: false,
  markdown: { toc: { level: [1, 2] } },
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true, // frontmatter also work
  themeConfig: {
    siteTitle: '[ɢᴀᴅɢᴇᴛs]',
    logo: '/logo.ico',
    nav, sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/jqsheng/vitepress-site' }],
    footer: {
      message: "-- Think Twice --",
      copyright: "Copyright © 2023", //${new Date().getFullYear()}`
    },
  },
});
