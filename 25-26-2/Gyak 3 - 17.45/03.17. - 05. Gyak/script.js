const pages = document.querySelectorAll('.page')
const divMenu = document.querySelector('#menu')

for(const page of pages) {
    divMenu.innerHTML += `<span id="menu-${page.id}" data-pageid="${page.id}">${page.dataset.title}</span>`
}

function showPage(id) {
    for(const page of pages) {
        // elem.classList.add('osztalynev')
        // elem.classList.remove('osztalynev')
        // elem.classList.toggle('osztalynev')
        // elem.classList.toggle('osztalynev', logiaki)  logikai false, akkor leveszi, logikai true, akkor rárakja
        page.classList.toggle('hidden', page.id != id)
        divMenu.querySelector(`#menu-${page.id}`).classList.toggle('current', page.id == id)
    }
}

function handleMenuSpanClick(event) {
    //console.log(event)
    showPage(event.target.dataset.pageid)
}

const menuItems = divMenu.querySelectorAll('span')
for(const menuItem of menuItems) {
    menuItem.onclick = handleMenuSpanClick
}

showPage('page-games')


///////////////////////////////////////////////////////////////////////////////////////////////////////

//const allCategories = ['sport', 'shooter', 'strategy']
const allCategories = [
    { name: 'sport', color: '#8fffa3' },
    { name: 'shooter', color: '#ff8fb6' },
    { name: 'strategy', color: '#a48fff' },
]

const allGames = [
    { name: 'Fifa 24', year: 2023, category: allCategories[0] },
    { name: 'Star Wars Battlefront 2', year: 2005, category: allCategories[1] },
    { name: 'Dune Spice Wars', year: 2024, category: allCategories[2] },
]

const inputNewGameName = document.querySelector('#new-game-name')
const inputNewGameYear = document.querySelector('#new-game-year')
const inputNewGameCategory = document.querySelector('#new-game-category')
const buttonAddNewGame = document.querySelector('#add-new-game-btn')
const divNewGameErrors = document.querySelector('#game-errors')

const inputFilterName = document.querySelector('#filter-name')
const selectFilterCategory = document.querySelector('#filter-category')
const buttonFilter = document.querySelector('#filter-btn')
const gamesUL = document.querySelector('#game-list')

const inputNewCategoryName = document.querySelector('#new-category-name')
const inputNewCategoryColor = document.querySelector('#new-category-color')
const buttonAddNewCategory = document.querySelector('#add-new-category-btn')
const divNewCategoryErrors = document.querySelector('#category-errors')

function generateGameList(games) {
    gamesUL.innerHTML = ''
    for(const game of games) {
        gamesUL.innerHTML += `<li>${game.name} <span style="background-color: ${game.category.color}">${game.category.name}</span></li>`
    }
}

function generateCategories(categories) {
    selectFilterCategory.innerHTML = '<option value="">all</option>'
    for(const category of categories) {
        selectFilterCategory.innerHTML += `<option value="${category.name}">${category.name}</option>`
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
        category: null
    }

    const errorMessage = checkNewGameYear(newGame)
    if(errorMessage) {
        divNewGameErrors.innerHTML = errorMessage
        return // ha van hiba, akkor retunölünk
    }
    const category = allCategories.find(category => category.name == inputNewGameCategory.value)
    if(!category) {
        divNewGameErrors.innerHTML = 'The category must exist in the category list!'
        return
    }
    newGame.category = category
    
    divNewGameErrors.innerHTML = ''
    allGames.push(newGame)
    generateGameList(allGames)

    inputNewGameName.value = ''
    inputNewGameYear.value = ''
    inputNewGameCategory.value = ''
}

function handleFilterClick() {
    const filterValue = inputFilterName.value.toLowerCase()
    const categoryFilterValue = selectFilterCategory.value
    const filteredGames = allGames.filter(game => 
        game.name.toLowerCase().includes(filterValue) &&
        (categoryFilterValue == '' || game.category.name == categoryFilterValue)
    )
    generateGameList(filteredGames)
}

function handleAddNewCategoryClick() {
    const newCategory = {
        name: inputNewCategoryName.value,
        color: inputNewCategoryColor.value
    }

    const category = allCategories.find(category => category.name == inputNewGameCategory.value)
    if(category) {
        divNewCategoryErrors.innerHTML = 'The category name must be unique!'
        return
    }

    allCategories.push(newCategory)
    generateCategories(allCategories)

    inputNewCategoryName.value = ''
}

buttonAddNewGame.onclick = handleAddNewGameClick // handle GombNeve EseményNeve
buttonFilter.onclick = handleFilterClick
buttonAddNewCategory.onclick = handleAddNewCategoryClick
generateGameList(allGames)
generateCategories(allCategories)