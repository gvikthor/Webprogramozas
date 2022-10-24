const currencies = {
    EUR: {
        conversionRate: 300,
        color: 'blue',
        time: 0
    },
    USD: {
        conversionRate: 300,
        color: 'lightblue',
        time: 0
    },
    CHF: {
        conversionRate: 300,
        color: 'red',
        time: 0
    },
    GBP: {
        conversionRate: 300,
        color: 'pink',
        time: 0
    }
}

const canvas = document.querySelector('canvas')
const brush  = canvas.getContext('2d')
/*
x: 0 --> 10
y: 600-300 --> 600-310
*/

brush.lineWidth = 5
brush.lineJoin = 'round'

function conversionRateMove(currency, change){
    const curr = currencies[currency]

    brush.strokeStyle = curr.color
    brush.beginPath()
        brush.moveTo(curr.time*10, canvas.height-curr.conversionRate)
        curr.time += 1
        curr.conversionRate += change
        brush.lineTo(curr.time*10, canvas.height-curr.conversionRate)
        brush.fillText(curr.conversionRate, curr.time*10, canvas.height-curr.conversionRate)
        brush.closePath()
    brush.stroke()

    document.querySelector(`#${currency} span`).innerText = curr.conversionRate
}

setInterval(()=>{
    for(const curr in currencies){
        conversionRateMove(
            curr,
            parseInt(Math.random()*20-10)
        )
    }
},1000)