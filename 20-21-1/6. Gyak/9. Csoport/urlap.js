//valtozonev=valtozoertek;expires=...;path=/

function sutiBeallit(valtozonev, ertek, lejartNapban){
    let d = new Date();
    d.setTime(d.getTime() + (lejartNapban*24*60*60*1000));
    document.cookie = `${valtozonev}=${ertek};expires=${d.toUTCString()};path=/`;
}

function sutiKiszed(valtozonev){
    let sutiString = document.cookie;
    let sutiTomb = document.cookie.split(';');

    for(const suti of sutiTomb){
        let reszek = suti.split('=');
        if(reszek[0].trim() == valtozonev){
            return reszek[1].trim();
        }
    }

    return '';
}


/*
let gomb = urlap.querySelector('button');
let input = urlap.querySelector('input');

gomb.addEventListener('click', (esemeny)=>{
    esemeny.preventDefault();
});

input.addEventListener('keydown', (esemeny)=>{
    esemeny.preventDefault();
});
*/

let urlap = document.querySelector('form');
let hibakUL = document.querySelector('#hibak');

urlap.orszagnev.value = sutiKiszed('orszagnev');

function ellenoriz(){
    let hibak = [];

    if(urlap.orszagnev.value.trim() == ''){
        hibak.push('Az országnév megadása kötelező!');
    }

    if(urlap.orszagnepesseg.value.trim() == ''){
        hibak.push('Az ország népességének megadása kötelező!');
    }else if(isNaN(urlap.orszagnepesseg.value)){
        hibak.push('Az ország népessége csak szám lehet!');
    }else{
        let lakossag = parseFloat(urlap.orszagnepesseg.value);
        if(lakossag <= 0){
            hibak.push('Az ország népessége csak pozitív lehet!');
        }else if(lakossag != Math.floor(lakossag)){
            hibak.push('Az ország népessége csak egész lehet!');
        }
    }

    if(urlap.kontinens.value.trim() == ''){
        hibak.push('A kontinens megadása kötelező!');
    }else if(!['amerika', 'azsia', 'afrika', 'europa', 'antarktika', 'ausztralia-oceania'].includes(urlap.kontinens.value)){
        hibak.push('A kontinens értéke nem megfelelő!');
    }

    /*
    let talalt = false;
    urlap.eroforras.forEach(elem => {talalt = talalt || elem.checked});
    if(!talalt)
    */

    let talalt = false;
    let i = 0;
    while(i < urlap.eroforras.length && !talalt){
        talalt = urlap.eroforras[i].checked;
        i++;
    }

    if(!talalt){
        hibak.push('Legalább egy erőforrás kiválasztása kötelező!');
    }

    if(hibak.length == 0){
        let ef = [];
        for(const eroforras of urlap.eroforras){
            if(eroforras.checked){
                ef.push(eroforras.value);
            }
        }

        console.log({
            nev: urlap.orszagnev.value,
            lakossag: urlap.orszagnepesseg.value,
            kontinens: urlap.kontinens.value,
            eroforrasok: ef,
            allat: urlap.allat.value,
            leiras: urlap.leiras.value
        });

        sutiBeallit('orszagnev', urlap.orszagnev.value, 7);
    }

    return hibak;
}

document.addEventListener('submit', (esemeny)=>{
    esemeny.preventDefault();

    let hibak = ellenoriz();

    hibakUL.innerHTML = '';
    if(hibak.length == 0){
        console.log('Nem volt hiba');
    }else{
        for(const hiba of hibak){
            let ujElem = document.createElement('li');
                ujElem.innerText = hiba;
            hibakUL.appendChild(ujElem);
        }
        urlap.classList.add('voltHiba');
        setTimeout(()=>{
            urlap.classList.remove('voltHiba');
        }, 2000);
    }
});

let idozito;
urlap.addEventListener('input', ()=>{
    clearTimeout(idozito);
    urlap.classList.add('bemenetTortenik');
    idozito = setTimeout(()=>{
        urlap.classList.remove('bemenetTortenik');
    }, 1000);
});
/*
while(true){
    console.log('alma');
}

setInterval(()=>{
    console.log('alma')
},0);
*/

/*
let intval = 0;
let intervallum = setInterval(()=>{
    intval++;
    if(intval > 10){
        clearInterval(intervallum);
    }
    console.log('alma');
}, 1000)
*/