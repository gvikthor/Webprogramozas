
function $(id){
    return document.getElementById(id);
}

////////////////////////////
//////// 1. feladat ////////
////////////////////////////

let tablazat = $('t1');
let headerok = tablazat.querySelectorAll('th') 
let sorok = [].slice.call(tablazat.querySelectorAll('tr')); // nagyon nagy csalás, átalakítjuk a NodeListet táblázattá
sorok.shift();  //olyan, mint a pop(), csak nem az utolsó, hanem az első elemet veszi ki - ami most a header

function rendez(oszlopszam){
    /* 
    A sort-nak megadjuk a függvényt, ami alapján összehasonlít két elemet.
    Ha függgvény(a, b) kisebb mint 0, akkor 'a' kisebb indexet kap, mint 'b', szóval a előre kerül.
    Ha függgvény(a, b) 0-t ad vissza, akkor 'a'-t és 'b'-t  hagyjuk változatlanul, de a többi elemet rendezzük.
    Ha függgvény(a, b) nagyobb mint 0, rendezze 'b'-t kisebb indexre mint 'a'.
    */
    sorok.sort((sor1, sor2) => {
        let retval;
        if(sor1.cells[oszlopszam].innerText > sor2.cells[oszlopszam].innerText){
            retval = 1; // sor2 lesz elöl
        }else if(sor1.cells[oszlopszam].innerText < sor2.cells[oszlopszam].innerText){
            retval = -1; // sor1 lesz elöl
        }else{
            retval = 0; //mindegy
        }
        return retval;
    });

    let szoveg = `
        <tr>
            <th>Név</th>
            <th>Neptun</th>
            <th>E-mail</th>
        </tr>
    `;
    for(sor of sorok){
        szoveg += '<tr>' + sor.innerHTML + '</tr>';
    }
    tablazat.innerHTML = szoveg;

    headerok = tablazat.querySelectorAll('th'); // újra be kell állítani őket, mert eltűntek az innerHTML-el
    sorok = [].slice.call(tablazat.querySelectorAll('tr'));
    sorok.shift();
    for(let i = 0; i < headerok.length; i++){
        headerok[i].addEventListener('click', () => {
            rendez(i);
        });
    }
}

for(let i = 0; i < headerok.length; i++){
    headerok[i].addEventListener('click', () => {
        rendez(i);
    });
}

////////////////////////////
//////// 2. feladat ////////
////////////////////////////

let kepek = [];
function betolt() {
    for (kep of arguments) {
        kepek.push(new Image());
        kepek[kepek.length-1].src = kep;
    }
}
betolt(
    "https://thumbs.dreamstime.com/z/sad-woman-shows-message-to-surprised-friend-women-negative-sitting-grass-park-97400077.jpg",
    "https://cdn.vox-cdn.com/thumbor/QQFnIJ-oRsMuO0eyH_bRG81PeJQ=/0x0:715x470/1200x800/filters:focal(301x178:415x292)/cdn.vox-cdn.com/uploads/chorus_image/image/56360253/sub_buzz_13357_1503609440_1.0.jpeg",
    "https://st3.depositphotos.com/1809585/13705/i/1600/depositphotos_137051774-stock-photo-woman-ignoring-a-marriage-proposal.jpg",
    "https://www.insideedition.com/sites/default/files/styles/content_full/public/images/2018-06/istock-829471540.jpg?itok=6P3BxAyN",
    "https://static.euronews.com/articles/stories/03/72/62/86/602x338_cmsv2_ab43e99c-fa7a-54d6-86a5-cd0cb14bae3d-3726286.jpg",
    "https://i.imgur.com/tymmyDy.png"
);

function R(min,max){
    if(min < 0){
        max += -min;
    }
    return Math.floor(min+Math.random()*max);
}

function randomStilus(){
    let tx = R(500,700);
    let ty = R(0,200);
    let fi = R(-30,30);
    return `
        transform: translate3d(`+tx+`px, `+ty+`px, 0px) rotate(`+fi+`deg) rotateX(0deg);
        -webkit-transform: translate3d(`+tx+`px, `+ty+`px, 0px) rotate(`+fi+`deg) rotateX(0deg);
        z-index: 1px;
    `;
}

let kephtml = '';
for(kep of kepek){
    kephtml += '<li><img src="'+kep.src+'"></li>';
}
kephtml += '<li><img id="fokuszmasolat" src="'+kepek[0].src+'"></li>'; //ez lesz a megjelenített elem
$('kepek').innerHTML = kephtml;
$('kepek').querySelector('img').id = 'fokusz';
for(let i = 0; i < kepek.length; i++){
    let kep = $('kepek').querySelectorAll('img')[i]; // nem hatékony, de most átlátható így
    kep.style = randomStilus();
    kep.addEventListener('click', () => {
        document.getElementById('fokusz').id = '';
        kep.id = 'fokusz';
        $('fokuszmasolat').src = kep.src;
    });
}