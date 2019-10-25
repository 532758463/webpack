
const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devConfig = {
    mode:'development',  //打包的文件不会被压缩
    devtool:'cheap-module-eval-source-map',
    devServer:{
      //指定根路径
      contentBase: './dist',
      //在启动webpck-dever-sever时，会自动的打开浏览器
      open: true,
      //开启hot module Replacement
      hot: true,
      //html失效时，不需要重新刷新页面
      hotOnly: true
    },
    // plugins:[
    //   new webpack.HotModuleReplacementPlugin(),
      
    // ],
  // optimization: {
  //     usedExports: true
  // }, 
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
  }

  module.exports = merge(commonConfig,devConfig)