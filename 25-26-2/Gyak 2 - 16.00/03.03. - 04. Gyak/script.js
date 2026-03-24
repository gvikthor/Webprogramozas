const allGames = [
    { name: 'Fifa 24', year: 2023, category: 'sport' },
    { name: 'Star Wars Battlefront 2', year: 2005, category: 'shooter' },
    { name: 'Dune Spice Wars', year: 2023, category: 'strategy' },
]

const allCategories = ['sport', 'shooter', 'strategy']

const inputNewGameName = document.querySelector('#new-game-name')
const inputNewGameYear = document.querySelector('#new-game-year')
const inputNewGameCategory = document.querySelector('#new-game-category')
const buttonNewGame = document.querySelector('#new-game-button')
const errorDiv = document.querySelector('#new-game-error')

const inputFilterName = document.querySelector('#filter-name')
const selectFilterCategory = document.querySelector('#filter-category')
const buttonFilter = document.querySelector('#filter-button')
const gamesUL = document.querySelector('#game-list')

function clearInputs() {
    inputNewGameName.value = ''
    inputNewGameYear.value = ''
    inputNewGameCategory.value = ''
}

function generateGameList(games) {
    gamesUL.innerHTML = ''
    for(const game of games) {
        gamesUL.innerHTML += `<li>${game.name}</li>`
    }
}

function generateCategoryOptions(categories) {
    selectFilterCategory.innerHTML = '<option value="">any</option>'
    for(const category of categories) {
        selectFilterCategory.innerHTML += `<option value="${category}">${category}</option>`
    }
}

function addGameToList() {
    const newGame = {
        name: inputNewGameName.value,
        year: inputNewGameYear.value,
        category: inputNewGameCategory.value
    }

    if(isNaN(newGame.year)) return 'The release year is not a number!'
    if(parseInt(newGame.year) != parseFloat(newGame.year)) return 'The release year is not a whole number!'
    newGame.year = parseInt(newGame.year) // new muszáj
    if(newGame.year > 2100) return 'The release year is too big (above 2100)!'
    if(newGame.year < 1950) return 'The release year is too small (below 1950)!'

    allGames.push(newGame)
    if(!allCategories.includes(newGame.category)) allCategories.push(newGame.category)
    generateGameList(allGames)
    generateCategoryOptions(allCategories)

    return '✅ Game added.'
}

function handleButtonNewGameClick() { // handle Elemneve Eseményneve
    errorDiv.innerHTML = addGameToList()
}

function handleFilterButtonClick() {
    const nameFilterValue = inputFilterName.value.toLowerCase()
    const categoryFilterValue = selectFilterCategory.value.toLowerCase()
    const filteredGames = allGames.filter(game => 
        game.name.toLowerCase().includes(nameFilterValue) &&
        (game.category.toLowerCase() == categoryFilterValue || categoryFilterValue == '')
    )
    generateGameList(filteredGames)
}

buttonNewGame.onclick = handleButtonNewGameClick
buttonFilter.onclick = handleFilterButtonClick
generateGameList(allGames)
generateCategoryOptions(allCategories)
clearInputs()