document.querySelector('button').addEventListener('click', e => {
    /*while(true) {
        console.log('Hello there!')
    }*/

}) 

function infiniteTimeout() {
    setTimeout(_ => {
        console.log('Hello There')
        infiniteTimeout()
    }, 0)
}

infiniteTimeout()