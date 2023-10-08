const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const clock = {
    middle: {
        x: 300,
        y: 300
    },
    size: 285
}

context.lineWidth = 5

function drawClock(xScale, yScale){
    context.clearRect(0,0, 1400, 600)

    context.strokeStyle = 'black'
    context.beginPath()
    context.arc(
        clock.middle.x,
        clock.middle.y,
        clock.size,
        0, 2*Math.PI
    )
    context.stroke()

    context.strokeStyle = 'red'
    context.beginPath()
    context.moveTo(clock.middle.x, clock.middle.y)
    context.lineTo(
        clock.middle.x + xScale*clock.size,
        clock.middle.y + yScale*clock.size
    )
    context.stroke()
}

let time = 2
/*
0   1   2
0   6   12

(6 / 12)*2 = 1
*/

const range = document.querySelector('input')
range.addEventListener('input', event => {
    time = (parseInt(range.value) / 12) * 2
})

setInterval(() => {
    drawClock(
        Math.sin((1-time)*Math.PI),
        Math.cos((time+1)*Math.PI)
    )
}, 2000)