const canvas = document.querySelector('canvas')
const brush  = canvas.getContext('2d')

brush.beginPath()
    brush.moveTo(50, 100)
    brush.lineTo(150,400)
brush.stroke()

brush.beginPath()
    brush.moveTo(400,400)
    brush.lineTo(300,300)
brush.stroke()

brush.beginPath()
    brush.arc(50,70, 20, Math.PI, 2*Math.PI)
    brush.arc(150,105, 20, 0, (1/2)*Math.PI, true)
brush.stroke()

brush.strokeStyle = 'red'

brush.beginPath()
    brush.rect(100,100, 50,70)
brush.stroke()

brush.fillStyle = 'green'

brush.beginPath()
    brush.fillRect(200,100, 50,70)
brush.stroke()

brush.lineWidth = 10
brush.lineJoin = 'round'
brush.beginPath()
    brush.moveTo(500, 100)
    brush.lineTo(500, 200)
    brush.lineTo(400, 200)
    brush.lineTo(300, 300)
    brush.lineTo(700, 150)
    //brush.lineTo(500, 100)
    brush.closePath()
brush.stroke()

brush.beginPath()
    brush.moveTo(100, 500)
    brush.lineTo(200, 500)
    brush.closePath()
brush.stroke()

const doggy = new Image()
doggy.src = './dog.jpg'
doggy.addEventListener('load', event => {
    //brush.drawImage(doggy,               400,400)
    //brush.drawImage(doggy,               400,400, 320,160)
    brush.drawImage(doggy, 267,26,200,120, 400,400, 320,160)
})