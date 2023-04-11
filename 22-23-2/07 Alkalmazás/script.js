let newMovies = window.localStorage.getItem('movies')
//const movies = newMovies == null ? default_movies : JSON.parse(newMovies)
const movies = JSON.parse(newMovies) ?? default_movies
//window.localStorage.removeItem('movies') 

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

function averageRating(movie){
    return movie.ratings.length > 0 ? (movie.ratings.reduce((sum, current) => sum + current, 0) / movie.ratings.length) : 0
}

let SELECTED_MOVIE = null

const movieDetails = document.querySelector('#movie-details')
const moviesTable = document.querySelector('#movies-table')
//document.getElementById('movies-table')

const rateInput = document.querySelector('#movie-rate-input')
const rateButton = document.querySelector('#movie-rate-btn')

const searchDiv = document.querySelector('#search-div')
const searchInput = document.querySelector('#search-box')
const searchButton = document.querySelector('#search-btn')
const searchCheckTitle = document.querySelector('#search-check-title')
const searchCheckDirector = document.querySelector('#search-check-director')
const searchCheckCast = document.querySelector('#search-check-cast')
const searchSelectGenre = document.querySelector('#search-genre')

const genres = []
movies
    .flatMap(movie => movie.genre)
    .forEach(genre => {
        if(!genres.includes(genre)) genres.push(genre)
    }) 
genres.forEach(genre => {
    searchSelectGenre.innerHTML += `<option value="${genre}">${genre}</option>`
})

function fillDetails(movie){
    const detailsDiv = document.querySelector('#movie-details')
    //detailsDiv.classList.add()
    detailsDiv.classList.remove('hidden')
    //detailsDiv.classList.toggle()
    //detailsDiv.classList.contains()

    detailsDiv.querySelector('#movie-title').innerText = movie.title
    detailsDiv.querySelector('#movie-genres').innerText = movie.genre
    detailsDiv.querySelector('#movie-ratings').innerText = averageRating(movie).toFixed(2)
    detailsDiv.querySelector('#movie-length').innerText = movie.length + ' min'
    detailsDiv.querySelector('#movie-year').innerText = movie.year
    
    const directorsUL = detailsDiv.querySelector('#movie-directors')
    directorsUL.innerHTML = ''
    for(const director of movie.director){
        const newLI = document.createElement('li')
        newLI.innerText = director
        directorsUL.appendChild(newLI)
    }

    const castUL = detailsDiv.querySelector('#movie-cast')
    castUL.innerHTML = ''
    for(const cast of movie.cast){
        const newLI = document.createElement('li')
        newLI.innerText = cast
        castUL.appendChild(newLI)
    }

    detailsDiv.querySelector('#movie-desc').innerText = movie.description
}

function generateMovieList(searchString = '', searchTitle = true, searchDirector = true, searchCast = true, searchGenre = 'ANY'){
    function isMatchingMovie(movie){
        const searchValue = searchString.toLocaleLowerCase()
        return searchValue == '' || (
            (searchTitle && (movie.title.toLocaleLowerCase().includes(searchValue) || closeEnough(movie.title.toLocaleLowerCase(), searchValue, 0.6))) || // cím
            (searchDirector && movie.director.some(d => closeEnough(d.toLocaleLowerCase(), searchValue, 0.6))) || // rendezők
            (searchCast && movie.cast.some(c => closeEnough(c.toLocaleLowerCase(), searchValue, 0.6))) // színészek
           ) && (searchGenre == 'ANY' || movie.genre.includes(searchGenre))

        return (
                (searchTitle && movie.title.toLocaleLowerCase().includes(searchValue)) || // cím
                (searchDirector && movie.director.some(d => d.toLocaleLowerCase().includes(searchValue))) || // rendezők
                (searchCast && movie.cast.some(c => c.toLocaleLowerCase().includes(searchValue))) // színészek
               ) && (searchGenre == 'ANY' || movie.genre.includes(searchGenre))
    }
    moviesTable.innerHTML = ''
    //const filteredMovies = movies.filter(movie => valami)
    for(const movie of movies){
        if(!isMatchingMovie(movie)) continue

        const newRow = document.createElement('tr')
            let newTD = document.createElement('td')
            newTD.innerText = movie.title
            newRow.appendChild(newTD)

            newTD = document.createElement('td')
            newTD.innerText = movie.year
            newRow.appendChild(newTD)

            newTD = document.createElement('td')
            newTD.innerText = averageRating(movie).toFixed(2)
            newRow.appendChild(newTD)

            newTD = document.createElement('td')
            //newTD.innerHTML = `<button data-id="${movie.id}">Details</button>`
                const newButton = document.createElement('button')
                newButton.innerText = 'Details'
                //newButton.dataset.id = movie.id
                newButton.setAttribute('data-id', movie.id)
                //newButton.getAttribute('data-id)
                newTD.appendChild(newButton)
            newRow.appendChild(newTD)
        moviesTable.appendChild(newRow)
    }
}

generateMovieList()
function generateMovieListWithSearch(){
    const searchValue = searchInput.value.trim()
    generateMovieList(
        searchValue.length < 3 ? '' : searchValue,
        searchCheckTitle.checked, searchCheckDirector.checked, searchCheckCast.checked,
        searchSelectGenre.value
    )
}

delegate(moviesTable, 'button', 'click', (event, elem) => {
    SELECTED_MOVIE = movies.find(movie => movie.id == elem.dataset.id)
    fillDetails(SELECTED_MOVIE)
})

delegate(searchDiv, '.update-search', 'input', (event, elem) => {
    generateMovieListWithSearch()
})

rateButton.addEventListener('click', event => {
    movies.find(movie => movie.id == SELECTED_MOVIE.id).ratings.push(parseFloat(rateInput.value.trim()))
    generateMovieListWithSearch()
    window.localStorage.setItem('movies', JSON.stringify(movies))
})

/*searchButton.addEventListener('click', event => {
    generateMovieList(searchInput.value.trim())
})*/

/*searchInput.addEventListener('input', event => {
    /*if(searchInput.value.trim().length < 3) generateMovieList()
    generateMovieList(searchInput.value.trim())* /

    const searchValue = searchInput.value.trim()
    generateMovieList(searchValue.length < 3 ? '' : searchValue, searchCheckTitle.checked, searchCheckDirector.checked, searchCheckCast.checked)
})*/