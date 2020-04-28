let vaszon = document.querySelector('canvas');
let ceruza = vaszon.getContext('2d');

let elozo = {
    x: -1,
    y: -1
}
let egerLent = false;

ceruza.lineJoin = 'round';
ceruza.lineWidth = 10;
ceruza.strokeStyle = 'red';

function szamol(event){
    let visszateresi = {};
    visszateresi.x = event.x - vaszon.offsetLeft;
    visszateresi.y = event.y - vaszon.offsetTop;
    return visszateresi;
}

vaszon.addEventListener('mousemove', ()=>{
    if(!egerLent) return;

    let atszamolt = szamol(event);

    if(elozo.x != -1){
        ceruza.beginPath();
        ceruza.moveTo(elozo.x, elozo.y);
        ceruza.lineTo(atszamolt.x, atszamolt.y);
        ceruza.closePath();
        ceruza.stroke();
    }

    elozo.x = atszamolt.x;
    elozo.y = atszamolt.y;
});

vaszon.addEventListener('mouseleave', ()=>{
    elozo.x = -1;
    elozo.y = -1;
    egerLent = false;
});

vaszon.addEventListener('mousedown', ()=>{
    if(event.buttons != '1') return;

    egerLent = true;
});

vaszon.addEventListener('mouseup', ()=>{
    //if(event.buttons != '1') return;
    egerLent = false;
    elozo.x = -1;
    elozo.y = -1;
});

document.querySelector('#torol-btn').addEventListener('click', ()=>{
    ceruza.clearRect(0,0,500,500);
});

let szinek = document.querySelectorAll('.szin-gomb');
for(let i = 0; i < szinek.length; i++){
    szinek[i].addEventListener('click',()=>{
        document.querySelector('#szinek').querySelector('.selected').classList.remove('selected');
        ceruza.strokeStyle = szinek[i].dataset.color;
        szinek[i].classList.add('selected');
    });
}

let vast = document.querySelectorAll('.vast-gomb');
for(let i = 0; i < vast.length; i++){
    vast[i].addEventListener('click',()=>{
        document.querySelector('#vastagsagok').querySelector('.selected').classList.remove('selected');
        ceruza.lineWidth = parseInt(vast[i].dataset.width);
        vast[i].classList.add('selected');
    });
}