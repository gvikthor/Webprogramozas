const ido = document.querySelector('#ido');
const gomb = document.querySelector('#frissit');
const spam = document.querySelector('#spam');
const szemetes = document.querySelector('#szemetes');

function frissit0(){
    ido.innerHTML = new Date().toUTCString();
}

function frissit1(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'ido.php', false);
    xhr.send();
    ido.innerHTML = xhr.responseText;
}

function frissit2(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'ido.php?kotojel=igen', false);
    xhr.send();
    ido.innerHTML = xhr.responseText;
}

function frissit3(){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'ido.php', false);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('szokoz=igen');
    ido.innerHTML = xhr.responseText;
}

function frissit4(){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 4){
            ido.innerHTML = xhr.responseText;
        }
    });

    xhr.open('GET', 'ido.php', true);
    xhr.send();
}

function frissit5(){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 4){
            szemetes.innerHTML = xhr.responseText;
        }
    });

    xhr.open('GET', 'adatok-tablazat.php', true);
    xhr.send();
}

function frissit6(){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 4){
            let adatok = JSON.parse(xhr.responseText);
            console.log(adatok);
        }
    });

    xhr.open('GET', 'adatok-json.php', true);
    xhr.send();
}

function frissit7(){
    fetch('adatok-json.php')
    .then(valasz => valasz.json())
    .then(adatok => console.log(adatok))
}

function frissit8(){
    fetch('adatok-json.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'extra=igen'
    })
    .then(valasz => valasz.json())
    .then(adatok => console.log(adatok))
}

function frissit9(){
    fetch('adatok-json.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            extra: 'igen',
            kiskutya: 'vau',
            kiscica: 'miau',
            roka: 'undefined'
        })
    })
    .then(valasz => valasz.json())
    .then(adatok => console.log(adatok))
}

function post(bodyData){
    return fetch('adatok-json.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    })
    .then(valasz => valasz.json())
    .then(adatok => adatok)
}


gomb.addEventListener('click', ()=>{
    post({
        extra: 'igen',
        kiscica: 'miau',
        kiskutya: 'vau'
    }).then(adat => {
        console.log(adat)
    })
});

spam.addEventListener('click', ()=>{
    szemetes.innerHTML += 'spam ';
});



/*
async function valami(){
    return 5;
}

valami().then(ertek => {
    console.log(ertek+5)
});
*/

/*
function adatLeker(){
    return fetch('adatok-json.php')
    .then(valasz => valasz.json())
    .then(adatok => adatok)
}
*/
async function adatLeker(){
    const valasz = await fetch('adatok-json.php');
    const adatok = await valasz.json();
    return adatok;
}
/*
adatLeker().then(adatok => {
    console.log(adatok)
});
*/