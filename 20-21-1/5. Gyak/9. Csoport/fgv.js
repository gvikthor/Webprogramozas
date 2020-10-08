let vaszon = document.querySelector('canvas');
let ecset  = vaszon.getContext('2d');

function atszamol(x,y){
    return {
        x: x+250,
        y: (-y)+250
    };
}

let elozo = {
    x: 0,
    y: 0,
    elso: false,
    lenyomva: false
};

function fuggveny(x){
    return Math.sin(x);
}

for(let x = -250; x < 250; x++){
    let aktualis = atszamol(x, fuggveny(x));
    if(elozo.elso){
        ecset.beginPath();
        ecset.moveTo(elozo.x, elozo.y);
        ecset.lineTo(aktualis.x, aktualis.y);
        ecset.closePath();
        ecset.stroke();
    }else{
        elozo.elso = true;
    }

    elozo.x = aktualis.x;
    elozo.y = aktualis.y;
}