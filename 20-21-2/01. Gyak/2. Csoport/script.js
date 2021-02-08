console.log('alma')

let szam1 = 5.7
let szoveg = 'almafa', szam2 = 2.743
let logikai = true

console.log(szam1 + szam2, szoveg, logikai)

if(!logikai){
    console.log('igaz')
}else if(false){
    console.log('hamis igaz')
}else{
    console.log('hamis hamis')
}

if(true || false){
    console.log('igaz')
}

if(true && false){
    console.log('igaz')
}else{
    console.log('hamis')
}

console.log(true || false, true && false)

for(let i = 0; i < 5; i++){
    console.log(i)
}

let tomb1 = ['alma', 'körte', 'szilva', 45, true, [1,2,3,5], 'barack']
console.log(tomb1)

for(let i = 0; i < tomb1.length; i++){
    console.log('A tömb ' + i + '. eleme: ' + tomb1[i])
    console.log(`A tömb ${i}. eleme: ${tomb1[i]}`)
}

for(let elem of tomb1){ //a tömb elemein iterált végig
    console.log(`Itt egy tömb elem: ${elem}`)
}

for(let index in tomb1){ // a tömb indexein iterált végig
    console.log(index)
}

let objektum1 = {
    nev: 'Szőrmók Tamás',
    kor: 23,
    nem: 'férfi',
    elo: true,
    orak: ['web', 'power point'],
    baratok: [
        {
            nev: 'Gergő',
            kor: 23
        },
        {
            nev: 'Ákos',
            kor: 20
        }
    ]
}

for(let index in objektum1){
    console.log(objektum1[index])
}

let tomb2 = [2,67,2,4,67,2]
for(let elem of tomb2){
    console.log(elem)
}

const konstansValtozo = 'almafa'
let nemkonstansValtozo = 'almafa'
console.log(konstansValtozo)

nemkonstansValtozo = 'körtefa'
//konstansValtozo = 'körtefa'

for(const elem of tomb2){
    console.log(elem)
}

const ember = {
    nev: 'valaki',
    kor: 123
}
console.log(ember)
/*ember = {
    nev: 'valaki2'
}*/
ember.nev = 'valami más'
console.log(ember)

let tomb3 = tomb2
let tomb4 = [2,67,2,4,67,2]
let tomb5 = []
for(const elem of tomb2){
    tomb5.push(elem)
}

console.log(
    5 == 5,
    'almafa' == 'almafa',
    5 == '5',
    5 === '5',
    6 != 5,
    6 != '6',
    6 !== '6',
    tomb2 == tomb2,
    tomb2 == tomb3,
    tomb4 == tomb2
)

console.log(tomb2, tomb3, tomb4, tomb5)
tomb2[0] = 'almafa'
console.log(tomb2, tomb3, tomb4, tomb5)

///////////////////////////////////////////////////////////////////////

function fuggveny1(){
    console.log('függvény 1')
}
function fuggveny2(){
    return 5
}
function fuggveny3(szam){
    return szam + 5
}
function fuggveny4(param1, param2){
    console.log(param1 + param2)
}
function fuggveny5(param1, param2){
    console.log(`${param1}${param2}`)
}
function fuggveny6(){
    return 'függvény 6'
}
function fuggveny7(param1, param2){
    return param1 + param2
}

fuggveny1()
console.log( fuggveny2() )
console.log( fuggveny3(10) )

fuggveny4('alma', 'fa')
fuggveny4(5, 6)

fuggveny5('alma', 'fa')
fuggveny5(5, 6)

fuggveny5( fuggveny6() , fuggveny4( fuggveny2() , fuggveny3(10) ) )
fuggveny5( fuggveny6() , fuggveny7( fuggveny2() , fuggveny3(10) ) )

///////////////////////////////////////////////////////////////////////////////////

const filmek = [
    {
        cim: 'Tenet',
        ev: 2020
    },
    {
        cim: 'Interstellar',
        ev: 2012
    },
    {
        cim: 'Eredet',
        ev: 2010
    },
    {
        cim: 'Batman',
        ev: 2008
    }
]

function nevelo1(szoveg){
    if(szoveg[0] == 'I' || szoveg[0] == 'E'){
        return 'az'
    }else{
        return 'a'
    }
}

function nevelo2(szoveg){
    let elsoBetu = szoveg[0]
    if(elsoBetu == 'I' || elsoBetu == 'E'){
        return 'az'
    }else{
        return 'a'
    }
}

function nevelo3(szoveg){
    let elsoBetu = szoveg[0].toUpperCase()
    if(elsoBetu == 'I' || elsoBetu == 'E'){
        return 'az'
    }else{
        return 'a'
    }
}

function nevelo4(szoveg){
    let elsoBetu = szoveg[0].toUpperCase()
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű']
    
    let van = false
    for(let i = 0; i < mgh.length && !van; i++){
        van = elsoBetu == mgh[i]
    }

    if(van){
        return 'az'
    }else{
        return 'a'
    }
}

function nevelo5(szoveg){
    let elsoBetu = szoveg[0].toUpperCase()
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű']
    
    let van = false
    for(let i = 0; i < mgh.length && !van; i++){
        van = elsoBetu == mgh[i]
    }

    //ternary operátor
    // igaz ? ha igen : ha nem
    return van ? 'az' : 'a'
}

function nevelo6(szoveg){
    let elsoBetu = szoveg[0].toUpperCase()
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű']
    
    let van = mgh.includes(elsoBetu)

    return van ? 'az' : 'a'
}

function nevelo7(szoveg){
    let elsoBetu = szoveg[0].toUpperCase()
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű']

    return mgh.includes(elsoBetu) ? 'az' : 'a'
}

function nevelo8(szoveg){
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű']

    return mgh.includes(szoveg[0].toUpperCase()) ? 'az' : 'a'
}

function nevelo9(szoveg){
    return ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'].includes(szoveg[0].toUpperCase()) ? 'az' : 'a'
}

function nevelo10(szoveg){
    return 'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(szoveg[0].toUpperCase()) ? 'az' : 'a'
}

for(const film of filmek){
    console.log(`${nevelo10(film.cim)} ${film.cim} című film ${film.ev} évben jelent meg.`)
}

/////////////

let szamok = [6,23,6,87,314,1,42,578,54]

function paros(elem){
    return elem % 2 == 0
}
function hamis(elem){
    return false
}
function kiirNagyobb(elem){
    console.log(elem+1)
}
//console.log(paros(5), paros(6))


console.log(
    szamok.includes(6), szamok.includes(100),
    szamok.some(paros), szamok.some(hamis),
    szamok.find(paros), szamok.find(hamis)
)

szamok.forEach(kiirNagyobb)