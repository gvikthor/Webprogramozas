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

let legiok = [
    {
        legatus: 'Nadius Sucus',
        nev: 'Legio I. Debrencia',
        vesztesegek: [163,150,185,134,240]
    },
    {
        legatus: 'Patricio Aela',
        nev: 'Legio II. Veefia',
        vesztesegek: [195,161,202,109,215]
    },
    {
        legatus: 'Auron Franca',
        nev: 'Legio III. Britannia',
        vesztesegek: [970,785,1402,697,746]
    },
    {
        legatus: 'Heiret Hosuk',
        nev: 'Legio IV. Nikonia',
        vesztesegek: [145,242,197,143,214]
    },
    {
        legatus: 'Maera Laiukus',
        nev: 'Legio V. Aelbfalvia',
        vesztesegek: [241,203,115,435,392]
    },
    {
        legatus: 'Aeirich Sciki',
        nev: 'Legio VI. Java',
        vesztesegek: [147,241,139,183,297]
    },
    {
        legatus: 'Kataen Iosa',
        nev: 'Legio VII. Beiira',
        vesztesegek: [175,187,248,148,278]
    },
    {
        legatus: 'Tomolus Bucsii',
        nev: 'Legio VIII. Gaia',
        vesztesegek: [418,428,491,462,570]
    },
    {
        legatus: 'Victorion Bougun',
        nev: 'Legio IX. Sopruina',
        vesztesegek: [153,158,176,134,107]
    },
    {
        legatus: 'Vittorio Gerlei',
        nev: 'Legio X. Altlania',
        vesztesegek: [1670,290,178,185,404]
    }
];

let tablazat = document.querySelector('table');

// GENERÁLÁS
let legioIndex = 0;
for(const legio of legiok){
    let ujSor = document.createElement('tr');
        ujSor.dataset.legio = legioIndex;
        legioIndex++;

        let ujFejlec = document.createElement('th');
            ujFejlec.innerHTML = legio.legatus;
        ujSor.appendChild(ujFejlec);

        ujFejlec = document.createElement('th');
            ujFejlec.innerHTML = legio.nev;
        ujSor.appendChild(ujFejlec);

        for(const veszteseg of legio.vesztesegek){
            let ujCella = document.createElement('td');
                ujCella.innerHTML = veszteseg;
            ujSor.appendChild(ujCella);
        }
    tablazat.appendChild(ujSor);
}

// KIJELÖLÉS
delegal(tablazat, 'tr', 'click', (esemeny, elem)=>{
    elem.classList.toggle('kijelolt');
});

// MAX
let maxGomb = document.querySelector('#max-gomb');
let maxEredmeny = document.querySelector('#max-eredmeny');
maxGomb.addEventListener('click', ()=>{
    let kijeloltek = tablazat.querySelectorAll('.kijelolt');
    if(kijeloltek.length == 0){
        maxEredmeny.innerHTML = 'Nincs semmi kijelölve!';
    }else{
        let maxLegio = legiok[parseInt(kijeloltek[0].dataset.legio)];
        let maxErtek = maxLegio.vesztesegek.reduce((a,b) => a+b, 0);

        for(const kijelolt of kijeloltek){
            legioIndex = parseInt(kijelolt.dataset.legio);
            let osszeg = legiok[legioIndex].vesztesegek.reduce((a,b) => a+b, 0);
            if(maxErtek < osszeg){
                maxErtek = osszeg;
                maxLegio = legiok[legioIndex];
            }
        }
        maxEredmeny.innerHTML = `A legtöbb embert vesztett légió: ${maxLegio.nev}`;
    }
});

// KEREKÍTÉS
let leGomb = document.querySelector('#le-gomb');
leGomb.addEventListener('click', ()=>{
    let kijeloltek = tablazat.querySelectorAll('.kijelolt');
    for(const kijelolt of kijeloltek){
        let cellak = kijelolt.querySelectorAll('td');
        legioIndex = parseInt(kijelolt.dataset.legio);
        let osszeg = legiok[legioIndex].vesztesegek.reduce((a,b) => a+b, 0);
        for(let i = 0; i < legiok[legioIndex].vesztesegek.length; i++){
            let maradek = legiok[legioIndex].vesztesegek[i] % 10;
            legiok[legioIndex].vesztesegek[i] -= maradek;
            cellak[i].innerHTML = legiok[legioIndex].vesztesegek[i];
        }
    }
});

// ÁTÍRÁS
let input = document.querySelector('input');
let csereGomb = document.querySelector('#csere-gomb');
csereGomb.addEventListener('click', ()=>{
    let ujNev = input.value;
    if(ujNev.trim() == '') return;

    let kijelolt = document.querySelector('.kijelolt');
    if(kijelolt){
        let legioIndex = kijelolt.dataset.legio;
        legiok[legioIndex].legatus = ujNev;
        kijelolt.querySelector('th').innerHTML = ujNev;
    }
});