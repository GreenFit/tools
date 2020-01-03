const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: '127.0.0.1',
    port: 9000,
    hot: true,
    // 不显示编译文件的过程
    // noInfo: true,
    stats: 'minimal',
    // 浏览器展示警告和错误信息
    overlay: {
      warnings: true,
      errors: true
    }
  }
})
