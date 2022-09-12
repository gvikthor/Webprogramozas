const http = require('http')

const szerver = http.createServer((kérés, válasz) => {
    console.log('Kérés érkezett')

    válasz.setHeader('Content-Type', 'application/json')
    válasz.setHeader('Access-Control-Allow-Origin', kérés.headers.origin)

    let eredmeny = {
        nev: 'Tomika',
        kor: 23,
        web: true
    }

    válasz.write(JSON.stringify(eredmeny))

    válasz.end()
})

szerver.listen(54000, 'localhost')

console.log('Figyelem az 54000-es portot')