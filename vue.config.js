// const path = require('path')

// const webpack = require('webpack')

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// module.exports = {
//   lintOnSave: false,
//   chainWebpack: (config) => {
//     config.resolve.alias
//       .set('components', path.resolve(__dirname, 'src/components'))
//       .set('common', path.resolve(__dirname, 'src/common'))
//       .set('views', path.resolve(__dirname, 'src/views'))

//   },
//   devServer: {
//     // 监听端口
//     port: 8888
//   },
//   configureWebpack: {
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, 'src'),
//       },
//     },
//     externals: {
//       'vue': 'Vue',
//       'vuex': 'Vuex',
//       'axios': 'axios',
//       'jquery': '$',
//       'echarts': 'echarts',
//     },
//     plugins: [
//       new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery',
//         'windows.jQuery': 'jquery'
//       })
//     ]
//   }
// }
