// 1) Adott egy paragrafusbeli szöveg, amelyben néhány szó `span` elembe van foglalva vagy hivatkozásként van megadva. A paragrafusra kattintáskor írd ki a konzolra:
//   a) az eseményt jelző objektumot;
//   b) az esemény típusát;
//   c) a kattintás közben lenyomott egérgombot;
//   d) az egér kattintáskori pozícióját;
// 2) Gépelés
//    a) Ha bármilyen gomb lenyomásra kerül a billentyűzeten, írjuk ki a lenyomott gombot.
//    b) Csináljunk egy "keyloggert", de szűrjük a shiftet és a caps lockot
// 3) Írd ki az oldalra folyamatosan az alábbi adatokat:
//    a) Két kattintás közt mekkora az átlagos elmozdulás?
//    b) Átlagosan mennyi idő telik el két kattintás között?
// 4) Az oldalon minden olyan hivatkozást tiltsunk le, amelyik nem ELTE-s címre mutat!
// 5) Amőba

function $(p){
    return document.getElementById(p);
}
/*
function atlag(tomb){
    let sum = 0
    for(elem of tomb){
        sum += elem;
    }
    return sum/tomb.length
}

let elozo = {}
let voltKattintas = false;
let tavolsagok = [];
let elteltIdok = [];

document.addEventListener('click', () => {
    if(voltKattintas){
        let tavolsag = Math.sqrt( Math.pow(elozo.x - event.clientX, 2) +  Math.pow(elozo.y - event.clientY, 2))
        let most = new Date();
        let elteltIdo = (most - elozo.ido);
        tavolsagok.push(tavolsag);
        elteltIdok.push(elteltIdo);
        console.log('tav: '+tavolsag)
        console.log('ido: '+ elteltIdo)
        console.log('atav: '+atlag(tavolsagok))
        console.log('aido: '+atlag(elteltIdok))
        elozo.x = event.clientX;
        elozo.y = event.clientY;
        elozo.ido = most;
    }else{
        voltKattintas = true;
        elozo.x = event.clientX;
        elozo.y = event.clientY;
        elozo.ido = new Date();
    }
})

document.addEventListener('keydown', () => {
    if( (/[a-zA-ZöÖüÜóÓőŐúÚéÉáÁűŰíÍ]/.test(event.key) && event.key.length == 1) || event.key === ' ' ){
     $('d').innerHTML += event.key
    }else if(event.key = 'Enter'){
        $('d').innerHTML += '<br>'
    }
})

$('i').addEventListener('keydown', () => {
    if(!( (/[a-zA-ZöÖüÜóÓőŐúÚéÉáÁűŰíÍ]/.test(event.key) && event.key.length == 1) || event.key === ' ' || event.key == 'Backspace' ) ){
        event.preventDefault();
    }
})

let linkek = document.querySelectorAll('a');
for(link of linkek){
    link.addEventListener('click', () => {
        if(!event.target.href.split('/')[2].endsWith('elte.hu')){
        event.preventDefault();
        }
    })
}*/

let cellak = document.querySelectorAll('td');
let iksz = true;
for(cella of cellak){
    cella.addEventListener('click', ()=>{
        if(event.target.innerHTML == ''){
            if(iksz){
                event.target.innerHTML = 'X';
                iksz = false;
            }else{
                event.target.innerHTML = 'O';
                iksz = true;
            }
        }
    })
}