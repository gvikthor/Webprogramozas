const refreshListButton = document.querySelector('#refresh-list-button')
const moviesUL = document.querySelector('ul')
let movies = ['Inception', 'Superman', 'Twilight', 'Avatar']

/**
 * Delegáló függvény, ami kiváltja a sok azonos eseménykezelőt.
 * @param {HTMLElement} parent A szülő összefoglaló elem
 * @param {String} child CSS selector a gyerekre
 * @param {String} when Esemény, pl. click
 * @param {Function} what Két paraméteres függvény, első paraméter: event, mésodik az elem, amire kattintottak
 */
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

function appendToMovieList(movie) {
    moviesUL.innerHTML += `<li data-title="${movie}">Peti megnézte ${movie} filmet.</li>`
}

function word_06(word) {
    const firstLetter = word[0].toLowerCase()
    let found = 'aáeéiíoóöőuúüű'.includes(firstLetter)

    return `${found ? 'az' : 'a'} ${word}`
}

function drawMovieList() {
    moviesUL.innerHTML = ''
    movies
        .map(word_06)
        //.map(word => `${'aáeéiíoóöőuúüű'.includes(word[0].toLowerCase()) ? 'az' : 'a'} ${word}`)
        .map(appendToMovieList)

    moviesUL.innerHTML += '<li id="input-li">Peti megnézte a(z) <input id="new-movie-input"> filmet.</li>'
}

refreshListButton.addEventListener('click', drawMovieList)

delegate(moviesUL, 'li', 'click', (event, listItem) => {
    if(listItem.id == 'input-li') return
    listItem.classList.toggle('selected')
})

delegate(moviesUL, '#new-movie-input', 'keydown', (event, newMovieInput) => {
    if(event.key != 'Enter')  return
    movies.push(newMovieInput.value)
    drawMovieList()
})

document.body.addEventListener('keydown', event => {
    if(event.key != 'Delete') return
    const selectedLIs = [...moviesUL.querySelectorAll('.selected')].map(li => li.dataset.title)

    movies = movies.filter(movie => !selectedLIs.includes(word_06(movie)))
    drawMovieList()
})




//////////////////////////////////////////////////////////////

/*const movieListItems = moviesUL.querySelectorAll('li')
for(const listItem of movieListItems) {
    listItem.addEventListener('click', ()=>{
        listItem.classList.toggle('selected')
    })
}*/

function word_00(word) {
    return 'a(z) ' + word
}

function word_01(word) {
    const vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű', 'A', 'Á', 'E', 'É', 'I', 'Í', 'O', 'Ó', 'Ö', 'Ő', 'U', 'Ú', 'Ü', 'Ű']
    const firstLetter = word[0]
    let found = false
    let vi = 0
    while(vi < vowels.length && !found) {
        if(firstLetter == vowels[vi]) {
            found = true
        }
        vi++
    }

    let pre = ''
    if(found) {
        pre = 'az'
    } else {
        pre = 'a'
    }

    return `${pre} ${word}`
}

function word_02(word) {
    const vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű']
    const firstLetter = word[0].toLowerCase()
    let found = false
    let vi = 0
    while(vi < vowels.length && !found) {
        if(firstLetter == vowels[vi]) {
            found = true
        }
        vi++
    }

    let pre = ''
    if(found) {
        pre = 'az'
    } else {
        pre = 'a'
    }

    return `${pre} ${word}`
}

function word_03(word) {
    const vowels = 'aáeéiíoóöőuúüű'
    const firstLetter = word[0].toLowerCase()
    let found = false
    let vi = 0
    while(vi < vowels.length && !found) {
        if(firstLetter == vowels[vi]) {
            found = true
        }
        vi++
    }

    let pre = ''
    if(found) {
        pre = 'az'
    } else {
        pre = 'a'
    }

    return `${pre} ${word}`
}

function word_04(word) {
    const vowels = 'aáeéiíoóöőuúüű'
    const firstLetter = word[0].toLowerCase()
    //let found = [...vowels].find(letter => letter == firstLetter) // ez csak emlékeztető, hogy nem minden ami tömbnek néz ki tömb
    let found = vowels.includes(firstLetter)

    let pre = ''
    if(found) {
        pre = 'az'
    } else {
        pre = 'a'
    }

    return `${pre} ${word}`
}

function word_05(word) {
    const vowels = 'aáeéiíoóöőuúüű'
    const firstLetter = word[0].toLowerCase()
    let found = vowels.includes(firstLetter)

    // ternary operátor: kérdés ? válasz ha igaz : válasz ha hamis
    return `${found ? 'az' : 'a'} ${word}`
}

function word_07(word) {
    let found = 'aáeéiíoóöőuúüű'.includes(word[0].toLowerCase())

    return `${found ? 'az' : 'a'} ${word}`
}

function word_08(word) {
    return `${'aáeéiíoóöőuúüű'.includes(word[0].toLowerCase()) ? 'az' : 'a'} ${word}`
}

/*
movies
    .map(word_00)
    .forEach(movie => moviesUL.innerHTML += '<li>Peti megnézte ' + movie + ' filmet.</li>')
*/

/*
for(const movie of movies) {
    moviesUL.innerHTML += '<li>Peti megnézte ' + word_00(movie) + ' filmet.</li>'
}
*/

