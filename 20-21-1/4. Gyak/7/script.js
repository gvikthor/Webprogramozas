let sor = document.querySelector('tr');
let gomb = document.querySelector('button');
let tippMezo = document.querySelector('input');
let rosszTippek = document.querySelector('#rossz-tippek');
let maradekTippek = document.querySelector('#maradek-tippek');
let szo = 'katalógus';
let betuKitalalva = [];
let tippek = 10;
let jatekMegy = true;

for(const betu of szo){
    let ujCella = document.createElement('td');
    sor.appendChild(ujCella);
    betuKitalalva.push(false);
}

gomb.addEventListener('click', ()=>{
    if(!jatekMegy) return;


    let tipp = tippMezo.value;
    let cellak = document.querySelectorAll('td');

    let volt = false;
    for(let i = 0; i < szo.length; i++){
        if(szo[i] == tipp){
            cellak[i].innerHTML = szo[i];
            betuKitalalva[i] = true;
            volt = true;
        }
    }

    if(volt){
        let nyert = true;
        /*for(const betu of betuKitalalva){
            nyert = nyert && betu;
        }*/
        let i = 0;
        while(i < szo.length && nyert){
            nyert = betuKitalalva[i];
            i++;
        }

        if(nyert){
            jatekMegy = false;
            maradekTippek.innerHTML = 'Nyertél!';
        }
    }else{
        rosszTippek.innerHTML += tipp + ' ';

        tippek--;
        if(tippek == 0){
            maradekTippek.innerHTML = 'Vesztettél!';
            jatekMegy = false;
        }else{
            maradekTippek.innerHTML = `${tippek} tipped maradt`;
        }
    }
});