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

for(let row = 0; row < 10; row++){
    const newTR = document.createElement('tr')
    for(let col = 0; col < 10; col++){
        const newTD = document.createElement('td')
        newTD.dataset.rowIndex = row
        newTD.dataset.colIndex = col
        newTR.appendChild(newTD)
    }
    table.appendChild(newTR)
}

function doColoring(event, element){
    table.querySelectorAll('td').forEach(td => {
        if(td.dataset.rowIndex == element.dataset.rowIndex){
            td.classList.add('colored')
        }
    })
}

delegate(table, 'td', 'click', doColoring)