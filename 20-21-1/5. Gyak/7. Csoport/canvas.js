let vaszon = document.querySelector('canvas');
let ecset  = vaszon.getContext('2d');

ecset.moveTo(100,300);
ecset.lineTo(150,400);
ecset.lineTo(400,200);
ecset.lineTo(100,50);
ecset.lineTo(0,0);

ecset.beginPath();
ecset.moveTo(90,75);
ecset.lineTo(500,500);
ecset.stroke();

ecset.beginPath();
ecset.moveTo(103,201);
ecset.lineTo(150,400);
ecset.lineTo(400,200);
ecset.lineTo(100,50);
ecset.lineTo(0,0);
ecset.closePath();
ecset.stroke();

ecset.beginPath();
ecset.rect(10,10,210,130);
ecset.stroke();

ecset.beginPath();
ecset.arc(50,50,60,0,Math.PI,true);
ecset.stroke();

ecset.font = '15px Arial';
ecset.strokeText('Hello There!', 400, 50);
ecset.fillText('General Kenobi!', 400, 70);

let kep = new Image();
kep.src = './kutya.jpg';

kep.addEventListener('load', ()=>{
    //ecset.drawImage(kep, 100, 100);
    //ecset.drawImage(kep, 100, 100, 300, 200);
    ecset.drawImage(kep, 240, 180, 200, 150, 100, 100, 400, 300);
});


let urhajos = new Image();
urhajos.src = './urhajos.png';

urhajos.addEventListener('load', ()=>{
    ecset.drawImage(urhajos,0,0,50,50,0,450,50,50);
});

document.addEventListener('keydown', (esemeny)=>{
    ecset.clearRect(0,450,50,50);

    if(esemeny.key == '1'){
        ecset.drawImage(urhajos,50,0,50,50,0,450,50,50);
    }else if(esemeny.key == '2'){
        ecset.drawImage(urhajos,100,0,50,50,0,450,50,50);
    }else{
        ecset.drawImage(urhajos,150,0,50,50,0,450,50,50);
    }
});


ecset.clearRect(0,0,500,500);