const gameArea = document.querySelector('#game-area')
const gameMessage = document.querySelector('#game-message')


/**
 * 0: road, 1: wall, 2: start tile, 3: goal tile
 * Lehetne úgy, hogy hozzáadunk felet ahhoz, ahol a player áll
 */
const gameTable = [
    [1,1,1,1,1,1,1,1,1,1],
    [2,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,0,1,0,1,1,0,1,0,1],
    [1,0,1,0,0,1,0,1,0,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,0,0,1,0,0,1,0,1],
    [1,0,1,0,0,0,0,0,0,3],
    [1,1,1,1,1,1,1,1,1,1]
]

const tileClasses = ['road', 'wall', 'start', 'goal']

const player = {
    row: null,
    col: null,

    icon: '🤠'
}

const startTile = {
    row: null,
    col: null
}

const goalTile = {
    row: null,
    col: null
}

let tableString = ''
for(let row = 0; row < gameTable.length; row++) {
    let rowString = ''
    for(let col = 0; col < gameTable[row].length; col++) {
        const currentValue = gameTable[row][col]
        rowString += `<td id="cell-${row}-${col}" class="${tileClasses[currentValue]}"></td>`

        if(currentValue == 2) {
            startTile.row = row
            startTile.col = col
            player.row = row
            player.col = col
        }

        if(currentValue == 3) {
            goalTile.row = row
            goalTile.col = col
        }
    }
    tableString += `<tr>${rowString}</tr>`
}
gameArea.innerHTML = tableString

function cleanPlayerIcon() {
    gameArea.querySelector(`#cell-${player.row}-${player.col}`).innerHTML = '💩'
}

function drawPlayer() {
    gameArea.querySelector(`#cell-${player.row}-${player.col}`).innerHTML = player.icon
}

function writeWinMessage() {
    gameMessage.innerText = 'You have escaped!'
}

function isWall(position) {
    return gameTable[position.row][position.col] == 1
}

function isOutOfBounds(position) {
    // ha nem téglalap alakú:
    // return gameTable[position.row] == undefined || gameTable[position.row][position.col] == undefined

    // ha téglalap alakú:
    return position.row < 0 || position.col < 0 || gameTable.length <= position.row || gameTable[position.row].length <= position.col
}

function isGoalTile(position) {
    return position.row == goalTile.row && position.col == goalTile.col
}

function movePlayer(direction) {
    const plannedMove = {
        row: player.row, // vigyázz, ha a row nem egy egyszerű típus, hanem objektum, akkor azt itt nem átmásolja, hanem pointerként hivatkozik rá.
        col: player.col
    }
    switch(direction) {
        case 'ArrowUp':
            plannedMove.row -= 1
            break
        
        case 'ArrowDown':
            plannedMove.row += 1
            break

        case 'ArrowRight':
            plannedMove.col += 1
            break
            
        case 'ArrowLeft':
            plannedMove.col -= 1
            break

        default:
            return
    }

    if(isWall(plannedMove)) return
    if(isOutOfBounds(plannedMove)) return

    cleanPlayerIcon()

    player.row = plannedMove.row
    player.col = plannedMove.col

    drawPlayer()

    if(isGoalTile(plannedMove)) {
        writeWinMessage()
    }
}

document.addEventListener('keydown', event => {
    movePlayer(event.key)
})

drawPlayer()