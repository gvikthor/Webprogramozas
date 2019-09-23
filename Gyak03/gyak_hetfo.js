let jatekter = document.querySelector('table');
let info = document.getElementById('info');
let szo = '';
let jatekban = false;
let szavak = ['ALMA','KÖRTE'];
let szamlalo = 10;
let mezok;
let szohossz;

document.querySelector('button').addEventListener('click', () => {
    jatekban = true;
    szamlalo = 10;
    info.innerHTML = '10'
    szo = szavak[Math.floor( Math.random()*szavak.length )];
    szohossz = szo.length;
    jatekter.innerHTML = '';
    let szoveg = '<tr>';
    for(let i = 0; i < szo.length; i++){
        szoveg += '<td></td>';
    }
    szoveg += '</tr>';
    jatekter.innerHTML = szoveg;
    mezok = document.querySelectorAll('td');
});

function betu(gomb){
    //return gomb == 'a' || gomb == 'b' stb...;
    //return gomb >= 65 && gomb <= 90;
    console.log(gomb);
    return gomb.length == 1 && /[A-ZÖÜÓŐÚÉÁŰÍ]/.test(gomb.toUpperCase());
}

document.addEventListener('keydown',() => {
    if(jatekban && betu(event.key)){
        if(szo.includes(event.key.toUpperCase())){
            let i = 0;
            for(mezo of mezok){
                if(szo[i] == event.key.toUpperCase()){
                    if(mezo.innerHTML == ''){
                        mezo.innerHTML = szo[i];
                        szohossz--;
                    }
                    if(szohossz == 0){
                        jatekban = false;
                        info.innerHTML = 'Nyertél';
                    }
                }
                i++;
            }
        }else{
            szamlalo--;
            if(szamlalo == 0){
                jatekban = false;
                info.innerHTML = 'Vesztettél';
            }else{
                info.innerHTML = szamlalo;
            }
        }
    }
});









/*function $(param){
    return document.getElementById(param);
}

/*document.addEventListener('keydown', () => {
    console.log(event);
    if(!(event.key == 'Shift' || event.key == 'CapsLock')){
        if(event.key == 'Enter'){
            $('d').innerHTML += '<br>';
        }else{
            $('d').innerHTML += event.key;
        }
    }
});*/

/*$('i').addEventListener('keydown', () => {
    if(isNaN(event.key) || event.key == ' '){
        event.preventDefault();
    }
});*//*
let inputs = document.querySelectorAll('.szam');
for(input of inputs){
    input.addEventListener('keydown', () => {
        if(isNaN(event.key) || event.key == ' '){
            event.preventDefault();
        }
    });
}*/

/*
let tavolsagok = [];
let idok = [];
let elozo = {}
let kattintott = false;
document.addEventListener('click', () => {
    let kattido = new Date();
    if(!kattintott){
        kattintott = true;
        elozo.x = event.clientX;
        elozo.y = event.clientY;
        elozo.ido = new Date();
    }else{
        let eredmeny = Math.sqrt( Math.pow(event.clientX - elozo.x, 2) + Math.pow(event.clientY - elozo.y, 2) )
        let eredmeny2= (kattido - elozo.ido)
        console.log(eredmeny);
        console.log(eredmeny2);
        tavolsagok.push(eredmeny);
        idok.push(kattido - elozo.ido);

        let sum = 0;
        for(tavolsag of tavolsagok){
            sum += tavolsag;
        }
        let atlag = sum/tavolsagok.length;
        console.log('Átlagos elmozdulás: '+ atlag);

        sum = 0;
        for(ido of idok){
            sum += ido;
        }
        atlag = sum/idok.length;
        console.log('Átlagos idő: '+ atlag);
    }    
    elozo.x = event.clientX;
    elozo.y = event.clientY;
    elozo.ido = kattido;
})*/
/*
function general(meret){
    let szoveg = '';
    for(let i = 0; i < meret; i++){
        szoveg += '<tr>';
        for(let j = 0; j < meret; j++){
            szoveg += '<td></td>'
        }
        szoveg += '</tr>';
    }
    $('jatekter').innerHTML = szoveg;
}

general(10);

let jatektabla = document.querySelectorAll('td');
let iksz = true;
for(doboz of jatektabla){
    doboz.addEventListener('click',() => {
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

let links = document.querySelectorAll('a');
for(link of links){
    let temp = link.href.split('/');
    console.log(temp)
    if(!temp[2].endsWith('elte.hu')){
        link.addEventListener('click', () => {
            event.preventDefault();
        })
    }
}*/