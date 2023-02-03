// file:///./soft@menu.js

/**
 * 示例目录
 * docs
 * ├─ demo
 * |  ├─ category
 * |  |  ├─ item1.md
 * |  |  └─ item2.md
 * ├─ request
 * |  ├─ a.md
 * |  ├─ category
 * |  |  ├─ item1.md
 * |  |  └─ item2.md
 * └─ index.md // homepage
 */

const menu = [
  {
    cat: 'demo',
    text: 'demo子分类1-1',
    sub: '/category',
    page: 'item1'
  },
  {
    // cat: 'demo', 默认为demo
    text: 'demo子分类1-2',
    sub: '/category',
    page: 'item2'
  },
  {
    cat: 'request',
    text: 'request子项目1',
    page: 'a'
  },
  {
    cat: 'request',
    text: 'request子分类2-1',
    sub: '/category',
    page: 'item1'
  },
  {
    cat: 'request',
    text: 'request子分类2-2',
    sub: '/category',
    page: 'item2'
  }
];

module.exports = {
  menu
}