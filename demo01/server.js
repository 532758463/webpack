const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require("./webpack.config.js")
//用webpack结合这个配置文件可以进行代码的编译。会返回一个编译器。
const complier = webpack(config)

const app = express()

//启用中间件webpackDevMiddleware,
//该中间件的作用是：只要文件发生改变了，就会运行complier进行重新编译，并将重新编译打包的文件输出到publicPath下
app.use(webpackDevMiddleware(complier,{
    publicPath:config.output.publicPath
}))


app.listen(3000,()=>{
    console.log('server is running')
})