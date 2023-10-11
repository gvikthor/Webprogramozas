const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

// 0. stílus
// 1. tervezés
// 2. festés

context.lineWidth = 10
context.lineJoin = 'round'

context.strokeStyle = 'red'
context.fillStyle = 'blue'

context.beginPath()
    context.moveTo(30, 50)
    context.lineTo(340, 230)
    context.lineTo(190, 25)
    context.lineTo(800, 400)
    context.arc(30, 500, 50, Math.PI, Math.PI * 2) // 0rad = 0° , PI = 180°
    //context.lineTo(30, 50)
    context.closePath()
    context.fill()
    context.stroke()

context.beginPath()


context.fillRect(1000, 50, 71, 80)
context.strokeRect(1000, 50, 71, 80)