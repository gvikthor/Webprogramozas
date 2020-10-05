function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }


    szulo.addEventListener(mikor, esemenyKezelo);
}

function atszamol(x,y){
    return {
        x: x+250,
        y: (-y)+250
    };
}

let vaszon = document.querySelector('canvas');
let ecset  = vaszon.getContext('2d');
/*
let pont = atszamol(0,0);
ecset.moveTo(pont.x, pont.y);
pont = atszamol(150,0);
ecset.lineTo(pont.x, pont.y);
ecset.stroke();
*/
let szorzo = 1;

function fuggveny(x){
    return szorzo*Math.sqrt(x);
}

function kirajzol(){
    ecset.clearRect(0,0,500,500);

    let elozoPont = {
        x: -250,
        y: fuggveny(-250)
    };
    for(let x = -250; x < 250; x++){
        let y = fuggveny(x);
        if(isNaN(y)){
            console.log(`A függvény nem értelmezhető a ${x} helyen`);
        }else{
            let ujPont = atszamol(x,y);

            ecset.beginPath();
            ecset.moveTo(elozoPont.x, elozoPont.y);
            ecset.lineTo(ujPont.x, ujPont.y);
            ecset.closePath();
            ecset.stroke();

            elozoPont.x = ujPont.x;
            elozoPont.y = ujPont.y;
        }
    }
}

let szam = document.querySelector('input');
szam.addEventListener('input', (esemeny)=>{
    szorzo = parseInt(szam.value);
    kirajzol();
});