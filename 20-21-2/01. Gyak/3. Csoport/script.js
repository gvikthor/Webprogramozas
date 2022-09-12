let alma = 'almafa'
let szam1 = 5, szam2 = 10, szam3 = 342, logikai = true

console.log(alma)
console.log(szam1+szam2)
console.log(szam3, logikai, szam1+szam3)

if(true){
    console.log('alma')
}

if(false){

}else if(false){

}else{
    console.log('else else')
}

if(true && false){

}else if(true || false){
    console.log('igaz hamis')
}

for(let i = 0; i < 5; i++){
    console.log(i)
}

let j = 0
while(j < 5){
    console.log(j)
    j++
}

let tomb1 = [2,6,3,6,87,4,2,1,45,7,4,'dfsd',false,'skljlsdkj',true,true,254356,[2234,5642,564,false,342,'ksflgjdlk'],'lksdfjkf','fkjglk']
console.log(tomb1)

for(let i = 0; i < tomb1.length; i++){
    //console.log('A tömb '+i+'. eleme:' , tomb1[i])
    /*   

    */
    console.log(`A töm ${i}. eleme: ${tomb1[i]}`) //altgr 7
}

for(let elem of tomb1){
    console.log(`A tömb egyik eleme: ${elem}`)
}

for(let index in tomb1){
    console.log(`A tömb ${index}. eleme: ${tomb1[index]}`)
}

let objektum1 = {
    nev: 'Szőrmók Tamás',
    eletkor: 23,
    nem: 'ffi',
    baratok: [
        'Áron',
        'István',
        'Nándor'
    ],
    lakhely: {
        varos: 'Budapest',
        kerulet: 'XII.',
        szobak: [
            {
                terulet: 25,
                nev: 'nappali'
            },
            {
                terulet: 10,
                vizBekotve: true
            }
        ]
    }
}

let nev = 'lakhely'
console.log(objektum1['nev'])
console.log(objektum1[nev])
console.log(objektum1.nev)

for(let index in objektum1){
    console.log(index, objektum1[index])
}

//////////////////////////////////////////////////////////

function fuggveny1(){
    /*
    lkjélfgjéldgkjh
    sdfgélkjdsgélhkjdg
    sdghjsfgélh
    sdkljsdghkl
    */
    return 5
}

function fuggveny2(elso, masodik){
    return elso+masodik
}

function fuggveny3(parameter){
    console.log(parameter)
}

fuggveny3( fuggveny2( fuggveny1(), 15 ) )

////////////////////////////////////

console.log('-----------------')
console.log(undefined == 'alma')
console.log(undefined == undefined)

console.log(5 == 5)
console.log(5 == '5')  //hasonlít
console.log(5 === '5') //de nem ugyanaz
console.log(5 != 5)
console.log(5 != '5')
console.log(5 !== '5')

let tomb2 = [1,2,3]
let tomb3 = tomb2
let tomb4 = [1,2,3]
let tomb5 = []

for(let elem of tomb2){
    tomb5.push(elem)
}

console.log(tomb2 == tomb3)
console.log(tomb2 == tomb4)

console.log(tomb2, tomb3, tomb4, tomb5)
tomb2[0] = 5
tomb4[1] = 7
console.log(tomb2, tomb3, tomb4, tomb5)

let objektum2 = {
    nev: 'Alma',
    kor: 45,
    szin: 'piros'
}

let objektum3 = {}
for(let index in objektum2){
    objektum3[index] = objektum2[index]
}
objektum2.nev = 'Körte'
console.log(objektum2, objektum3)

const szilva = 'szilvafa'
console.log(szilva)

const objektum4 = {
    nev: 'Barack',
    kor: 12,
    szin: 'narancs'
}
objektum4.nev = 'Alma'
console.log(objektum4)

let tomb6 = [1,2,3,4,5]
for(var a of tomb6){
    console.log(a)
}
console.log(a) //NEM HASZNÁLUNK VAR-T

///////////////////////////////////////////////////////////////////

const filmek = [
    {
        cim: 'Interstellar',
        ev: 2013
    },
    {
        cim: 'Tenet',
        ev: 2020
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

function nevelo0(szo){
    return 'a(z)'
}

function nevelo1(szo){
    let elsoBetu = szo[0]
    if(elsoBetu == 'I' || elsoBetu == 'E'){
        return 'az'
    }else{
        return 'a'
    }
}

function nevelo2(szo){
    let elsoBetu = szo[0].toUpperCase() //szo.toUpperCase()[0] ugyanaz lett volna
    if(elsoBetu == 'I' || elsoBetu == 'E'){
        return 'az'
    }else{
        return 'a'
    }
}

function nevelo3(szo){
    let elsoBetu = szo[0].toUpperCase()
    let mghk = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű']

    /*let van = false
    for(const mgh of mghk){
        if(!van && elsoBetu == mgh){
            van = true
        }
    }*/

    let van = false
    for(let i = 0; i < mghk.length && !van; i++){
        van = elsoBetu == mghk[i]
    }

    if(van){
        return 'az'
    }else{
        return 'a'
    }
}

function nevelo4(szo){
    let elsoBetu = szo[0].toUpperCase()
    let mghk = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű']

    let van = false
    for(let i = 0; i < mghk.length && !van; i++){
        van = elsoBetu == mghk[i]
    }

    //ternary operátor
    // feltétel ? ha igaz : ha nem igaz
    
    return van ? 'az' : 'a'
}

function nevelo5(szo){
    let elsoBetu = szo[0].toUpperCase()
    let mghk = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű']

    let van = mghk.includes(elsoBetu)
    
    return van ? 'az' : 'a'
}

function nevelo6(szo){
    let mghk = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű']

    let van = mghk.includes(szo[0].toUpperCase())
    
    return van ? 'az' : 'a'
}

function nevelo7(szo){
    let van = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'].includes(szo[0].toUpperCase())
    
    return van ? 'az' : 'a'
}

function nevelo8(szo){
    return ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'].includes(szo[0].toUpperCase()) ? 'az' : 'a'
}

function nevelo9(szo){
    return 'AÁEÉIÍOÓÖŐUÚÖŐ'.includes(szo[0].toUpperCase()) ? 'az' : 'a'
}

for(const film of filmek){
    //console.log(`Tomi megnézte ${nevelo9(film.cim)} ${film.cim} című filmet, ami ekkor jelent meg: ${film.ev}`)
    console.log(`Tomi megnézte ${'AÁEÉIÍOÓÖŐUÚÖŐ'.includes(film.cim[0].toUpperCase()) ? 'az' : 'a'} ${film.cim} című filmet, ami ekkor jelent meg: ${film.ev}`)
}

//some find forEach filter