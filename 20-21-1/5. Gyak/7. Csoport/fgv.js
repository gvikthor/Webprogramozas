let vaszon = document.querySelector('canvas');
let ecset  = vaszon.getContext('2d');
let meredeksegInput = document.querySelector('#m');
let meredeksegOutput = document.querySelector('#m-erteke');
let eltolasInput = document.querySelector('#b');
let eltolasOutput = document.querySelector('#b-erteke');

function atszamol(x, y){
    return {
        x : x+250,
        y : (-y)+250
    };
}

let elozo = {
    x : 0,
    y : 0,
    elsoMegvolt : false
};

function fuggveny(m,x,b){
    return m*x+b;
}

function kirajzol(m,b){
    ecset.clearRect(0,0,500,500);
    elozo.elsoMegvolt = false;

    for(let x = -250; x < 250; x++){
        let koordinata = atszamol(x, fuggveny(m,x,b));

        if(elozo.elsoMegvolt){
            ecset.beginPath();
            ecset.moveTo(elozo.x, elozo.y);
            ecset.lineTo(koordinata.x, koordinata.y);
            ecset.closePath();
            ecset.stroke();
        }else{
            elozo.elsoMegvolt = true;
        }

        elozo.x = koordinata.x;
        elozo.y = koordinata.y;
    }
}

meredeksegInput.addEventListener('input', ()=>{
    kirajzol(
        parseFloat(meredeksegInput.value),
        parseFloat(eltolasInput.value)
    );
    meredeksegOutput.innerHTML = `Meredekség: ${meredeksegInput.value}`;
});

eltolasInput.addEventListener('input', ()=>{
    kirajzol(
        parseFloat(meredeksegInput.value),
        parseFloat(eltolasInput.value)
    );
    eltolasOutput.innerHTML = `Eltolás: ${eltolasInput.value}`;
});