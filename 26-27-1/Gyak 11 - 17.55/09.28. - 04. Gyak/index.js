function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

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


const liSumSpan = document.querySelector('#li-sum')
const tdSumSpan = document.querySelector('#td-sum')
const numbersUL = document.querySelector('ul')
const numbersTable = document.querySelector('table')

function addSelectedClass(event, elem) {
    elem.classList.toggle('selected')

    const selectedLIs = numbersUL.querySelectorAll('.selected')
    // selectedLIs.forEach(li => {})
    let liSum = 0
    for(const li of selectedLIs) {
        //liSum += parseInt(li.innerHTML)
        liSum += parseInt(li.dataset.mynumber)
    }

    liSumSpan.innerHTML = liSum


    const selectedTDs = numbersTable.querySelectorAll('.selected')
    let tdSum = 0
    for(const td of selectedTDs) {
        tdSum += parseInt(td.innerHTML)
    }

    tdSumSpan.innerHTML = tdSum
}

delegate(numbersUL, 'li', 'click', addSelectedClass)
delegate(numbersTable, 'td', 'click', addSelectedClass)

let numbers = []
for(let i = 0; i < 100; i++){
    numbers.push(getRandomInt(100))
}

for(let i = 0; i < 6; i++) {
    numbersUL.innerHTML += `<li data-mynumber="${numbers[i]}">Ár: ${numbers[i]} Ft</li>`
}

for(let row = 0; row < 10; row++){ // ennek a 10-nek nincs közvetlenül köze a lenti 10-hez
    let rowString = ''
    for(let col = 0; col < 10; col++){ // ez a 10
        rowString += `<td>${numbers[row*10 + col]}</td>` // ugyanaz mint ez a 10
    }
    numbersTable.innerHTML += rowString
}







/*
delegate(numbersUL, 'li', 'click', (event, li) => {

})
*/

//////////////////////////////////

/*
setTimeout(() => {
    console.log(getRandomInt(100))
}, 2000)


let interval = setInterval(() => {
    numbers.push(getRandomInt(100))
    if(numbers.length >= 100) {
        clearInterval(interval)
    }
}, 5)
console.log(numbers)
*/