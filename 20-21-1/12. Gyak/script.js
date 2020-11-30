const gomb = document.querySelector('#gomb');
const ido  = document.querySelector('#ido');

const szemet = document.querySelector('#szemet');
const spam = document.querySelector('#spam');
spam.addEventListener('click', ()=>{
    szemet.innerHTML += 'spam<br>';
})


function idoFrissit1(){
    ido.innerHTML = new Date().toUTCString();
}

function idoFrissit2(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'ido.php', false);
    xhr.send();
    ido.innerHTML = xhr.responseText;
}

function idoFrissit3(){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 4){
            ido.innerHTML = xhr.responseText;
        }
    });

    xhr.open('GET', 'ido.php', true);
    xhr.send();
}

function idoFrissit4(){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 4){
            ido.innerHTML = xhr.responseText;
        }
    });

    xhr.open('GET', 'ido.php?varakoz=igen', true);
    xhr.send();
}

function idoFrissit5(){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 4){
            ido.innerHTML = xhr.responseText;
        }
    });

    xhr.open('POST', 'ido.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('varakoz=igen');
}

function listaz(){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 4){
            szemet.innerHTML = xhr.responseText;
        }
    });

    xhr.open('GET', 'lista.php', true);
    xhr.send();
}

function listazJSON(){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 4){
            let emberek = JSON.parse(xhr.responseText);
            console.log(emberek);

            let szoveg = '<ul>';
            for(const ember of emberek) szoveg += `<li>${ember.nev} (${ember.kor})</li>`;
            szoveg += '</ul>';

            szemet.innerHTML = szoveg;
        }
    });

    xhr.open('GET', 'nemlista.php', true);
    xhr.send();
}

/*function listazFetch1(){
    return fetch('nemlista.php')
    .then(valasz => valasz.json())
    .then(eredmeny => eredmeny)
}*/

async function lekerFetch1(){
    const valasz = await fetch('nemlista.php');
    const eredmeny = await valasz.json();
    return eredmeny;
}

async function lekerFetch2(keresParameterk){
    const valasz = await fetch('nemlista.php', {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded'
            'Content-Type': 'application/json'
        },
        //body: 'modosit=igen'
        body: JSON.stringify(keresParameterk)
    });
    const eredmeny = await valasz.json();
    return eredmeny;
}

function listazFetch(){
    lekerFetch2({'modosit': 'igen'}).then(emberek => {
        let szoveg = '<ul>';
        for(const ember of emberek) szoveg += `<li>${ember.nev} (${ember.kor})</li>`;
        szoveg += '</ul>';

        szemet.innerHTML = szoveg;
    });
}

gomb.addEventListener('click', listazFetch);