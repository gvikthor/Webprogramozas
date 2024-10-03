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

const lista = document.querySelector('#filmek')

const filmek = [
    { cim: 'Star Wars', mufaj: 'space opera' },
    { cim: 'Gyűrűk Ura', mufaj: 'fantasy' },
    { cim: 'Tenet', mufaj: 'scifi' },
]

//filmek.forEach(film => ujElem('li', lista, li => li.innerText = film.cim))
/*
filmek.forEach(film => {
    /*
    function feltolt(li) {
        li.innerText = film.cim
        li.addEventListener('click', event => {
            
        })
    }
    ujElem('li', lista, feltolt)
    * /
    ujElem('li', lista, li => {
        li.innerText = film.cim
        li.addEventListener('click', esemeny => {
            /*if(li.classList.includes('megnezve')){
                li.classList.remove('megnezve')
            }else{
                li.classList.add('megnezve')
            }* /
           li.classList.toggle('megnezve')
           //filmAllapotValtoztat(film.id, li.classList.toggle('megnezve'))
        })
    })
})*/


filmek.forEach(film => ujElem('li', lista, li => li.innerText = film.cim))

delegal(lista, 'li', 'click', (esemeny, li) => {
    li.classList.toggle('megnezve')
})


const hutoTabla = document.querySelector('#hutoszekreny-tablazat')
const kijeloltNullazGomb = document.querySelector('#kijelolt-nullaz')

/*
delegal(hutoTabla, '.minusz', 'click', (esemeny, minuszGomb) => {
    const mennyisegSpan = minuszGomb.parentNode.querySelector('.mennyiseg')
    mennyisegSpan.innerText = parseInt(mennyisegSpan.innerText) - 1
})
delegal(hutoTabla, '.plusz', 'click', (esemeny, minuszGomb) => {
    const mennyisegSpan = minuszGomb.parentNode.querySelector('.mennyiseg')
    mennyisegSpan.innerText = parseInt(mennyisegSpan.innerText) + 1
})
*/
/*
delegal(hutoTabla, 'button', 'click', (esemeny, gomb) => {
    const mennyisegSpan = gomb.parentNode.querySelector('.mennyiseg')
    console.log(gomb.dataset.kiscica)
    let szam = 1
    if(gomb.classList.contains('minusz')){
        szam = -1
    }
    mennyisegSpan.innerText = parseInt(mennyisegSpan.innerText) + szam
})
*/

delegal(hutoTabla, 'button', 'click', (esemeny, gomb) => {
    const mennyisegSpan = gomb.parentNode.querySelector('.mennyiseg')
    mennyisegSpan.innerText = parseFloat(mennyisegSpan.innerText) + parseFloat(gomb.dataset.ertek)
})

delegal(hutoTabla, '.termek', 'click', (esemeny, termekTD) => {
    termekTD.parentNode.classList.toggle('kijelolve')
})

kijeloltNullazGomb.addEventListener('click', esemeny => {
    const kijeloltek = hutoTabla.querySelectorAll('.kijelolve')
    for(const kijelolt of kijeloltek){
        kijelolt.classList.remove('kijelolve')
        // ha csak a td lenne kijeölve, nem az egész sor, akkor kijelolt.parentNode.querySelector
        kijelolt.querySelector('.mennyiseg').innerText = 0
    }
})