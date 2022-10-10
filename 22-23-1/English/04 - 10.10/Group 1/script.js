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

const table = document.querySelector('table')

console.log(
    document.querySelector('div').dataset.dayOfBirth
)

for(let rowIndex = 0; rowIndex < 10; rowIndex++){
    const newTR = document.createElement('tr')
    for(let colIndex = 0; colIndex < 10; colIndex++){
        const newTD = document.createElement('td')
        newTD.classList.add('colour-0')
        newTD.dataset.row = rowIndex
        newTD.dataset.col = colIndex
        newTR.appendChild(newTD)
    }
    table.appendChild(newTR)
}

function switchColour(event, element){
    let newNumer = parseInt(element.classList[0].split('-')[1]) + 1
    if(newNumer > 4) newNumer = 0
    // let newNumer = (parseInt(element.classList[0].split('-')[1]) + 1) % 5
    element.classList.remove(element.classList[0])
    element.classList.add(`colour-${newNumer}`)

    //'apple;pearl;orange'.split(';')

    element.innerText = `[${element.dataset.row};${element.dataset.col}]`
}

delegate(table, 'td', 'click', switchColour)