/**
 * Delegáló függvény, ami kiváltja a sok azonos eseménykezelőt.
 * @param {HTMLElement} parent A szülő összefoglaló elem
 * @param {String} child CSS selector a gyerekre
 * @param {String} when Esemény, pl. click
 * @param {Function} what Két paraméteres függvény, első paraméter: event, mésodik az elem, amire kattintottak
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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const listSumSpan = document.querySelector('#list-sum')
const tableSumSpan = document.querySelector('#table-sum')
const numberUL = document.querySelector('ul')
const numberTable = document.querySelector('table')

const queryInputRow = document.querySelector('#query-row-num')
const queryInputCol = document.querySelector('#query-col-num')
const queryButton = document.querySelector('#run-query')
const queryOutput = document.querySelector('#query-result')

let numbers = []

for(let i = 0; i < 100; i++) {
    numbers.push(getRandomInt(100))
}

for(let i = 0; i < 6; i++) {
    numberUL.innerHTML += `<li data-mynumber="${numbers[i]}">Ár: ${numbers[i]} Ft</li>`
}

for(let row = 0; row < 10; row++) {
    let rowHtml = ''
    for(let col = 0; col < 10; col++) {
        rowHtml += `<td id="numcel-${row}-${col}" data-row="${row}" data-col="${col}">${numbers[10*row + col]}</td>`
                //  <td id="numcel-3-6" data-row="3" data-col="6">??</td>
    }
    numberTable.innerHTML += `<tr>${rowHtml}</tr>`
}

function sumSelectedItems() {
    let selectedLIs = numberUL.querySelectorAll('.selected')
    let liSum = 0
    for(const li of selectedLIs) {
        liSum += parseInt(li.dataset.mynumber)
    }
    listSumSpan.innerText = liSum

    let selectedTDs = numberTable.querySelectorAll('.selected')
    let tdSum = 0
    for(const td of selectedTDs) {
        tdSum += parseInt(td.innerText)
    }
    tableSumSpan.innerText = tdSum
}

function toggleChildSelected(event, elem) {
    elem.classList.toggle('selected')
    sumSelectedItems()

    console.log(elem.dataset.row, elem.dataset.col)  // mivel az UL-ben a LI-kre is ez az eseménykezelő fut le, ha arra kattintva jutottunk ide, ez undefined
}

delegate(numberUL, 'li', 'click', toggleChildSelected)
delegate(numberTable, 'td', 'click', toggleChildSelected)
queryButton.addEventListener('click', event => {
    const inputRow = queryInputRow.value
    const inputCol = queryInputCol.value

    const queriedCel = document.querySelector(`#numcel-${inputRow}-${inputCol}`)

    queryOutput.innerText = queriedCel.innerText
})
