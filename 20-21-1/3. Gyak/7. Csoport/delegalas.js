let szivarvanyDiv = document.querySelector('#szivarvany');

function hozzafuz(esemeny, elem){
    elem.innerHTML += 'x';
}

function delegal(szulo, gyerek, mikor, mitCsinal){
    function esemenyKezelo(esemeny){
        let esemenyCelja = esemeny.target;
        let legkozelebbiIlyen = esemenyCelja.closest(gyerek);
        let meghivoElem = this;


        if(meghivoElem.contains(legkozelebbiIlyen)){
            mitCsinal(esemeny, legkozelebbiIlyen);
        }
    }

    szulo.addEventListener(mikor, esemenyKezelo);
}

delegal(szivarvanyDiv, '.szin', 'click', hozzafuz);

/*
delegal(szulo, '.alatalnosIskolas', 'beirnakAzEllenorzobe', bemegyATanarhoz);

function bemegyATanarhoz(esemeny, elem){
    puszitAd(elem);
    hisztizik(esemeny.beiroTanar);
}
*/