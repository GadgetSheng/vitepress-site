const { menu } = require('./menu');
const { PREFIX, mergeMenu } = require('./helper');

// 注: `PROJECT_PATH` ci的脚本注入的 
// =${CI_PROJECT_PATH} =Group/ProjectName =jqsheng/docs
console.log('env.CI_PROJECT_PATH', process.env.PROJECT_PATH);

const { nav, sidebar } = mergeMenu(menu);

module.exports = {
  base: process.env.PROJECT_PATH || PREFIX,
  outDir: '../public',
  head: [['link', { rel: 'icon', href: PREFIX + 'favicon.ico', type: 'image/x-icon' }]],
  title: '团中台/BFE',
  titleTemplate: false,
  markdown: { toc: { level: [1, 2] } },
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true, // frontmatter also work
  themeConfig: {
    siteTitle: '[ᴛʀɪᴘᴏᴄʀ]',
    logo: '/images/logo.ico',
    nav, sidebar,
    footer: {
      message: "-- Think Twice --",
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  },
}
