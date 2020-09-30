let szo = 'katalógus';
let kitalalva = [];

let sor = document.querySelector('tr');
for(const betu of szo){
    let ujCella = document.createElement('td');
    sor.appendChild(ujCella);
    kitalalva.push(false);
}

let gomb = document.querySelector('button');
let input = document.querySelector('input');
let cellak = document.querySelectorAll('td');
let pontDiv = document.querySelector('#pontok');
let betuDiv = document.querySelector('#betuk');
let pontok = 10;
let jatekVege = false;
pontDiv.innerText = pontok;

gomb.addEventListener('click', ()=>{
    if(jatekVege) return;

    let betu = input.value;
    let talalt = false;
    for(let i = 0; i < szo.length; i++){
        if(szo[i] == betu){
            cellak[i].innerText = szo[i];
            kitalalva[i] = true;
            talalt = true;
        }
    }
    if(talalt){
        let nyert = true;
        for(const logikai of kitalalva){
            nyert = nyert && logikai;
        }
        if(nyert){
            pontDiv.innerText = 'Nyertél';
            jatekVege = true;
        }
    }else{
        pontok--;
        pontDiv.innerText = pontok;
        betuDiv.innerHTML += betu + ' ';
        if(pontok == 0){
            pontDiv.innerText = 'Vesztettél';
            jatekVege = true;
        }
    }
});