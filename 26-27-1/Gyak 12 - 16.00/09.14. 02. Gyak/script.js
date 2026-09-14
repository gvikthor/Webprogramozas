console.log(document.querySelector('li'))
console.log(document.querySelectorAll('li'))

let example = [1,2,3,4]

function addFourNumbers(a,b,c,d) {
    return a+b+c+d
}

//console.log(addFourNumbers(...example))

let listItems = [...document.querySelectorAll('li')]

console.log(listItems)

/////////////////////////////////////////

//let headerTitle = document.querySelector('h1')
let headerTitle = document.querySelector('#main-title')

//headerTitle.innerText = '<i>Something</i>'
//headerTitle.innerHTML = '<i>Something</i>'

//let userNameInTile = document.querySelector('#main-title span')
let userNameInTitle = headerTitle.querySelector('span')
userNameInTitle.innerText = 'Aaron'

userNameInTitle.classList.add('red')
userNameInTitle.classList.remove('red')
userNameInTitle.classList.toggle('red')
console.log(userNameInTitle.classList.contains('red'))

/////////////////////////////////////////////

//document.querySelector('body')

document.body.addEventListener('click', event => {
    console.log(event)
})

/*function logClickText() {
    console.log('cat')
}*/
//document.body.addEventListener('click', logClickText)
//document.body.removeEventListener('click', logClickText)
//document.body.onClick = logClickText