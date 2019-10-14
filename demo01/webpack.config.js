const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    //入口文件
    mode:'development',
    //mode:'development'  //打包的文件不会被压缩
    // entry:'./index.js',
    devtool:'cheap-module-eval-source-map',
    entry:{
         main:'./src/index.js'
    },
    devServer:{
      //指定根路径
      contentBase: '/dist',
      //在启动webpck-dever-sever时，会自动的打开浏览器
      open: true,
      proxy: {
        '/api': 'http://localhost:3000'
      }
    },
    plugins:[new HtmlWebpackPlugin({
      template:'src/index.html'
    })],
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
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
          }
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name:'[name].[ext]',
                // name:'[name]_[hash].[ext]'
                // name:'[hash].[ext]',
                outputPath:'img/'
              }
            },
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
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