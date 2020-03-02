let urlap = document.querySelector('form');
let hiba = document.querySelector('#hiba');

urlap.addEventListener('submit', ()=>{
    event.preventDefault();
    hiba.innerHTML = '';
    let voltHiba = false;

    console.log(urlap.nev.value);
    console.log(urlap.gender.value);
    console.log(urlap.leanykori.value);

    if(urlap.nev.value.trim() == ''){
        hiba.innerHTML += 'A név megadása kötelező!<br>';
        voltHiba = true;
    }

    if(urlap.gender.value == ''){
        hiba.innerHTML += 'A nem megadása kötelező!<br>';
        voltHiba = true;
    }else if(urlap.gender.value == 'no'){
        if(urlap.leanykori.value.trim() == ''){
            hiba.innerHTML += 'Hölgyek esetén a leánykori név megadása kötelező!<br>';
            voltHiba = true;
        }
    }

    //if(hiba.innerHTML == ''){
    if(!voltHiba){
        hiba.innerHTML = 'Sikeres adatbevitel!';
    }
});
