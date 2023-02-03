const PREFIX = '/vitepress-site/';

const NavTypeEnum = {
  DEMO: 'demo',
  REQUEST: 'request'
}

const DEFAULT_NAVBAR = [
  {
    text: 'DEMO',
    activeMatch: String(/demo/),
    items: [{ text: 'Index', link: '/demo/' },]
  },
  {
    text: 'REQUEST',
    activeMatch: String(/request/),
    items: [{ text: 'Index', link: '/request/' },]
  },
  {
    text: '<LEARN>',
    activeMatch: String(/learn/),
    link: '/learn/',
  },
]

const DEFAULT_SIDEBAR = {
  '/guide': [
    { text: 'Guide', link: '/guide' },
    { text: 'Layout:Doc', link: '/demoDoc' },
    { text: 'Layout:Page', link: '/demoPage' },
  ],
  '/learn/': [
    {
      text: 'CONFIG',
      items: [
        { text: '@antfu/eslint-config', link: '/learn/eslint-antfu' },
        { text: 'CI/CD image_hook脚本', link: '/learn/image-hook' },
      ],
    },
    {
      text: 'MISC',
      items: [
        { text: 'gitlab-ci', link: '/learn/gitlab-ci' },
        { text: 'Mac下硬连接', link: '/learn/signal-links' },
      ],
    },
  ]
}

function mergeMenu(array) {
  const nav = DEFAULT_NAVBAR.slice();
  const sidebar = { ...DEFAULT_SIDEBAR };
  if (Array.isArray(array)) {
    array.forEach(item => {
      const { cat = NavTypeEnum.DEMO, text, sub, page } = item;
      const data = { text, link: `${cat}${sub}/${page}` };

      const matchCatNav = nav.find(x => x.text === String(cat).toUpperCase());
      if (!matchCatNav.items) matchCatNav.items = [];
      let subNavItems = matchCatNav.items;

      const matchCatSide = sidebar[`/${cat}/`];
      if (!matchCatSide) sidebar[`/${cat}/`] = [];
      let subSideItems = sidebar[`/${cat}/`];

      if (sub && sub.indexOf('/') === 0) { // have sub 
        const matchSubNav = subNavItems.find(x => x.text === sub.slice(1))
        if (matchSubNav) subNavItems = matchSubNav.items;
        else {
          const lastItem = { text: sub.slice(1), items: [] };
          subNavItems.push(lastItem);
          subNavItems = lastItem.items;
        }
        const matchSubSide = subSideItems.find(x => x.text === sub.slice(1))
        if (matchSubSide) subSideItems = matchSubSide.items;
        else {
          const lastItem = { text: sub.slice(1), items: [] };
          subSideItems.push(lastItem);
          subSideItems = lastItem.items;
        }
      }
      subNavItems.push(data)
      subSideItems.push(data);
    })
  }
  return { nav, sidebar };
}

module.exports = {
  PREFIX,
  mergeMenu
}