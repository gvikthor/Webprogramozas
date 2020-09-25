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

let jatekok = document.querySelector('#jatekok');

function alahuz(esemeny, elem){
    elem.classList.toggle('kijelolt');

    /*if(elem.classList.contains('alahuzott')){
        elem.classList.remove('alahuzott');
    }else{
        elem.classList.add('alahuzott');
    }*/
}

delegal(jatekok, 'li', 'click', alahuz);