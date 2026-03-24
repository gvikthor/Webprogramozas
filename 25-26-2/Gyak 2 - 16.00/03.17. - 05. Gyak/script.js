const menuDiv = document.querySelector('#menu')
const pages = document.querySelectorAll('.page')

for(const page of pages) {
    menuDiv.innerHTML += `<span data-pageid="${page.id}">${page.dataset.title}</span>`
}

const menuItems = menuDiv.querySelectorAll('span')

// elem.classList.add('osztalynev')
// elem.classList.remove('osztalynev')
// elem.classList.toggle('osztalynev')
function showPage(id) {
    for(const page of pages) {
        page.classList.add('hidden')
    }
    document.querySelector(`#${id}`).classList.remove('hidden')
}

function handleMenuClick(event) {
    const pageId = event.target.dataset.pageid
    showPage(pageId)

    menuDiv.querySelector('.current')?.classList.remove('current') // ?. operátor neve null coalescing operator, azt tudja, hogy ha az előtte lévő dolgok üresek (null/undefined) akkor nem próbálkozik az utána jövőkkel
    event.target.classList.add('current')
}

for(const menuItem of menuItems){
    menuItem.onclick = handleMenuClick
}

showPage('page-games')


/////////////////////////////////////////////////////
//const allCategories = ['sport', 'shooter', 'strategy']
const allCategories = [
    { name: 'sport', color: '#4eeb85' },
    { name: 'shooter', color: '#f27679' },
    { name: 'strategy', color: '#8c75e7' },
]

const allGames = [
    { name: 'Fifa 24', year: 2023, category: allCategories[0] },
    { name: 'Star Wars Battlefront 2', year: 2005, category: allCategories[1] },
    { name: 'Dune Spice Wars', year: 2023, category: allCategories[2] },
]

const inputNewGameName = document.querySelector('#new-game-name')
const inputNewGameYear = document.querySelector('#new-game-year')
const inputNewGameCategory = document.querySelector('#new-game-category')
const buttonNewGame = document.querySelector('#new-game-button')
const errorDivNewGame = document.querySelector('#new-game-error')

const inputFilterName = document.querySelector('#filter-name')
const selectFilterCategory = document.querySelector('#filter-category')
const buttonFilter = document.querySelector('#filter-button')
const gamesUL = document.querySelector('#game-list')

const inputNewCategoryName = document.querySelector('#new-category-name')
const inputNewCategoryColor = document.querySelector('#new-category-color')
const buttonNewCategory = document.querySelector('#new-category-button')
const errorDivNewCategory = document.querySelector('#new-category-error')

function clearInputs() {
    inputNewGameName.value = ''
    inputNewGameYear.value = ''
    inputNewGameCategory.value = ''
}

function generateGameList(games) {
    gamesUL.innerHTML = ''
    for(const game of games) {
        gamesUL.innerHTML += `<li>
            ${game.name}
            <span style="background-color: ${game.category.color}">
                ${game.category.name}
            </span>
        </li>`
    }
}

function generateCategoryOptions(categories) {
    selectFilterCategory.innerHTML = '<option value="">any</option>'
    for(const category of categories) {
        selectFilterCategory.innerHTML += `<option value="${category.name}">${category.name}</option>`
    }
}

function addGameToList() {
    const newGame = {
        name: inputNewGameName.value,
        year: inputNewGameYear.value,
        category: null
    }

    if(isNaN(newGame.year)) return 'The release year is not a number!'
    if(parseInt(newGame.year) != parseFloat(newGame.year)) return 'The release year is not a whole number!'
    newGame.year = parseInt(newGame.year) // new muszáj
    if(newGame.year > 2100) return 'The release year is too big (above 2100)!'
    if(newGame.year < 1950) return 'The release year is too small (below 1950)!'
    
    const category = allCategories.find(category => category.name == inputNewGameCategory.value)
    if(!category) return "This category doesn't exist!"

    newGame.category = category

    allGames.push(newGame)
    generateGameList(allGames)
    generateCategoryOptions(allCategories)

    return '✅ Game added.'
}

function addCategoryToList() {
    const newCategory = {
        name: inputNewCategoryName.value,
        color: inputNewCategoryColor.value
    }

    if(allCategories.some(category => category.name == newCategory.name)) return 'This category name is taken!'

    allCategories.push(newCategory)
    generateCategoryOptions(allCategories)

}

function handleButtonNewGameClick() { // handle Elemneve Eseményneve
    errorDivNewGame.innerHTML = addGameToList()
}

function handleFilterButtonClick() {
    const nameFilterValue = inputFilterName.value.toLowerCase()
    const categoryFilterValue = selectFilterCategory.value.toLowerCase()
    const filteredGames = allGames.filter(game => 
        game.name.toLowerCase().includes(nameFilterValue) &&
        (game.category.name.toLowerCase() == categoryFilterValue || categoryFilterValue == '')
    )
    generateGameList(filteredGames)
}

function handleButtonNewCategoryClick() {
    addCategoryToList()
}

buttonNewGame.onclick = handleButtonNewGameClick
buttonFilter.onclick = handleFilterButtonClick
buttonNewCategory.onclick = handleButtonNewCategoryClick
generateGameList(allGames)
generateCategoryOptions(allCategories)
clearInputs()