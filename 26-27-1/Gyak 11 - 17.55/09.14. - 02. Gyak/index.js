/* Spread operátor
let numbers = [1,2,3,4]
function addFourNumbers(a,b,c,d) {
    return a+b+c+d
}
console.log(addFourNumbers(...numbers))
console.log([...document.querySelectorAll('li')])
*/

// shallow copy vs deep copy
/*
const person1 = { name: 'Peter' }
const person2 = person1
//person2 = { name: 'Aaron' }
person2.name = 'George'
console.log(person1.name)
*/

// something = document.getelementById('example')
// something = document.querySelector('#example')
const pageTitle = document.querySelector('h1')
//pageTitle.innerText = '<i>Something</i>'
//pageTitle.innerHTML = '<i>Something</i>'

const usernameSpan = pageTitle.querySelector('span')
usernameSpan.innerText = 'Mate'

const fruitsItems = document.querySelectorAll('#fruit-list li')
for(const fruitItem of fruitsItems) {
    fruitItem.innerText += ' Dreher'
}

function logCat() {
    console.log('cat')
}

function logDog() {
    console.log('dog')
}

//pageTitle.addEventListener('click', logCat)
//pageTitle.removeEventListener('click', logCat)

/*
pageTitle.onclick = logCat
pageTitle.onclick = logDog
*/

pageTitle.addEventListener('click', (event) => {
    console.log(event)
})
