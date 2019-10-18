const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const prodConfig = {
    //入口文件
    mode:'production',
    devtool:'cheap-module-source-map',
}

module.exports = merge(commonConfig,prodConfig)