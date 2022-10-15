const canvas = document.querySelector('canvas')
const brush = canvas.getContext('2d')

brush.beginPath()
    brush.moveTo(500, 100)
    brush.lineTo(700, 100)
brush.stroke()

brush.beginPath()
    brush.moveTo(500, 100)
    brush.lineTo(500, 600)
brush.stroke()

brush.beginPath()
    brush.moveTo(100, 100)
    brush.lineTo(100, 200)
    brush.lineTo(200, 300)
    brush.closePath()
brush.stroke()

brush.beginPath()
    brush.rect(200, 200, 50, 70)
brush.stroke()

brush.beginPath()
    brush.arc(400, 400, 50, 0, 2*Math.PI) // radian
brush.stroke()

brush.beginPath()
    brush.arc(500, 400, 50, 0, Math.PI) // radian
brush.stroke()

brush.beginPath()
    brush.arc(600, 400, 50, (1/4)*Math.PI, (3/2)*Math.PI) // radian
brush.stroke()

brush.beginPath()
    brush.arc(700, 400, 50, (1/4)*Math.PI, (3/2)*Math.PI, true) // radian
brush.stroke()

const dogImage = new Image()
dogImage.src = './dog.jpg'
dogImage.addEventListener('load', even => {
    //brush.drawImage(dogImage,                     400, 500)
    //brush.drawImage(dogImage,                     400, 500, 128, 72)
    brush.drawImage(dogImage, 230, 140, 400, 400,   400, 500, 200, 200)
})

brush.clearRect(0,0,1000,800)