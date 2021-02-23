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
    port: 8888
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
}