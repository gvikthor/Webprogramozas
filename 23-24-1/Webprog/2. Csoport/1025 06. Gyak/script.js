/*
localStorage.setItem('favColor', 'red')
localStorage.getItem('favColor')
localStorage.removeItem('favColor')
*/

/*
JavaScript Object Notation - JSON
{
    "name": "Áron",
    "age": 11
}

[
    {"name": "Áron", "age": 22},
    {"name": "Gergő", "age": 32},
    {"name": "Péter", "age": 13},
    {"name": "Bálint", "age": 83}
]

JSON.stringify([
    {"name": "Áron", "age": 22},
    {"name": "Gergő", "age": 32},
    {"name": "Péter", "age": 13},
    {"name": "Bálint", "age": 83}
])

JSON.parse('[{"name": "Áron", "age": 22},{"name": "Gergő", "age": 32},{"name": "Péter", "age": 13},{"name": "Bálint", "age": 83}]')


JSON.parse(localStorage.getItem('friends')) 
localStorage.setItem('friends', JSON.stringify([
    {"name": "Áron", "age": 22},
    {"name": "Gergő", "age": 32},
    {"name": "Péter", "age": 13},
    {"name": "Bálint", "age": 83}
])) 
*/

/*
localStorageSetArray('games', [
    {
        id: 1,
        title: 'Super Mario Bros.',
        year: 1985,
        genre: 'platformer'
    },
    {
        id: 2,
        title: 'Super Mario Bros. 2',
        year: 1988,
        genre: 'platformer'
    },
    {
        id: 3,
        title: 'Super Mario Bros. 3',
        year: 1990,
        genre: 'platformer'
    },
    {
        id: 4,
        title: 'Super Mario World',
        year: 1991,
        genre: 'platformer'
    },
    {
        id: 5,
        title: 'Super Mario 64',
        year: 1996,
        genre: 'platformer'
    },
    {
        id: 6,
        title: 'Super Mario Sunshine',
        year: 2002,
        genre: 'platformer'
    },
    {
        id: 7,
        title: 'Super Mario Galaxy',
        year: 2007,
        genre: 'platformer'
    },
    {
        id: 8,
        title: 'Super Mario Odyssey',
        year: 2017,
        genre: 'platformer'
    },
    {
        id: 9,
        title: 'The Legend of Zelda',
        year: 1986,
        genre: 'action-adventure'
    },
    {
        id: 10,
        title: 'The Legend of Zelda: A Link to the Past',
        year: 1991,
        genre: 'action-adventure'
    },
    {
        id: 11,
        title: 'The Legend of Zelda: Ocarina of Time',
        year: 1998,
        genre: 'action-adventure'
    },
    {
        id: 12,
        title: 'The Legend of Zelda: The Wind Waker',
        year: 2002,
        genre: 'action-adventure'
    },
    {
        id: 13,
        title: 'The Legend of Zelda: Twilight Princess',
        year: 2006,
        genre: 'action-adventure'
    },
    {
        id: 14,
        title: 'The Legend of Zelda: Skyward Sword',
        year: 2011,
        genre: 'action-adventure'
    },
    {
        id: 15,
        title: 'The Legend of Zelda: Breath of the Wild',
        year: 2017,
        genre: 'action-adventure'
    },
    {
        id: 16,
        title: 'Minecraft',
        year: 2011,
        genre: 'sandbox'
    },
    {
        id: 17,
        title: 'Terraria',
        year: 2011,
        genre: 'sandbox'
    },
    {
        id: 18,
        title: 'Stardew Valley',
        year: 2016,
        genre: 'sandbox'
    },
    {
        id: 19,
        title: 'The Sims',
        year: 2000,
        genre: 'sandbox'
    }
])
*/

/*
localStorage.setItem('nextID', 20)
*/

const newGameForm = document.querySelector('#newgame')
const gamesUL = document.querySelector('#games')
const filterTitleInput = document.querySelector('#filter-title')
const filterGenreInput = document.querySelector('#filter-genre')

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
function localStorageGetArray(arrayname){
    return JSON.parse(localStorage.getItem(arrayname))
}
function localStorageSetArray(arrayname, array){
    localStorage.setItem(arrayname, JSON.stringify(array))
}
function localStorageArrayPush(arrayname, newelement){
    const array = localStorageGetArray(arrayname)
    array.push(newelement)
    localStorageSetArray(arrayname, array)
}
function render(){
    gamesUL.innerHTML = ''
    localStorageGetArray('games')
    .filter(game => filterTitleInput.value.trim() == '' || game.title.toLowerCase().includes(filterTitleInput.value.trim().toLowerCase()))
    .filter(game => filterGenreInput.value == 'any' || game.genre == filterGenreInput.value)
    .forEach(game => {
        gamesUL.innerHTML += `<li>
            <span class="editable" data-gameid="${game.id}" data-editing="title" data-state="default">${game.title}</span>
            (
            <span class="editable" data-gameid="${game.id}" data-editing="year" data-state="default">${game.year}</span>
            |
            <span class="editable" data-gameid="${game.id}" data-editing="genre" data-state="default">${game.genre}</span>
            )
            <span class="delete" data-gameid="${game.id}">🚯</span>
        </li>`
    })
}

newGameForm.addEventListener('submit', event => {
    event.preventDefault()
    let nextID = parseInt(localStorage.getItem('nextID'))
    localStorageArrayPush('games', {
        id: nextID,
        title: newGameForm.title.value,
        year: parseInt(newGameForm.year.value),
        genre: newGameForm.genre.value
    })
    localStorage.setItem('nextID', nextID + 1)
    /*newGameForm.title.value = ''
    newGameForm.year.value = ''
    newGameForm.genre.value = ''*/
    newGameForm.reset()
    render()
})
delegate(gamesUL, '.delete', 'click', (event, elem) => {
    const idToDelete = elem.dataset.gameid
    localStorageSetArray('games', localStorageGetArray('games').filter(game => game.id != idToDelete))
    render()
    /*
    let games = localStorageGetArray('games')
    games = games.filter(game => game.id != idToDelete)
    localStorageSetArray('games', games)
    */
})
filterTitleInput.addEventListener('input', render)
filterGenreInput.addEventListener('input', render)
delegate(gamesUL, '.editable', 'click', (event, elem) => {
    if(elem.dataset.state == 'default'){
        const content = elem.innerHTML
        elem.innerHTML = `<input value="${content}">`
        elem.dataset.state = 'editing'
    }else{
        const idToEdit = elem.dataset.gameid
        const fieldToEdit = elem.dataset.editing
        localStorageSetArray('games', localStorageGetArray('games').map(game => {
            if(game.id == idToEdit){
                game[fieldToEdit] = elem.querySelector('input').value
            }
            return game
        }))
        render()
    } 
})

render()