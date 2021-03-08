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
const szinGombSor = document.querySelector('#szin')
const vastGombSor = document.querySelector('#vastagsag')
ecset.lineJoin = 'round'
ecset.strokeStyle = 'black'
ecset.lineWidth = 10

const elozo = {
    x: 0,
    y: 0,
    elso: true
}

let gombLenyomva = false
function ecsetLe(){
    gombLenyomva = true
}
function ecsetFel(){
    gombLenyomva = false
    elozo.elso = true
}
function ecsetSzinModosit(esemeny, elem){
    szinGombSor.querySelector('.kivalasztva').classList.remove('kivalasztva')

    ecset.strokeStyle = elem.style.backgroundColor
    elem.classList.add('kivalasztva')
}
function ecsetVastModosit(esemeny, elem){
    vastGombSor.querySelector('.kivalasztva').classList.remove('kivalasztva')

    ecset.lineWidth = parseInt(elem.dataset.meret)
    elem.classList.add('kivalasztva')
}

vaszon.addEventListener('mousedown', ecsetLe)
vaszon.addEventListener('mouseup', ecsetFel)
vaszon.addEventListener('mouseleave', ecsetFel)

delegal(szinGombSor, 'td', 'click', ecsetSzinModosit)
delegal(vastGombSor, 'td', 'click', ecsetVastModosit)

vaszon.addEventListener('mousemove', (esemeny)=>{
    if(!gombLenyomva) return

    const x = esemeny.clientX - vaszon.getBoundingClientRect().x
    const y = esemeny.clientY - vaszon.getBoundingClientRect().y
    
    if(!elozo.elso){
        ecset.beginPath()
        ecset.moveTo(elozo.x,elozo.y)
        ecset.lineTo(x,y)
        ecset.closePath()
        ecset.stroke()
    }

    elozo.x = x
    elozo.y = y
    elozo.elso = false
})