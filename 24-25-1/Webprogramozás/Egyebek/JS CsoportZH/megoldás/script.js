function newElement(elementType, parent, fillWithContent) {
    const elem = document.createElement(elementType)
    fillWithContent(elem)
    parent.appendChild(elem)
}

function delegate(parent, child, when, what) {
    function eventHandlerFunction(event) {
        let eventTarget = event.target
        let eventHandler = this
        let closestChild = eventTarget.closest(child)

        if (eventHandler.contains(closestChild)) {
            what(event, closestChild)
        }
    }

    parent.addEventListener(when, eventHandlerFunction)
}

const railServices = [
    {
        startCity: "New York",
        endCity: "Washington D.C.",
        length: 225,
        time: 6,
        price: 8
    },
    {
        startCity: "San Francisco",
        endCity: "Los Angeles",
        length: 380,
        time: 10,
        price: 12
    },
    {
        startCity: "Chicago",
        endCity: "St. Louis",
        length: 300,
        time: 9,
        price: 10
    },
    {
        startCity: "Seattle",
        endCity: "Portland",
        length: 175,
        time: 5,
        price: 6
    },
    {
        startCity: "Boston",
        endCity: "New York",
        length: 215,
        time: 7,
        price: 9
    },
    {
        startCity: "Philadelphia",
        endCity: "Baltimore",
        length: 95,
        time: 3,
        price: 4
    },
    {
        startCity: "Miami",
        endCity: "Orlando",
        length: 235,
        time: 8,
        price: 9
    },
    {
        startCity: "Dallas",
        endCity: "Houston",
        length: 240,
        time: 8,
        price: 9
    },
    {
        startCity: "Denver",
        endCity: "Salt Lake City",
        length: 525,
        time: 15,
        price: 15
    },
    {
        startCity: "Atlanta",
        endCity: "Charlotte",
        length: 245,
        time: 8,
        price: 9
    }
]

const task1 = document.querySelector('#task-1')
const task2 = document.querySelector('#task-2')
const task34 = document.querySelector('#task-34')
const task5m = document.querySelector('#task-5-m')
const task5p = document.querySelector('#task-5-p')

// 1.
const longLine = railServices.find(line => line.length > 300)
task1.innerText = `${longLine.startCity} - ${longLine.endCity}`

// 2.
const cities = []
for (const line of railServices) {
    if (line.time > 5) {
        if (!cities.includes(line.startCity)) cities.push(line.startCity)
        if (!cities.includes(line.endCity)) cities.push(line.endCity)
    }
}
task2.innerText = cities.join(', ')

// 3. (és az 5. miatt a span)
for (const line of railServices) {
    task34.innerHTML += `
    <li>
        ${line.startCity} - ${line.endCity} : 
        $<span class="price">${line.price}</span>
    </li>`
}

// 4.
delegate(task34, 'li', 'click', (event, elem) => elem.classList.toggle('kivalasztva'))

// 5.
function editSelectedPrices(amount) {
    document
    .querySelectorAll('.kivalasztva')
    .forEach(li => {
        const priceSpan = li.querySelector('.price')
        priceSpan.innerText = parseInt(priceSpan.innerText) + amount
    })
}

task5m.addEventListener('click', event => editSelectedPrices(-1))
task5p.addEventListener('click', event => editSelectedPrices(1))