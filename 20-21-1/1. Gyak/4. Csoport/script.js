console.log(5);

let alma = 5;
console.log(alma);

const korte = 10;
console.log(korte);

//var olyan mint a let, de nem használjuk

let barack1 = 'Valaki azt mondta "szeretem a tejet" és ez jó.';
let barack2 = "Valaki azt mondta \"szeretem a tejet\" és ez jó.";
let barack3 = "It's the end";
let barack4 = 'It\'s the end';

console.log(barack1, barack2, barack3, barack4);
console.log(barack1+barack2+barack3+barack4);
console.log('Almafa '+alma+'m');
console.log(`Almafa ${alma}m`);

if(false){
    console.log('Igaz');
}else{
    console.log('Hamis');
}

let tomb1 = [5,9,11,0,7];
let tomb2 = [5,'alma',true,0,7];

for(let i = 0; i < tomb1.length; i++){
    console.log(tomb1[i]);
}

for(tombelem of tomb2){
    console.log(tombelem);
}

let j = 0;
while(j < tomb2.length){
    console.log(tomb2[j]);
    j++;
}

function fgv1(){
    console.log('fgv1');
}

fgv1();

function fgv2(param1, param2){
    console.log(`A paraméterek: ${param1} és ${param2}.`);
}

fgv2('almafa',true);
fgv2(5,[true,'nem']);

let teszttomb = [true,'nem']
console.log(teszttomb);
teszttomb.push(4);
console.log(teszttomb);
teszttomb[1] = ['alma','körte'];
console.log(teszttomb);
teszttomb[23] = 'a';
console.log(teszttomb);
console.log(teszttomb[12]);
console.log(teszttomb[35]);
console.log(teszttomb[-1]);
teszttomb['alma'] = 'almafa';
console.log(teszttomb);
for(index in teszttomb){
    console.log(`Index: ${index}, tömbelem: ${teszttomb[index]}`);
}

let tesztobj = {
    'nev': 'Kiss Ádám',
    'eletkor': 30,
    'parkapcsolat': 'egyedul',
    'szinek': ['kek','zold'],
    'mozijegyek': [
        {
            'film': 'Tenet',
            'idopont': 'holnap'
        },
        {
            'film': 'Almafa a film',
            'idopont': '2020.valami.valami.'
        },
        {
            'film': 'Bosszúállók',
            'idopont': 'ekkor és ekkor'
        },
        {
            'film': 'Up',
            'idopont': 'idk'
        }
    ]
};
console.log(tesztobj);
console.log(tesztobj.nev);

for(jegy of tesztobj.mozijegyek){
    console.log(`${jegy.idopont}-kor ${tesztobj.nev} megnézte ${nevelo6(jegy.film)} ${jegy.film} filmet.`);
}

function nevelo(szo){
    let szo2 = szo.toUpperCase();
    if(szo2[0] == 'A' || szo2[0] == 'U'){
        return 'az';
    }else{
        return 'a';
    }
}

function nevelo2(szo){
    if(szo.toUpperCase()[0] == 'A' || szo.toUpperCase()[0] == 'U'){
        return 'az';
    }else{
        return 'a';
    }
}

function nevelo3(szo){
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'];

    let found = false;
    let i = 0;
    while(i < mgh.length && !found){
        found = szo.toUpperCase()[0] == mgh[i];
        i++;
    }

    if(found){
        return 'az';
    }else{
        return 'a';
    }
}

function nevelo4(szo){
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'];

    let found = false;
    let i = 0;
    while(i < mgh.length && !found){
        found = szo.toUpperCase()[0] == mgh[i];
        i++;
    }

    //ternary
    return found ? 'az' : 'a';
}

function nevelo5(szo){
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'];

    let i = 0;
    while(i < mgh.length){
        if(szo.toUpperCase()[0] == mgh[i]){
            return 'az';
        }
        i++;
    }

    //ternary
    return 'a';
}

function nevelo6(szo){
    //let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'];
    //return mgh.includes(szo.toUpperCase()[0]) ? 'az' : 'a';
    return ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'].includes(szo.toUpperCase()[0]) ? 'az' : 'a';
}