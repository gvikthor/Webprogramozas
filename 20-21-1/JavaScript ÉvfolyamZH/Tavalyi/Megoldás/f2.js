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

let dataQuery = document.querySelector('#adatok ul');

function zold(event,elem){
    elem.classList.toggle('termek');
}
function font(event,elem){
    let szallitmany = elem.closest('.szallitmany');                              //az egész szállítmány stílusát változtatjuk, nem csak az adott sorét
    if(elem.innerHTML.startsWith('É')) szallitmany.classList.toggle('erkezes');  //ha É betűvel kezdődik a sor, az az Érkezés
    if(elem.innerHTML.startsWith('P')) szallitmany.classList.toggle('polc');     //ha P betűvel kezdődik a sor, az a  Polc
}

delegal(dataQuery,'.szallitmany ul li','click',zold);
delegal(dataQuery,'.szallitmany div','click',font);
