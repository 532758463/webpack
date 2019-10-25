

// import { ui } from './index.ui'

//这种情况下ui函数不能够正确运行。它会在打包后的文件报一个"$ is not defined"的错。
//这是因为基于webpack搭建的环境是基于模块进行打包的，模块里这些变量只能在当前自己的模块里使用，而换了一个模块后就不能再使用。
//这种模块化的开发可以保证模块与模块之间不会有任何耦合。
// ui()
const dom = $('<div>')
dom.html(_join(['dell','lee'],'------------- '))
$('body').append(dom)

// console.log(this)//window