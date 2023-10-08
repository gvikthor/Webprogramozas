const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

context.lineWidth = 5
context.lineJoin = 'round'
context.fillStyle = 'red'
context.strokeStyle = 'blue'

context.beginPath()
context.moveTo(20, 100)
context.lineTo(20, 400)
context.lineTo(300,300)
context.lineTo(150, 290)
//context.lineTo(20, 100)
context.closePath()
context.fill()
context.stroke()

context.fillRect(500, 400, 150, 90)

context.beginPath()
context.moveTo(200, 200)
context.lineTo(300, 300)
context.arc(500, 150, 50, Math.PI, 2 * Math.PI)
context.lineTo(700, 700)
context.closePath()
context.fill()
context.stroke()

const doggy = new Image()
doggy.src = 'dog.jpg'
document.querySelector('button').addEventListener('click', event => {
    //context.drawImage(doggy, 500, 400)
    //context.drawImage(doggy, 500, 400, 600, 10)
    context.drawImage(doggy, 120, 30, 100, 100, 0, 0, 600, 600)
})