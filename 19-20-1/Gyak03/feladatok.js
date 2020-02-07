function $(azonosito){
    return document.getElementById(azonosito);
}
// 1) Adott egy paragrafusbeli szöveg, amelyben néhány szó `span` elembe van foglalva vagy hivatkozásként van megadva. A paragrafusra kattintáskor írd ki a konzolra:
//   a) az eseményt jelző objektumot;
//   b) az esemény típusát;
//   c) a kattintás közben lenyomott egérgombot;
//   d) az egér kattintáskori pozícióját;

$('f1').addEventListener('click',() => {
    console.log(event.target);
    console.log(event.type);
    console.log(event.button);
    console.log('x:' + event.clientX + ' y: ' + event.clientY);
    $('f1_kimenet').innerHTML = 'A küldő objektum szövege: ' + event.target.innerText;
});

// 2) Gépelés
//    a) Ha bármilyen gomb lenyomásra kerül a billentyűzeten, írjuk ki a lenyomott gombot.
//    b) Csináljunk egy "keyloggert", de szűrjük a shiftet és a caps lockot
document.addEventListener('keydown',() => {
    //console.log(event); -> érdemes belenézni
    $('f2a').innerHTML = 'A lenyomott gomb: [' + event.key + ']';
    if(event.key != 'Shift' && event.key != 'CapsLock'){
        $('f2b').innerHTML += event.key;
    }
});
//   c) A "szam" classú inputokba csak számot lehessen megadni
let szamInputok = document.querySelectorAll('.szam');
for(input of szamInputok){
    input.addEventListener('keydown', () => {
        if((isNaN(event.key) || event.key == ' ') && event.key != 'Backspace'){
            event.preventDefault();
        }
    });
}

// 3) Írd ki az oldalra folyamatosan az alábbi adatokat:
//    a) Két kattintás közt mekkora az átlagos elmozdulás?
//    b) Átlagosan mennyi idő telik el két kattintás között?
let elsoKlikkMegvolt = false;
let masodikKlikkMegvolt = false;

let elozoKlikk = {};
let tavolsagok = [];

let elozoIdo = new Date();
let idok = [];

function atlag(tomb){
    let sum = 0;
    for(elem of tomb){
        sum += elem;
    }
    return sum / tomb.length;
}


document.addEventListener('click',() =>{
    //console.log(d.getMinutes()*60 + d.getSeconds() + d.getMilliseconds()/1000);
    if(elsoKlikkMegvolt){
        let tav = ( Math.sqrt( Math.pow(Math.abs(event.clientX - elozoKlikk.x),2) + Math.pow(Math.abs(event.clientY - elozoKlikk.y), 2) ) );
        let ido = (new Date()).getTime() - elozoIdo.getTime(); //a két időpillanat közti különbség millisecben (1/1000 mp)
        $('f31').innerHTML = 'Az előző két kattintás közti elmozdulás: ' +  tav + 'px';
        $('f33').innerHTML = 'Az előző két kattintás közti idő: ' +  ido + 'ms';
        if(masodikKlikkMegvolt){
            tavolsagok.push(tav);
            idok.push(ido);
            $('f32').innerHTML = 'Átlagos elmozdulás: ' + atlag(tavolsagok) + 'px';
            $('f34').innerHTML = 'Átlagos idő: ' + atlag(idok) + 'ms';
        }else{
            masodikKlikkMegvolt = true;
        }
    }else{
        elsoKlikkMegvolt = true;
    }
    elozoKlikk.x = event.clientX;
    elozoKlikk.y = event.clientY;
    elozoIdo = new Date(); //kis elcsúszás lesz, pár millisec
});

// 4) Az oldalon minden olyan hivatkozást tiltsunk le, amelyik nem ELTE-s címre mutat!
let hivatkozasok = document.querySelectorAll('a');
for(hivatkozas of hivatkozasok){
    //jó cím: http://valami.valami.valami.elte.hu/valami/valami
    //rossz cím: http://valami.valami.valami.com/elte.hu
    if( ! hivatkozas.href.split('/')[2].endsWith('elte.hu') ){
        hivatkozas.addEventListener('click', () => {
            event.preventDefault();
        });
    }
    
}

// 5) Amőba
let mezok = document.getElementById('amoba').querySelectorAll('td');
let iksz = true;
for(mezo of mezok){
    mezo.addEventListener('click', () => {
        if(event.target.innerHTML == ''){
            if(iksz){
                event.target.innerHTML = 'X';
                iksz = false;
            }else{
                event.target.innerHTML = 'O';
                iksz = true;
            }
        }
    });
}