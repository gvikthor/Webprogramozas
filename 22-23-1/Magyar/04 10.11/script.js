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

for(let rowIndex = 0; rowIndex < 50; rowIndex++){
    const newTR = document.createElement('tr')
    for(let colIndex = 0; colIndex < 50; colIndex++){
        const newTD = document.createElement('td')
        newTD.dataset.rowIndex = rowIndex
        newTD.dataset.colIndex = colIndex
        newTR.appendChild(newTD)
    }
    table.appendChild(newTR)
}

function makeColor(event, element){
    element.style.backgroundColor = 'red';
    console.log(`Row: ${element.dataset.rowIndex}, Col: ${element.dataset.colIndex}`)

    /*let nextToTD = table.querySelector(`td[data-rowIndex="${element.dataset.rowIndex}"][data-colIndex="${element.dataset.colIndex+1}"]`)
    nextToTD.style.backgroundColor = 'red'*/

    element.parentNode.querySelectorAll('td').forEach(td => {
        if(parseInt(td.dataset.colIndex) > parseInt(element.dataset.colIndex)){
            td.style.backgroundColor = 'red'
        }
    })
}
delegate(table, 'td', 'click', makeColor)