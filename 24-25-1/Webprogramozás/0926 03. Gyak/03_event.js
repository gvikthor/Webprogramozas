const kiir = document.querySelector('#kiir')

kiir.addEventListener('click', esemeny => {
    console.log(esemeny)
    esemeny.target.classList.add('cikk-cim')
})


const gombCsokkent = document.querySelector('#csokkent')
const gombNovel = document.querySelector('#novel')
const spanSzam = document.querySelector('#szam')
let szam = 0

spanSzam.innerText = szam
/*
gombNovel.addEventListener('click', esemeny => {
    szam++
    spanSzam.innerText = szam
})

gombCsokkent.addEventListener('click', esemeny => {
    if(szam == 0) return

    szam--
    spanSzam.innerText = szam
})*/

/*
gombNovel.addEventListener('mousemove', esemeny => {
    szam++
    spanSzam.innerText = szam
})

gombCsokkent.addEventListener('mousemove', esemeny => {
    if(szam == 0) return

    szam--
    spanSzam.innerText = szam
})
*/

/*
let novelhet = false
gombNovel.addEventListener('mouseenter', esemeny => {
    novelhet = true
})
gombNovel.addEventListener('mouseleave', esemeny => {
    novelhet = false
})

setInterval(()=>{
    if(!novelhet) return 

    szam++
    spanSzam.innerHTML = szam
}, 10)
*/

function novel(){
    szam++
    spanSzam.innerText = szam
}
function csokkent(){
    szam--
    spanSzam.innerText = szam
}

let novelIdozito = null
let csokkenIdozito = null

gombNovel.addEventListener('mouseenter', esemeny => novelIdozito = setInterval(novel, 10))
gombNovel.addEventListener('mouseleave', esemeny => clearInterval(novelIdozito))
gombCsokkent.addEventListener('mouseenter', esemeny => csokkenIdozito = setInterval(csokkent, 10))
gombCsokkent.addEventListener('mouseleave', esemeny => clearInterval(csokkenIdozito))

/////////////////////////////////
function ujElem(tipus, szulo, tartalommalFeltolt){
    const elem = document.createElement(tipus)
    tartalommalFeltolt(elem)
    szulo.appendChild(elem)
}

const ulAllatok = document.querySelector('#allatok')
const allatok = ['cica', 'kutya', 'medve']

/*
allatok.forEach(allat => {
    ujElem('li', ulAllatok, li => {
        li.innerText = allat
        li.addEventListener('click', esemeny => console.log(allat))
    })
})
*/

/*
allatok.forEach((allat, index) => {
    ulAllatok.innerHTML += `<li id="allat-${index}">${allat}</li>`
    document.querySelector(`#allat-${index}`).addEventListener('click', esemeny => console.log(allat))
})
*/

