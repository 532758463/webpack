
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry:{
        loadsh:'./src/loadsh.js',
        main:'./src/index.js',
       // main:["@babel/polyfill", './src/index.js']
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
  },
  output:{
    publicPath: './',
    //打包后的文件名
    filename: '[name].js',
    //指定存为位置
    path: path.resolve(__dirname,'../dist')
},
  plugins:[
    new HtmlWebpackPlugin({
      template:'src/index.html'//以某个html文件为模板生成。
}),
    new CleanWebpackPlugin(),
],

//做代码分割。
optimization: {
  splitChunks: {
    chunks: 'all'
  }
}

}