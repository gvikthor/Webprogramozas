// Gerrymandering game

////// UTILS //////
/** ez azért kell, mert az objektumokról (tehát tömbökról is) a jaascript nem készít tényleges másolatot */
function hardCopy(obj){
    return JSON.parse(JSON.stringify(obj))
}

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

/** 0-tól (max-1)-ig ad vissza egy véletlen egész számot */
function randomInt(max){
    return Math.floor(Math.random() * max)
}

/** visszaad egy random színt (azért HSL-el csinálom, mert így hasonló milyenségűek a színek, csak a konkrét szín más) */
function randomColor(){
    return `hsl(${randomInt(360)}, 100%, 30%)`
}

////// CONFIG VARIABLES //////
const tiles = [
    [
        [0,0,0],
        [0,1,0],
        [0,0,0]
    ],
    [
        [0,1,0],
        [0,1,0],
        [0,1,0]
    ],
    [
        [0,1,0],
        [1,1,1],
        [0,1,0]
    ],
    
    [
        [0,0,0],
        [0,1,1],
        [0,1,0]
    ],
    [
        [0,1,0],
        [1,1,1],
        [0,0,0]
    ],
    [
        [0,1,0],
        [0,1,0],
        [1,1,1]
    ],
    [
        [0,0,0],
        [1,1,0],
        [1,1,0]
    ],
    [
        [1,1,1],
        [1,1,1],
        [1,1,1]
    ],
    [
        [1,0,0],
        [1,1,1],
        [0,0,1]
    ], 
    [
        [0,0,1],
        [1,1,1],
        [1,0,0]
    ], 
    [
        [1,0,1],
        [1,1,1],
        [1,0,1]
    ], 
    [
        [0,0,0],
        [1,1,1],
        [1,0,1]
    ],
    [
        [0,0,0],
        [1,1,0],
        [0,0,0]
    ], 
    [
        [1,1,0],
        [1,1,0],
        [1,1,0]
    ],
]

const boardSize = 10
const partyTokens = {
    0: '💜',
    1: '💚'
}
const partyVoterDistribution = {
    0: 0.6,
    1: 0.4
}
const tilesToChooseFrom = 8
const refreshMaxAmount = 5

////// DOM ELEMENTS //////
const gameBoard = document.querySelector('#game-board')
const gameTiles = document.querySelector('#game-tiles')
const refreshTilesButton = document.querySelector('#refresh-tiles')
const refreshTilesLeft = document.querySelector('#refresh-tiles-left')
const districtColorInput = document.querySelector('#district-color')
const confirmDistrictButton = document.querySelector('#confirm-district')
const districtUL = document.querySelector('#districts')
const showResultsButton = document.querySelector('#show-results')
const resultsDiv = document.querySelector('#results')

////// MODELL //////
let gameModel = {}
function model_setDefaults(){
    gameModel = {
        gameIsRunning: true,
        board: null,
        isPlacing: false,
        finishedDistricts: [],
        currentDistrict: {
            id: -1,
            cells: [],
            color: null
        },
        tilesToChooseFrom: [],
        currentTileIndex: null,
        currentTilePosition: {
            row: null,
            column: null
        },
        refreshTilesLeft: refreshMaxAmount
    }
}

/*
borad:
    [
        [
            {voter: 0, district: null},
            {voter: 1, district: null},
            {voter: 0, district: null},
            [...]
        ],
        [
            {voter: 0, district: null},
            {voter: 1, district: null},
            {voter: 0, district: null},
            [...]
        ],
        [
            {voter: 0, district: null},
            {voter: 1, district: null},
            {voter: 0, district: null},
            [...]
        ],
        [...]
    ]
*/
function model_generateVoterBoard(){
    const board = []
    for (let i = 0; i < boardSize; i++) {
        board.push([])
        for (let j = 0; j < boardSize; j++) {
            const voter = Math.random() < partyVoterDistribution[0] ? 0 : 1
            board[i].push({
                voter: voter,
                district: null
            })
        }
    }
    gameModel.board = board
}

function model_generateTilesToChooseFrom(){
    while(gameModel.tilesToChooseFrom.length < tilesToChooseFrom){
        //const randomTile = tiles[Math.floor(Math.random() * tiles.length)]
        const randomTile = hardCopy(tiles[Math.floor(Math.random() * tiles.length)])
        gameModel.tilesToChooseFrom.push(randomTile)
    }
}

function model_newDistrict(){
    if(gameModel.currentDistrict.cells.length > 0){
        gameModel.finishedDistricts.push(gameModel.currentDistrict)
    }
    const newDistrict = {
        id: gameModel.finishedDistricts.length,
        cells: [],
        color: randomColor()
    }
    gameModel.currentDistrict = newDistrict
}

function model_getVoterDistribution(district){
    const distribution = {
        0: 0,
        1: 0
    }
    district.cells.forEach((cell) => {
        distribution[gameModel.board[cell.row][cell.column].voter]++
    })
    return distribution
}

function model_generate(){
    model_setDefaults()
    model_generateVoterBoard()
    model_generateTilesToChooseFrom()
    model_newDistrict()
}


////// VIEW //////
function view_renderBoard(){
    gameBoard.innerHTML = ''
    gameModel.board.forEach((row, idxRow) => {
        const newTR = document.createElement('tr')
        row.forEach((column, idxCol) => {
            const newTD = document.createElement('td')
            newTD.innerText = partyTokens[column.voter]
            newTD.dataset.row = idxRow
            newTD.dataset.column = idxCol

            if (column.district !== null){
                newTD.style.backgroundColor = column.district.color
            }

            newTR.appendChild(newTD)
        })
        gameBoard.appendChild(newTR)
    })

    if(gameModel.isPlacing){
        gameModel.tilesToChooseFrom[gameModel.currentTileIndex].forEach((tile, idxRow) => {
            tile.forEach((value, idxCol) => {
                if(value == 1){
                    const whereToPlace = {
                        row: gameModel.currentTilePosition.row + idxRow - 1,
                        column: gameModel.currentTilePosition.column + idxCol - 1
                    }
                    const cell = gameBoard.querySelector(`[data-row="${whereToPlace.row}"][data-column="${whereToPlace.column}"]`)
                    if(cell){
                        cell.classList.add('cell-of-current-tile')
                    }
                }
            })
        })
    }
}

function view_refreshBoard(){
    gameBoard.querySelectorAll('.cell-of-current-tile').forEach((cell) => {
        cell.classList.remove('cell-of-current-tile')
    })

    if(gameModel.isPlacing){
        gameModel.tilesToChooseFrom[gameModel.currentTileIndex].forEach((tile, idxRow) => {
            tile.forEach((value, idxCol) => {
                if(value == 1){
                    const whereToPlace = {
                        row: gameModel.currentTilePosition.row + idxRow - 1,
                        column: gameModel.currentTilePosition.column + idxCol - 1
                    }
                    const cell = gameBoard.querySelector(`[data-row="${whereToPlace.row}"][data-column="${whereToPlace.column}"]`)
                    if(cell){
                        cell.classList.add('cell-of-current-tile')
                    }
                }
            })
        })
    }
}

function view_renderTiles(){
    gameTiles.innerHTML = ''
    gameModel.tilesToChooseFrom.forEach((tile, idxTile) => {
        const newTile = document.createElement('table')
        newTile.classList.add('tile')
        newTile.dataset.tileIndex = idxTile
        if(idxTile == gameModel.currentTileIndex){
            newTile.classList.add('selected')
        }

        tile.forEach((row, idxRow) => {
            const newTR = document.createElement('tr')
            row.forEach((column, idxCol) => {
                const newTD = document.createElement('td')
                if(column == 1){
                    newTD.classList.add('tile-cell')
                }
                newTR.appendChild(newTD)
            })
            newTile.appendChild(newTR)
        })
        gameTiles.appendChild(newTile)
    })
}

function view_renderDistricts(){
    districtUL.innerHTML = ''
    gameModel.finishedDistricts.forEach((district) => {
        const distribution = model_getVoterDistribution(district)
        let distText = ''
        for(const partyIndex in distribution){
            distText += `${partyTokens[partyIndex]}: ${distribution[partyIndex]} `
        }

        const newLI = document.createElement('li')
        newLI.innerText = `District ${district.id} | ${distText}`
        newLI.style.color = district.color
        districtUL.appendChild(newLI)
    })

    if(gameModel.gameIsRunning){
        const newLI = document.createElement('li')
        newLI.innerText = `Current: District ${gameModel.currentDistrict.id}`
        newLI.style.color = gameModel.currentDistrict.color
        districtUL.appendChild(newLI)
    }
}

function view_renderRefreshTiles(){
    refreshTilesLeft.innerText = gameModel.refreshTilesLeft
    if(gameModel.refreshTilesLeft == 0){
        refreshTilesButton.disabled = true
    }
}

function view_render(){
    view_renderBoard()
    view_renderTiles()
    view_renderRefreshTiles()
    view_renderDistricts()
}

////// CONTROLLER //////
function startGame(){
    model_generate()
    view_render()
}

refreshTilesButton.addEventListener('click', () => {
    if(!gameModel.gameIsRunning) return
    if(gameModel.refreshTilesLeft == 0) return

    gameModel.tilesToChooseFrom = []
    gameModel.currentTileIndex = null
    gameModel.currentTilePosition = {
        row: null,
        column: null
    }
    gameModel.refreshTilesLeft--
    model_generateTilesToChooseFrom()
    view_renderTiles()
    view_renderRefreshTiles()
})

// Kiválasztás
delegate(gameTiles, '.tile', 'click', (event, tile) => {
    if(!gameModel.gameIsRunning) return

    gameModel.currentTileIndex = parseInt(tile.dataset.tileIndex)
    gameModel.currentTilePosition = {
        row: null,
        column: null
    }
    gameModel.isPlacing = true
    view_renderTiles()
})

// Mozgatás
delegate(gameBoard, 'td', 'mouseover', (event, cell) => {
    if(!gameModel.gameIsRunning) return

    if(!gameModel.isPlacing){
        return
    }

    gameModel.currentTilePosition.row = parseInt(cell.dataset.row)
    gameModel.currentTilePosition.column = parseInt(cell.dataset.column)
    view_refreshBoard()
})

// Lerakás
delegate(gameBoard, 'td', 'click', (event, cell) => {
    if(!gameModel.gameIsRunning) return

    if(!gameModel.isPlacing){
        return
    }

    const tile = gameModel.tilesToChooseFrom[gameModel.currentTileIndex]

    // Lerakhatom ide ezt a tile-t?
    let valid = true
    let hasNeighbor = false
    tile.forEach((row, idxRow) => {
        row.forEach((column, idxCol) => {
            if(column == 1){
                const whereToPlace = {
                    row: gameModel.currentTilePosition.row + idxRow - 1,
                    column: gameModel.currentTilePosition.column + idxCol - 1
                }

                if(whereToPlace.row < 0 || whereToPlace.row >= boardSize || whereToPlace.column < 0 || whereToPlace.column >= boardSize){
                    // A tile minden cellája a pályán belül van?
                    valid = false
                } else if(gameModel.board[whereToPlace.row][whereToPlace.column].district !== null){
                    // A tile minden cellája üres? (nem foglalt már egy másik kerület által)
                    valid = false
                } else if(!hasNeighbor){
                    // A tile legalább egy cellája szomszédos egy már lerakott cellával ebben a kerületben?
                    // Figyeljünk, hogy ez a tile minden celláján végigmegy, de ha már volt olyan, amelyik szomszédos, akkor nem kell újra ellenőrizni.

                    // Fontos, hogy ne ez legyen az első elem a kerületben, mert úgy nyilván nem lehet szomszédja.
                    if(gameModel.currentDistrict.cells.length == 0){
                        hasNeighbor = true
                    }else{
                        for (let i = -1; i <= 1; i++) {
                            for (let j = -1; j <= 1; j++){
                                if(i == j || i == -j){
                                    // Sarkokat és önmagát ne számoljuk bele
                                    continue
                                }
                                const neighbor = {
                                    row: whereToPlace.row + i,
                                    column: whereToPlace.column + j
                                }
                                if(neighbor.row < 0 || neighbor.row >= boardSize || neighbor.column < 0 || neighbor.column >= boardSize){
                                    continue
                                }
                                if(gameModel.board[neighbor.row][neighbor.column].district?.id == gameModel.currentDistrict.id){
                                    hasNeighbor = true
                                }
                            }
                        }
                    }
                }
            }
        })
    })

    // Ha nem, akkor nem csinálok semmit
    if(!valid || !hasNeighbor){
        return
    }

    // Ha igen, akkor lerakom
    tile.forEach((row, idxRow) => {
        row.forEach((column, idxCol) => {
            if(column == 1){
                const whereToPlace = {
                    row: gameModel.currentTilePosition.row + idxRow - 1,
                    column: gameModel.currentTilePosition.column + idxCol - 1
                }
                gameModel.board[whereToPlace.row][whereToPlace.column].district = gameModel.currentDistrict
                gameModel.currentDistrict.cells.push({
                    row: whereToPlace.row,
                    column: whereToPlace.column
                })
            }
        })
    })

    gameModel.tilesToChooseFrom[gameModel.currentTileIndex] = hardCopy(tiles[Math.floor(Math.random() * tiles.length)])

    gameModel.isPlacing = false
    gameModel.currentTileIndex = null
    gameModel.currentTilePosition = {
        row: null,
        column: null
    }
    view_render()
})

// Forgatás
document.addEventListener('keydown', (event) => {
    if(!gameModel.gameIsRunning) return
    if(!gameModel.isPlacing) return

    const key = event.key.toUpperCase()
    if(key != 'R') return

    // balra forgatunk: elindulunk a bal felső sarokból az eredetin jobbra és lefelés; a forgatotton pedig a bal alsó sarokból felfelé és jobbra, és abba  acellába pakolásszuk az értékeket
    //                                                             1 2 3                                       3 6 9
    //                                                             4 5 6                                       2 5 8
    //                                                             7 8 9                                       1 4 7

    const currentTile = gameModel.tilesToChooseFrom[gameModel.currentTileIndex]
    const newTile = []

    // Ez csak a setup, hogy ugyanakkora legyen, mint az eredeti
    currentTile.forEach((row, idxRow) => {
        newTile.push([])
        row.forEach((column, idxCol) => {
            newTile[idxRow].push(0)
        })
    })
    
    let currentRowIndex = 0
    let currentColumnIndex = 0

    let newRowIndex = newTile.length - 1
    let newColumnIndex = 0

    while(currentRowIndex < currentTile.length){
        while(currentColumnIndex < currentTile[currentRowIndex].length){
            newTile[newRowIndex][newColumnIndex] = currentTile[currentRowIndex][currentColumnIndex]
            currentColumnIndex++
            newRowIndex--
        }
        currentColumnIndex = 0
        newRowIndex = newTile.length - 1
        currentRowIndex++
        newColumnIndex++
    }

    gameModel.tilesToChooseFrom[gameModel.currentTileIndex] = newTile
    
    view_renderTiles()
})

// Kerület véglegesítése
confirmDistrictButton.addEventListener('click', () => {
    if(!gameModel.gameIsRunning) return

    model_newDistrict()
    view_render()
})

// Színválasztás
districtColorInput.addEventListener('change', (event) => {
    if(!gameModel.gameIsRunning) return

    gameModel.currentDistrict.color = event.target.value
    view_render()
})

// Eredmények megjelenítése ("játék" vége)
showResultsButton.addEventListener('click', () => {
    if(!gameModel.gameIsRunning) return

    let hasEmptyCell = false
    gameModel.board.forEach((row) => {
        row.forEach((cell) => {
            if(cell.district == null){
                hasEmptyCell = true
            }
        })
    })
    if(hasEmptyCell){
        alert('The districts are not finished yet!')
        return
    }

    gameModel.gameIsRunning = false
    model_newDistrict()

    // Ez a rész nem működik több pártra, mint 2, érdemes elgondolkozni, hogy írnád meg!
    const results = {
        0: 0,
        1: 0
    }
    gameModel.finishedDistricts.forEach((district) => {
        const distribution = model_getVoterDistribution(district)
        if(distribution[0] > distribution[1]){
            results[0]++
        }else{
            results[1]++
        }
    })

    const newP = document.createElement('p')
    newP.innerText = `Districts: 💜 ${results[0]} - 💚 ${results[1]}`
    resultsDiv.appendChild(newP)
    view_render()
})

startGame()