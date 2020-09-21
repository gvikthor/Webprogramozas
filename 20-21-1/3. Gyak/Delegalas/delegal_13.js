let szivarvany = document.querySelector('#szivarvany');

function xetHozzafuz(esemeny){
    let esemenyCelja    = esemeny.target;
    let esemenyKezeloje = this;
    let legkozelebbiKeresettElem = esemenyCelja.closest('.szin');

    if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
        console.log(esemeny); //ezt csak azért írjuk ki, hogy lássuk, továbbra is ez az esemény
        legkozelebbiKeresettElem.innerHTML += 'X';
    }
}


szivarvany.addEventListener('click', xetHozzafuz);