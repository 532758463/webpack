const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
//引入css代码分割的插件
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
    //入口文件
    mode:'production',
    devtool:'cheap-module-source-map',
    // plugins:[
    //     new MiniCssExtractPlugin({
    //       // Options similar to the same options in webpackOptions.output
    //       // all options are optional
    //       filename: '[name].css',
    //       chunkFilename: '[id].css',
    //      // ignoreOrder: false, // Enable to remove warnings about conflicting order
    //     }),
    // ]
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
      ],
}

module.exports = merge(commonConfig,prodConfig)