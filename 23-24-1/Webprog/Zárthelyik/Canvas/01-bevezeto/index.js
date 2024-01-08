const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

/*
útvonal kezdés
- lépés
- lépés
- lépés
útvonal kirajzolás
*/

context.fillStyle = 'red'
context.strokeStyle = 'blue'
context.lineWidth = 20

context.beginPath()
context.moveTo(100, 200)
context.lineTo(100, 300)
context.lineTo(200, 300)
context.closePath()
context.fill()
context.stroke()

context.fillRect(10, 30, 150, 200)
context.strokeRect(10, 30, 150, 200)

context.beginPath()
context.arc(400, 400, 30, Math.PI, 2*Math.PI)
context.closePath()
context.stroke()

const human = new Image()
human.src = 'ember.png'
human.addEventListener('load', _ => {
    context.drawImage(
        human,
        150, 50, 200, 200,
        30, 30, 50, 50,)
})

context.fillStyle = 'green'
for(let i = 10; i < 500; i += 50){
    context.beginPath()
    context.moveTo(i, i)
    context.lineTo(i+10, i)
    context.lineTo(i+10, i+10)
    context.lineTo(i, i+10)
    context.closePath()
    context.fill()
}

