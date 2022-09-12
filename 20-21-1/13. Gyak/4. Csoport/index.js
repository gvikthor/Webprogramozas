const Esemeny = require('events')

const esemenykezelo = new Esemeny()

esemenykezelo.on('kiscicakiskutya', parameter => {
    console.log(parameter)
})

esemenykezelo.emit('kiscicakiskutya', {
    almafa: 'Igen',
    kortefa: true
})

const http = require('http')

const szerver = http.createServer((kérés, válasz) => {
    esemenykezelo.emit('kiscicakiskutya', {
        valami: kérés.headers.origin
    })

    válasz.setHeader('Content-Type', 'application/json')
    válasz.setHeader('Access-Control-Allow-Origin', kérés.headers.origin)

    válasz.write(JSON.stringify({
        alma: 'Alma',
        korte: 53246547,
        szilva: false,
        barack: [
            {
                nev: 'Ákos',
                nem: false
            }
        ]
    }))

    válasz.end()
})

szerver.listen(54000, 'localhost')