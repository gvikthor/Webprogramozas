//console.log(document)
//console.log(document.body.innerText)

//document.body.innerHTML += '<div>Movie page</div>'

/*
CSS selectorok példa
ul#filmek b {
    ...
}
.piros {
    ...
}

#id
.class
*/


/*console.log(moviesUL.innerHTML)*/
//moviesUL.innerHTML += '<li>Rogue One: A Star Wars Story</li>'

const movies = [
    'Star Wars: The Force Awakens',
    'Star Wars: The Last Jedi',
    'Star Wars: The Rise of Skywalker',
    'Rogue One: A Star Wars Story',
    'Solo: A Star Wars Story',
    'Star Wars: Episode I - The Phantom Menace',
    'Star Wars: Episode II - Attack of the Clones',
    'Star Wars: Episode III - Revenge of the Sith',
    'Star Wars: Episode IV - A New Hope',
    'Star Wars: Episode V - The Empire Strikes Back',
    'Star Wars: Episode VI - Return of the Jedi'
]
const moviesUL = document.querySelector('#movies')
/*for(const movie of movies){
    moviesUL.innerHTML += `<li>${movie}</li>` // '<li>' + movie + '</li>'
}*/
//movies.forEach(movie => moviesUL.innerHTML += `<li>${movie}</li>`)

//const movieLIs = document.querySelectorAll('#movies li')
//const movieLIs = moviesUL.querySelectorAll('li')
/*for(const movieLI of movieLIs){
    movieLI.innerText = `🫡 ${movieLI.innerText}` // 'emoji' + movieLI.innerText
}*/

///////////////////////////////////////////////////////////////////

// 1.: létrehoz
// 2.: feltölt
// 3.: befűz
/*
for(const movie of movies){
    const newLI = document.createElement('li')
        newLI.innerText = movie
        newLI.style.backgroundColor = 'red'
        newLI.style.fontSize = '35px'
        newLI.dataset.title = 'valami'
    moviesUL.appendChild(newLI)
}*/


const movieObjects = [
    {
        title: 'Star Wars: The Force Awakens',
        year: 2015,
        director: 'J. J. Abrams',
        cast: [
            'Harrison Ford',
            'Mark Hamill',
            'Carrie Fisher',
            'Adam Driver'
        ]
    },
    {
        title: 'Star Wars: The Last Jedi',
        year: 2017,
        director: 'Rian Johnson',
        cast: [
            'Mark Hamill',
            'Carrie Fisher',
            'Adam Driver'
        ]
    },
    {
        title: 'Batman Begins',
        year: 2005,
        director: 'Christopher Nolan',
        cast: [
            'Christian Bale',
            'Michael Caine',
            'Liam Neeson',
            'Katie Holmes'
        ]
    },
    {
        title: 'The Dark Knight',
        year: 2008,
        director: 'Christopher Nolan',
        cast: [
            'Christian Bale',
            'Heath Ledger',
            'Aaron Eckhart',
            'Michael Caine'
        ]
    }
]

for(const movieObject of movieObjects){
    const newLI = document.createElement('li')
        newLI.innerText = `${movieObject.title} (${movieObject.year} | ${movieObject.director})`
        newLI.style.fontSize = `${movieObject.year - 2000}px`
    moviesUL.appendChild(newLI)
}

const moviesTBody = document.querySelector('#moviesTable tbody')

function createAndAppend(parent = document.body, child = 'div'){
    const newElem = document.createElement(child)
    parent.appendChild(newElem)
    return newElem
}

function $(parent = document.body, child = 'div', fillerFunction = null){
    const newElem = document.createElement(child)
    fillerFunction(newElem)
    parent.appendChild(newElem)
    return newElem
}

/*
for(const movie of movieObjects){
    const newTR = document.createElement('tr')
        const newTD1 = document.createElement('td')
            newTD1.innerText = movie.title
        newTR.appendChild(newTD1)
        
        const newTD2 = document.createElement('td')
            newTD2.innerText = movie.director
        newTR.appendChild(newTD2)

        const newTD3 = document.createElement('td')
            newTD3.innerText = movie.year
        newTR.appendChild(newTD3)

        const newTD4 = document.createElement('td')
            const newUL = document.createElement('ul')

            newTD4.appendChild(newUL)
        newTR.appendChild(newTD4)
    moviesTBody.appendChild(newTR)
}
*/

/*
for(const movie of movieObjects){
    const newTR = createAndAppend(moviesTBody, 'tr')
        const newTD1 = createAndAppend(newTR, 'td')
            newTD1.innerText = movie.title
        
        const newTD2 = createAndAppend(newTR, 'td')
            newTD2.innerText = movie.director

        const newTD3 = createAndAppend(newTR, 'td')
            newTD3.innerText = movie.year

        const newTD4 = createAndAppend(newTR, 'td')
            const newUL = createAndAppend(newTD4, 'ul')
                for(const member of movie.cast){
                    const newLI = createAndAppend(newUL, 'li')
                        newLI.innerText = member
                }
}
*/

for(const movie of movieObjects){
    $(moviesTBody, 'tr', tr => {
        $(tr, 'td', td => td.innerText = movie.title)
        $(tr, 'td', td => td.innerText = movie.director)
        $(tr, 'td', td => td.innerText = movie.year)
        $(tr, 'td', tr => $(
            tr, 'ul',
            ul => movie.cast.forEach(
                member => $(
                    ul, 'li',
                    li => li.innerText = member
                )
            )
        ))
    })    
}