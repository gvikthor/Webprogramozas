function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target
        let eventHandler = this
        let closestChild = eventTarget.closest(child)

        if(eventHandler.contains(closestChild)){
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


// Task 1
const atlantaToCharlotte = railServices.some(service => service.startCity === "Atlanta" && service.endCity === "Charlotte")
console.log(atlantaToCharlotte)
document.querySelector('#task-1').innerText = atlantaToCharlotte ? "Van" : "Nincs"

// Task 2
const longRoutes = railServices.filter(service => service.length > 200)
let sum = 0
longRoutes.forEach(route => sum += route.length)
const averageTime = sum / longRoutes.length

// Reducet nem néztük mélyebben, de azzal szépen megoldható
// const averageTime = longRoutes.reduce((sum, service) => sum + service.time, 0) / longRoutes.length

document.querySelector('#task-2').innerText = averageTime

// Task 3
// vegyes megoldás, hogy mindre emlékezzünk, nyilván jó a sima függvény is, amit írtunk, meg lehet tisztán innerHTML-lel stb.
const tbody = document.querySelector('#task-34 tbody')
railServices.forEach(service => {
    const row = document.createElement('tr')
    row.dataset.price = service.price // 5. feladat miatt kell
    row.innerHTML = `
        <td>${service.startCity}</td>
        <td>${service.endCity}</td>
        <td>${service.time}</td>
        <td>${service.length}</td>
        <td>${service.price}</td>
    `
    tbody.appendChild(row)
})

// Task 4
delegate(tbody, 'tr', 'click', (event, closestChild) => {
    closestChild.classList.toggle('kivalasztva')
})

// Task 5
document.querySelector('#task-5-gomb').addEventListener('click', event => {
    let sum = 0
    let amount = 0

    console.log(document.querySelectorAll('#task-3 tbody tr.kivalasztva'))
    
    document
        .querySelectorAll('#task-34 tbody tr.kivalasztva')
        .forEach(sor => {
            console.log(sor)
            sum += parseInt(sor.dataset.price)
            amount++
        })
    
    document.querySelector('#task-5-span').innerText = (amount == 0 ? 0 : sum / amount)
})