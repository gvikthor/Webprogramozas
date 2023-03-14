// document.querySelector('ul .person li:last-child') bármilyen helyes CSS selectorral működik

const list = document.querySelector('ul')

console.log(list.innerHTML)

//list.innerHTML = list.innerHTML + '<li>Peach</li>'

const newListItem = document.createElement('li')
//newListItem.innerHTML = '<b>Peach</b>'
newListItem.innerText = '<b>Peach</b>'
list.appendChild(newListItem)

// 1. Új elem létrehozása
// 2. Új elem tartalmának beállítása
// 3. Új elem hozzáadása a DOM-hoz

/*const something = {
    name: 'Apple',
    color: 'red',
    taste: 'sweet',
    price: 100,
    isAvailable: true,
    whoLikesIt: ['John', 'Jane', 'Jack']
}
console.log(something.whoLikesIt[1])*/

const foods = [
    {name: 'Apple', color: 'red'},
    {name: 'Banana', color: 'yellow'},
    {name: 'Orange', color: 'orange'},
    {name: 'Kiwi', color: 'green'}
]

const newTable = document.createElement('table')
for(const food of foods){
    const newTr = document.createElement('tr')
        let newTd = document.createElement('td')
        newTd.innerText = food.name
        newTr.appendChild(newTd)

        newTd = document.createElement('td')
        newTd.innerText = food.color
        newTr.appendChild(newTd)
    newTable.appendChild(newTr)
}
document.body.appendChild(newTable)

const words = ['nyitva', 'Nyx', 'nyávog', 'meggyfa', 'meggyőz']

const wordList = document.createElement('ol')
words
    .map(word => word.toLocaleLowerCase())
    .sort((a, b) => a > b)
    .forEach(word => {
        const newLi = document.createElement('li')
        newLi.innerText = word
        wordList.appendChild(newLi)
    })
document.body.appendChild(wordList)

///////////////////////////////////////

const people = [
    {name: 'John', age: 20, movies: ['The Matrix', 'The Notebook', 'E.T.']},
    {name: 'Jane', age: 25, movies: ['Star Wars', 'The Avengers', 'Kill Bill']},
    {name: 'Jack', age: 30, movies: ['The Lion King', 'The Avengers']},
    {name: 'Jill', age: 35, movies: ['Game of Thrones', 'Mandalorian']}
]


const moviesOfPeople = people.filter(person => person.age < 30).map(person => person.movies)

/*const movies = []
for(const person of moviesOfPeople){
    for(const movie of person){
        movies.push(movie)
    }
}*/

const moviesList = document.createElement('ul')
people
    .filter(person => person.age < 30)
    .flatMap(person => person.movies)
    .sort((m1, m2) => m1 > m2)
    .forEach(movie => {
        const newLi = document.createElement('li')
        newLi.innerText = movie
        moviesList.appendChild(newLi)
    })
document.body.appendChild(moviesList)

///////////////////////////////////
