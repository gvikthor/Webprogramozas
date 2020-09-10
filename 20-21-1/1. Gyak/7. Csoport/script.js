console.log(5);

let alma = 5;
console.log(alma);

const blma = 10;
console.log(blma);

/*var clma = 7;
console.log(clma);*/

let szoveg1 = 'Szeretem a star warsot';
let szoveg2 = "Szeretem a star warsot";
let szoveg3 = 'Thor azt mondta "szeretem a starwarsot".';
let szoveg4 = "Thor azt mondta \"szeretem a starwarsot\".";

console.log(szoveg1);
console.log(szoveg1, szoveg2, szoveg3, szoveg4, alma, blma);
console.log(szoveg1+szoveg2+szoveg3+szoveg4);
console.log(szoveg1+' '+szoveg2+' '+szoveg3+' almafa szilvafa '+szoveg4);

console.log('Az országos felmérés alapján sokan mondták, hogy '+szoveg1+'. Ez nem reprezentatív.');
console.log(`Az országos felmérés alapján sokan mondták, hogy ${szoveg1}. Ez nem reprezentatív.`);

if(false){
    console.log('igaz');
}else if(false){   
    console.log('hamis');
}else{
    console.log('hamis hamis');
}

let tomb = [6,1,4,9,7,3,'körte',true,[4,'alma',[],'körte'], szoveg1, false];
console.log(tomb);

let i = 0;
while(i < tomb.length){
    console.log(tomb[i]);
    i++;
}

console.log('------------------');

for(let j = 0; j < tomb.length; j++){
    console.log(tomb[j]);
}

console.log('------------------');

for(elem of tomb){
    console.log(elem);
}

tomb.push('3');
tomb[12] = 5;
tomb[36] = 10;
console.log(tomb[30]);
console.log(tomb[76]);
tomb[-1] = true;
tomb['alma'] = 'almafa';
console.log(tomb);

console.log('------------------');

for(index in tomb){
    console.log(index, tomb[index]);
}

let objektum = {
    nev: 'Ádám',
    eletkor: 30,
    parkapcsolat: false,
    szinek: ['zöld', 'fehér'],
    mozijegy: [
        {
            cim: 'Sötét lovag',
            megjelenes: '2008'
        },
        {
            cim: 'Eredet',
            megjelenes: '2010'
        },
        {
            cim: 'Tenet',
            megjelenes: '2020'
        },
        {
            cim: 'interstellar',
            megjelenes: '2014'
        }
    ]
};

console.log(objektum);

console.log(objektum.nev);
console.log(objektum.parkapcsolat);
for(jegy of objektum.mozijegy){
    console.log(`${objektum.nev} megnézte ${'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(jegy.cim[0].toUpperCase()) ? 'az' : 'a'} ${jegy.cim} filmet, megjelenés éve: ${jegy.megjelenes}.`);
}

function nevelo(szoveg){
    if(szoveg[0] == 'E' || szoveg[0] == 'I'){
        return 'az';
    }else{
        return 'a';
    }
}

function nevelo2(szoveg){
    let elsoBetu = szoveg[0].toUpperCase();
    if(elsoBetu == 'E' || elsoBetu == 'I'){
        return 'az';
    }else{
        return 'a';
    }
}

function nevelo3(szoveg){
    let elsoBetu = szoveg[0].toUpperCase();
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'];

    let found = false;
    let i = 0;
    while(i < mgh.length && !found){
        found = elsoBetu == mgh[i];
        i++;
    }

    if(found){
        return 'az';
    }else{
        return 'a';
    }
}

function nevelo4(szoveg){
    let elsoBetu = szoveg[0].toUpperCase();
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'];

    let found = false;
    let i = 0;
    while(i < mgh.length && !found){
        found = elsoBetu == mgh[i];
        i++;
    }

    //ternary operator
    return found ? 'az' : 'a';
}

function nevelo5(szoveg){
    let elsoBetu = szoveg[0].toUpperCase();
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'];

    let i = 0;
    while(i < mgh.length){
        if(elsoBetu == mgh[i]){
            return 'az';
        }
        i++;
    }

    return 'a';
}

function nevelo6(szoveg){
    let elsoBetu = szoveg[0].toUpperCase();
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'];

    if(mgh.includes(elsoBetu)){
        return 'az';
    }else{
        return 'a';
    }
}

function nevelo7(szoveg){
    let elsoBetu = szoveg[0].toUpperCase();
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'];

    return mgh.includes(elsoBetu) ? 'az' : 'a';
}

function nevelo8(szoveg){
    let elsoBetu = szoveg[0].toUpperCase();
    return ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'].includes(elsoBetu) ? 'az' : 'a';
}

function nevelo9(szoveg){
    return ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'].includes(szoveg[0].toUpperCase()) ? 'az' : 'a';
}

function nevelo10(szoveg){
    return 'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(szoveg[0].toUpperCase()) ? 'az' : 'a';
}