/*
<div id="thor-hangman">
    <div id="lepesek"></div>
    <table><tr></tr></table>
</div>
*/
/*
let tablazat = document.querySelector('#thor-hangman').querySelector('table').querySelector('tr');
let tippekDiv = document.querySelector('#thor-hangman').querySelector('#lepesek');
let szo = 'alma';
let kitalalva = [];
for(betu of szo){
    tablazat.innerHTML += `<td>${betu}</td>`;
    kitalalva.push(false);
}
let szoCellak = tablazat.querySelectorAll('td');
let tippek = 10;
tippekDiv.innerHTML = `${tippek} számú tipped maradt.`;

let ended = false;

document.addEventListener('keydown', ()=>{
    if(ended){ return; }

    if(szo.includes(event.key)){
        for(let i = 0; i < szo.length; i++){
            if(szo[i] == event.key){
                szoCellak[i].style.color = 'red';
                kitalalva[i] = true;
            }
        }

        let j = 0;
        while(kitalalva[j]){ j++; }
        if(j == kitalalva.length){
            tippekDiv.innerHTML = 'Nyertél!';
            ended = true;
        }
    }else{
        tippek--;
        if(tippek == 0){
            tippekDiv.innerHTML = 'Vesztettem!';
            ended = true;
        }else{
            tippekDiv.innerHTML = `${tippek} számú tipped maradt.`;
        }
    }
});*/

function random(max){
    return Math.floor(Math.random()*max);
}
/////////////////////////////
let jatekValtozok;
function mInic(){
    jatekValtozok = {
        szo: '',
        kitalalva: [],
        tippek: 10,
        vegetErt: true
    };
}
function mUjJatek(){
    mInic();

    jatekValtozok.szo = ['almafa', 'elte', 'valami', 'hallgatói', 'munkaszerződés'][random(5)];
    for(betu of jatekValtozok.szo){
        jatekValtozok.kitalalva.push(false);
    }
    jatekValtozok.vegetErt = false;
    nUjJatek(jatekValtozok.szo, jatekValtozok.tippek);
}
function mGomb(gomb){
    if(jatekValtozok.vegetErt){ return; }

    if(jatekValtozok.szo.includes(gomb)){
        for(let i = 0; i < jatekValtozok.szo.length; i++){
            if(jatekValtozok.szo[i] == event.key){
                nBetu(gomb, i);
                jatekValtozok.kitalalva[i] = true;
            }
        }

        let j = 0;
        while(jatekValtozok.kitalalva[j]){ j++; }
        if(j == jatekValtozok.kitalalva.length){
            nVege(true);
            jatekValtozok.vegetErt = true;
        }
    }else{
        jatekValtozok.tippek--;
        if(jatekValtozok.tippek == 0){
            nVege(false);
            jatekValtozok.vegetErt = true;
        }else{
            nTippek(jatekValtozok.tippek);
        }
    }
}
/////////////////////////////
let nezetValtozok;
function nInic(){
    nezetValtozok = {
        tablazat: document.querySelector('#thor-hangman').querySelector('table').querySelector('tr'),
        tippekDiv: document.querySelector('#thor-hangman').querySelector('#lepesek'),
        szoCellak: document.querySelector('#thor-hangman').querySelector('table').querySelectorAll('td'),
        ujJatekGomb: document.querySelector('#thor-hangman').querySelector('button')
    };
    nezetValtozok.tippekDiv.innerHTML = 'Nem megy a játék.';
    nezetValtozok.ujJatekGomb.addEventListener('click', ()=>{
        mUjJatek();
    });
}
function nUjJatek(aktSzo, tipp){
    nezetValtozok.tablazat.innerHTML = '';
    for(betu of aktSzo){
        nezetValtozok.tablazat.innerHTML += `<td>?</td>`;
    }
    nezetValtozok.tippekDiv.innerHTML = `${tipp} tipped maradt hátra.`;
    nezetValtozok.szoCellak = document.querySelector('#thor-hangman').querySelectorAll('td');
}
function nBetu(betu, hol){
    nezetValtozok.szoCellak[hol].innerHTML = betu;
}
function nTippek(hatraVan){
    nezetValtozok.tippekDiv.innerHTML = `${hatraVan} tipped maradt hátra.`;
}
function nVege(nyert){
    if(nyert){
        nezetValtozok.tippekDiv.innerHTML = 'Nyertél';
    }else{
        nezetValtozok.tippekDiv.innerHTML = 'Vesztettem!';
    }
}
/////////////////////////////


mInic();
nInic();
document.addEventListener('keydown', ()=>{
    mGomb(event.key);
});