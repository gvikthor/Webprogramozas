const kimenet = document.querySelector('#kimenet')

const szam1 = document.querySelector('#szam1')
const szam2 = document.querySelector('#szam2')

const osszeadGomb = document.querySelector('#btn-osszead')
const kivonGomb = document.querySelector('#btn-kivon')
const szorozGomb = document.querySelector('#btn-szoroz')
const osztGomb = document.querySelector('#btn-oszt')

function osszeadas(){
    kimenet.innerHTML = parseFloat(szam1.value) + parseFloat(szam2.value)
}
//mihez                       mikor   mit
osszeadGomb.addEventListener('click', osszeadas)

function kivonas(){
    kimenet.innerHTML = parseFloat(szam1.value) - parseFloat(szam2.value)
}
kivonGomb.addEventListener('click', kivonas)

function szorzas(){
    kimenet.innerHTML = parseFloat(szam1.value) * parseFloat(szam2.value)
}
szorozGomb.addEventListener('click', szorzas)

function osztas(){
    /*if(szam2 == 0){
        kimenet.innerHTML = 'Nullosztó!'
    }else{
        kimenet.innerHTML = szam1 / szam2
    }*/

    kimenet.innerHTML = parseFloat(szam2.value) == 0 ? 'Nullosztó!' : (parseFloat(szam1.value)/parseFloat(szam2.value))
}
osztGomb.addEventListener('click', osztas)

