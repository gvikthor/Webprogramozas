const szam1input = document.querySelector('#szam1')
const szam2input = document.querySelector('#szam2')
const eredmeny   = document.querySelector('#eredmeny')

function osszead(){
    eredmeny.innerHTML = parseFloat(szam1input.value) + parseFloat(szam2input.value)
}

function kivon(){
    eredmeny.innerHTML = parseFloat(szam1input.value) - parseFloat(szam2input.value)
}

function szoroz(){
    eredmeny.innerHTML = parseFloat(szam1input.value) * parseFloat(szam2input.value)
}

function oszt(){
    /*if(szam2input.value == 0){
        eredmeny.innerHTML = 'Nullosztó!'
    }else{
        eredmeny.innerHTML = parseFloat(szam1input.value) / parseFloat(szam2input.value)
    }*/

    eredmeny.innerHTML = szam2input.value == 0 ? 'Nullosztó!' : parseFloat(szam1input.value) / parseFloat(szam2input.value)
}

const osszadGomb = document.querySelector('#btn-osszead')
const kivonGomb = document.querySelector('#btn-kivon')
const szorozGomb = document.querySelector('#btn-szoroz')
const osztGomb = document.querySelector('#btn-oszt')

//elem        goblin         mikor    mi
osszadGomb.addEventListener('click', osszead)
kivonGomb.addEventListener('click', kivon)
szorozGomb.addEventListener('click', szoroz)
osztGomb.addEventListener('click', oszt)













