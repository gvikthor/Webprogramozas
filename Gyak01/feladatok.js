function $(azonosito){
    return document.getElementById(azonosito);
}

// 1) Írj
//  a) a konzolra
    console.log('Hello there!');

//  b) felugró ablakba
    //alert('Hello there!');

//  c) magába a dokumentumba
    $('f1').innerHTML = 'Hello there!';

//  d) valamit tízszer a konzolra
    for(let i = 0; i < 10; i++){
        console.log('Hello there!');
    }

// 2) Kérj be egy
//  a) nevet, és írd ki egymás alá egyre növekvő betűméretekkel!
    function kiir10szer(){
        let szoveg = '';
        for(let i = 0; i < 10; i++){
            szoveg += '<p style="font-size: ' + (5 + 2 * i) + 'px">' + $('bemenet2a').value + '</p>';
        }
        $('f2a').innerHTML = szoveg;
    }
    $('gomb2a').addEventListener('click', kiir10szer);

//  b) számot, és írj ki egymás alá annyiszor egy szöveget egyre növekvő betűméretekkel!
    function kiirNszer(){
        let szoveg = '';
        for(let i = 0; i < $('bemenet2b').value; i++){
            szoveg += '<p style="font-size: ' + (5 + 2 * i) + 'px"> Hello there! </p>';
        }
        $('f2b').innerHTML = szoveg;
    }
    $('gomb2b').addEventListener('click', kiirNszer);

//  c) számot és szöveget, és a számnyiszor írd ki a szöveget egyre növekvő betűméretekkel!
    function kiirNszer(){
        let szoveg = '';
        for(let i = 0; i < $('bemenet2c_1').value; i++){
            szoveg += '<p style="font-size: ' + (5 + 2 * i) + 'px">' + $('bemenet2c_2').value + '</p>';
        }
        $('f2c').innerHTML = szoveg;
    }
    $('gomb2c').addEventListener('click', kiirNszer);


// 3) Kérj be egy N számot, és készíts azzal egy NxN-es szorzótáblát!
    function szorzotabla(){
        let szoveg = '<table>';
        let meret = $('bemenet3').value;

        szoveg += '<tr> <td></td>' //az első sor első cellája a bal felső sarok, ez üres
        for(let i = 0; i < meret; i++){
            szoveg += '<td><b>' + (i+1) + '</b></td>'
        }
        szoveg += '</tr>'; 

        for(let i = 0; i < meret; i++){
            szoveg += '<tr> <td><b>' + (i+1) + '</b></td>'
            for(let j = 0; j < meret; j++){
                szoveg += '<td>'+ ((i+1)*(j+1)) +'</td>'
            }
            szoveg += '</tr>';
        }

        szoveg += '</table>'

        $('f3').innerHTML = szoveg;
    }
    $('gomb3').addEventListener('click', szorzotabla);

// 4) Készítsd el a Fahrenheitből Celsius fokba átalakító programot! Kérd be a felhasználótól a Fahrenheit értéket és írd ki az oldalra az eredményt!
    function farCel(){
        $('f4').innerHTML = $('bemenet4').value + '°F = ' + (($('bemenet4').value - 32) * (5/9)).toFixed(2) + '°C';
    }
    $('gomb4').addEventListener('click', farCel);

// 5) Készíts egy százalékszámító programot! Kérd be a számot, majd azt is, hogy hány százalékára vagy kíváncsi. Az eredményt írd ki!
    function szazalek(){
        $('f5').innerHTML = $('bemenet5a').value * ($('bemenet5b').value / 100);
    }
    $('gomb5').addEventListener('click', szazalek);

// 6) Olvass be három számot, és döntsd el, hogy alkothatják-e egy háromszög oldalát!
    function haromszog(){
        let szoveg = 'Lehet';
        let a, b, c = 0;
        a = parseInt($('bemenet6a').value); //eddig tudtuk stringként használni ezeket a számokat, de most már muszáj lesz átalakítani őket (éremes kipróbálni, mi történik, ha ezt nem tesszük meg)
        b = parseInt($('bemenet6b').value);
        c = parseInt($('bemenet6c').value);
        if(
            a > b + c
            ||
            b > a + c
            ||
            c > b + a
        ){
            szoveg = 'Nem lehet';
        }

        $('f6').innerHTML = szoveg;
    }
    $('gomb6').addEventListener('click', haromszog);

// 7) Egy sámsorozatból minden számnak add meg az ellentettjét!
    function sorozat(){
        let szoveg = '';
        let szamok = $('bemenet7').value.split(' '); //ez felvégja szóközönként
        for(szam of szamok){ //minden szövegként megadott számot
            szoveg += (-1)*parseFloat(szam) + ' '; //rendes számmá alakítunk és vesszük az ellentettjét
        }

        $('f7').innerHTML = szoveg;
    }
    $('gomb7').addEventListener('click', sorozat);

// 8) Adott egy szavakat tartalmazó tömb, válogasd ki azokat, amelyek
//  a) egy bekért részszöveget tartalmaznak!
    function tartalmaz(){
        let szavak = ['asdqwertz','yxcasdfgh','fghjkl','asduiop','katalógus','bnmasdjkl']
        let szoveg = '';
        for(szo of szavak){ //minden szövegként megadott számot
            if(szo.includes($('bemenet8a').value)){
                szoveg += szo + ' ';
            }
        }

        $('f8a').innerHTML = szoveg;
    }
    $('gomb8a').addEventListener('click', tartalmaz);

//  b) egy bekért részszöveggel kezdődnek!
    function kezdodik(){
        let szavak = ['asdqwertz','yxcasdfgh','fghjkl','asduiop','katalógus','bnmasdjkl']
        let szoveg = '';
        for(szo of szavak){ //minden szövegként megadott számot
            if(szo.startsWith($('bemenet8b').value)){
                szoveg += szo + ' ';
            }
        }

        $('f8b').innerHTML = szoveg;
    }
    $('gomb8b').addEventListener('click', kezdodik);


// 9) Készíts egy olyan adatszerkezetet, amely egy film adatait írja le. A filmnél a következő adatokat tároljuk: cím, kiadó, rendezők, főszereplők
// Add meg azokat a filmeket, amiknek bármely adata közt szerepel a keresett kifejezés!
    function film(){
        // egy tömb, amiben objektumokat tárolunk: [{},{},{},{}]
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
        ]

        let szoveg = '<table> <tr> <td>Cím</td> <td>Kiadó</td> <td>Rendező(k)</td> <td>Főszereplő(k)</td> </tr>';
        let keresd = $('bemenet9').value;
        for(film of filmek){ //minden szövegként megadott számot
            let talalt = false;
            let rendezok = '';
            let foszereplok = '';
            if(film.cim.includes(keresd) || film.kiado.includes(keresd)){
                talalt = true;
            }
            for(rendezo of film.rendezok){
                rendezok += rendezo + '<br>';
                if(rendezo.includes(keresd)){
                    talalt = true;
                }
            }
            for(foszereplo of film.foszereplok){
                foszereplok += foszereplo + '<br>';
                if(foszereplo.includes(keresd)){
                    talalt = true;
                }
            }
            

            if(talalt){
                szoveg += '<tr> <td>' + film.cim + '</td> <td>' + film.kiado + '</td> <td>' + rendezok + '</td> <td>' + foszereplok + '</td> </tr>';
            }
        }
        szoveg += '</table>'
        $('f9').innerHTML = szoveg;
    }
    $('gomb9').addEventListener('click', film);

/*
Hasonló feladatok:
- Adott két egész szám, a és b. Írj függvény, amely eldönti, hogy b osztója-e a-nak!
- Adott egy pont a síkon. Írj függvényt, amely megmondja, hogy a pont melyik síknegyedbe esik!
- Adott két szám. Írj függvényt, amely visszaadja legnagyobb közös osztójukat!
- Írj függvényt, ami visszaadja egy egész szám faktoriálisát!
-  Adott a és b egész szám. Osztás művelete nélkül add meg a-nak b-vel való osztásakor keletkező maradékot.
- Egy számsorozatban keress meg egy negatív számot.
- Számold meg, hány páros szám van egy számokat tartalmazó tömbben!
- Válogasd ki azokat a számokat, amelyek mindkét szomszédjuktól egy előre bekért értéken belül térnek el.
- Írj függvényt, amely megadja egy egész szám prímtényezős felbontását!
*/