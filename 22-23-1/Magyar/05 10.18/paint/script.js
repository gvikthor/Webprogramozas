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
const brush  = canvas.getContext('2d')

const prev = {
    x: 0,
    y: 0,
    started: false
}

let isPushing = false
canvas.addEventListener('mousedown', event => {isPushing = true})
canvas.addEventListener('mouseup', event => {
    isPushing = false
    prev.started = false
})
canvas.addEventListener('mouseleave', event => {
    isPushing = false
    prev.started = false
})

brush.lineWidth = 5
brush.lineJoin = 'round'
brush.strokeStyle = 'black'

canvas.addEventListener('mousemove', event => {
    if(!isPushing) return

    const X = event.x - canvas.getBoundingClientRect().x
    const Y = event.y - canvas.getBoundingClientRect().y
    
    if(prev.started){
        brush.beginPath()
            brush.moveTo(prev.x, prev.y)
            brush.lineTo(X, Y)
            brush.closePath()
        brush.stroke()
    }

    prev.x = X
    prev.y = Y
    prev.started = true
})

delegate(
    document.querySelector('table'),
    'td',
    'click',
    (event, td) => {
        document.querySelector('.selected')?.classList.remove('selected')
        td.classList.add('selected')
        brush.strokeStyle = td.dataset.color
    }
)