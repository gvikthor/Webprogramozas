const http = require('http')

const szerver = http.createServer((kérés, válasz) => {
    console.log('Kérés érkezett')

    válasz.setHeader('Content-Type', 'application/json')
    válasz.setHeader('Access-Control-Allow-Origin', kérés.headers.origin)

    const eredmeny = {
        alma: 'alma',
        korte: false,
        szilva: 241523,
        barack: [1,2,3,4,5]
    }

    válasz.write(JSON.stringify(eredmeny))

    válasz.end()
})

szerver.listen(54000, 'localhost')

console.log('Figyelem az 54000-es portot localhoston')