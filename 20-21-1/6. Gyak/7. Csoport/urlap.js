function sutiBeallit(valtozonev, ertek, lejaratNapban){
    let d = new Date();
    d.setTime(d.getTime() + (lejaratNapban*24*60*60*1000));
    document.cookie = `${valtozonev}=${ertek};expires=${d.toUTCString()};path=/`;
}

function sutiKiszed(valtozonev){
    let sutiString = document.cookie;
    let sutikTomb = sutiString.split(';');

    for(const suti of sutikTomb){
        let reszek = suti.split('=');
        if(reszek[0].trim() == valtozonev){
            return reszek[1].trim();
        }
    }

    return '';
}

let urlap = document.querySelector('form');
let hibaLista = urlap.querySelector('ul');
urlap.vasarloneve.value = sutiKiszed('nev');

function ellenoriz(){
    let hibak = [];
    let eredmenyek = {};

    if(urlap.vasarloneve.value.trim() == ''){
        hibak.push('A vásárló nevének megadása kötelező!');
    }else{
        eredmenyek.nev = urlap.vasarloneve.value;
    }

    if(urlap.termektomege.value.trim() == ''){
        hibak.push('A termék súlyának megadása kötelező!');
    }else if(isNaN(urlap.termektomege.value)){
        hibak.push('A termék súlya csak szám lehet!');
    }else if(parseInt(urlap.termektomege.value) <= 0){
        hibak.push('A termék súlya érvénytelen!');
    }else{
        eredmenyek.tomeg = urlap.termektomege.value;
        eredmenyek.mertekegyseg = urlap.mertekegyseg.value;
    }

    if(!(urlap.tobblett[0].checked || urlap.tobblett[1].checked)){
        hibak.push('Válaszd ki, hogy maradhat-e!');
    }else{
        eredmenyek.maradhat = urlap.tobblett.value;
    }

    eredmenyek.termekek = [];
    for(const termek of urlap.termek){
        if(termek.checked){
            eredmenyek.termekek.push(termek.value);
        }
    }
    if(eredmenyek.termekek.length == 0){
        hibak.push('Legalább egy terméket válassz ki!');
    }

    if(hibak.length == 0){
        eredmenyek.megjegyzes = urlap.megjegyzes;
        return{
            voltHiba: false,
            eredmenyek: eredmenyek
        }
    }else{
        return {
            voltHiba: true,
            hibak: hibak
        }
    }
}

let idozitoHiba;
function hibaKiir(hibak){
    clearTimeout(idozitoHiba);
    for(const hiba of hibak){
        let ujListaElem = document.createElement('li');
            ujListaElem.innerText = hiba;
        hibaLista.appendChild(ujListaElem);
    }
    urlap.classList.add('hibaVan');
    idozitoHiba = setTimeout(()=>{
        urlap.classList.remove('hibaVan');
    },500);
}

let idozitoNemhiba;
urlap.addEventListener('input',()=>{
    let eredmeny = ellenoriz();

    hibaLista.innerHTML = '';
    if(eredmeny.voltHiba){
        hibaKiir(eredmeny.hibak);
    }else{
        clearTimeout(idozitoNemhiba);
        urlap.classList.add('nincsHiba');
        idozitoNemhiba = setTimeout(()=>{
            urlap.classList.remove('nincsHiba');
        },500);
    }
});

document.addEventListener('submit', (esemeny)=>{
    esemeny.preventDefault();
    let eredmeny = ellenoriz();

    hibaLista.innerHTML = '';
    if(eredmeny.voltHiba){
        hibaKiir(eredmeny.hibak);
    }else{
        setTimeout(()=>{
            urlap.classList.remove('nincsHiba');
        },500);
        console.log(eredmeny.eredmenyek);
        sutiBeallit('nev', eredmeny.eredmenyek.nev, 7);
    }
});

/*
let index = 0;
let intervallum = setInterval(()=>{
    console.log(index);
    if(index > 10) clearInterval(intervallum);
    index++;
},1000);
*/