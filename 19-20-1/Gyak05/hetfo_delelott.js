function $(id){
    return document.getElementById(id);
}
/*
let tablazat = $('tablazat');
let headerek = tablazat.querySelectorAll('th');
let sorok;

function rendez(oszlopszam){
    sorok.sort((a, b) => {
        let retval;
        if(a.cells[oszlopszam].innerText > b.cells[oszlopszam].innerText){
            retval = 1;
        }else if(a.cells[oszlopszam].innerText < b.cells[oszlopszam].innerText){
            retval = -1;
        }else{
            if(a.cells[1-oszlopszam].innerText > b.cells[1-oszlopszam].innerText){
                retval = 1;
            }else if(a.cells[1-oszlopszam].innerText < b.cells[1-oszlopszam].innerText){
                retval = -1;
            }else{
                retval = 0;
            }
        }
        return retval;
    });
}

function headerbeallit(){
    for(let i = 0; i < headerek.length; i++){
        headerek[i].addEventListener('click',() => {
            sorok = [].slice.call(tablazat.querySelectorAll('tr'));
            sorok.shift();

            rendez(i);

            let szoveg = '<tr><th>'+headerek[0].innerHTML+'</th><th>'+headerek[1].innerHTML+'</th></tr>';
            for(sor of sorok){
                szoveg += '<tr><td>'+sor.cells[0].innerHTML+'</td><td>'+sor.cells[1].innerHTML+'</td></tr>';
            }
            tablazat.innerHTML = szoveg;

            headerek = tablazat.querySelectorAll('th');
            headerbeallit();
        });
    }
}

headerbeallit();*/

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