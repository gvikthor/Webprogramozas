const moviesUL = document.querySelector('ul')
let movies = ['Eredet', 'Barbie', 'Űrodüsszeia', 'Verdák']

function addMovie(title) {
    if (title.trim() == '') return false
    if (movies.includes(title)) return false

    movies.push(title)
    return true
}

function deleteMovie(title) {
    movies = movies.filter(movie => movie != title)
}


/**
 * Delegáló függvény, ami kiváltja a sok azonos eseménykezelőt.
 * @param {HTMLElement} parent A szülő összefoglaló elem
 * @param {String} child CSS selector a gyerekre
 * @param {String} when Esemény, pl. click
 * @param {Function} what Két paraméteres függvény, első paraméter: event, mésodik az elem, amire kattintottak
 */
function delegate(parent, child, when, what) {
    function eventHandlerFunction(event) {
        let eventTarget = event.target;
        let eventHandler = this;
        let closestChild = eventTarget.closest(child);

        if (eventHandler.contains(closestChild)) {
            what(event, closestChild);
        }
    }

    parent.addEventListener(when, eventHandlerFunction);
}

function article_5(word) {
    const vowels = 'aáeéiíoóöőuúüű'
    const firstLetter = word[0]?.toLowerCase() // null coalescing operator

    let found = vowels.includes(firstLetter)
    return found ? 'az' : 'a'
}

function drawMoviesList() {
    moviesUL.innerHTML = ''
    for (const movie of movies) {
        //moviesUL.innerHTML += '<li>' + movie + '</li>'
        //moviesUL.innerHTML += `<li>Peti megnézte ${'aáeéiíoóöőuúüű'.includes(movie[0].toLowerCase()) ? 'az' : 'a'} ${movie} filmet</li>`
        moviesUL.innerHTML += `<li data-title="${movie}">Peti megnézte ${article_5(movie)} ${movie} filmet</li>`
    }
    moviesUL.innerHTML += '<li id="input-li">Peti megnézte a(z) <input> filmet.</li>'
}

delegate(moviesUL, 'li', 'click', (event, li) => {
    if (li.id == 'input-li') return

    li.classList.toggle('selected')
})

delegate(moviesUL, 'input', 'keydown', (event, input) => {
    if (event.key != 'Enter') return
    if (addMovie(input.value)) {
        drawMoviesList()
        // A draw miatt megszűnt az input elem létezni, meg kell keresni újra
        moviesUL.querySelector('input').focus()
    }
})

document.body.addEventListener('keydown', event => {
    if (event.key == 'Delete') {
        const selectedMovies = moviesUL.querySelectorAll('li.selected')
        for (const movieLI of selectedMovies) {
            deleteMovie(movieLI.dataset.title)
        }
        drawMoviesList()
    }
})

drawMoviesList()



//////////////////////////////////////////


/*
const exampleLI = document.querySelector('li')
exampleLI.addEventListener('click', () => {
    exampleLI.classList.toggle('selected')
})
*/

/*
exampleLI.classList.add('selected')
exampleLI.classList.remove('selected')
exampleLI.classList.toggle('selected')
*/


// névelő
function article_0(word) {
    return 'a(z)'
}

function article_1(word) {
    const vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű', 'A', 'Á', 'E', 'É', 'I', 'Í', 'O', 'Ó', 'Ö', 'Ő', 'U', 'Ú', 'Ü', 'Ű']
    const firstLetter = word[0]

    let found = false
    let vowel_index = 0
    while (vowel_index < vowels.length && !found) {
        if (firstLetter == vowels[vowel_index]) {
            found = true
        }
        vowel_index++
    }

    let article = ''
    if (found) {
        article = 'az'
    } else {
        article = 'a'
    }

    return article
}

function article_2(word) {
    const vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű']
    const firstLetter = word[0].toLowerCase()

    let found = false
    let vowel_index = 0
    while (vowel_index < vowels.length && !found) {
        if (firstLetter == vowels[vowel_index]) {
            found = true
        }
        vowel_index++
    }

    let article = ''
    if (found) {
        article = 'az'
    } else {
        article = 'a'
    }

    return article
}

function article_3(word) {
    const vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű']
    const firstLetter = word[0].toLowerCase()

    let found = false
    let vowel_index = 0
    while (vowel_index < vowels.length && !found) {
        if (firstLetter == vowels[vowel_index]) {
            //found = true
            return 'az'
        }
        vowel_index++
    }

    return 'a'

    let article = ''
    if (found) {
        article = 'az'
    } else {
        article = 'a'
    }

    return article
}

function article_3(word) {
    const vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű']
    const firstLetter = word[0].toLowerCase()

    let found = false
    let vowel_index = 0
    while (vowel_index < vowels.length && !found) {
        if (firstLetter == vowels[vowel_index]) {
            found = true
        }
        vowel_index++
    }

    // ternary / trináris operator
    // eldöntendő kérdés ? válasz ha igaz : válasz ha hamis
    return found ? 'az' : 'a'
}

function article_4(word) {
    const vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű']
    const firstLetter = word[0].toLowerCase()

    let found = vowels.includes(firstLetter)
    return found ? 'az' : 'a'
}



function article_6(word) {
    const vowels = 'aáeéiíoóöőuúüű'
    const firstLetter = word[0].toLowerCase()

    return vowels.includes(firstLetter) ? 'az' : 'a'
}

function article_7(word) {
    return 'aáeéiíoóöőuúüű'.includes(word[0].toLowerCase()) ? 'az' : 'a'
}