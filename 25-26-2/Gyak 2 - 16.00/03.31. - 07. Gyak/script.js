/**
 * Delegáló függvény, ami kiváltja a sok azonos eseménykezelőt.
 * @param {HTMLElement} parent A szülő összefoglaló elem
 * @param {String} child CSS selector a gyerekre
 * @param {String} when Esemény, pl. click
 * @param {Function} what Két paraméteres függvény, első paraméter: event, második az elem, amire kattintottak
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

function saveToLocalStorage(key, elem) {
    localStorage.setItem(key, JSON.stringify(elem))
}

function loadFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

// van ilyen is: localStorage.removeItem('valami') 

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
    { name: 'sport', color: '#4eeb85' }, // vigyázz, a kategória hivatkozások a localstorage stringify miatt megszűntek, ha van egy mentett játékod, és változtatod a kategória színét, nem változik a játékban tárolt kategória színe. emiatt nagyon javaslom a beadandó példa kódban látható ID-s referenciákat közvetlen beírás helyett
    { name: 'shooter', color: '#f27679' },
    { name: 'strategy', color: '#8c75e7' },
]

let allGames = loadFromLocalStorage('games') ?? [] // null coalescing operator, ha a bal oldalon van valami, akkor az kerüljön be, egyébként (ha null vagy undefined a bal oldal), akkor a jobb oldalon lévő, jelen esetben üres tömb



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
            <button
                class="delete-button"
                data-gamename="${game.name}"
            >🚯</button>
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

    if(allGames.some(game => game.name.toLowerCase() == newGame.name.toLowerCase())) return 'The game name must be unique!'

    newGame.category = category

    allGames.push(newGame)
    saveToLocalStorage('games', allGames)
    generateGameList(allGames)
    generateCategoryOptions(allCategories)

    return '✅ Game added.'
}

function deleteGame(name) {
    allGames = allGames.filter(game => game.name != name)
    saveToLocalStorage('games', allGames)
    filterAndListGames()
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

function filterAndListGames() {
    const nameFilterValue = inputFilterName.value.toLowerCase()
    const categoryFilterValue = selectFilterCategory.value.toLowerCase()
    const filteredGames = allGames.filter(game => 
        game.name.toLowerCase().includes(nameFilterValue) &&
        (game.category.name.toLowerCase() == categoryFilterValue || categoryFilterValue == '')
    )
    generateGameList(filteredGames)
}

function handleButtonNewGameClick() { // handle Elemneve Eseményneve
    errorDivNewGame.innerHTML = addGameToList()
}

function handleFilterButtonClick() {
    filterAndListGames()
}

function handleButtonNewCategoryClick() {
    addCategoryToList()
}

// A delegálásra átadott függvényekbe mindig kettő paraméter kell: event és elem (de persze bárhogy hívhatod őket, csak ez a két információ fog továbbadódni)
function handleGameULdelegateDeleteClick(event, deleteButton) { // Ez kicsit bonyolultabb, hiszen nem csak egy elem van, hanem egy nagy szülő elem, és neki gyerekei amiknek van egy azonosítási módja úgymond (pl. class)
    deleteGame(deleteButton.dataset.gamename)
}

function handleGameULselectGameClick(event, li) {
    li.classList.toggle('selected')
}

buttonNewGame.onclick = handleButtonNewGameClick
buttonFilter.onclick = handleFilterButtonClick
buttonNewCategory.onclick = handleButtonNewCategoryClick
delegate(gamesUL, '.delete-button', 'click', handleGameULdelegateDeleteClick)
delegate(gamesUL, 'li', 'click', handleGameULselectGameClick)
generateGameList(allGames)
generateCategoryOptions(allCategories)
clearInputs()

/*
Gyakorlás:
Add hozzá a megfelelő szükséges HTML elemeket és attribútumokat.
 
1. feladat
Lehessen kijelölni elemeket (és megszüntetni a kijelölést).
Amik ki vannak jelölve, azoknak mindig írjuk ki az össz értékét!
 
2. feladat
Lehessen növelni vagy csökkenteni a kijelölt termékek árát százasával.
 
<ul>
    <li>Tej 500Ft</li>
    <li>Kenyér 200Ft</li>
    <li>Sajt 900Ft</li>
</ul>
*/