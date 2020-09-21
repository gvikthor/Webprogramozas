let szivarvany = document.querySelector('#szivarvany');

function xetHozzafuz(esemeny, elem){
    elem.innerHTML += 'X';
}

function delegal(){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest('.szin');

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            xetHozzafuz(esemeny, legkozelebbiKeresettElem);
        }
    }


    szivarvany.addEventListener('click', esemenyKezelo);
}

delegal();