// document.body.innerHTML = 'Alma <b>körte</b>'

const maciP = document.querySelector('#cikk-2 p')
maciP.innerHTML = 'Brimi brumi jaj, hideg van'

//document.body.innerHTML = ''

// 1. lépés: Létrehozom, ahova a tartalom menni fog
const tartalom = document.querySelector('#tartalom')
tartalom.innerHTML = ''

// 2. Lépés: Feltöltöm az adatokat
let tartalomHtml = ''
const cikkek = [
    {
        cim: 'Nagyon finom a tej a Sparban',
        leiras: 'Ez egy nagyon izgalmas cikk, kattints rá!',
        temak: ['belföld', 'politika']
    },
    {
        cim: 'Fázik a maci a barlangban',
        leiras: 'Brumm brumm',
        temak: ['külföld', 'természet','tél']
    },
    {
        cim: 'Hatalmas bejelentés, hivatalos, megerősítették MUTATJUK (videó)',
        leiras: 'Az X-Faktor sztárja hatalmas bejelentést tett élőben a Karmelitában.',
        temak: ['bulvár', 'belföld', 'xfaktor']
    }
]

tartalomHtml = `
    <table>
        <thead>
            <tr>
                <th>Cím</th>
                <th>Leírás</th>
                <th>Címkék</th>
            <tr>
        </thead>
        <tbody>
`

for(const cikk of cikkek){
    function temaLista(temak){
        let temakHtml = `<ul>`
        for(const tema of temak){
            temakHtml += `<li>${tema}</li>`
        }
        temakHtml += `</ul>`
        return temakHtml
    }

    /*tartalomHtml += `
        <tr>
            <td>${cikk.cim}</td>
            <td>${cikk.leiras}</td>
            <td>
                <ul>
                ${cikk.temak.map(tema => `<li>${tema}</li>`).join('')}
                </ul>
            </td>
        </tr>
    `*/
    tartalomHtml += `
        <tr>
            <td>${cikk.cim}</td>
            <td>${cikk.leiras}</td>
            <td>${temaLista(cikk.temak)}</td>
        </tr>
    `
}

tartalomHtml += `</tbody></table>`


// 3. Lépés: Hozzáfűzöm az oldalhoz
tartalom.innerHTML = tartalomHtml

