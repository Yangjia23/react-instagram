const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { SERVER_HOST, SERVER_PORT } = require('../constants')
const config = require('../../src/config.js')

const { proxyConfig } = config

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    port: process.env.PORT || SERVER_PORT || 8080,
    host: SERVER_HOST,
    publicPath: '/',
    stats: 'errors-only', // 终端仅打印 error
    clientLogLevel: 'silent', // 日志等级
    compress: true, // 是否启用 gzip 压缩
    // open: true, // 打开默认浏览器
    hot: true, // 热更新
    proxy: { ...proxyConfig },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
