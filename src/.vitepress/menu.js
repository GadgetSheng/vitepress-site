/**
 * menu是个子菜单列表
 * cat?：string 表示 顶部菜单中的大目录，[demo,request]中取值,不填默认demo
 * sub?: string 必须/开头，否则不认，表示二级菜单名称，同名会聚合到一起
 * text: 菜单名称
 * page: 文件名，md文件实际路径变成'cat/sub/page.md'
 */
const menu = [
  {
    cat: 'demo',
    text: 'demo下菜单',
    page: 'menu1'
  }
];

module.exports = { menu }