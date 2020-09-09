console.log(5);

let a = 5;
console.log(a);

const b = 10;
console.log(b);

//var c = 7; ne használd
//console.log(c);

let szoveg1 = 'Szeretem a kakaüt.';
let szoveg2 = "Szeretem a kakaót";
let szoveg3 = 'Egy fontos idézet: "valami valami" -Valaki 2020 colorized';
let szoveg4 = "Egy fontos idézet: \"valami valami\" -Valaki 2020 colorized";
let szoveg5 = "It's my life -Bon Jovi";
let szoveg6 = 'It\'s my life -Bon Jovi';

console.log(szoveg1);
console.log(szoveg2);
console.log(szoveg1, szoveg2, szoveg3, szoveg4, szoveg5, szoveg6);
console.log(szoveg1+szoveg2+szoveg3+szoveg4+szoveg5+szoveg6);
console.log(szoveg1+' '+szoveg2+' '+szoveg3+szoveg4+szoveg5+szoveg6);

console.log('A spotify lejátszási adatai szerint a 2005-ös év legkedveltebb száma '+szoveg5+' 37698423');
console.log(`A spotify lejátszási adatai szerint a 2005-ös év legkedveltebb száma ${szoveg5} 37698423`);

if(false){
    console.log('Igaz');
}else if(true){
    console.log('Hamis igaz');
}else{
    console.log('hamis hamis');
}

let tomb1 = [5,8,10,2,4,'alma',true,[3,5,'alma',6],szoveg1,false];
console.log(tomb1);

let i = 0;
while(i < tomb1.length){
    console.log(tomb1[i]);
    i++;
}

console.log('------------------------');

for(let j = 0; j < tomb1.length; j++){
    console.log(tomb1[j]);
}

for(tombelem of tomb1){
    console.log(tombelem);
}

tomb1.push('3');
tomb1[11] = 11;
tomb1[56] = 10;
tomb1[-1] = "almafa";
tomb1['egy'] = true;

for(index in tomb1){
    console.log(index, tomb1[index]);
}

console.log(tomb1);
console.log(tomb1[48]);

let objektum = {
    nev: 'Ádám',
    eletkor: 30,
    parkapcsolat: false,
    szinek: ['sötétkék', 'törtfehér'],
    mozijegyek: [
        {
            cim: 'Sötét lovag',
            idopont: '2008'
        },
        {
            cim: 'Eredet',
            idopont: '2010'
        },
        {
            cim: 'interstellar',
            idopont: 2014
        },
        {
            cim: 'Tenet',
            idopont: 2020
        }
    ]
};

console.log(objektum);

console.log(objektum.nev);
console.log(objektum.parkapcsolat);
for(jegy of objektum.mozijegyek){
    console.log(`${objektum.nev} megnézte ${jegy.idopont} évben ${'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(jegy.cim[0].toUpperCase()) ? 'az' : 'a'} ${jegy.cim} filmet.`);
}

function nevelo(string){
    let string2 = string.toUpperCase();
    if(string2[0] == 'E' || string2[0] == 'I'){
        return 'az';
    }else{
        return 'a';
    }
}

function nevelo2(string){
    let string2 = string.toUpperCase();
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'];

    let found = false;
    let i = 0;
    while(i < mgh.length && !found){
        found = string2[0] == mgh[i];
        i++;
    }

    if(found){
        return 'az';
    }else{
        return 'a';
    }
}

function nevelo3(string){
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'];

    let found = false;
    let i = 0;
    while(i < mgh.length && !found){
        found = string[0].toUpperCase() == mgh[i];
        i++;
    }

    //ternary operator
    return found ? 'az' : 'a';
}

function nevelo4(string){
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'];

    let i = 0;
    while(i < mgh.length){
        if(string[0].toUpperCase() == mgh[i]){
            return 'az';
        }
        i++;
    }

    return 'a';
}


function nevelo5(string){
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'];
    if(mgh.includes(string[0].toUpperCase())){
        return 'az';
    }else{
        return 'a'
    }
}


function nevelo6(string){
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'];
    return mgh.includes(string[0].toUpperCase()) ? 'az' : 'a';
}

function nevelo6(string){
    return ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'].includes(string[0].toUpperCase()) ? 'az' : 'a';
}

function nevelo7(string){
    return 'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(string[0].toUpperCase()) ? 'az' : 'a';
}