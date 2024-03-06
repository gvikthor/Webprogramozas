const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

context.lineWidth = 5
context.lineJoin = 'round'
context.strokeStyle = 'red'
context.fillStyle = 'blue'

context.beginPath()
context.moveTo(50, 100)
context.lineTo(50, 300)
context.lineTo(100, 200)
context.lineTo(20, 90)
//context.lineTo(50, 100)
context.closePath()
context.fill()
context.stroke()

context.strokeRect(200, 300, 70, 20)
context.fillRect(400, 300, 70, 20)

context.beginPath()
context.arc(50, 50, 25, 0, 0.5*Math.PI, false)
context.stroke()

const image = new Image
image.src = 'korte.jpg'

let position = 500
//setTimeout(_ => {
setInterval(_ => {
    context.clearRect(0,0,800,600)
    //context.drawImage(image, 500, 400)
    //context.drawImage(image, 500, 400, 100, 30)
    context.drawImage(
        image,
        400, 500, 200, 300,
        position, 400, 200, 300)
    position -= 50
}, 500)