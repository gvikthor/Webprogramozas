const todoApp = document.querySelector('#todo-app-tr')

function SelectComponent(current){
    return `<select>
        <option value="todo" ${current == 'todo' ? 'selected' : ''}>Todo</option>
        <option value="prog" ${current == 'prog' ? 'selected' : ''}>In progress</option>
        <option value="done" ${current == 'done' ? 'selected' : ''}>Done</option>
    </select>`
}

function generateTodoTable(){
    todoApp.querySelectorAll('.status-col').forEach(col => col.innerHTML = '')
    getDataAsArray().forEach(elem => {
        //todoApp.querySelector(`#items-${elem.status}`)
        todoApp.querySelector(`.status-col[data-status="${elem.status}"]`).innerHTML += `
            <div class="card" data-id="${elem.id}">
                ${elem.name} <br>
                ${SelectComponent(elem.status)}
            </div>
        `
    })
}

delegate(todoApp, 'select', 'input', (event, elem) => {
    const card = elem.closest('.card')
    setData(card.dataset.id, 'status', elem.value)
    generateTodoTable()
})

generateTodoTable()