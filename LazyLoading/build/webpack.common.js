
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry:{
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
       //做代码分割时只对异步代码生效
      chunks: "all",

      //引入的库的大小大于30000字节(30kb)时,就做代码的分割,如果不大于就不做代码分割.
      // minSize: 30000,
      minSize: 0, //当 default: false时，不会生成打包的文件，这是因为打包的文件存放位置不知道放哪儿，所以不会生成。当不为false且default中的minChunks小于2时，就会对引入模块进行打包放在default~main.js中
      
      //当一个模块被引入的次数大于1，就做代码分割，否则不做代码分割
      //如果有两个以上的chunk文件依赖于某个模块，就做代码分割。
      minChunks: 2,

      //一个页面同时只能加载五个模块数，超过五个就不做代码的分割了
      maxAsyncRequests: 5,

      //整个网站首页（入口文件）进行加载的时候，引入的库最多只能做3个分割的js文件。
      maxInitialRequests: 3,

      //默认未定义名字时，对cacheGroups组下的组名加上~的分割符+入口文件名.js
      automaticNameDelimiter: '~',
      //使得自定义名字有效
      name: true,
      //缓存组，对同步的代码做代码分割（可以针对不同的规则来打包相应进组里）
      cacheGroups: {
         //vendors组
        vendors: {
          //检测引入的库是否是在node_modules下，如果是就符合vendors的要求，默认打包后生成的文件就以vodors~开头的文件（vendors~main）。
          test: /[\\/]node_modules[\\/]/,
          // 打包的内容放那个组下的优先级，值越大优先级越高。这里vendors组优先级大于default组。
          priority: -10,
          //也可以对符合要求的模块代码打包的名字自定义
          filename: 'vendors.js'
        },

        //当 default: false时，不会生成打包的文件，这是因为打包的文件存放位置不知道放哪儿，所以不会生成。当不为false且default中的minChunks小于2时，就会对引入模块进行打包放在default~main.js中
        default: {
          minChunks: 1,
          priority: -20,
          //它会判断之前打包模块时会判断之前是否打包过，如果已经被打包过，则忽略这个模块。如果没有打包过，就对该模块进行打包处理。
          reuseExistingChunk: true,
          //自定义打包后的打包文件名称
          filename: 'common.js'
        }
      }
    }
  }
}