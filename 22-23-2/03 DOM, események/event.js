function writeSomething(event){
    console.log(event)
}

document.body.addEventListener('click', writeSomething)

const foodsUL = document.querySelector('#foods')
/*foodsUL.addEventListener('click', event => {
    foodsUL.style.color = 'red'
})*/

/*const foodListItems = foodsUL.querySelectorAll('li')
for(const foodListItem of foodListItems){
    foodListItem.addEventListener('click', event => {
        foodListItem.style.color = 'red'
    })
}*/

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

delegate(foodsUL, 'li', 'click', (event, elem) => {
    /*if(event.ctrlKey){
        elem.style.color = 'green'
    }else{
        elem.style.color = 'red'
    }*/

    // kérdés ? válasz, ha igaz : válasz, ha hamis
    elem.style.color = event.ctrlKey ? 'green' : 'red'
})

////////////////////////

const nasaInput = document.querySelector('#nasa-input')
nasaInput.addEventListener('keydown', event => {
    if(event.key == 'Backspace'){
        event.preventDefault()
    }
})