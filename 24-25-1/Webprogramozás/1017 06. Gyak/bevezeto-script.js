const vaszon = document.querySelector('canvas')
const ecset  = vaszon.getContext('2d')

ecset.lineWidth = 10
ecset.strokeStyle = '#13294B'
ecset.fillStyle = '#008C95'
ecset.lineJoin = 'round'

ecset.beginPath()
    ecset.moveTo(100, 100)
    ecset.lineTo(200, 300)
    ecset.lineTo(400, 100)
    ecset.lineTo(50, 400)
    ecset.closePath()
ecset.stroke()
ecset.fill()

ecset.beginPath()
    ecset.moveTo(800, 700)
    ecset.lineTo(600, 500)
ecset.stroke()

ecset.beginPath()
    ecset.arc(400, 400, 150, 0, 2*Math.PI / 3, true)
    ecset.fill()
    ecset.stroke()


ecset.fillRect(20, 50, 100, 20)
ecset.strokeRect(20, 50, 100, 20)

const cicakep = new Image()
cicakep.src = 'cica.jpg'
// addEventListener
cicakep.onload = () => {
    //ecset.drawImage(cicakep, 100, 200)
    //ecset.drawImage(cicakep, 100, 200, 300, 200)
    ecset.drawImage(
        cicakep, 
        450, 330, 600, 400,
        100, 200, 300, 200)
}