//b. Készíts egy random(a, b) függvényt, ami [a, b] zárt intervallumban állít elő egész számokat! Írj ki egy véletlen számot -10 és 10 között a konzolra!
function random(a, b){
    return Math.floor(Math.random()* (1 + Math.abs(a - b))) + a;
}

console.log(random(-10,10));

// c. Tölts fel egy 20 elemű tömböt véletlen számokkal -5 és 5 között (határokat beleértve)! A feltöltött tömböt írd ki a konzolra!
let hangok = [];
for(let i = 0; i < 20; i++){
    hangok.push(random(-5,5));
}

console.log(hangok);

// d. Rajzold ki a tömb elemeit a vászonra a következőképpen. Húzz egy törtvonalat a vászon bal szélének közepétől a jobb szélének közepéig úgy, hogy a bal középső után menjen egy szakasz 10px-szel jobbra és a tömb 1. elemének megfelelően a vászon függőleges közepétől fel vagy le. A következő szakasz innen 10px-re jobbra és a tömb 2. elemének megfelelően a vászon függőleges közepétől fel vagy le, és így tovább.
//függvénybe csinálom, mert tudom, hogy később úgyis kelleni fog
const vaszon = document.querySelector('canvas');
const ceruza = vaszon.getContext('2d');

    //e. A vonal legyen 3px vastag és szürke.
    ceruza.strokeStyle = 'grey'; 
    ceruza.lineWidth = 3;
    //

function kirajzol(){
    ceruza.clearRect(0,0,210,210);
    ceruza.beginPath();
    ceruza.moveTo(0,105);
    let x = 10;
    for(const hang of hangok){
        ceruza.lineTo(x, 105+hang);
        x += 10;
    }
    ceruza.lineTo(210,105);
    ceruza.stroke();
}

kirajzol();

//f. A "Change" gombra kattintva minden tömbelemhez adj hozzá egy véletlen számot -1 és 1 között (határokat beleértve), és egy vászontörlés után rajzold is ki az új tömbnek megfelelő állapotot!
function leptet(){
    for(let i = 0; i < hangok.length; i++){
        hangok[i] += random(-1,1);
    }
}

document.querySelector('#btn-change').addEventListener('click', ()=>{
    leptet();
    kirajzol();
});

//g. (1,5 pont) A "Start animation" ikonra kattintva ezt tedd automatikussá és folyamatossá. Valamilyen időzítő segítségével (requestAnimationFrame vagy setInterval) mindig változtasd meg a tömbelemeket és törlés után rajzold is ki a vászonra a megváltozott tömböt!
function ujKepkocka(){
    leptet();
    kirajzol();
    requestAnimationFrame(ujKepkocka); //ha időzítő van, ez a sor nem kell
}

document.querySelector('#btn-animation').addEventListener('click', ()=>{
    requestAnimationFrame(ujKepkocka);
    //vagy időzítővel: setInterval(ujKepkocka, 100);
});