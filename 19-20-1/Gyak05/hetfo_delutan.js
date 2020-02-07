function $(id){
    return document.getElementById(id);
}
/*
let headerok = $('t1').querySelectorAll('th');
let sorok = [].slice.call($('t1').querySelectorAll('tr'));
sorok.shift();

function rendez(oszlopszam){
    console.log('alma');
    sorok.sort((a,b)=>{
        if(a.cells[oszlopszam].innerText > b.cells[oszlopszam].innerText){
            return 1;
        }else if(a.cells[oszlopszam].innerText < b.cells[oszlopszam].innerText){
            return -1;
        }else{
            return 0;
        }
    });
}

function init(){
    for(let i = 0; i < headerok.length; i++){
        headerok[i].addEventListener('click', ()=>{
            rendez(i);
            let szoveg = '<tr><th>Név</th><th>Neptun</th><th>E-mail</th></tr>';
            for(sor of sorok){
                szoveg += '<tr><td>'+sor.cells[0].innerHTML+'</td><td>'+sor.cells[1].innerHTML+'</td><td>'+sor.cells[2].innerHTML+'</td></tr>'
            }
            $('t1').innerHTML = szoveg;
            headerok = $('t1').querySelectorAll('th');
            sorok = [].slice.call($('t1').querySelectorAll('tr'));
            sorok.shift();
            init();
        });
    }
}

init();
*/

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

function randomStilus(){
    let tx = 500+Math.random()*1000;
    let ty = 200+Math.random()*500;
    let fi = -30+Math.random()*60;
    return `
    transform: translate3d(`+tx+`px, `+ty+`px, 0px) rotate(`+fi+`deg) rotateX(0deg);
    -webkit-transform: translate3d(`+tx+`px, `+ty+`px, 0px) rotate(`+fi+`deg) rotateX(0deg);
    z-index: 1px;
    `;
}

// Képek kirajzolása
let szoveg = '';
for(let i = 0; i < kepek.length; i++){
    szoveg += '<li><img src='+kepek[i].src+'></li>';
}
szoveg += '<li><img id="fokuszmasolat" src="'+kepek[0].src+'"></li>';
$('kepek').innerHTML = szoveg;

// Képek szétszórása
let kepek_html = $('kepek').querySelectorAll('img');
kepek_html[0].id = 'fokusz';
for(let i = 0; i < kepek.length; i++){
    kepek_html[i].style = randomStilus();
    kepek_html[i].addEventListener('click', () => {
        $('fokusz').id = '';
        kepek_html[i].id = 'fokusz';
        $('fokuszmasolat').src = kepek_html[i].src;
    });
}