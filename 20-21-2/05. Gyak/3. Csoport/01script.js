const vaszon = document.querySelector('canvas')
const ecset = vaszon.getContext('2d')

ecset.beginPath()
ecset.moveTo(500, 100)
ecset.lineTo(500, 300)
ecset.stroke()

ecset.beginPath()
ecset.moveTo(500, 100)
ecset.lineTo(600, 500)
ecset.stroke()

ecset.beginPath()
ecset.moveTo(100,100)
ecset.lineTo(100,200)
ecset.lineTo(200,200)
ecset.lineTo(200,100)
ecset.lineTo(100,100)
ecset.stroke()

ecset.beginPath()
ecset.moveTo(12,21)
ecset.lineTo(200,500)
ecset.lineTo(200,600)
ecset.lineTo(100,600)
ecset.closePath()
ecset.stroke()

ecset.beginPath()
ecset.rect(400, 600, 50, 75)
ecset.stroke()

ecset.beginPath()
ecset.arc(600, 400, 50, 0, 2*Math.PI) //radián az utolsó két paraméter
ecset.stroke()

ecset.beginPath()
ecset.arc(800, 400, 50, (1/4)*Math.PI, (2/3)*Math.PI)
ecset.stroke()

ecset.beginPath()
ecset.arc(900, 400, 50, (1/4)*Math.PI, (2/3)*Math.PI, true)
ecset.stroke()

const kiskutya = new Image()
kiskutya.src = './kiskutya.png'
kiskutya.addEventListener('load', kutyaRajzol)


function kutyaRajzol(){
    //ecset.drawImage(kiskutya, 700, 100)
    //ecset.drawImage(kiskutya, 700, 100, 50, 130)
    ecset.drawImage(kiskutya, 45, 100, 110, 80,   700, 100, 50, 130)
}

ecset.clearRect(0,0,1000,800)