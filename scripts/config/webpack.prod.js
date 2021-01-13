const { merge } = require('webpack-merge')
const glob = require('glob')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const common = require('./webpack.common.js')
const { SOURCE_DIR } = require('../constants')

module.exports = merge(common, {
  devtool: 'none',
  plugins: [
    new CleanWebpackPlugin(),
    new PurgeCSSPlugin({
      // 删除没用到的 css
      paths: glob.sync(`${SOURCE_DIR}/**/*.{tsx,scss,less,css}`, { nodir: true }),
      whitelist: ['html', 'body'],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server', // 开一个本地服务查看报告
      analyzerHost: '127.0.0.1', // host 设置
      analyzerPort: 8888, // 端口号设置
    }),
  ],
})
