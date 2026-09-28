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
        rowHtml += `<td>${numbers[10*row + col]}</td>`
    }
    numberTable.innerHTML += `<tr>${rowHtml}</tr>`
}

/*delegate(numberUL, 'li', 'click', (event, li) => {
    li.classList.toggle('selected')
})*/

function sumSelectedItems() {
    let selectedLIs = numberUL.querySelectorAll('.selected')
    let liSum = 0
    for(const li of selectedLIs) {
        //liSum += parseInt(li.innerText)
        liSum += parseInt(li.dataset.mynumber)
    }
    listSumSpan.innerText = liSum
    /*selectedLIs.forEach(li => {

    })*/

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
}

delegate(numberUL, 'li', 'click', toggleChildSelected)
delegate(numberTable, 'td', 'click', toggleChildSelected)





/////////////////////////////////////////////////////

/*
setTimeout(() => {
    console.log('alma')
}, 2000)

setInterval(() => {
    console.log('körte')
}, 1000)
*/

/*
let randomGeneratingInterval = setInterval(() => {
    numbers.push(getRandomInt(10))
    if(numbers.length >= 100) {
        clearInterval(randomGeneratingInterval)
    }
}, 2)
*/

/*
const cryptoNumbers = new Uint32Array(100)
self.crypto.getRandomValues(cryptoNumbers)
console.log(cryptoNumbers)
*/