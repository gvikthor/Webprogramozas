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
        // lehetne color helyett styleClass a neve, mert igazából a HTML-ben lévő CSS osztályokat hivatkozik
        // nem muszáky hogy 'blue' meg ilyesmi legyen, lehetne 'kiscica', csak akkor a HTML-ben így kell hívni a classt
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
        end1td.dataset.color = endpoint.color // datasetbe azért rakom be, mert könnyebb onnan kiolvasni, mint classListben szűrögetni, ha több class van rajta
        end1td.dataset.isEndpoint = true
        end1td.dataset.whichEnd = 1

        end2td.classList.add(endpoint.color)
        end2td.classList.add('taken')
        end2td.dataset.color = endpoint.color
        end2td.dataset.isEndpoint = true
        end2td.dataset.whichEnd = 2


        colors[endpoint.color] = { isDone: false }
    }

    // így nem kell előre tudnom, milyen színek vannak a játéktéren
    // (ugye annyiban csalóka, hogy a style-ba a HTML-be bele kell rakni őket előre)
    return colors
}

let penColor = null
let startedIn = null
let colors = {}

function mouseButtonEvent(event, elem) {
    //event.buttons == 1 akkor bal klikk
    //event.buttons == 2 akkor jobb klikk
    event.preventDefault() // ez a hülye drag-n-dropot meg tudja akadályozni, nem kell tudni, de segít
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
    if (penColor) return // ha éppen rajzolunk, ne kezdjünk el megint rajzolni (bár ilyennek nem kéne tudnia történni normál esetben)
    if (!elem.dataset.isEndpoint) return // nem endpoint, szóval nem indítunk rajzolást innen
    if (colors[elem.dataset.color].isDone) return // ha az adott szín már készen van (be van húzva érvényes vonal), ne rajzoljunk onnan

    startedIn = elem.dataset.whichEnd
    penColor = elem.dataset.color
}

function drawLine(event, elem) {
    if (!penColor) return // ha nem rajzolunk épp, akkor ez nem releváns
    if (elem.dataset.isEndpoint) {
        // ha egy végpontra érünk, de
        // - annak a színe nem ugyanaz mint amivel rajzolunk, az baj VAGY
        // - ha ugyanabba a végpontba értünk, mint ahonnan indultunk, az is baj
        if (elem.dataset.color != penColor || elem.dataset.whichEnd == startedIn) {
            breakIllegalDrawing()
            return
        } else {
            return // ilyenkor a cél endpointban vagyunk, és csak várjuk, hogy felemelje a ceruzát
        }
    }
    if (elem.classList.contains('taken')) {
        breakIllegalDrawing()
        return
    }

    elem.classList.add('taken')
    elem.classList.add(`${penColor}`)
    elem.dataset.color = penColor // ezt csak azért adjuk hozzá, hogy a jobbklikkes törlést könnyű legyen megcsinálni (tudja a jobbklikkkor magáról, hogy milyen színű)
}

function removeLine(color) {
    const lineCells = gameArea.querySelectorAll(`.${color}`)
    for (const cell of lineCells) {
        if (cell.dataset.isEndpoint) continue // ha ez az egyik endpoint, ne töröljünk róla infókat
        cell.classList.remove(`${color}`)
        cell.classList.remove('taken')
    }
}

function breakIllegalDrawing() {
    removeLine(penColor)
    colors[penColor].isDone = false
    penColor = null
    startedIn = null
}


function deleteLineIfValid(event, elem) {
    if (penColor) return // ha épp rajzolunk, ez ne történhessen meg
    if (!elem.classList.contains('taken')) return // ha nincs vonal az adott helyen, ennek nem sok értelme van
    if (!colors[elem.dataset.color].isDone) return // ez olyankor történhet meg, ha egy végpontra jobbklikkel amiben még nincs vonal

    removeLine(elem.dataset.color)
    colors[elem.dataset.color].isDone = false
}


function endDrawingCheckValidLine(event, elem) {
    if (!penColor) return // ha nem rajzolunk épp, akkor ez nem releváns
    if (!elem.dataset.isEndpoint) {
        breakIllegalDrawing()
        return
    }

    colors[penColor].isDone = true
    penColor = null
}


generateTable(gameData)
colors = generateStartingPoints(gameData)

delegate(gameArea, 'td', 'mousedown', mouseButtonEvent)
delegate(gameArea, 'td', 'mouseover', drawLine)
delegate(gameArea, 'td', 'mouseup', endDrawingCheckValidLine)

gameArea.addEventListener('contextmenu', event => event.preventDefault()) // ez megakadályozza a contextmenüt