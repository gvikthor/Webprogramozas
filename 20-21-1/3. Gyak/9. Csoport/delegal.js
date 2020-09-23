let szivarvany = document.querySelector('#szivarvany');

function hozzafuz(esemeny, celpont){
    celpont.innerHTML += 'x';
}

function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }

    szulo.addEventListener(mikor, esemenyKezelo);
}

delegal(szivarvany, '.szivarvanySzine', 'mouseover', hozzafuz);
// delegal(szulo, '.altalanosIskolas', 'ellenorzobebeirtak', bemegyAzOsztalyfonokhoz);
// bemegyAzOsztalyfonokhoz(esemeny, gyerek){
//    hisztizik(esemeny.beiroTanar);
//    puszitAd(gyerek);
// }