/*let szo = 'almafa';
let kitalalva = [];

let jatekter = document.querySelector('#akasztofa-jatek');
let sor = jatekter.querySelector('#betuk');
let info = jatekter.querySelector('#infok');
let probalkozasok = 10;
let jatekVegetErt = false;

for(betu of szo){
    sor.innerHTML += `<td></td>`;
    kitalalva.push(false);
}
info.innerHTML = '10 próbálkozásod maradt.';

document.addEventListener('keydown',()=>{
    //console.log(event.key)
    if(!jatekVegetErt){
        if(szo.includes(event.key)){
            let cellak = sor.querySelectorAll('td');
            for(let i = 0; i < szo.length; i++){
                if(szo[i] == event.key){
                    cellak[i].style.color = 'red';
                    kitalalva[i] = true;
                }
            }

            let j = 0;
            while(kitalalva[j]){
                j++;
            }
            if(j == kitalalva.length){
                jatekVegetErt = true;
                info.innerHTML = 'Nyertél.';
            }

        }else{
            probalkozasok--;
            if(probalkozasok == 0){
                jatekVegetErt = true;
                info.innerHTML = 'Vesztettél.';
            }else{
                info.innerHTML = `${probalkozasok} próbálkozásod maradt.`;
            }
        }
    }
});*/


//nézet
let jatekter;
let sor;
let info;

function nezetInicializal(){
    jatekter = document.querySelector('#akasztofa-jatek');
    sor = jatekter.querySelector('#betuk');
    info = jatekter.querySelector('#infok');
    info.innerHTML = 'Nem fut játék.'
}
function nezetUjJatek(szo, probak){
    nezetProbalkozasok(probak);
    sor.innerHTML = '';
    for(betu of szo){
        sor.innerHTML += `<td></td>`;
    }
}
function nezetBetu(betu, hova){
    sor.querySelectorAll('td')[hova].innerHTML = betu;
}
function nezetJatekVege(nyert){
    if(nyert){
        info.innerHTML = 'Nyertél.';
    }else{
        info.innerHTML = 'Vesztettél.';
    }
}
function nezetProbalkozasok(probak){
    info.innerHTML = `${probak} próbálkozásod maradt.`;
}

//modell
let szo;
let kitalalva = [];
let probalkozasok;
let jatekVegetErt = true;

function modellUjJatek(){
    szo = modellUjSzo();
    kitalalva = [];
    probalkozasok = 10;
    jatekVegetErt = false;
    for(let i = 0; i < szo.length; i++){
        kitalalva.push(false);
    }
    nezetUjJatek(szo, probalkozasok);
}
function modellUjSzo(){
    //return 'almafa';

    let szavak = [
        'almafa',
        'körtefa',
        'fornetti',
        'cappy',
        'elte'
    ];

    //Math.random(); //[0,1)
    //Math.random()*10; //[0,10)
    //Math.floor(Math.random()*10); //0,1,2,3,4,5,6,7,8,9

    return szavak[random(szavak.length)];
}
function modellJatekVege(){
    if(probalkozasok > 0){
        let j = 0;
        while(kitalalva[j]){
            j++;
        }
        if(j == kitalalva.length){
            jatekVegetErt = true;
            return 1; 
        }else{
            return 0;
        }
    }else{
        jatekVegetErt = true;
        return 2;
    }
}
function random(max){
    return Math.floor(Math.random()*max);
}

document.addEventListener('keydown',()=>{
    if(!jatekVegetErt){
        if(szo.includes(event.key)){
            for(let i = 0; i < szo.length; i++){
                if(szo[i] == event.key){
                    nezetBetu(event.key, i);
                    kitalalva[i] = true;
                }
            }

            if(modellJatekVege() == 1){
                nezetJatekVege(true);
            }

        }else{
            probalkozasok--;
            if(modellJatekVege() == 2){
                jatekVegetErt = true;
                nezetJatekVege(false);
            }else{
                nezetProbalkozasok(probalkozasok);
            }
        }
    }
});

//main
let gomb = document.querySelector('#akasztofa-jatek').querySelector('button');

nezetInicializal();
gomb.addEventListener('click', ()=>{
    modellUjJatek();
});