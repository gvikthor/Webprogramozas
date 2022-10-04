/*
<tr>
    <td>Luna</td>
    <td>Macska</td>
    <td>2</td>
    <td>                          ----> animal
        <ul>                      ----> forEach
            <li>Fish</li>         ----> food
            <li>Beef</li>
        </ul>
    </td>
</tr>
*/

const animals = [
    {name: 'Luna', species: 'cat', age: 2, foods: ['fish', 'beef']},
    {name: 'Móka', species: 'cat', age: 9, foods: ['chicken']},
    {name: 'Maja', species: 'dog', age: 5, foods: ['icecream', 'apple', 'pearl']},
    {name: 'Marci', species: 'cat', age: 7, foods: ['frenchfries', 'gingerbread']},
    {name: 'Szasha', species: 'dog', age: 10, foods: ['beef']}
]

const animalsTable = document.querySelector('#animals-table tbody')
/*for(const animal of animals){}*/

let tableGenerated = false
function generateTable(event){
    if(tableGenerated) return

    tableGenerated = true
    animals.forEach(animal => {
        const newTR = document.createElement('tr')
            let newData
        
            newData = document.createElement('td')
            newData.innerText = animal.name
            newTR.appendChild(newData)

            newData = document.createElement('td')
            newData.innerText = animal.species
            newTR.appendChild(newData)

            newData = document.createElement('td')
            newData.innerText = animal.age
            newTR.appendChild(newData)

            newData = document.createElement('td')
                let newUL = document.createElement('ul')
                    animal.foods.forEach(food => {
                        let newLI = document.createElement('li')
                        newLI.innerText = food
                        newUL.appendChild(newLI)
                    })
                newData.appendChild(newUL)
            newTR.appendChild(newData)
        animalsTable.appendChild(newTR)
    })
}



const documentTitle = document.querySelector('h1')

//function doSomething(event){}
//documentTitle.addEventListener('click', doSomething)

/*documentTitle.addEventListener('click', event => {
    console.log(event)
})*/

documentTitle.addEventListener('click', generateTable)
//delegate(document.body, 'h1', 'click', generateTable2) generateTable2 nyilván megírandó két paraméteres függvény

//generateTable()

/*const firstRow = animalsTable.querySelector('tr')

firstRow.addEventListener('click', event => {
    firstRow...
})*/

/*animalsTable
    .querySelector('tr')
    .addEventListener('click', function (event) {
        / *if(this.classList.contains('selected')){
            this.classList.remove('selected')
        }else{
            this.classList.add('selected')
        }* /
        this.classList.toggle('selected')
    })*/

//animalsTable.querySelectorAll('tr').addEventListener nem működik, mert egy nodeList
function select(event){
    this.classList.toggle('selected')
}
/*animalsTable
    .querySelectorAll('tr')
    .forEach(tr => tr.addEventListener('click', select))*/

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

function select2(event, elem){
    elem.classList.toggle('selected')
}
delegate(animalsTable, 'tr', 'click', select2)
/*delegate(animalsTable, 'tr', 'click', (event, elem) => {
    elem.classList.toggle('selected')
})*/

/*delegate(animalsTable, 'li', 'click', (event, elem) => {
    elem.classList.toggle('listItemSelected')
})*/

/*
Lehessen kijelölni sorokat, és legyen egy gomb a táblázaton kívül,
amit megnyomva kiírja (nem konzolra, hanem valami elembe) a kijelölt
állatok össz életkorát.
*/