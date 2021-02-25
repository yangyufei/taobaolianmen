const path = require('path')
const webpack = require('webpack')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    //路径配置
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    // 调试端口
    port: 8888,
    disableHostCheck: true, //webpack4.0 开启热更新
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ],
  },
  // 生产环境 sourceMap
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}