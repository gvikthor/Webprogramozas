const allGames = [
    { name: 'Fifa 24', year: 2023, category: 'sport' },
    { name: 'Star Wars Battlefront 2', year: 2005, category: 'shooter' },
    { name: 'Dune Spice Wars', year: 2024, category: 'strategy' },
]
const allCategories = ['sport', 'shooter', 'strategy']

const inputNewGameName = document.querySelector('#new-game-name')
const inputNewGameYear = document.querySelector('#new-game-year')
const inputNewGameCategory = document.querySelector('#new-game-category')
const buttonAddNewGame = document.querySelector('#add-new-game-btn')
const divErrors = document.querySelector('#errors')
const inputFilterName = document.querySelector('#filter-name')
const selectFilterCategory = document.querySelector('#filter-category')
const buttonFilter = document.querySelector('#filter-btn')
const gamesUL = document.querySelector('#game-list')

function generateGameList(games) {
    gamesUL.innerHTML = ''
    for(const game of games) {
        gamesUL.innerHTML += `<li>${game.name}</li>`
    }
}

function generateCategories(categories) {
    selectFilterCategory.innerHTML = '<option value="">all</option>'
    for(const category of categories) {
        selectFilterCategory.innerHTML += `<option value="${category}">${category}</option>`
    }
}

function checkNewGameYear(newGame) {
    if(isNaN(newGame.year)) return 'The release year must be a whole number!'
    if(parseInt(newGame.year) != parseFloat(newGame.year)) return 'The release year must be a whole number!'
    if(newGame.year < 1950) return 'The release year must be at least 1950!'     // érdemes észben tartani, hogy a newGame.year az egy string, de a javascript ezt az összehasonlítást le tudja kezelni
    if(newGame.year > 2100) return 'The release year must be at most 2100!'

    return null
}

function handleAddNewGameClick() {
    const newGame = {
        name: inputNewGameName.value,
        year: inputNewGameYear.value,
        category: inputNewGameCategory.value
    }

    const errorMessage = checkNewGameYear(newGame)
    if(errorMessage) {
        divErrors.innerHTML = errorMessage
        return // ha van hiba, akkor retunölünk
    }
    divErrors.innerHTML = ''


    allGames.push(newGame)
    generateGameList(allGames)
    if(!allCategories.includes(newGame.category)) allCategories.push(newGame.category)
    generateCategories(allCategories)

    inputNewGameName.value = ''
    inputNewGameYear.value = ''
    inputNewGameCategory.value = ''
}

function handleFilterClick() {
    const filterValue = inputFilterName.value.toLowerCase()
    const categoryFilterValue = selectFilterCategory.value
    const filteredGames = allGames.filter(game => 
        game.name.toLowerCase().includes(filterValue) &&
        (categoryFilterValue == '' || game.category == categoryFilterValue)
    )
    generateGameList(filteredGames)
}

buttonAddNewGame.onclick = handleAddNewGameClick // handle GombNeve EseményNeve
buttonFilter.onclick = handleFilterClick
generateGameList(allGames)
generateCategories(allCategories)