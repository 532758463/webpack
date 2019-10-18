// import _ from "loadsh" //1MB

//业务逻辑 1mb
console.log(_.join(['a','b','c'],'***'))

//此处省略1万行代码
console.log(_.join(['a','b','c'],'***'))

//bundle.js 2mb

//打包文件会很大，加载时间会长


//bundle.js 2mb

//重新访问页面时，又要加载2mb的内容


//第二种方式
//main.js被拆成loadsh.js(1mb),main.js(1mb)

//当页面业务逻辑发生变化时，只要加载main.js即可。（1mb）
//这种方式可以在第二次加载时，main.js业务逻辑变化，从新加载，loadsh.js未修改，就不会重新加载

//这种代码的拆分就是Code Spliting,这种方式是我们自己动手做拆分。


//可以使用自带的插件来做代码分割。

