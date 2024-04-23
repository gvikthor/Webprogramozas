document.querySelector('#bg-blue').addEventListener('click', event => {
    localStorage.setItem(PHP_UNAME, 'blue')
    updatePageColor()
})

document.querySelector('#bg-red').addEventListener('click', event => {
    localStorage.setItem(PHP_UNAME, 'red')
    updatePageColor()
})

function updatePageColor(){
    const color = localStorage.getItem(PHP_UNAME) ?? 'white'
    document.body.style.backgroundColor = color
}

updatePageColor()