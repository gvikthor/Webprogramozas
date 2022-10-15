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

const canvas = document.querySelector('canvas')
const brush = canvas.getContext('2d')
const colorsTable = document.querySelector('table')

const prevPos = {
    x: 0,
    y: 0,
    started: false
}

let isPushing = false

brush.strokeStyle ='blue'
brush.lineWidth = 10
brush.lineJoin = 'round'

delegate(colorsTable, 'td', 'click', (event, td) => {
    brush.strokeStyle = td.dataset.color
    colorsTable.querySelector('.selected').classList.remove('selected')
    td.classList.add('selected')
})

function draw(event){
    if(!isPushing) return 

    const x = event.clientX - canvas.getBoundingClientRect().x
    const y = event.clientY - canvas.getBoundingClientRect().y

    if(prevPos.started){
        brush.beginPath()
            brush.moveTo(prevPos.x, prevPos.y)
            brush.lineTo(x,y)
            brush.closePath()
        brush.stroke()
    }else{
        prevPos.started = true
    }

    prevPos.x = x
    prevPos.y = y
}
function pushing(){
    isPushing = true
}
function notPushing(){
    isPushing = false
    prevPos.started = false
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', pushing)
canvas.addEventListener('mouseup', notPushing)
canvas.addEventListener('mouseleave', notPushing)