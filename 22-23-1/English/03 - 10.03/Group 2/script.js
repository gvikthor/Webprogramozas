const moviesList = document.querySelector('#movies')

console.log(
    moviesList.innerText
)

/*
document.querySelector('#movies li.hb').innerText = 'The Hobbit'
document.querySelector('#movies li.hsm').innerText += ' 2'
*/
moviesList.querySelector('li.lotr').innerText = 'The Hobbit'
moviesList.querySelector('li.hsm').innerText += ' 2'



//1. step: Creating the element
//2. step: Fill the element with content
//3. step: Appending to a parent

//moviesList.innerHTML += '<li id="trf">Transformers</li>'
const newMovie = document.createElement('li')
    newMovie.innerText = 'Transformers'
    newMovie.classList.add('trf')
    newMovie.style.color = 'blue'
moviesList.appendChild(newMovie)
//document.body.appendChild(...)

const movies = [
    {title: 'The Empire Strikes Back', universe: 'sw'},
    {title: 'High School Musical 1', universe: 'hsm'},
    {title: 'Transformers 2', universe: 'trf'},
    {title: 'The Return of the King', universe: 'lotr'}
]

for(const movie of movies){
    const newListItem = document.createElement('li')
        newListItem.innerText = movie.title
        newListItem.classList.add(movie.universe)
    moviesList.appendChild(newListItem)
}

moviesList
    .querySelectorAll('li.sw')
    .forEach(movie => {
        //movie.style.color = 'red'
        movie.classList.add('blue')
    })

/*for(const movie of starWarsMovies){

}*/

const charTable = document.querySelector('#characters tbody')
const characters = [
    {name: 'Luke Skywalker', universe: 'Star Wars', age: 21},
    {name: 'Shrek', universe: 'Shrek', age: 18},
    {name: 'Donkey', universe: 'Shrek', age: 7},
    {name: 'Puss in Boots', universe: 'Shrek', age: 7},
    {name: 'Fiona', universe: 'Shrek', age: 19},
    {name: 'Darth Vader', universe: 'Star Wars', age: 40},
    {name: 'Princess Leia', universe: 'Star Wars', age: 21}
]

for(const character of characters){
    const newRow = document.createElement('tr')
        const firstData = document.createElement('td')
        firstData.innerText = character.name
        newRow.appendChild(firstData)

        const secondData = document.createElement('td')
        secondData.innerText = character.universe
        newRow.appendChild(secondData)

        const thirdData = document.createElement('td')
        thirdData.innerText = character.age
        newRow.appendChild(thirdData)
    charTable.appendChild(newRow)
}

/*
thor@inf.elte.hu
october 10. 14:00
Subject: [Web] G2 Charcters
{name: 'Luke Skywalker', universe: 'Star Wars', age: 21, friends: ['Leia', 'Han', 'Chewie']}

    Generate the table with 4 colums instad of 3, the third one
    containing always an unordered list with the current character's friends

    |Luke Skywalker|Star Wars|21|- Leia
    |              |         |  |- Han
    |              |         |  |- Chewie
    --------------------------------------
    |Shrek         |Shrek    |18|- 
*/


////////////////////EVENTS/////////////////////////

const interstellarMovie = document.querySelector('#movies li.is')

function doSomething(event){
    console.log(event.target.innerText)
}

//interstellarMovie.addEventListener('click', doSomething)


function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target;
        let eventHandler = this;
        let closestChild = eventTarget.closest(child);

        if(eventHandler.contains(closestChild)){
            what(event, closestChild);
        }
    }

    parent.addEventListener(when, eventHandlerFunction);
}

function doSomething2(event, element){
    console.log(element.innerText)
}

delegate(moviesList, 'li', 'click', doSomething2)

///////////////////////////////////////////
function selectRow(event, element){
    element.classList.toggle('selected')
    /*if(element.classList.contains('selected')){
        element.classList.remove('selected')
    }else{
        element.classList.add('selected')
    }*/
}
delegate(charTable, 'tr', 'click', selectRow)

/*
sum = 0
charTable.querySelectorAll('.selected').forEach(row => {
 sum += row.querySelectorAll('td')[2].innerText
})
*/