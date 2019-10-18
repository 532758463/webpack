function getComponent() {
    return import('loadsh').then(({default:_})=>{
        let element =document.createElement('div')

        element.innerHTML = _.join(['Dell','lee','-'])

        return element
    })
}

getComponent().then(el => {
    document.body.appendChild(el)
})
