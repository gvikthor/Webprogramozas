function ujElem(tipus, szulo, tartalommalFeltolt) {
    const elem = document.createElement(tipus)
    tartalommalFeltolt(elem)
    szulo.appendChild(elem)
}

function delegal(szulo, gyerek, mikor, mitortenik){
    function eventHandlerFunction(event){
        let eventTarget  = event.target
        let eventHandler = this
        let closestChild = eventTarget.closest(gyerek) // ez csak felfele néz

        if(eventHandler.contains(closestChild)){
            mitortenik(event, closestChild)
        }
    }

    szulo.addEventListener(mikor, eventHandlerFunction)
}

function megjelenit(oldalID) {
    /*//document.querySelector('.oldal#' + oldalID)
    document
        .querySelector(`.oldal#${oldalID}`)
        .classList.remove('elrejtve')*/

    document
        .querySelector('.oldal.aktiv')
        ?.classList.remove('aktiv')

    document
        .querySelector(`.oldal#${oldalID}`)
        .classList.add('aktiv')
}

megjelenit('menu')
delegal(document.body, '.nav', 'click', (esemeny, elem) => {
    megjelenit(elem.dataset.cel)
})

const meretMezo = document.querySelector('input#meret')
const jatekTabla = document.querySelector('#jatek table')

// deep copy objektumról egyszerűen: JSON.parse(JSON.stringify(peldaModell))

const babukGFX = [
    { //0. index, 0. játékos
        gyalog: '🐺',
        lo: '🦄'
    },
    { //1. index, 1. játékos
        gyalog: '🐵',
        lo: '🐴'
    }
];

const jatekRendszer = {
    modell: {
        meret: 0,
        aktualisJatekos: 0, // 0 és 1
        allas: []
    },

    feltolt: function (modell) {
        this.modell.meret = modell.meret
    },

    kiinduloAllapotBeallit: function (meret) {
        this.modell.meret = meret
        for(let sorIndex = 0; sorIndex < meret; sorIndex++) {
            let ujSor = []
            for(let cellaIndex = 0; cellaIndex < meret; cellaIndex++){
                let babu = null
                if(sorIndex == 1) {
                    babu = {
                        jatekos: 0,
                        tipus: 'gyalog'
                    }
                } else if(sorIndex == 6) {
                    babu = {
                        jatekos: 1,
                        tipus: 'gyalog'
                    }
                }
                let ujCella = {
                    sor: sorIndex,
                    cella: cellaIndex,
                    babu: babu
                    //jatekos: null ezt mi a bábuban fogjuk tárolni
                }
                ujSor.push(ujCella)
            }
            jatekRendszer.modell.allas.push(ujSor)
        }
    },

    kirajzol: function () {
        jatekTabla.innerHTML = ''
        jatekRendszer.modell.allas.forEach(sor => {
            ujElem('tr', jatekTabla, tr => {
                sor.forEach(cella => {
                    ujElem('td', tr, td => {
                        td.classList.sor = cella.sor
                        td.classList.cella = cella.cella

                        // if(objektum) --> ha null, nem lép be
                        if(cella.babu) {
                            td.innerText = babukGFX[cella.babu.jatekos][cella.babu.tipus]
                        }
                    })
                })
            })
        })
    },

    mezo: function (sor, cella){
        return this.modell.allas[sor][cella]
    },

    elore: function () {
        return this.aktualisJatekos == 0 ? 1 : -1
    },

    lepes: function (honnan, hova) {
        const honnanMezo = this.mezo(honnan.sor, honnan.cella)
        const hovaMezo = this.mezo(hova.sor, hova.oszlop)
        if(honnanMezo.babu == null) return false
        if(honnanMezo.babu.jatekos != this.aktualisJatekos) return false

        let siker = false
        switch (honnan.babu.tipus) {
            case 'gyalog':
                if(
                    hova.oszlop == honnan.oszlop &&                     // ugyanaz az oszlop?
                    hova.oszlop == honnan.oszlop + this.elore()         // csak egyet szeretne lépni? jó irányba?
                ){
                    hovaMezo.babu = honnanMezo.babu
                    honnanMezo.babu = null
                }
                break
            case 'lo':

                break
            default:
        }

        return siker
    }
}