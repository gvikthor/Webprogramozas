//// Konzolra írás ////
console.log('barack');

//// Változó ////
let valtozo = 'körte'; // let-et használunk, mert a var elavult
console.log(valtozo);

//// Tömb ////
let tomb1 = [];
tomb1[0] = 'szilva';
tomb1[1] = 'áfonya'; //így lassú lenne tömböket létrehozni
tomb1.push('alma');

let tomb2 = ['mák', 'krumpli', 'csizmatalp'];

console.log(tomb1);
console.log(tomb2); // így magát a tömböt, mint adatszerkezetet logolja

console.log(tomb1.length);
console.log(tomb2.length); // a tömb hossza nem egy függvény, hanem egy tuéajdonság, ezért nincs utána zárójel -> a tomb.length() nem fog működni

console.log(tomb1[0]);
console.log(tomb2[0]);

//// Ciklus ////
for(let i = 0; i < tomb1.length; i++){
    console.log(tomb1[i]);
}

for(elem of tomb2){
    console.log(elem);
}

//// Összefűzés ////
console.log('ri' + 'zs');
console.log('ri' + 25);
console.log(25 + 'ri');
console.log('2' + 5);
console.log(2 + '5');
console.log(2 + 5);
console.log('2 + 5');

let szoveg = '';
for(elem of tomb1){
    szoveg = szoveg+elem+' ';
}
for(elem of tomb2){
    szoveg += elem+' ';
}
console.log(szoveg);

//// Függvények ////
function fuggveny1(bemenet){
    console.log(bemenet);
}
fuggveny1('méz');

function fuggveny2(bemenet){
    return '> '+bemenet;
}

fuggveny1( fuggveny2('méz') );

//// Elágazások ////
let a = true;
let b = false;

if(a){
    console.log('a igaz');
}

if(b){
    console.log('b igaz');
}else{
    console.log('b hamis');
}

if(a || b){
    console.log('a vagy b igaz');
}

if(a && b){
    console.log('a és b is igaz');
}else{
    
    console.log('a vagy b hamis (esetleg mindkettő)');
}

if(!b){
    console.log('nem b igaz, tehát b hamis');
}

if(a == b){
    console.log('a és b megegyezik');
}else{
    console.log('a és b különbözik');
}

if(a != b){
    console.log('a és b különbözik');
}

//// HTML ////
//document.getElementById('erre_hivatkozunk_1').innerHTML = 'valami'; // erre nem fog tudni hivatkozni, hiszen előbb fut le a script, mint ahogy a div létrejön

document.getElementById('erre_hivatkozunk_2').innerHTML = 'valami';
document.getElementById('erre_hivatkozunk_2').innerHTML = 'Mindegy mit cisnálsz, ha Miskolcon vagy, úgyis megkínálnak '+szoveg; // ez felülírja az előzőt, mivel sima =-vel módosítottuk
document.getElementById('erre_hivatkozunk_2').innerHTML += 'pálinkával.'
document.writeln('Ezért maradok Budapesten.');
