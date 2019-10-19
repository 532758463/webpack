
//使用异步代码可以做懒加载
// function getComponent() {
//     return import(/*webpackChunkName:"loadsh"*/'loadsh').then(({default:_})=>{
//         let element =document.createElement('div')

//         element.innerHTML = _.join(['Dell','lee','-'])

//         return element
//     })
// }
// //只有当使用时，这些异步的代码才加载。==》所以说是一个懒加载。
// document.addEventListener('click',()=>{
//     getComponent().then(el => {
//         document.body.appendChild(el)
//     })
// })


// import _ from 'loadsh'

// let element =document.createElement('div')

// element.innerHTML = _.join(['Dell','lee','-'])

// document.body.appendChild(element)

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
