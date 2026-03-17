/////////////////////////////////////
// Oldalak közti váltogatás //
const navigationDiv = document.querySelector('#navigation')
const pages = document.querySelectorAll('.page')

for(const page of pages) {
    navigationDiv.innerHTML += `<span data-kiscica="miau" data-pageid="${page.id}">${page.dataset.displayname}</span>`
}

function switchPage(event) {
    console.log(event.target.dataset)
    const pageToShow = event.target.dataset.pageid
    for(const page of pages) {
        page.classList.add('hidden')
    }
    document.querySelector(`#${pageToShow}`).classList.remove('hidden')
    navigationDiv.querySelector('.current')?.classList.remove('current') // ez egy ú.n. null-coalescing operátor (?.) ami annyit csinál, hogy ha null/undefined volt előtte, nem megy tovább
    event.target.classList.add('current')
}

const navSpans = navigationDiv.querySelectorAll('span')
for(const span of navSpans) {
    span.onclick = switchPage
}




/////////////////////////////////////
// Oldalak funkciói //


/*const games = [
    { name: 'Star Wars Battlefront 2', release: 2018, category: 'shooter' },
    { name: 'Sims 4', release: 2016, category: 'simulation' },
    { name: 'Age of Mythology', release: 2002, category: 'strategy' },
]*/ // ez már nem működik, hiszen a kategórákat átcisnátuk, hogy hivatkozzon a játék a tényleges kategóriára

const categories = [
    { name: 'shooter', color: '#94d8d8' },
    { name: 'simulation', color: '#47e48b' },
    { name: 'strategy', color: '#cc7d7d' }
]

const games = [
    { name: 'Star Wars Battlefront 2', release: 2018, category: categories[0] },
    { name: 'Sims 4', release: 2016, category: categories[1] },
    { name: 'Age of Mythology', release: 2002, category: categories[2] },
]

// 1.: listázzuk a játékokat (közös)
// 2.: lehessen játékot hozzáadni (közös)
// 3.: lehessen szűrni játék neve szerint (önálló)
// 4.: lehessen szűrni kategóriák szerint (közös/önálló)
// 5.: local storage / sütik - játékok elmentése (közös; eddig nem jutottunk el)

const gameUL = document.querySelector('#game-list')

const newNameInput = document.querySelector('#new-name')
const newReleaseInput = document.querySelector('#new-release')
const newCategoryInput = document.querySelector('#new-category')
const newGameButton = document.querySelector('#add-new-game')
const newGameErrorDiv = document.querySelector('#new-game-error')

const filterNameInput = document.querySelector('#filter-name')
const filterCategorySelect = document.querySelector('#filter-category')
const filterButton = document.querySelector('#filter-button')

const newCategoryNameInput = document.querySelector('#new-category-name')
const newCategoryColorInput = document.querySelector('#new-category-color')
const newCategoryButton = document.querySelector('#add-new-category')
const newCategoryErrorDiv = document.querySelector('#new-category-error')

function listGames(gamesToList) {
    gameUL.innerHTML = ''
    for (const game of gamesToList) {
        gameUL.innerHTML += `<li>
            ${game.name}
            <span class="category" style="background-color:${game.category.color}" >${game.category.name}</span>
        </li>`
    }
}

function listCategories() {
    filterCategorySelect.innerHTML = `<option value="">Any category</option>`
    for (const category of categories) {
        filterCategorySelect.innerHTML += `<option value="${category.name}">${category.name}</option>`
    }
}

function addNewGame() {
    const newGame = {
        name: newNameInput.value,
        release: parseInt(newReleaseInput.value), // vigyázz, ezzel most levágtam a tizedest, amit esetleg beírt a felhasználó, és nem tudok rá warningot dobni, hogy nem egész számot írt be
        category: null // newCategoryInput.value // nem egászen szerencsés így csinálni, mert belerakunk egy stringet, később meg egy objektumot, így typust vált menet közben, ami nem jó kódolási gyakorlat
    }

    // if (!categories.includes(newGame.category)) { // ez már nem működik, hiszen a caregories.includes az objektumok tömbjén keres, míg a newGame.category az egy string
    // if(!categories.some(category => category.name == newGame.category)) return { success: false, error: 'A kategóriát a listából kell kiválasztani!' }

    const newGameCategory = categories.find(category => category.name == newCategoryInput.value) // ide az input értékét rakjuk, hogy ne váltson típust menet közben a newGame-category
    if(!newGameCategory) return { success: false, error: 'A kategóriát a listából kell kiválasztani!' }
    newGame.category = newGameCategory


    if (isNaN(newGame.release)) return { success: false, error: 'A megjelenés éve legyen szám!' }
    if (newGame.release < 1950) return { success: false, error: 'A megjelenés éve legyen nagyobb (vagy egyenlő) mint 1950!' }
    if (newGame.release > 2100) return { success: false, error: 'A megjelenés éve legyen kisebb (vagy egyenlő) mint 2100!' }

    return { success: true, game: newGame }
}

function appendGameAndClearFilters(newGame) {
    if (!newGame) return

    newNameInput.value = ''
    newReleaseInput.value = ''
    newCategoryInput.value = ''

    games.push(newGame)
    // listGames(games)
    gameUL.innerHTML += `<li>${newGame.name}</li>`

    filterNameInput.value = ''
    filterGames()
}

function handleNewGameButtonClick() { // handleElemneveEseményneve egy tipikus standard az eseménykezelő függvényekre
    newGameErrorDiv.innerText = ''
    const result = addNewGame()

    if (result.success) appendGameAndClearFilters(result.game)
    else newGameErrorDiv.innerText = result.error

    /*
    if (result.success) {
        // newGameErrorDiv.innerText = '' // Ezt itt is lehetne csinálni, nem muszáj az elején.
        appendGameAndClearFilters(result.game)
        // listCategories() // Ez már nem kell, hiszen nem tudunk a játékkal egyszerre új kategóriát megadni, azt külön kell felvennünk.
    } else {
        newGameErrorDiv.innerText = result.error
    }
    */
}

function filterGames() {
    const nameFilterValue = filterNameInput.value.toLowerCase()
    const categoryFilterValue = filterCategorySelect.value
    const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(nameFilterValue) &&
        (game.category.name == categoryFilterValue || categoryFilterValue == '')
    )
    listGames(filteredGames)
}

function addNewCategory() {
    const newCategory = {
        name: newCategoryNameInput.value,
        color: newCategoryColorInput.value
    }

    if(categories.some(category => category.name == newCategory.name)) return { success: false, error: 'A kategória neve legyen egyedi, még ne létezzen a kategóriák listájában!' }

    return { success: true, category: newCategory }
}

function handleNewCategoryButtonClick() {
    newCategoryErrorDiv.innerText = ''
    const result = addNewCategory()

    if(result.success) {
        categories.push(result.category)
        listCategories()
        newCategoryNameInput.value = ''
        newCategoryColorInput.value = '#FFFFFF'
    } else {
        newCategoryErrorDiv.innerText = result.error
    }
}

newGameButton.onclick = handleNewGameButtonClick
filterButton.onclick = filterGames
newCategoryButton.onclick = handleNewCategoryButtonClick

listGames(games)
listCategories()