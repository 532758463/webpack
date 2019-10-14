import  indexCss from './css/style.css'
// let root = document.getElementById('root')
// root.classList.add(indexCss['side'])
// // console.log(a)

// let btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn)
// btn.onclick = function() {
//     let div = document.createElement('div')
//     div.innerHTML = 'itme'
//     document.body.appendChild(div)
// }
// root.innerHTML='<div>12347</div>'


import number from './number'
import counter from './counter'

counter()
number()

//如果一个模块发生了变化，而另一个模块没有发生变化，那么只想更新变化的模块，怎么做呢？
if(module.hot) {
    //监控模块的变化
    module.hot.accept('./number',()=>{
        document.body.removeChild( document.getElementById('number'))
        number()
    })
}