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


const lista = document.querySelector('#ul-helyek')
const helyek = [
    'Etyek',
    'Érd',
    'III. Kerület',
    'Margit-sziget',
    'Normafa',
    'Pusztafalu',
    'XI. Kerület'
]

function kijelol(esemeny, elem){
    elem.classList.toggle('kijelolt')
}
delegal(lista, 'li', 'click', kijelol)

for(const hely of helyek){
    //lista.innerHTML += `<li data-eredeti-hely="${hely}">${hely}</li>`
    let ujListaElem = document.createElement('li')
        ujListaElem.innerHTML = hely
        ujListaElem.dataset.eredetiHely = hely
        lista.appendChild(ujListaElem)
}

function atir(){
    const listaElemek = lista.querySelectorAll('.kijelolt')
    const ujSzoveg = document.querySelector('#input-hely').value
    for(const listaElem of listaElemek){
        listaElem.innerHTML = ujSzoveg
    }
}
document.querySelector('#btn-hely').addEventListener('click', atir)

let cssSzin = 'black'
function atszinez(){
    const listaElemek = lista.querySelectorAll('.kijelolt')
    const ujSzin = document.querySelector('#input-szin').value
    
    if(ujSzin == 'piros'){
        cssSzin = 'red'
    }else if(ujSzin == 'zöld'){
        cssSzin = 'green'
    }else if(ujSzin == 'kék'){
        cssSzin = 'blue'
    }

    for(const listaElem of listaElemek){
        listaElem.style.color = cssSzin
    }
}
document.querySelector('#btn-szin').addEventListener('click', atszinez)

function visszaallit(){
    const listaElemek = lista.querySelectorAll('.kijelolt')
    for(const listaElem of listaElemek){
        listaElem.innerHTML = listaElem.dataset.eredetiHely
        listaElem.style.color = 'black'
    }
}
document.querySelector('#btn-vissza').addEventListener('click', visszaallit)