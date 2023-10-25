/*
window.localStorage.setItem('people', JSON.stringify([
    {
        "name": "Gergő",
        "age": 25
    },
    {
        "name": "Áron",
        "age": 11
    }
]))

JSON.parse(window.localStorage.getItem('people'))

window.localStorage.removeItem('people')
*/
/*
const moviesTemp = [
    {
        id: 1,
        title: 'Batman',
        year: 1989,
        director: 'Tim Burton'
    },
    {
        id: 2,
        title: 'Dune',
        year: 2021,
        director: 'Denis Villeneuve'
    },
    {
        id: 3,
        title: 'The Matrix',
        year: 1999,
        director: 'Lana Wachowski'
    }
]
window.localStorage.setItem('movies', JSON.stringify(moviesTemp))
window.localStorage.setItem('nextID', 4)
*/
const moviesUL = document.querySelector('#movies')
const searchInput = document.querySelector('#search')
let searchTerm = ''

function $(parent = document.body, child = 'div', fillerFunction = null){
    const newElem = document.createElement(child)
    fillerFunction(newElem)
    parent.appendChild(newElem)
    return newElem
}
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
function pushToLocalStorage(attribute, value){
    const array = JSON.parse(window.localStorage.getItem(attribute))
    array.push(value)
    window.localStorage.setItem(attribute, JSON.stringify(array))
    return value
}

function movieToString(movie){
    return `🎥${movie.title} | 👤${movie.director} (🗓️${movie.year}) <span class="delete" data-movieid="${movie.id}">🚯</span>`
}

function render(){
    let movies = JSON.parse(window.localStorage.getItem('movies'))
    if(searchTerm.trim() != ''){
        movies = movies.filter(
            movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }
    moviesUL.innerHTML = ''
    movies.forEach(movie => $(
        moviesUL,
        'li',
        elem => elem.innerHTML = movieToString(movie)
    ))
}

const newMovieForm = document.querySelector('#new-movie')
newMovieForm.addEventListener('submit', event => {
    event.preventDefault()
    let nextID = parseInt(window.localStorage.getItem('nextID'))
    const movie = pushToLocalStorage('movies', {
        id: nextID,
        title: newMovieForm.title.value,
        year: newMovieForm.year.value,
        director: newMovieForm.director.value
    })
    // $(moviesUL, 'li', elem => elem.innerHTML = movieToString(movie))
    render()

    newMovieForm.title.value = ''
    newMovieForm.year.value = ''
    newMovieForm.director.value = ''
    window.localStorage.setItem('nextID', nextID + 1)
})

delegate(moviesUL, '.delete', 'click', (event, elem) => {
    const deleteID = elem.dataset.movieid
    const movies = JSON.parse(window.localStorage.getItem('movies'))
    window.localStorage.setItem(
        'movies',
        JSON.stringify(movies.filter(movie => movie.id != deleteID))
    )
    render()
})

searchInput.addEventListener('input', event => {
    searchTerm = searchInput.value
    render()
})

render()