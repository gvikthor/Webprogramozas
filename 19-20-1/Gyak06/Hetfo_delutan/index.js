function $(id){
    return document.getElementById(id);
}

let vaszon = $('rajztabla');
let toll = vaszon.getContext('2d');
/*
toll.beginPath();
    toll.moveTo(0,0);
    toll.lineTo(100,250);
    toll.stroke();
toll.closePath();
toll.beginPath();
    toll.arc(150,50,20,0,3*Math.PI);
    toll.stroke();
toll.closePath();


toll.font = '25px Arial';
toll.strokeText('Hello There!',50,150)

let kep = new Image();
kep.src = './kep.jpg';
kep.onload = ()=>{
    toll.drawImage(kep, 600, 50, 400, 350, 15, 20, 500, 300)
}

document.querySelector('button').addEventListener('click', ()=>{
    toll.clearRect(0,0,vaszon.width,vaszon.height);
});
*/

let tollLent = false;
let elozoKattintas = {
    x: -1,
    y: -1
}

let szinek = document.querySelectorAll('.szin');
for(let i = 0; i < szinek.length; i++){
    szinek[i].addEventListener('click', ()=>{
        toll.strokeStyle = window.getComputedStyle(szinek[i], null).getPropertyValue('background-color');
        $('aktszin').style.backgroundColor = window.getComputedStyle(szinek[i], null).getPropertyValue('background-color');
    });
}

for(let i = 0; i < 500; i+= 50){
    toll.lineWidth = 2;
    toll.beginPath();
    toll.moveTo(i - vaszon.getBoundingClientRect().left, 0);
    toll.lineTo(i - vaszon.getBoundingClientRect().left, 300);
    toll.stroke();
    toll.closePath();
    toll.stroke();
}

for(let j = 0; j < 300; j += 50){
    toll.lineWidth = 2;
    toll.beginPath();
    toll.moveTo(0, j - vaszon.getBoundingClientRect().left);
    toll.lineTo(500, j - vaszon.getBoundingClientRect().left);
    toll.stroke();
    toll.closePath();
    toll.stroke();
}

toll.lineWidth = 20;
toll.lineJoin = 'round';
toll.strokeStyle = '#000000';

let vastagsagok = document.querySelectorAll('.vastagsag');
for(let i = 0; i < vastagsagok.length; i++){
    vastagsagok[i].addEventListener('click', ()=>{
        toll.lineWidth = parseInt(vastagsagok[i].innerText);
        $('aktvast').innerText = vastagsagok[i].innerText;
    });
}

vaszon.addEventListener('mousemove',()=>{
    if(tollLent){
        if(elozoKattintas.x == -1){
            elozoKattintas = {
                x: event.clientX,
                y: event.clientY
            }
        }else{
            toll.beginPath();
            toll.moveTo(elozoKattintas.x - vaszon.getBoundingClientRect().left, elozoKattintas.y - vaszon.getBoundingClientRect().top);
            toll.lineTo(event.clientX - vaszon.getBoundingClientRect().left, event.clientY - vaszon.getBoundingClientRect().top);
            toll.stroke();
            toll.closePath();
            toll.stroke();
            elozoKattintas = {
                x: event.clientX
            }
        }
    }
});

vaszon.addEventListener('mousedown', ()=>{
    if(event.buttons == 1){
        tollLent = true;
    }
});
vaszon.addEventListener('mouseup', ()=>{
    tollLent = false;
    elozoKattintas = {
        x: -1,
        y: -1
    }
});
vaszon.addEventListener('mouseleave', ()=>{
    tollLent = false;
    elozoKattintas = {
        x: -1,
        y: -1
    }
});

$('delete').addEventListener('click', ()=>{
    toll.clearRect(0,0,vaszon.width,vaszon.height);
});

