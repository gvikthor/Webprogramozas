function sutiBeallit(valtozonev, ertek, lejaratNapban){
    let d = new Date();
    d.setTime(d.getTime() + (lejaratNapban*24*60*60*1000));
    document.cookie = `${valtozonev}=${ertek};expires=${d.toUTCString()};path=/`;
}

function sutiKiszed(valtozonev){
    let sutik = document.cookie;
    let sutikTomb = sutik.split(';');
    
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
urlap.gazdinev.value = sutiKiszed('nev');

function ellenoriz(){
    let hibak = [];

    if(urlap.gazdinev.value.trim() == ''){
        hibak.push('A gazdi nevének megadása kötelező!');
    }

    if(urlap.gazdikor.value.trim() == ''){
        hibak.push('A gazdi korának megadása kötelező!');
    }else if(isNaN(urlap.gazdikor.value)){
        hibak.push('A gazdi kora csak szám lehet!');
    }else{
        let eletkor = parseInt(urlap.gazdikor.value);
        if(eletkor < 18){
            hibak.push('A gazdinak nagykorúnak kell lenni, hogy szörmókokkal játszhasson!');
        }
    }

    if(urlap.fajta.value.trim() == ''){
        hibak.push('A fajta kiválasztása kötelező!');
    }else if(!['roka','kutya','macska','poni','chewbacca'].includes(urlap.fajta.value)){
        hibak.push('A fajta kiválasztásakor hiba történt, kérlek, töltsd újra az oldalt!');
    }

    if(!(urlap.nem[0].checked || urlap.nem[1].checked)){
        hibak.push('Legalább egy nem kiválasztása kötelező!');
    }

    if(hibak.length == 0){
        console.log({
            nev: urlap.gazdinev.value,
            kor: parseInt(urlap.gazdikor.value),
            fajta: urlap.fajta.value,
            nem: urlap.nem,
            varos: urlap.varos,
            egyeb: urlap.egyeb
        });
        sutiBeallit('nev',urlap.gazdinev.value,7);
        sutiKiszed('nev');
    }

    return hibak;
}

document.addEventListener('submit', (esemeny)=>{
    esemeny.preventDefault();

    let hibak = ellenoriz();

    hibaLista.innerHTML = '';
    if(hibak.length > 0){
        for(const hiba of hibak){
            let ujListaelem = document.createElement('li');
                ujListaelem.innerText = hiba;
            hibaLista.appendChild(ujListaelem);
        }
        urlap.classList.add('hibaVan');
        setTimeout(()=>{
            urlap.classList.remove('hibaVan');
        },2000);
    }
});

let idozito;
urlap.addEventListener('input', ()=>{
    clearTimeout(idozito);
    urlap.classList.add('irunkValamit');
    idozito = setTimeout(()=>{
        urlap.classList.remove('irunkValamit');
    },2000);
});

/*
let i = 0;
let intervalum = setInterval(()=>{
    i++;
    if(i > 10){
        clearInterval(intervalum);
    }else{
        console.log(i);
    }
}, 1000);
*/