
const nav: any[] = [
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
    link: '/learn/zustand',
  },
]

const sidebar: any = {
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
};

export { nav, sidebar }