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

const todoUL = document.querySelector('#ul-todo')
const doneUL = document.querySelector('#ul-done')
const makeDoneBtn = document.querySelector('#make-done')
const makeTodoBtn = document.querySelector('#make-todo')

const ACT_AS_IF_THIS_WERE_A_SERVER = {
    'abc123': {
        id: 'abc123',
        status: 'done',
        name: 'Barátok meghívása'
    },
    'qwe123': {
        id: 'qwe123',
        status: 'todo',
        name: 'Hely lefoglalása'
    },
    'jkl987': {
        id: 'jkl987',
        status: 'todo',
        name: 'Játékok összeszedése'
    },
    'cvb654': {
        id: 'cvb654',
        status: 'done',
        name: 'Időpont kiválasztása'
    },
}
function getData(){
    return ACT_AS_IF_THIS_WERE_A_SERVER
}
function getDataAsArray(){
    return Object.entries(getData()).map(entry => entry[1])
}
function setData(id, key, value){
    ACT_AS_IF_THIS_WERE_A_SERVER[id][key] = value
}

// Szorgalmi
function sortIntoCategories(){
    return {
        'done': [],
        'todo': [],
        '...': []
    }
}

/*
const listItems = getData()

for(const index in listItems){
    console.log(index, listItems[index])
}

for(const elem of Object.entries(listItems)){
    console.log(elem[0], elem[1])
}

for(const elem of getDataAsArray()){
    console.log(elem)
}*/

function generateTodoList(){
    const todoElements = getDataAsArray().filter(elem => elem.status == 'todo')
    const doneElements = getDataAsArray().filter(elem => elem.status == 'done')

    todoUL.innerHTML = ''
    doneUL.innerHTML = ''

    todoElements.forEach(elem => {
        todoUL.innerHTML += `<li data-id="${elem.id}">${elem.name}</li>`
    })
    doneElements.forEach(elem => {
        doneUL.innerHTML += `<li data-id="${elem.id}">${elem.name}</li>`
    })
}

delegate(todoUL, 'li', 'click', (event, elem) => {
    elem.classList.toggle('selected')
})
delegate(doneUL, 'li', 'click', (event, elem) => {
    elem.classList.toggle('selected')
})

generateTodoList()

makeDoneBtn.addEventListener('click', event => {
    const selectedTodoElements = todoUL.querySelectorAll('.selected')
    selectedTodoElements.forEach(elem => {
        setData(elem.dataset.id, 'status', 'done')
    })
    generateTodoList()
})
makeTodoBtn.addEventListener('click', event => {
    const selectedDoneElements = doneUL.querySelectorAll('.selected')
    selectedDoneElements.forEach(elem => {
        setData(elem.dataset.id, 'status', 'todo')
    })
    generateTodoList()
})