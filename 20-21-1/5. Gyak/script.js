let vaszon = document.querySelector('canvas');
let ecset  = vaszon.getContext('2d');

ecset.moveTo(0, 0);
ecset.lineTo(300, 100);
ecset.lineTo(150, 123);
ecset.lineTo(500, 15);
ecset.moveTo(0, 500);
ecset.lineTo(250, 250);
ecset.stroke();


ecset.moveTo(100, 300);

ecset.beginPath();
ecset.arc(100,300,50,0, 2*Math.PI);
//ecset.closePath();

ecset.beginPath();
ecset.arc(150,150,25,0, Math.PI);
ecset.closePath();
ecset.stroke();

ecset.font = '15px Arial';
ecset.strokeText('Hello There!',130,270);


ecset.font = '15px Arial';
ecset.fillText('Hello There!',130,350);

let kep = new Image();
kep.src = './urhajos.png';

function kepKirajzol(){
    //ecset.drawImage(kep,10,50,100,20);
    ecset.drawImage(kep,0,0,50,50,350,350,50,50);
    ecset.drawImage(kep,150,0,50,50,400,350,50,50);
}

kep.addEventListener('load',kepKirajzol);
document.addEventListener('keydown',(esemeny)=>{
    ecset.clearRect(350,350,50,50);

    if(esemeny.key == '1'){
        ecset.drawImage(kep,0,0,50,50,350,350,50,50);
    }else if(esemeny.key == '2'){
        ecset.drawImage(kep,50,0,50,50,350,350,50,50);
    }else{
        ecset.drawImage(kep,100,0,50,50,350,350,50,50);
    }
});