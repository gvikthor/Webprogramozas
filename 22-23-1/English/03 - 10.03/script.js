const birdLI = document.querySelector('div ul li.bird')

/*function $(query){
    return document.querySelector(query)
}
const something = $('div ul li.dog')*/

const li = document.querySelector('li')

birdLI.innerText = 'Parrot'
console.log(birdLI)


const listItems = document.querySelectorAll('li')
for(const li of listItems){
    li.style.color = 'red'
    /* li.style.background-colod ==> backgroundColor */
}

const mammalItems = document.querySelectorAll('.mammal')
for(const mammal of mammalItems){
    mammal.style.color = 'blue'
    mammal.innerText += ' (mammal)'
}

//const animalsList = document.querySelector('div ul #animals') --> WRONG, it's looking for an animals ID element insude the UL
const animalsList = document.querySelector('div ul#animals')

//animalsList.innerHTML += '<li>Shark</li>'

//1. step: Create an element
//2. step: Fill the element with content
//3. step: Append the element to the parent

let newLI = document.createElement('li')
newLI.innerText = 'Whale'
animalsList.appendChild(newLI)

const mainDiv = document.querySelector('div')
const movies = ['Star Wars', 'Harry Potter', 'Avengers']

const newUL = document.createElement('ul')
for(const movie of movies){
    newLI = document.createElement('li')
    newLI.innerText = movie
    newUL.appendChild(newLI)
}
mainDiv.appendChild(newUL)


const characters = [
    {name: 'Luke', movie: 'Star Wars', age: 21},
    {name: 'Harry', movie: 'Harry Potter', age: 10},
    {name: 'Tony Stark', movie: 'Avengers', age: 40},
    {name: 'Aragorn', movie: 'Lord of the Rings', age: 35},
    {name: 'Captain Jack Sparrow', movie: 'Pirates of the Caribbean', age: 38}
]

const moviesTable = document.querySelector('#movies-table')

for(const character of characters){
    const newLine = document.createElement('tr')
        const firstData = document.createElement('td')
        firstData.innerText = character.name
        newLine.appendChild(firstData)

        const secondData = document.createElement('td')
        secondData.innerText = character.movie
        newLine.appendChild(secondData)

        const thirdData = document.createElement('td')
        thirdData.innerText = character.age
        newLine.appendChild(thirdData)
    moviesTable.appendChild(newLine)
}

/*
thor@inf.elte.hu
Subject: [Web] G1 Movie Table
Add a new property to the elemnts called friends.
eg.: friends: ['Leia', 'Han', 'Chewie']
Write the friends into a new UL as listitems into a new column in the table
Oct. 10. 12:00
*/

//////////////////////EVENTS///////////////////////////
function writeInnerText(e){
    console.log(e.target.innerText)
    console.log(birdLI.innerText)
}

//birdLI.addEventListener('click', writeInnerText)
//document.querySelector('.fish').addEventListener('click', writeInnerText)
/*birdLI.addEventListener('click', function (e){

})
birdLI.addEventListener('click', e => {

})*/

function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target
        let eventHandler = this
        let closestChild = eventTarget.closest(child)

        if(eventHandler.contains(closestChild)){
            what(event, closestChild)
        }
    }

    parent.addEventListener(when, eventHandlerFunction)
}

const animals = document.querySelector('#animals')
delegate(animals, 'li', 'click', (event, element) => {
    console.log(event)
    console.log(element.innerText)
})

/////////////////////

delegate(moviesTable, 'tr', 'click', (event, row) => {
    if(row.classList.contains('header')) return
    /*
    if(row.classList.contains('selected')){
        row.classList.remove('selected')
    }else{
        row.classList.add('selected')
    }*/
    row.classList.toggle('selected')
})

document.querySelector('#age-sum-button').addEventListener('click', e => {
    let sum = 0
    let selecteds = moviesTable.querySelectorAll('.selected')
    for(const selected of selecteds){
        sum += parseInt(selected.querySelectorAll('td')[2].innerText)
    }
    console.log(sum)
})