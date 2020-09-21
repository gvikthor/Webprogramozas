let szivarvany = document.querySelector('#szivarvany');

function xetHozzafuz(esemeny){
    let esemenyCelja    = esemeny.target;
    let esemenyKezeloje = this;
    let legkozelebbiKeresettElem = esemenyCelja.closest('.szin');

    legkozelebbiKeresettElem.innerHTML += 'X';
    //ezzel most az a baj, hogy ha kívül van a legközelebbi .szin div, akkor ahhoz is hozzáfűz
    //pl.: <div class=".szin"><div id="szivarvany">...</div></div>
}


szivarvany.addEventListener('click', xetHozzafuz);