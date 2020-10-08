let vaszon = document.querySelector('canvas');
let ecset  = vaszon.getContext('2d');

ecset.moveTo(100,300);
ecset.lineTo(200,500);
ecset.lineTo(400,200);
ecset.lineTo(0,0);
ecset.moveTo(500,500);
ecset.lineTo(400,400);
ecset.stroke();

ecset.moveTo(250,250);
ecset.rect(300,300,20,45);
ecset.arc(250,250,30,0,Math.PI);
ecset.arc(150,150,30,0,Math.PI);
ecset.stroke();

ecset.beginPath();
ecset.arc(100,100,40,0,2*Math.PI);
ecset.stroke();

ecset.beginPath();
ecset.arc(400,400,20,Math.PI,2*Math.PI);
ecset.closePath();
ecset.stroke();

ecset.beginPath();
ecset.moveTo(100,150);
ecset.lineTo(200,150);
ecset.lineTo(200,300);
ecset.lineTo(400,350);
ecset.closePath();
ecset.stroke();

ecset.font = '15px Arial';
ecset.strokeText('Guten Tag!',100,100);
ecset.fillText('Bonjour!',100,120);

let kep = new Image();
kep.src = './bonjour.png';

kep.addEventListener('load', ()=>{
    //ecset.drawImage(kep,300,150);
    //ecset.drawImage(kep,300,150,100,100);
    ecset.drawImage(kep,  90,220,400,400,  300,150,200,200);
    //              kép   levágás          kirajzolás
});

let urhajos = new Image();
urhajos.src = './urhajos.png';

urhajos.addEventListener('load', ()=>{
    ecset.drawImage(urhajos,  0,0,50,50,  0,0,50,50);
});

document.addEventListener('keydown', (esemeny)=>{
    ecset.clearRect(0,0,50,50);

    if(esemeny.key == 1){
        ecset.drawImage(urhajos,  50,0,50,50,   0,0,50,50);
    }else if(esemeny.key == 2){
        ecset.drawImage(urhajos,  100,0,50,50,  0,0,50,50);
    }else{
        ecset.drawImage(urhajos,  150,0,50,50,  0,0,50,50);
    }
});