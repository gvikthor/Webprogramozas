const ido = document.querySelector('#ido');
const gomb = document.querySelector('#frissit');
const spam = document.querySelector('#spam');
const kuka = document.querySelector('#kuka');

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
    xhr.open('GET', 'ido.php?kotojel=valami', false);
    xhr.send();
    ido.innerHTML = xhr.responseText;
}

function frissit3(){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        console.log(xhr.readyState);
        if(xhr.readyState == 4){
            ido.innerHTML = xhr.responseText;
        }
    });

    xhr.open('GET', 'ido.php?kotojel=valami', true);
    xhr.send();
}

function frissit4(){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        console.log(xhr.readyState);
        if(xhr.readyState == 4){
            ido.innerHTML = xhr.responseText;
        }
    });

    xhr.open('POST', 'ido.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('pont=valami');
}

function vadaszat1(){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState < 4) return;

        kuka.innerHTML = xhr.responseText;
    });

    xhr.open('GET', 'vadaszatok.php?tablazat=igen', true);
    xhr.send();
}

function vadaszat2(){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState < 4) return;

        let adatok = JSON.parse(xhr.responseText);
        
        let szoveg = `<table>
                        <tr>
                            <th>Név</th>
                            <th>Állat</th>
                            <th>Súly</th>
                        </tr>`;
        for(const adat of adatok){
            szoveg += `<tr>
                        <td>${adat.vadasz}</td>
                        <td>${adat.allat}</td>
                        <td>${adat.suly}</td>
                      </tr>`;
        }
        szoveg += '</table>';
        kuka.innerHTML = szoveg;
    });

    xhr.open('GET', 'vadaszatok.php', true);
    xhr.send();
}

function vadaszat3(){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState < 4) return;

        let adatok = JSON.parse(xhr.responseText);
        console.log(adatok);
    });

    xhr.open('GET', 'vadaszatok.php', true);
    xhr.send();
}

function vadaszat4(){
    fetch('vadaszatok.php')
    .then(valasz => valasz.json())
    .then(adatok => console.log(adatok));
}

/*function vadaszat5(){
    return fetch('vadaszatok.php')
    .then(valasz => valasz.json())
    .then(adatok => adatok);
}*/

async function vadaszat5(){
    const valasz = await fetch('vadaszatok.php');
    const adatok = await valasz.json();
    return adatok;
}

function adatokKiir(){
    vadaszat5().then(eredmeny => console.log(eredmeny));
}

function vadaszat6(){
    fetch('vadaszatok.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'almafa=kortefa&szilvafa=narancsfa'
    })
    .then(valasz => valasz.json())
    .then(adatok => console.log(adatok));
}

function vadaszat7(){
    fetch('vadaszatok.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            almafa: 'kortefa',
            szilvafa: 'narancsfa'
        })
    })
    .then(valasz => valasz.json())
    .then(adatok => console.log(adatok));
}

gomb.addEventListener('click', frissit4);

spam.addEventListener('click', adatokKiir);