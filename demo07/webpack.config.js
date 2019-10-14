const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const webpack = require('webpack')

module.exports = {
    //入口文件
    // mode:'development',
    mode:'production',
    devtool:'cheap-module-source-map',
    //mode:'development'  //打包的文件不会被压缩
    // entry:'./index.js',
    // devtool:'cheap-module-eval-source-map',
    entry:{
         main:'./src/index.js',
        // main:["@babel/polyfill", './src/index.js']
    },
    devServer:{
      //指定根路径
      contentBase: '/dist',
      //在启动webpck-dever-sever时，会自动的打开浏览器
      open: true,
      //开启hot module Replacement
      hot: true,
      //html失效时，不需要重新刷新页面
      hotOnly: true
    },
    plugins:[
      new HtmlWebpackPlugin({
      template:'src/index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
  ],
  // optimization: {
  //     usedExports: true
  // },
    output:{
        publicPath: '/',
        //打包后的文件名
        filename: 'bundle.js',
        //指定存为位置
        path: path.resolve(__dirname,'dist')
    },
    module: {
      rules: [
        { 
          test: /\.js$/, 
          //node_modules实际是第三发代码，没必要对其进行babel转化，将其排除在外。
          exclude: /node_modules/,
           loader: "babel-loader" 
        },
        {
          test: /\.css$/,
          use: [
            {
              loader:'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true //开启模块化打包
              }
            },
           {
             loader:'postcss-loader'
           }  
          ]
        }
      ]
    }
  }