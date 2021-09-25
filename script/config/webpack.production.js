const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base');
const { appBuild } = require('../paths');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  target: 'browserslist',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: appBuild,
    assetModuleFilename: 'images/[name].[contenthash:8].[ext]',
  },
  plugins: [new CleanWebpackPlugin()],
});
