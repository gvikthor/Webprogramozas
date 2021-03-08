function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }


    szulo.addEventListener(mikor, esemenyKezelo);
}


const vaszon = document.querySelector('canvas')
const ecset = vaszon.getContext('2d')
const szinek = document.querySelector('#szinek')
const vastagsagok = document.querySelector('#vastagsagok')

const elozo = {
    x: 0,
    y: 0,
    elso: true
}
let lenyomva = false


vaszon.addEventListener('mousemove', vonalatHuz)
vaszon.addEventListener('mousedown', gombLenyom)
vaszon.addEventListener('mouseup', gombFelenged)
vaszon.addEventListener('mouseleave', gombFelenged)
delegal(szinek, 'td', 'click', szinValaszt)
delegal(vastagsagok, 'td', 'click', vastagsagValaszt)

ecset.strokeStyle = 'black'
ecset.lineWidth = 10
ecset.lineJoin = 'round'

function gombLenyom(){
    lenyomva = true
}
function gombFelenged(){
    lenyomva = false
    elozo.elso = true
}

function szinValaszt(esemeny, elem){
    ecset.strokeStyle = elem.style.backgroundColor

    szinek.querySelector('.kijelolve').classList.remove('kijelolve')
    elem.classList.add('kijelolve')
}
function vastagsagValaszt(esemeny, elem){
    //ecset.lineWidth = elem.innerHTML
    ecset.lineWidth = elem.dataset.meret

    vastagsagok.querySelector('.kijelolve').classList.remove('kijelolve')
    elem.classList.add('kijelolve')
}

function vonalatHuz(esemeny){
    if(!lenyomva) return

    const x = esemeny.clientX - vaszon.getBoundingClientRect().x
    const y = esemeny.clientY - vaszon.getBoundingClientRect().y

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