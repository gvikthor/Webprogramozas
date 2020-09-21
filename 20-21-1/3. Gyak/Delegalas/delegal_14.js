let szivarvany = document.querySelector('#szivarvany');

function xetHozzafuz(elem){
    elem.innerHTML += 'X'; //itt most nem érjük el magát az eseményt
}

function esemenyKezelo(esemeny){
    let esemenyCelja    = esemeny.target;
    let esemenyKezeloje = this;
    let legkozelebbiKeresettElem = esemenyCelja.closest('.szin');

    if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
        xetHozzafuz(legkozelebbiKeresettElem);
    }
}


szivarvany.addEventListener('click', esemenyKezelo);