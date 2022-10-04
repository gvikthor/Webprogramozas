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
} //ezt a függvényt írtuk meg órán, részletes magyarázat githubon, a saját mappájában


//
//
// Ebben a megoldásban a delegálás az érdemi rész (44-51 sor).
// Minden mást lehetne úgy hagyni, mint a másik file-ban,
// viszont bele akartam rakni a 'szebb' megoldásokat is,
// hogy lássatok komplexebb nyelvi elemeket is.
//
//


let helyek = ['Etyek', 'Érd', 'III. Kerület', 'Margit-sziget', 'Normafa', 'Pusztafalu', 'XI. Kerület'];



  //////////////////////////////////
 //// Listaelemek kigenerálása ////
//////////////////////////////////
let listaElemek = [];
let lista = document.querySelector('#lista');
helyek.forEach(hely => {
    let ujListaElem = document.createElement('li');
        ujListaElem.innerHTML = hely;
        ujListaElem.dataset.eredeti = hely;
    lista.appendChild(ujListaElem);
    listaElemek.push(ujListaElem);
});



  /////////////////////////////////////////
 //// Kijelölés események hozzáfűzése ////
/////////////////////////////////////////
function kijelol(esemeny, listaElem){
    if(listaElem.classList.contains('kijelolve')){
        listaElem.classList.remove('kijelolve');
    }else{
        listaElem.classList.add('kijelolve');
    }
    //listaElem.classList.toggle('kijelolve')
}
delegal(lista, 'li', 'click', kijelol);



  ////////////////////
 //// Átíró gomb ////
////////////////////
let szovegGomb = document.querySelector('#szoveg-gomb');
let szovegInput = document.querySelector('#szoveg');
function szovegeketBeallit(){
    lista
      .querySelectorAll('.kijelolve')
      .forEach(kijeloltElem => kijeloltElem.innerHTML = szovegInput.value);   
}
szovegGomb.addEventListener('click', szovegeketBeallit);



  //////////////////////
 //// Színező gomb ////
//////////////////////
let szinGomb = document.querySelector('#szin-gomb');
let szinInput = document.querySelector('#szin');
function szineketBeallit(){
    let cssSzin;
    switch(szinInput.value){
        case 'kék':
            cssSzin = 'blue';
            break;
        case 'zöld':
            cssSzin = 'green';
            break;
        case 'piros':
            cssSzin = 'red';
            break;
        default:
            return;
    }

    lista
      .querySelectorAll('.kijelolve')
      .forEach(kijeloltElem => kijeloltElem.style.color = cssSzin);
}
szinGomb.addEventListener('click', szineketBeallit);



  ///////////////////////////
 //// Visszaállító gomb ////
///////////////////////////
let visszaallitGomb = document.querySelector('#visszaallit_gomb');
function visszaallit(){
    lista
      .querySelectorAll('.kijelolve')
      .forEach(kijeloltElem => {
        kijeloltElem.innerHTML = kijeloltElem.dataset.eredeti;
        kijeloltElem.style.color = 'black';
      });
}
visszaallitGomb.addEventListener('click',visszaallit);