let urlap = document.querySelector('form');
let hibak = document.querySelector('#hiba');

console.log(urlap.nev.value);
console.log(urlap.nem.value);
console.log(urlap.szin.value);

document.addEventListener('submit', ()=>{
    let voltHiba = false;
    event.preventDefault();
    hibak.innerHTML = '';

    if(urlap.nev.value.trim() == ''){
        hibak.innerHTML += 'A név megadása kötelező.<br>';
        voltHiba = true;
    }

    if(urlap.nem.value == ''){
        hibak.innerHTML += 'A nem megadása kötelező.<br>';
        voltHiba = true;
    }

    if(urlap.nem.value == 'no'){
        if(urlap.szin.value.trim() == ''){
            hibak.innerHTML += 'A kedvenc szín megadása kötelező.<br>';
            voltHiba = true;
        }
    }

    //if(hibak.innerHTML == ''){
    if(!voltHiba){
        hibak.innerHTML = 'Sikeres adatbevitel';
    }
});