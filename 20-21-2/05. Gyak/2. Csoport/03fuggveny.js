const vaszon = document.querySelector('canvas')
const ecset = vaszon.getContext('2d')
const slider = document.querySelector('input')

function calcX(x){
    return x+500
}
function calcY(y){
    return 400-y
}

let hanyados = 1

function fuggveny(x){
    return (x*x)/hanyados
}


slider.addEventListener('input', ()=>{
    hanyados = slider.value
    kirajzol()
})

function kirajzol(){
    ecset.clearRect(0,0,1000,800)

    const elozo = {
        x: 0,
        y: 0,
        elso: true
    }

    ecset.strokeStyle = 'black'
    ecset.beginPath()
    ecset.moveTo(500,0)
    ecset.lineTo(500,800)
    ecset.stroke()

    ecset.beginPath()
    ecset.moveTo(0,400)
    ecset.lineTo(1000,400)
    ecset.stroke()

    ecset.strokeStyle = 'red'
    for(let i = -500; i <= 500; i++){
        const x = calcX(i)
        const y = calcY(fuggveny(i))

        if(!elozo.elso){
            ecset.beginPath()
            ecset.moveTo(elozo.x, elozo.y)
            ecset.lineTo(x, y)
            ecset.stroke()
        }

        elozo.x = x
        elozo.y = y
        elozo.elso = false
    }
}


/*
const ertekek = [0,150,-300,200,240,100,0,40,-60,10,15,20,25,30]
ecset.strokeStyle = 'red'
const elozo = {
    x: 0,
    y: 0,
    elso: true
}

for(let i = 0; i < ertekek.length; i++){
    if(!elozo.elso){
        ecset.beginPath()
        ecset.moveTo(elozo.x, elozo.y)
        ecset.lineTo(calcX(i*10), calcY(ertekek[i]))
        ecset.stroke()
    }

    elozo.x = calcX(i*10)
    elozo.y = calcY(ertekek[i])
    elozo.elso = false
}
*/