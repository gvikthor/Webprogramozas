function $(azonosito){
    return document.getElementById(azonosito);
}

/////////////////////////////////////////////

function fgv1(){
    console.log('Függvény 1: Ez ugyanaz, mint amit eddig csináltunk.');
}
$('gomb1').addEventListener('click',fgv1);

/////////////////////////////////////////////

function fgv2(param){
    console.log('Függvény 2: Ez nem a gomb megnyomásakor hívódik meg, hanem a generáláskor, paraméter: ' + param);
}
$('gomb2').addEventListener('click',fgv2('alma')); // a gomb megnyomása nem csinál semmit

/////////////////////////////////////////////

$('gomb3').addEventListener('click', function(){
    console.log('Függvény 3: Ez egy névtelen függvény, itt jön be már a funkcionális programozás.');
});

/////////////////////////////////////////////

$('gomb4').addEventListener('click', () => {
    console.log('Függvény 4: Ez ugyanaz, mit az előző, csak máshogy leírva. Úgynevezett arrow function.');
});

/////////////////////////////////////////////

function fgv5(param){
    console.log('Függvény 5: A gomb megnyomásakor meghívódik a névtelen függvény, amiben meghívódik ez a függvény, paraméter: ' + param);
}

$('gomb5').addEventListener('click', function(){
    fgv5('alma');
});