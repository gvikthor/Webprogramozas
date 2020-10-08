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

let vaszon = document.querySelector('canvas');
let ecset  = vaszon.getContext('2d');

ecset.lineWidth = 15;
ecset.lineJoin = 'round';
ecset.strokeStyle = 'brown';

let elozo = {
    x: 0,
    y: 0,
    elso: false,
    lenyomva: false
};

ecset.moveTo(0,0);
vaszon.addEventListener('mousemove', (esemeny) => {
    if(!elozo.lenyomva) return;

    let eltolas = vaszon.getBoundingClientRect();
    let aktualis = {
        x: esemeny.x - eltolas.x,
        y: esemeny.y - eltolas.y
    };

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
});

vaszon.addEventListener('mousedown', ()=>{
    elozo.lenyomva = true;
});

vaszon.addEventListener('mouseup', ()=>{
    elozo.lenyomva = false;
    elozo.elso = false;
});

vaszon.addEventListener('mouseleave', ()=>{
    elozo.lenyomva = false;
    elozo.elso = false;
});

let szinSor = document.querySelector('#szin');
delegal(szinSor, 'td', 'click', (esemeny, elem)=>{
    ecset.strokeStyle = elem.dataset.szin;
});

let meretSor = document.querySelector('#meret');
delegal(meretSor, 'td', 'click', (esemeny, elem)=>{
    ecset.lineWidth = elem.dataset.meret;
});