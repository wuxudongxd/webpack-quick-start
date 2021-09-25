const { merge } = require('webpack-merge');
const { appBuild } = require('../paths');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  target: 'web',
  output: {
    filename: 'js/[name].js',
    path: appBuild,
  },
  devServer: {
    client: {
      logging: 'warn',
    },
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
  },
});
