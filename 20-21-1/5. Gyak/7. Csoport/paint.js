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

let elozo = {
    x : 0,
    y : 0,
    elsoMegvolt : false,
    gombLenyomva : false
};

ecset.lineJoin = 'round';
ecset.lineWidth = 20;
ecset.strokeStyle = 'red';

vaszon.addEventListener('mousemove', (esemeny) => {
    if(!elozo.gombLenyomva) return;

    let eltolas = vaszon.getBoundingClientRect();

    if(elozo.elsoMegvolt){
        ecset.beginPath();
        ecset.moveTo(elozo.x, elozo.y);
        ecset.lineTo(esemeny.x - eltolas.x, esemeny.y - eltolas.y);
        ecset.closePath();
        ecset.stroke();
    }else{
        elozo.elsoMegvolt = true;
    }

    elozo.x = esemeny.x - eltolas.x;
    elozo.y = esemeny.y - eltolas.y;
});

vaszon.addEventListener('mousedown', ()=>{
    elozo.gombLenyomva = true;
});

vaszon.addEventListener('mouseup', ()=>{
    elozo.gombLenyomva = false;
    elozo.elsoMegvolt  = false;
});

vaszon.addEventListener('mouseleave', ()=>{
    elozo.gombLenyomva = false;
    elozo.elsoMegvolt  = false;
});

let szinekSora = document.querySelector('#szin');
delegal(szinekSora, 'td', 'click', (esemeny, elem)=>{
    ecset.strokeStyle = elem.dataset.szin;
    szinekSora.querySelector('.kijelolve').classList.remove('kijelolve');
    elem.classList.add('kijelolve');
});

let szamokSora = document.querySelector('#vastagsag');
delegal(szamokSora, 'td', 'click', (esemeny, elem)=>{
    ecset.lineWidth = elem.dataset.vastagsag;
    szamokSora.querySelector('.kijelolve').classList.remove('kijelolve');
    elem.classList.add('kijelolve');
});