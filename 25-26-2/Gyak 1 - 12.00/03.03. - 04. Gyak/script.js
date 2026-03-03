const games = [
    { name: 'Star Wars Battlefront 2', release: 2018, category: 'shooter'},
    { name: 'Sims 4', release: 2016, category: 'simulation'},
    { name: 'Age of Mythology', release: 2002, category: 'strategy'},
]

const categories = ['shooter', 'simulation', 'strategy']

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
const filterNameInput = document.querySelector('#filter-name')
const filterCategorySelect = document.querySelector('#filter-category')
const filterButton = document.querySelector('#filter-button')

function listGames(gamesToList) {
    gameUL.innerHTML = ''
    for(const game of gamesToList) {
        gameUL.innerHTML += `<li>
            ${game.name}
            <span class="category ${game.category}">${game.category}</span>
        </li>`
    }
}

function listCategories() {
    filterCategorySelect.innerHTML = `<option value="">Any category</option>`
    for(const category of categories) {
        filterCategorySelect.innerHTML += `<option value="${category}">${category}</option>`
    }
}

function addNewGame() {
    const newGame = {
        name: newNameInput.value,
        release: parseInt(newReleaseInput.value), // vigyázz, ezzel most levágtam a tizedest, amit esetleg beírt a felhasználó, és nem tudok rá warningot dobni, hogy nem egész számot írt be
        category: newCategoryInput.value
    }

    if(!categories.includes(newGame.category)) {
        categories.push(newGame.category)
    }

    if(isNaN(newGame.release)) return null
    if(newGame.release < 1950) return null
    if(newGame.release > 2100) return null

    return newGame
}

function appendGameAndClearFilters(newGame) {
    if(!newGame) return

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
    const newGame = addNewGame()
    appendGameAndClearFilters(newGame)
    listCategories()
}

function filterGames() {
    const nameFilterValue = filterNameInput.value.toLowerCase()
    const categoryFilterValue = filterCategorySelect.value
    const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(nameFilterValue) &&
        (game.category == categoryFilterValue || categoryFilterValue == '')
    )
    listGames(filteredGames)
}

newGameButton.onclick = handleNewGameButtonClick
filterButton.onclick = filterGames

listGames(games)
listCategories()