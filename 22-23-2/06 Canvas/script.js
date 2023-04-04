const canvas = document.querySelector('#game-area')
const context = canvas.getContext('2d')

context.lineWidth = 10
context.strokeStyle = 'red'
context.fillStyle = 'blue'
context.lineJoin = 'round'

context.beginPath()
context.moveTo(200,500)
context.lineTo(200,700)
context.stroke()

context.beginPath()
context.rect(100,300, 400,10)
//context.fillRect(100,300, 400,10)
context.stroke()
//context.fill()

context.beginPath()
context.moveTo(10,10)
context.lineTo(120,340)
context.lineTo(170, 210)
context.lineTo(200, 51)
context.arc(200,0, 51, (3/2)*Math.PI, 0, true)
context.closePath()
//context.lineTo(10,10)
context.stroke()
context.fill()

context.beginPath()
context.arc(600,600, 40, 0, (2/3)*Math.PI, false)
//context.stroke()
context.fill()

//context.clearRect(0,0, 1000, 1000)