const canvas = document.querySelector('canvas')
const brush = canvas.getContext('2d')

const btnP = document.querySelector('#btn-plus')
const btnM = document.querySelector('#btn-minus')
const btnS = document.querySelector('#btn-stay')
const rateSpan = document.querySelector('#rate')

let rate = 250 // vertical |
let time = 0 // horizonatal ---
let dir = ''

btnP.addEventListener('click', event => {
    brush.beginPath()
        brush.moveTo(time, 500-rate)
        time += 10
        rate += 10
        brush.lineTo(time, 500-rate)
    brush.stroke()
    if(dir != 'P'){
        brush.fillText(rate, time-20, 500-rate-20)
        dir = 'P'
    }
    rateSpan.innerText = rate
})

btnM.addEventListener('click', event => {
    brush.beginPath()
        brush.moveTo(time, 500-rate)
        time += 10
        rate -= 10
        brush.lineTo(time, 500-rate)
    brush.stroke()
    if(dir != 'M'){
        brush.fillText(rate, time-20, 500-rate-20)
        dir = 'M'
    }
    rateSpan.innerText = rate
})

btnS.addEventListener('click', event => {
    brush.beginPath()
        brush.moveTo(time, 500-rate)
        time += 10
        brush.lineTo(time, 500-rate)
    brush.stroke()
    if(dir != 'S'){
        brush.fillText(rate, time-20, 500-rate-20)
        dir = 'S'
    }
})