function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }


    szulo.addEventListener(mikor, esemenyKezelo);
}

let csapatok = [
    {
        nev: 'Lilabären',
        meccsek: [3,3,1,3,1,3],
        orszag: 'Németország'
    },
    {
        nev: 'Ileösk FC',
        meccsek: [1,3,0,3,1,1],
        orszag: 'Svédország'
    },
    {
        nev: 'Etech City',
        meccsek: [0,0,0,0,0,0],
        orszag: 'Anglia'
    },
    {
        nev: 'Hoske Nord',
        meccsek: [1,1,3,1,0,3],
        orszag: 'Svédország'
    },
    {
        nev: 'Albertfalva TC',
        meccsek: [3,1,0,3,0,1],
        orszag: 'Magyarország'
    },
    {
        nev: 'Tschiki Ereich',
        meccsek: [1,1,0,1,3,3],
        orszag: 'Németország'
    },
    {
        nev: 'Josécatalan FC',
        meccsek: [3,1,1,3,3,0],
        orszag: 'Spanyolorzság'
    },
    {
        nev: 'Boo SCI',
        meccsek: [3,1,1,1,1,1],
        orszag: 'Anglia'
    },
    {
        nev: 'Victoria United',
        meccsek: [3,0,0,1,1,3],
        orszag: 'Anglia'
    },
    {
        nev: 'Widech',
        meccsek: [3,3,3,1,1,3],
        orszag: 'Németország'
    }
];

// KIGENERÁLÁS
let tablazat = document.querySelector('table');
let csapatIndex = 0;
for(const csapat of csapatok){
    let ujSor = document.createElement('tr');
        ujSor.dataset.csapatIndex = csapatIndex;
        csapatIndex++;

        let ujCella = document.createElement('td');
            ujCella.innerHTML = csapat.nev;
        ujSor.appendChild(ujCella);

        for(const meccs of csapat.meccsek){
            ujCella = document.createElement('td');
                ujCella.innerHTML = meccs;
                ujCella.classList.add('meccs');
            ujSor.appendChild(ujCella);
        }

        ujCella = document.createElement('td');
            ujCella.innerHTML = csapat.orszag;
            ujSor.appendChild(ujCella);

    tablazat.appendChild(ujSor);
}

// KIJELÖLÉS
delegal(tablazat, 'tr', 'click', (esemeny, elem)=>{
    elem.classList.toggle('kijelolve');
});

// ÖSSZEG
let osszegGomb = document.querySelector('#ossz-gomb');
let osszegDiv = document.querySelector('#ossz-div');
osszegGomb.addEventListener('click', ()=>{
    let kijeloltek = document.querySelectorAll('.kijelolve');
    let vereseg = 0;
    let dontetlen = 0;
    let gyozelem = 0;
    for(const kijelolt of kijeloltek){
        let i = parseInt(kijelolt.dataset.csapatIndex);
        for(const meccs of csapatok[i].meccsek){
            switch(meccs){
                case 3: gyozelem++; break;
                case 1: dontetlen++; break;
                case 0: vereseg++; break;
                default: console.log('Hajrá Fradi!');
            }
        }
    }
    osszegDiv.innerHTML = `GY: ${gyozelem} | D: ${dontetlen} | V: ${vereseg}`;
    if(kijeloltek.length == 1) osszegDiv.innerHTML += ` | Átag: ${(gyozelem*3 + dontetlen)/6}`;
});

// CSERE
let csereGomb = document.querySelector('#csere-gomb');
csereGomb.addEventListener('click', ()=>{
    let kijeloltek = document.querySelectorAll('.kijelolve');
    for(const kijelolt of kijeloltek){
        let csapatIndex = parseInt(kijelolt.dataset.csapatIndex);
        let cellak = kijelolt.querySelectorAll('.meccs');
        for(let i = 0; i < 6; i++){
            if(csapatok[csapatIndex].meccsek[i] == 3){
                csapatok[csapatIndex].meccsek[i] = 0;
            }else if(csapatok[csapatIndex].meccsek[i] == 0){
                csapatok[csapatIndex].meccsek[i] = 3;
            }
            cellak[i].innerHTML = csapatok[csapatIndex].meccsek[i];
        }
    }
});

// LISTA
let listaInput = document.querySelector('#lista-input');
let listaGomb = document.querySelector('#lista-gomb');
let lista = document.querySelector('ul');
listaGomb.addEventListener('click', ()=>{
    let kijeloltek = document.querySelectorAll('.kijelolve');
    lista.innerHTML = '';
    for(const kijelolt of kijeloltek){
        let csapatIndex = parseInt(kijelolt.dataset.csapatIndex);
        
        if(csapatok[csapatIndex].orszag == listaInput.value){
            lista.innerHTML += `<li>${csapatok[csapatIndex].nev}</li>`;
        }
    }
});