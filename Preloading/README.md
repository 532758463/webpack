## Lazy Loading 懒加载，Chunk 是什么？

### 懒加载

使用异步代码可以做懒加载，指的是import方式实现懒加载。

举例子：

`index.js`

```js
//使用异步代码可以做懒加载
function getComponent() {
    return import(/*webpackChunkName:"loadsh"*/'loadsh').then(({default:_})=>{
        let element =document.createElement('div')

        element.innerHTML = _.join(['Dell','lee','-'])

        return element
    })
}
//只有当使用时，这些异步的代码才加载。==》所以说是一个懒加载。
document.addEventListener('click',()=>{
    getComponent().then(el => {
        document.body.appendChild(el)
    })
})
```

在`index.js`中使用了异步的方式去编写代码。执行打包命令后：

![1571397625017](img/1571397625017.png)

然后运行dist目录下的index.html后，发现只加载了三个文件：

<img src="img/1571397703555.png" alt="1571397703555" style="zoom:67%;" />

当触发点击事件后才加载打包的`loadsh.js`文件。

<img src="img/1571397792654.png" alt="1571397792654" style="zoom:67%;" />

这说明使用异步代码的编写方式可以实现懒加载的效果。这里是通过impor异步去加载一个模块，只有当引入的模块使用时，对应的模块才会去加载使用。

通过懒加载的方式可以使得页面加载速度更快。

简化`index.js`代码：

```js
//使用异步代码可以做懒加载
async function getComponent() {
   const{default:_} = await import(/*webpackChunkName:"loadsh"*/'loadsh')

    let element =document.createElement('div')

    element.innerHTML = _.join(['Dell','lee','-'])

    return element
}
//只有当使用时，这些异步的代码才加载。==》所以说是一个懒加载。
document.addEventListener('click',()=>{
    getComponent().then(el => {
        document.body.appendChild(el)
    })
})
```



### chunk是什么

打包后做代码分割后生成的多个js文件，每个js文件就是一个chunk。如下：有三个chunk。

![1571398938190](img/1571398938190.png)

webpack.config.js中的minChunks含义：

```js
optimization: { 
   splitChunks: { 
//如果有两个以上的chunk文件依赖于某个模块，就做代码分割。不满足就不做代码分割。
     minChunks: 2,
   }
}
```

