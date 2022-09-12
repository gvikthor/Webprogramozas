const vaszon = document.querySelector('canvas')
const ecset = vaszon.getContext('2d')
const xInput = document.querySelector('#xmertek')
const yInput = document.querySelector('#ymertek')
const gomb = document.querySelector('button')

//const szamok = [100,-230,375,150,190,-400,35]
function fuggveny(x){
    //return Math.sin(x)
    return x*x
}

const elozo = {
    x: 0,
    y: 0,
    elso: true
}
let xMertek = 10
let yMertek = 10

function xTengely(){
    ecset.beginPath()
    ecset.moveTo(0,400)
    ecset.lineTo(1000,400)
    ecset.fillText('x', 990, 395)
    ecset.stroke()
}

function yTengely(){
    ecset.beginPath()
    ecset.moveTo(500,0)
    ecset.lineTo(500,800)
    ecset.fillText('y', 505, 5)
    ecset.stroke()
}

/*
function xKiszamol(x){
    return 500+x
}

function yKiszamol(y){
    return 400-y
}
*/


function xKiszamol(x){
    return 500+(x*xMertek)
}

function yKiszamol(y){
    return 400-(y*yMertek)
}

function kirajzol(){
    ecset.clearRect(0,0,1000,800)
    xMertek = parseFloat(xInput.value)
    yMertek = parseFloat(yInput.value)

    ecset.strokeStyle = 'black'
    ecset.lineWidth = 1
    ecset.lineJoin = 'round'

    xTengely()
    yTengely()

    ecset.strokeStyle = 'red'
    ecset.lineWidth = 5
    //for(let i = 0; i < szamok.length; i++){
    for(let i = -500; i < 500; i++){
        const x = xKiszamol(i)
        const y = yKiszamol(fuggveny(i))

        if(!elozo.elso){
            ecset.beginPath()
            ecset.moveTo(elozo.x, elozo.y)
            ecset.lineTo(x, y)
            ecset.closePath()
            ecset.stroke()
        }

        elozo.x = x
        elozo.y = y
        elozo.elso = false
    }
}

gomb.addEventListener('click', kirajzol)