// DOM lekérések / queryk
const pageHome = document.querySelector('#home')
const startButton = document.querySelector('#start-btn')

const pageGame = document.querySelector('#game')
const infoDiv = document.querySelector('#info-div')
const timeValueSpan = document.querySelector('#time-value')
const pointsValueSpan = document.querySelector('#points-value')
const gameTable = document.querySelector('#game-table')

// Programmodell / programlogika
function showPage(idToShow){
    const pages = document.querySelectorAll('.page')
    pages.forEach(page => {
        if(page.dataset.id == idToShow){
            page.classList.remove('hidden')
        }else{
            page.classList.add('hidden')
        }
    })
}

// Játékmodell / játéklogika
const gameState = {
    tableSize: 5,
    secondsElapsed: 0,
    pointsGathered: 0,
    /*gameTableModel: [
        [{},{},{},{},{}],
        [{},{},{},{},{}],
        [{},{},{},{},{}],
        [{},{},{},{},{}],
        [{},{},{},{},{}],
    ],*/
    gameTableModel: [],
    player: {
        colIndex: 2,
        rowIndex: 2
    },
    init: function (){ // arrow functiont nem lehet használni, mert nem bindolja a thist
        this.secondsElapsed = 0
        this.pointsGathered = 0,
        this.player.colIndex = 2
        this.player.rowIndex = 2
        for(let rowIndex = 0; rowIndex < this.tableSize; rowIndex++){
            let newRowData = []
            for(let colIndex = 0; colIndex < this.tableSize; colIndex++){
                newRowData.push({
                    rowIndex: colIndex,
                    rowIndex: rowIndex,
                    hasKitten: false,
                    hasPlayer: (colIndex == this.player.colIndex && rowIndex == this.player.rowIndex)
                })
            }
            this.gameTableModel.push(newRowData)
        }
    },
    draw: function (){
        gameTable.innerHTML = ''
        for(const row of this.gameTableModel){
            let HTMLstring = '<tr>' // createElement
            for(const cell of row){
                let characterToDisplay = '🌳'
                if(cell.hasPlayer){
                    characterToDisplay = '🥵'
                }else if(cell.hasKitten){
                    characterToDisplay = '🐈'
                }
                HTMLstring += `<td>${characterToDisplay}</td>`
            }
            HTMLstring += '</tr>' // appendChild

            gameTable.innerHTML += HTMLstring
        }
    },
    movePlayerToNewPosition: function (rowIndex, colIndex){
        this.gameTableModel[this.player.rowIndex][this.player.colIndex].hasPlayer = false
        this.player.colIndex = colIndex
        this.player.rowIndex = rowIndex
        this.gameTableModel[this.player.rowIndex][this.player.colIndex].hasPlayer = true
    },
    stepLeft: function (){
        if(this.player.colIndex == 0) return
        this.movePlayerToNewPosition(this.player.rowIndex, this.player.colIndex-1)        
    },
    stepRight: function (){
        if(this.player.colIndex == this.tableSize-1) return
        this.movePlayerToNewPosition(this.player.rowIndex, this.player.colIndex+1)        
    },
    stepUp: function (){
        if(this.player.rowIndex == 0) return
        this.movePlayerToNewPosition(this.player.rowIndex-1, this.player.colIndex)        
    },
    stepDown: function (){
        if(this.player.rowIndex == this.tableSize-1) return
        this.movePlayerToNewPosition(this.player.rowIndex+1, this.player.colIndex)        
    }
}

// Eseménykezelők
startButton.addEventListener('click', event => {
    showPage('game')
    gameState.init()
    gameState.draw()
})

document.addEventListener('keydown', event => {
    switch(event.key){
        case 'ArrowUp':
            gameState.stepUp()
            break
        case 'ArrowDown':
            gameState.stepDown()
            break
        case 'ArrowLeft':
            gameState.stepLeft()
            break
        case 'ArrowRight':
            gameState.stepRight()
            break
    }
    gameState.draw()
})

// Egyéb