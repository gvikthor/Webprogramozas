let gomb = document.querySelector('button');

function gombMegnyomva(esemeny){
    console.log('Megnyomtak');
    console.log(esemeny);
}
function gombMegnyomva2(esemeny){
    console.log('Megnyomtak 2');
    console.log(esemeny);
}
function egerAGombon(esemeny){
    console.log('Egér a gombon');
    console.log(esemeny);
}
function egerMozogAGombon(esemeny){
    console.log('Egér mozog a gombon');
    console.log(esemeny);
}

gomb.addEventListener('click', gombMegnyomva);
gomb.addEventListener('click', gombMegnyomva2);
gomb.addEventListener('mouseover', egerAGombon);
gomb.addEventListener('mousemove', egerMozogAGombon);
gomb.removeEventListener('mousemove', egerMozogAGombon);

gomb.addEventListener('click', function (esemeny){
    console.log('Névtelen függvény');
    console.log(esemeny);
});

gomb.addEventListener('click', (esemeny)=>{
    console.log('Arrow function');
    let gomb2 = esemeny.target;
    gomb2.innerHTML = 'megnyomtak';
});