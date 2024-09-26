/// Szorgalmi: bármelyik módszerrel generálj egy táblázatot: ember neve, ember életkora, litában az ember állatainak neve
/// beadás: e-mail thor@inf.elte.hu
/// script.js --> script.txt ==> zip

const tartalom = document.querySelector('#tartalom')
tartalom.innerHTML = ''

/*
const ujTablazat = document.createElement('table')
    const ujFejlec = document.createElement('thead')
        const ujSor = document.createElement('tr')
            const ujTH1 = document.createElement('th')
                ujTH1.innerText = 'Cím'
            ujSor.appendChild(ujTH1)
            const ujTH2 = document.createElement('th')
                ujTH2.innerText = 'Leírás'
            ujSor.appendChild(ujTH2)
            const ujTH3 = document.createElement('th')
                ujTH3.innerText = 'Témák'
            ujSor.appendChild(ujTH3)
        ujFejlec.appendChild(ujSor)
    ujTablazat.appendChild(ujFejlec)
tartalom.appendChild(ujTablazat)
*/

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

function ujElem(tipus, szulo, tartalommalFeltolt){
    const elem = document.createElement(tipus)
    tartalommalFeltolt(elem)
    szulo.appendChild(elem)
}

ujElem('table', tartalom, tablazat => {
    ujElem('thead', tablazat, thead => {
        ujElem('tr', thead, tr => {
            ujElem('th', tr, th => th.innerText = 'Cím')
            ujElem('th', tr, th => th.innerText = 'Leírás')
            ujElem('th', tr, th => th.innerText = 'Témák')
        })
    })

    ujElem('tbody', tablazat, tbody => {
        cikkek.forEach(cikk => ujElem('tr', tbody, tr => {
            ujElem('td', tr, td => {
                //td.style.backgroundColor = 'blue'
                td.classList.add('cikk-cim')
                td.innerText = cikk.cim
             })
            ujElem('td', tr, td => td.innerText = cikk.leiras)
            ujElem('td', tr, td => {
                ujElem('ul', td, ul => cikk.temak.forEach(tema => {
                    ujElem('li', ul, li => li.innerText = tema)}
                ))
            })
        }))
    })
})