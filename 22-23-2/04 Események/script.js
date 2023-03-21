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

const movieDetails = document.querySelector('#movie-details')
const moviesTable = document.querySelector('#movies-table')
//document.getElementById('movies-table')

function fillDetails(movie){
    const detailsDiv = document.querySelector('#movie-details')
    //detailsDiv.classList.add()
    detailsDiv.classList.remove('hidden')
    //detailsDiv.classList.toggle()
    //detailsDiv.classList.contains()

    detailsDiv.querySelector('#movie-title').innerText = movie.title
    detailsDiv.querySelector('#movie-genres').innerText = movie.genre
    detailsDiv.querySelector('#movie-ratings').innerText = averageRating(movie)
    detailsDiv.querySelector('#movie-length').innerText = movie.length + ' min'
    detailsDiv.querySelector('#movie-year').innerText = movie.year
    
    const directorsUL = detailsDiv.querySelector('#movie-directors')
    for(const director of movie.director){
        const newLI = document.createElement('li')
        newLI.innerText = director
        directorsUL.appendChild(newLI)
    }

    const castUL = detailsDiv.querySelector('#movie-cast')
    for(const cast of movie.cast){
        const newLI = document.createElement('li')
        newLI.innerText = cast
        castUL.appendChild(newLI)
    }

    detailsDiv.querySelector('#movie-desc').innerText = movie.description
}

for(const movie of movies){
    const newRow = document.createElement('tr')
        let newTD = document.createElement('td')
        newTD.innerText = movie.title
        newRow.appendChild(newTD)

        newTD = document.createElement('td')
        newTD.innerText = movie.year
        newRow.appendChild(newTD)

        newTD = document.createElement('td')
        newTD.innerText = averageRating(movie)
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

delegate(moviesTable, 'button', 'click', (event, elem) => {
    fillDetails(movies.find(movie => movie.id == elem.dataset.id))
})