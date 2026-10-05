const gameArea = document.querySelector('#game-area')
const gameMessage = document.querySelector('#game-message')

/**
 * Game area model
 * 0 - empty square
 * 1 - wall
 * 3 - start
 * 4 - goal
 */
const startingData = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

const classValues = ['road', 'wall', '', 'start', 'goal']

const player = {
    row: null,
    col: null,
    prevRow: null,
    prevCol: null,
    icon: '🤠'
}

const startingTile = {
    row: null,
    col: null
}

const goalTile = {
    row: null,
    col: null
}

for (let row = 0; row < startingData.length; row++) {
    let rowString = ''
    for (let col = 0; col < startingData[row].length; col++) {
        const current = startingData[row][col]
        rowString += `<td id="labyrinth-${row}-${col}" class="${classValues[current]}"></td>`

        if (current == 3) { // start
            startingTile.row = row
            startingTile.col = col

            player.row = row
            player.col = col
        }

        if (current == 4) { // goal
            goalTile.row = row
            goalTile.col = col
        }
    }
    gameArea.innerHTML += `<tr>${rowString}</tr>`
}

function drawPlayer() {
    const prevPlayerTd = document.querySelector(`#labyrinth-${player.prevRow}-${player.prevCol}`)
    if(prevPlayerTd) {
        prevPlayerTd.innerText = ''
    }

    document.querySelector(`#labyrinth-${player.row}-${player.col}`).innerText = player.icon
}

/**
 * 
 * @param {Object} position Must have a "row" and a "col" property
 * @returns True/False whether given position is a wall
 */
function isWall(position) {
    return startingData[position.row][position.col] == 1
}

function isOutOfBounds(position) {
    //                                             A lusta kiértékelés miatt elhasal eleve itt ha a row érvénytelen, így a col összehasonlítás le se fut és nem kapunk hibát rá
    return position.row < 0 || position.col < 0 || startingData.length <= position.row || startingData[position.row].length <= position.col
}

function isGoal(position) {
    return position.row == goalTile.row && position.col == goalTile.col
}

function movePlayer(direction) {
    const newPosition = {
        row: player.row,
        col: player.col
    }
    switch(direction) {
        case 'ArrowUp':
            newPosition.row -= 1
        break

        case 'ArrowRight':
            newPosition.col += 1
        break

        case 'ArrowDown':
            newPosition.row += 1
        break

        case 'ArrowLeft':
            newPosition.col -= 1
        break

        default:
            return
    }

    if(isWall(newPosition)) return
    if(isOutOfBounds(newPosition)) return

    player.prevRow = player.row
    player.row = newPosition.row

    player.prevCol = player.col
    player.col = newPosition.col

    drawPlayer()

    if(isGoal(newPosition)) {
        gameMessage.innerText = 'You have successfuly escaped the labyrinth, yay!'
    }
}

document.addEventListener('keydown', event => {
    movePlayer(event.key)
})

drawPlayer()