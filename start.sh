# 当发生错误时中止脚本
set -e
# 构建
npm run build
# cd 到构建输出的目录下 
cd dist
git init
git add -A
git commit -m 'start'
# 部署到 https://<github用户名>.github.io/<仓库名>
git push -f git@github.com:yangyufei/taobaolianmen.git master:gh-pages
cd -