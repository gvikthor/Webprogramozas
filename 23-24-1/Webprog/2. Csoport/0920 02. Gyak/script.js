const mainTitle = document.querySelector('h1')
const peopleUL = document.querySelector('#people-list')

//mainTitle.innerHTML = 'Dog <i>Cat</i>'
mainTitle.innerText = 'Dog <i>Cat</i>'

let people = [
    {
        name: 'Áron',
        age: 223,
        isMarried: true,
        pets: ['dragon'],
        favouriteColor: 'red'
    },
    {
        name: 'Gergő',
        age: 27,
        isMarried: false,
        pets: ['dog', 'dog'],
        favouriteColor: 'blue'
    },
    {
        name: 'Patrik',
        age: 0,
        isMarried: false,
        pets: [],
        favouriteColor: 'green'
    },
    {
        name: 'Dalma',
        age: 10,
        isMarried: true,
        pets: ['horse','horse','dog','dog','dog','horse','horse'],
        favouriteColor: 'gray'
    }
]

/*for(const person of people){
    peopleUL.innerHTML += `<li>${person.name}</li>`
}*/

/*
- Áron (dragon)
- Gergő (dog, dog)
- Patrik ()
- Dalma (...)
*/
/*
for(const person of people){
    peopleUL.innerHTML += `<li>${person.name} (${person.pets.join(', ')})</li>`
}
*/

/*people.forEach(person => {
    peopleUL.innerHTML += `<li style="font-size: ${person.age + 10}px;">
        ${person.name} (${person.pets.join(', ')})
    </li>`
})*/

/*people.forEach(person => {
    peopleUL.innerHTML += `<li style="color: ${person.favouriteColor};">
        ${person.name} (${person.pets.join(', ')})
    </li>`
})*/


// 1. Létrehozzuk az elemet
// 2. Feltöltjük az elemet
// 3. Befűzzük az elemet
/*
for(const person of people){
    // 1.
    const newLI = document.createElement('li')

    // 2.
    newLI.innerText = `${person.name} (${person.pets.join(', ')})`

    // 3.
    peopleUL.appendChild(newLI)
}
*/


/*for(const person of people){
    const newLI = document.createElement('li')
        newLI.innerText = `${person.name} (${person.pets.join(', ')})`
        newLI.style.color = person.favouriteColor
        newLI.style.fontSize = `${person.age + 10}px`
    peopleUL.appendChild(newLI)
}*/

/*
Generáljuk ki a táblázatot.
Minden sorban legyen ott az adott ember neve, életkora és egy listában az állatai.
A sorok háttere legyen az adott ember kedvenc színe.
*/

//const peopleTableBody = document.querySelector('#peopleTable tbody')
const peopleTable = document.querySelector('#peopleTable')
const peopleBody = peopleTable.querySelector('tbody')

people.forEach(person => {
    const newTR = document.createElement('tr')
        newTR.style.backgroundColor = person.favouriteColor

        const newTD1 = document.createElement('td')
            newTD1.innerText = person.name
        newTR.appendChild(newTD1)

        const newTD2 = document.createElement('td')
            newTD2.innerText = person.age
        newTR.appendChild(newTD2)
        
        const newTD3 = document.createElement('td')
            const newUL = document.createElement('ul')
                person.pets.forEach(pet => {
                    const newLI = document.createElement('li')
                        newLI.innerText = pet
                    newUL.appendChild(newLI)
                })
            newTD3.appendChild(newUL)
        newTR.appendChild(newTD3)

    peopleBody.appendChild(newTR)
})

////////////////////////////////

const movies = [
    {
        title: 'Batman',
        year: 1989,
        director: 'Tim Burton',
        imdb: 7.6
    },
    {
        title: 'Batman Returns',
        year: 1992,
        director: 'Tim Burton',
        imdb: 7.0
    },
    {
        title: 'Batman Forever',
        year: 1995,
        director: 'Joel Schumacher',
        imdb: 5.4
    },
    {
        title: 'Batman & Robin',
        year: 1997,
        director: 'Joel Schumacher',
        imdb: 3.7
    },
    {
        title: 'Batman Begins',
        year: 2005,
        director: 'Christopher Nolan',
        imdb: 8.3
    },
    {
        title: 'The Dark Knight',
        year: 2008,
        director: 'Christopher Nolan',
        imdb: 9.0
    },
    {
        title: 'The Dark Knight Rises',
        year: 2012,
        director: 'Christopher Nolan',
        imdb: 8.5
    }
]

// Listázzuk ki egy UL-be azokat a filmeket,
// amiket nolan rendezett és legalább 8.5 az értékelésük!

const nolanUL = document.querySelector('#nolan-list')
movies
    .filter(movie => movie.director == 'Christopher Nolan')
    .filter(movie => movie.imdb >= 8.5)
    .forEach(movie => nolanUL.innerHTML += `<li>${movie.title}</li>`)

let words = ['meggyfa', 'nyitva', 'Nyx', 'meggyőz']
words.sort((a, b) => a.localeCompare(b))

console.log(words)