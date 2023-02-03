# @gadget/vitepress-site

see GH-PAGES:
https://gadgetsheng.github.io/vitepress-site/

### Vitepress deploy Github Pages
[Deploying](https://vitepress.vuejs.org/guide/deploying#github-pages)

1. set the correct `base` config

  if you are deploying to `https://<USERNAME>.github.io/<REPO>`,
for example your repository is at `https://github.com/<USERNAME>/<REPO>`, set `base` to `/<REPO>/`.

1. chose CI tools = `Github Actions`

  create `.github/workflows/deploy.yml` to set up the workflow

### MISC
#### @see https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

Github中 个人开发设置，增加Personal Access Token
权限只需要 勾选workflow   这里的 GITHUB_TOKEN 与title无关
在仓库设置中 增加仓库的 key 
> 仓库settings/Secrets and variables/Actions -> Secrets/Repository secrets
需要开启Actions/workflow对应操作repo的权限
Check if "Read and write permissions" are enabled in Settings
 -> Actions -> General -> Workflow permissions:
在设置中设置 pages 分支采用gh-pages, /root