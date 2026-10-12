/**
 * Delegáló függvény, ami kiváltja a sok azonos eseménykezelőt.
 * @param {HTMLElement} parent A szülő összefoglaló elem
 * @param {String} child CSS selector a gyerekre
 * @param {String} when Esemény, pl. click
 * @param {Function} what Két paraméteres függvény, első paraméter: event, mésodik az elem, amire kattintottak
 */
function delegate(parent, child, when, what) {
    function eventHandlerFunction(event) {
        let eventTarget = event.target;
        let eventHandler = this;
        let closestChild = eventTarget.closest(child);

        if (eventHandler.contains(closestChild)) {
            what(event, closestChild);
        }
    }

    parent.addEventListener(when, eventHandlerFunction);
}

const gameArea = document.querySelector('#game-area')

const gameData = {
    areaWidth: 5,
    areaHeight: 6,
    endpoints: [
        { color: 'blue', end1: { row: 0, col: 0 }, end2: { row: 5, col: 4 } },
        { color: 'green', end1: { row: 1, col: 3 }, end2: { row: 5, col: 0 } },
        { color: 'red', end1: { row: 3, col: 1 }, end2: { row: 2, col: 3 } },
    ]
}

function generateTable(data) {
    let tableHTML = ''
    for (let rowindex = 0; rowindex < data.areaHeight; rowindex++) {
        let rowHTML = ''
        for (let colindex = 0; colindex < data.areaWidth; colindex++) {
            rowHTML += `<td data-row="${rowindex}" data-col="${colindex}"></td>`
        }
        tableHTML += `<tr>${rowHTML}</tr>`
    }
    gameArea.innerHTML = tableHTML
}

function generateStartingPoints(data) {
    let colors = {}
    for (const endpoint of data.endpoints) {
        const end1td = gameArea.rows[endpoint.end1.row].cells[endpoint.end1.col]
        const end2td = gameArea.rows[endpoint.end2.row].cells[endpoint.end2.col]

        end1td.classList.add(endpoint.color)
        end1td.classList.add('taken')
        end1td.dataset.color = endpoint.color 
        end1td.dataset.isEndpoint = true
        end1td.dataset.whichEnd = 1

        end2td.classList.add(endpoint.color)
        end2td.classList.add('taken')
        end2td.dataset.color = endpoint.color
        end2td.dataset.isEndpoint = true
        end2td.dataset.whichEnd = 2

        colors[endpoint.color] = { isDone: false }
    }
    return colors
}

let penColor = null
let startedIn = null
let colors = {}

// --- EXTRA ---
// Ebben a tömbben fogjuk tárolni a cellákat, amiken áthaladtunk.
let currentPath = [] 
// ----------

function mouseButtonEvent(event, elem) {
    event.preventDefault() 
    switch (event.buttons) {
        case 1:
            startDrawingIfFreeEndpoint(event, elem)
            break
        case 2:
            deleteLineIfValid(event, elem)
            break
        default:
            console.log('??')
    }
}

function startDrawingIfFreeEndpoint(event, elem) {
    if (penColor) return 
    if (!elem.dataset.isEndpoint) return 
    if (colors[elem.dataset.color].isDone) return 

    startedIn = elem.dataset.whichEnd
    penColor = elem.dataset.color
    
    // --- EXTRA ---
    // Amikor elkezdünk rajzolni, beletesszük a kezdőpontot az útvonalunkba
    currentPath = [elem]
    // ----------
}

function drawLine(event, elem) {
    if (!penColor) return 
    
    // --- EXTRA: VISSZALÉPÉS (BACKTRACKING) LOGIKA ---
    // Ha az útvonalban már van legalább 2 elem, ÉS az egeret pont arra az elemre 
    // húztuk vissza, ami az utolsó előtti volt (tehát visszaléptünk egyet):
    if (currentPath.length > 1 && currentPath[currentPath.length - 2] === elem) {
        
        // Vesszük a legutolsó elemet, és töröljük a tömbből (a pop() kiszedi és vissza is adja)
        let lastElem = currentPath.pop(); 
        
        // Ha ez nem végpont, akkor letisztítjuk róla a vonalat
        if (!lastElem.dataset.isEndpoint) {
            lastElem.classList.remove('taken');
            lastElem.classList.remove(penColor);
            lastElem.dataset.color = '';
        }
        
        return; // Mivel visszaléptünk, itt befejezzük a függvény futását
    }
    // ---------------------------------------------


    if (elem.dataset.isEndpoint) {
        if (elem.dataset.color != penColor || elem.dataset.whichEnd == startedIn) {
            breakIllegalDrawing()
            return
        } else {
            return 
        }
    }
    
    if (elem.classList.contains('taken')) {
        breakIllegalDrawing()
        return
    }

    elem.classList.add('taken')
    elem.classList.add(`${penColor}`)
    elem.dataset.color = penColor 
    
    // --- EXTRA ---
    // Ha sikeresen ráléptünk egy új, üres mezőre, adjuk hozzá a megjárt útvonalhoz!
    currentPath.push(elem);
    // ----------
}

function removeLine(color) {
    const lineCells = gameArea.querySelectorAll(`.${color}`)
    for (const cell of lineCells) {
        if (cell.dataset.isEndpoint) continue 
        cell.classList.remove(`${color}`)
        cell.classList.remove('taken')
    }
}

function breakIllegalDrawing() {
    removeLine(penColor)
    colors[penColor].isDone = false
    penColor = null
    startedIn = null
    
    // --- EXTRA ---
    currentPath = [] // Ha elrontottuk a vonalat, ürítsük ki az útvonalat is
    // ----------
}

function deleteLineIfValid(event, elem) {
    if (penColor) return 
    if (!elem.classList.contains('taken')) return 
    if (!colors[elem.dataset.color].isDone) return 

    removeLine(elem.dataset.color)
    colors[elem.dataset.color].isDone = false
}

function endDrawingCheckValidLine(event, elem) {
    if (!penColor) return 
    if (!elem.dataset.isEndpoint) {
        breakIllegalDrawing()
        return
    }

    colors[penColor].isDone = true
    penColor = null
    
    // --- EXTRA ---
    currentPath = [] // Ha sikeresen befejeztük, ürítsük ki a memóriát
    // ----------
}

generateTable(gameData)
colors = generateStartingPoints(gameData)

delegate(gameArea, 'td', 'mousedown', mouseButtonEvent)
delegate(gameArea, 'td', 'mouseover', drawLine)
delegate(gameArea, 'td', 'mouseup', endDrawingCheckValidLine)

gameArea.addEventListener('contextmenu', event => event.preventDefault())