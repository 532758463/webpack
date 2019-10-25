const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
//引入css代码分割的插件
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
    //入口文件
    mode:'production',
 
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
      ],
      output:{
        //打包后的文件名
        filename: '[name].[contenthash].js',
        chunkFilename:'[name].[contenthash].js',
        //指定存为位置   
    }
}

module.exports = merge(commonConfig,prodConfig)