let helyek = ['Etyek', 'Érd', 'III. Kerület', 'Margit-sziget', 'Normafa', 'Pusztafalu', 'XI. Kerület'];



  //////////////////////////////////
 //// Listaelemek kigenerálása ////
//////////////////////////////////
let lista = document.querySelector('#lista');
for(let hely of helyek){
    let ujListaElem = document.createElement('li');
        ujListaElem.innerHTML = hely;
        ujListaElem.dataset.eredeti = hely; //ez csak arra kell, hogy majd vissza tudjuk állítani az eredeti értékre, máshogy is lehetne tárolni
    lista.appendChild(ujListaElem);
}
let listaElemek = lista.querySelectorAll('li');



  /////////////////////////////////////////
 //// Kijelölés események hozzáfűzése ////
/////////////////////////////////////////
for(let listaElem of listaElemek){
    listaElem.addEventListener('click', ()=>{
        if(listaElem.classList.contains('kijelolve')){
            listaElem.classList.remove('kijelolve');
        }else{
            listaElem.classList.add('kijelolve');
        }
    });
}



  ////////////////////
 //// Átíró gomb ////
////////////////////
let szovegGomb = document.querySelector('#szoveg-gomb');
let szovegInput = document.querySelector('#szoveg');
function szovegeketBeallit(){
    let kijeloltElemek = lista.querySelectorAll('.kijelolve');
    for(let kijeloltElem of kijeloltElemek){
        kijeloltElem.innerHTML = szovegInput.value;
    }    
}
szovegGomb.addEventListener('click', szovegeketBeallit);



  //////////////////////
 //// Színező gomb ////
//////////////////////
let szinGomb = document.querySelector('#szin-gomb');
let szinInput = document.querySelector('#szin');
function szineketBeallit(){
    let cssSzin = '';
    if(szinInput.value == 'kék'){
        cssSzin = 'blue';
    }else if(szinInput.value == 'zöld'){
        cssSzin = 'green';
    }else if(szinInput.value == 'piros'){
        cssSzin = 'red';
    }

    if(cssSzin != ''){
        let kijeloltElemek = lista.querySelectorAll('.kijelolve');
        for(let kijeloltElem of kijeloltElemek){
            kijeloltElem.style.color = cssSzin;
        }
    }
}
szinGomb.addEventListener('click', szineketBeallit);



  ///////////////////////////
 //// Visszaállító gomb ////
///////////////////////////
let visszaallitGomb = document.querySelector('#visszaallit_gomb');
function visszaallit(){
    let kijeloltElemek = lista.querySelectorAll('.kijelolve');
    for(let kijeloltElem of kijeloltElemek){
        kijeloltElem.innerHTML = kijeloltElem.dataset.eredeti; //ld.: 12.sor
        kijeloltElem.style.color = 'black';
    }
}
visszaallitGomb.addEventListener('click',visszaallit);