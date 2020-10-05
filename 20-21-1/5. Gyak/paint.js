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
ecset.lineJoin = 'round';

let kurzor = {
    x: 0,
    y: 0,
    elso: false,
    lenyomva: false
};
vaszon.addEventListener('mousemove', (esemeny) => {
    if(!kurzor.lenyomva) return;

    let eltolas = vaszon.getBoundingClientRect();
    if(kurzor.elso){
        ecset.beginPath();
        ecset.moveTo(kurzor.x - eltolas.x, kurzor.y - eltolas.y);
        ecset.lineTo(esemeny.x - eltolas.x, esemeny.y - eltolas.y);
        ecset.closePath();
        ecset.stroke();
        kurzor.x = esemeny.x;
        kurzor.y = esemeny.y;
    }else{
        kurzor.x = esemeny.x;
        kurzor.y = esemeny.y;
        kurzor.elso = true;
    }
});

vaszon.addEventListener('mousedown', ()=>{
    kurzor.lenyomva = true;
});
vaszon.addEventListener('mouseup', ()=>{
    kurzor.lenyomva = false;
    kurzor.elso = false;
});
vaszon.addEventListener('mouseleave', ()=>{
    kurzor.lenyomva = false;
    kurzor.elso = false;
});

delegal(document, '.szin', 'click', (esemeny, elem) => {
    ecset.strokeStyle = elem.dataset.szin;
});

delegal(document, '.vastagsag', 'click', (esemeny, elem)=>{
    ecset.lineWidth = elem.dataset.meret;
});