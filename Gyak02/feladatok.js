function $(azonosito){
    return document.getElementById(azonosito);
}

// 1) Egy szöveges beviteli mezőben legyen lehetőség megadni egy interneten elérhető kép URL-jét. Egy mellette lévő gombra kattintva jelenítsd meg a képet a dokumentumban!

function kep(){
    $('f1').innerHTML = '<img src="' + $('bemenet1').value + '" style="width: 20%;">';
}

$('gomb1').addEventListener('click', kep);

// 2) Másolás
//   a) Adott két szöveges beviteli mező és köztük egy gomb. A gomb lenyomására másold át az egyik szöveges beviteli mező tartalmát a másikba!

function masol(){
    let ertek1 = $('bemenet2a1').value;
    $('bemenet2a1').value = $('bemenet2a2').value;
    $('bemenet2a2').value = ertek1;
}

$('gomb2a').addEventListener('click', masol);

//  -------------------- MIELŐTT TOVÁBB MÉSZ, NÉZD ÁT A 'fuggveny' FILEOKAT ----------------------------
//  ha nem érted a névtelen függvényeket, szólj, és segítek, mert ez nagyon fontos része a javascriptnek
//  ----------------------------------------------------------------------------------------------------

//  b) Általánosítsd a feladatot N db szöveges beviteli mezőre!


function gombokGeneral(){
    let mennyiseg = parseInt($('bemenet2b').value);
    let szoveg = '<input id="generalt_bemenet_0"><br>';
    for(let i = 1; i < mennyiseg; i++){
        szoveg += '<button id="generalt_gomb_' + (i-1) + '">Másol</button><br>';
        szoveg += '<input id="generalt_bemenet_' + i + '"><br>';
        // $('generalt_gomb...).addEventListener(...); //ha ide írjuk, null lesz a gomb, hiszen még nem létezik
    }

    $('f2b').innerHTML = szoveg;

    for(let i = 0; i < mennyiseg-1; i++){
        $('generalt_gomb_'+i).addEventListener('click', () => {
            let ertek1 = $('generalt_bemenet_'+i).value;
            $('generalt_bemenet_'+i).value = $('generalt_bemenet_'+(i+1)).value;
            $('generalt_bemenet_'+(i+1)).value = ertek1;                    
        });
    }
}

$('gomb2b').addEventListener('click', gombokGeneral);

// 3) Készíts egy számlálót komponenst!
//  a) A számláló egy csak olvasható szöveges beviteli mezőből és két gombból (plusz, mínusz) áll! A gombok megnyomásával a szöveges beviteli mezőben lévő szám nő vagy csökken.
//  b) Definiálj a szkriptben egy minimum és egy maximum értéket! Ha a számláló eléri valamelyik értéket, akkor a megfelelő gomb ne legyen elérhető!
//  Egybevontam a kettőt

let max = 10;
let min = 0;
$('bemenet3a').disabled = true;
$('bemenet3a').value = 5;
$('gomb3aM').addEventListener('click', () => {
    $('bemenet3a').value = parseInt($('bemenet3a').value) - 1;
    $('gomb3aP').disabled = false;
    if($('bemenet3a').value == min){
        $('gomb3aM').disabled = true;
    }
});
$('gomb3aP').addEventListener('click', () => {
    $('bemenet3a').value = parseInt($('bemenet3a').value) + 1;
    $('gomb3aM').disabled = false;
    if($('bemenet3a').value == max){
        $('gomb3aP').disabled = true;
    }
});

//  c) Ha a gombot hosszan nyomjuk le, akkor a számláló automatikusan kezdje el az értéket változtatni.
//  Ebbe külön fogok belemenni amikor az eseményeket vesszük

// 4) Adott egy három oszlopból álló táblázat! A táblázat felett 3 szöveges beviteli mezővel és egy gombbal. A gombra kattintva a 3 beviteli mező értéke új sorként szúródjon be a táblázatba.

$('gomb4').addEventListener('click', () => {
    $('f4').innerHTML += '<tr><td>' + $('bemenet4a').value + '</td><td> ' + $('bemenet4b').value + '</td><td> ' + $('bemenet4c').value + '</td><tr>';
});

// 5) Fejlesszük az előző gyakról a filmes keresőt annyival, hogy ne különböztesse meg a kis/nagy betűket, és gépelés közben automatikusan frissítse az adatokat.

let filmek = [
    {
        cim: 'Zsivány egyes',
        kiado: 'Lucasfilm',
        rendezok: ['Gareth Edwards'],
        foszereplok: ['Felicity Jones', 'Diego Luna']
    },
    {
        cim: 'A Karib-tenger kalózai',
        kiado: 'Walt Disney Pictures',
        rendezok: ['Gore Verbinski'],
        foszereplok: ['	Johnny Depp', 'Geoffrey Rush', 'Orlando Bloom', 'Keira Knightley']
    },
    {
        cim: 'Végjáték',
        kiado: 'Marvel Studios',
        rendezok: ['Anthony Russo', 'Joe Russo'],
        foszereplok: ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth', 'Scarlett Johansson', 'Mark Ruffalo', 'Jeremy Renner', 'Crying in the Cinema']
    }
];

$('bemenet5').addEventListener('keyup', () => {
    // egy tömb, amiben objektumokat tárolunk: [{},{},{},{}]
    let szoveg = '<table> <tr> <td>Cím</td> <td>Kiadó</td> <td>Rendező(k)</td> <td>Főszereplő(k)</td> </tr>';
    let keresd = $('bemenet5').value.toLowerCase();
    for(film of filmek){ //minden szövegként megadott számot
        let talalt = false;
        let rendezok = '';
        let foszereplok = '';
        if(film.cim.toLowerCase().includes(keresd) || film.kiado.toLowerCase().includes(keresd)){
            talalt = true;
        }
        for(rendezo of film.rendezok){
            rendezok += rendezo + '<br>';
            if(rendezo.toLowerCase().includes(keresd)){
                talalt = true;
            }
        }
        for(foszereplo of film.foszereplok){
            foszereplok += foszereplo + '<br>';
            if(foszereplo.toLowerCase().includes(keresd)){
                talalt = true;
            }
        }
        

        if(talalt){
            szoveg += '<tr> <td>' + film.cim + '</td> <td>' + film.kiado + '</td> <td>' + rendezok + '</td> <td>' + foszereplok + '</td> </tr>';
        }
    }
    szoveg += '</table>'
    $('f5').innerHTML = szoveg;
});


/*
Hasonló feladatok:
- Számolj kamatos kamatot! A számoláshoz meg kell adni a kiindulási összeget, a kamat értékét, valamint azt, hány évvel későbbi összegre vagyunk kíváncsiak. A feladat során jelenítsük meg azt is, hogy melyik évben hogyan változik az összeg.
- Gondoljon a gép egy számra! A mi feladatunk, hogy kitaláljuk. Legyen lehetőség tippelni a számra, a gép pedig annyit válaszoljon, hogy az általa gondolt szám kisebb-e vagy nagyobb az általunk tippeltnél.
*/