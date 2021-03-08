const vaszon = document.querySelector('canvas')
const ecset = vaszon.getContext('2d')

//bal fentről indexel, első: vízszintes, második: függőleges
/*
ecset.moveTo(100,300)
ecset.lineTo(200,700)
ecset.stroke()
ecset.lineTo(90,90)
ecset.stroke()
*/
ecset.moveTo(100,300)
ecset.lineTo(200,700)
ecset.lineTo(90,90)

ecset.beginPath()
ecset.moveTo(500,500)
ecset.lineTo(600,600)
ecset.stroke()

ecset.beginPath()
ecset.moveTo(90,90)
ecset.lineTo(100,200)
ecset.lineTo(200,200)
ecset.lineTo(200,100)
//ecset.lineTo(100,100)
ecset.closePath()
ecset.stroke()

ecset.beginPath()
ecset.rect(256,250,30,150)
ecset.stroke()

ecset.beginPath()
ecset.arc(150,150,50,(1/4)*Math.PI,Math.PI) //radián, 0-tól 2pí-ig
ecset.stroke()

////////////////////////////////////////////////////////

const kutyus = new Image()
kutyus.src = './kutyus.png'

function kutyaRajzol(){
    //ecset.drawImage(kutyus, 20,20)
    ecset.drawImage(kutyus, 20,60,260,220,  20,20,260,200)
    //ecset.clearRect(0,0,1000,800)
}

kutyus.addEventListener('load', kutyaRajzol)
