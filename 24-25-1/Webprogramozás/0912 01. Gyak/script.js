console.log(
    'alma',
    5+5,
    5+'5',
    5-5,
    5-'5',
    5+'alma',
    5-'alma',
    [],
    []+5+5,
    5+5+[],
    []+[],
    'alma'+[],
    ['alma']+'körte',
    ['alma', 'szilva']+['körte', 'barack'],
    5 == '5',
    5 === '5'
)

/**
 * # Ez egy cím
 * ## Ez egy alcím
 * Összeadja az a és b számokat
 * - felsorolás
 * - felsorolás
 * @param {Number} a 
 * @param {Number} b 
 */
function osszead(a, b){
    let osszeg = a+b
    return osszeg
}

console.log(osszead(1,2))

let nevek1 = ['Gergő', 'Peti', 'Dalma']
const nevek2 = ['Laura', 'István', 'Nándor'] // a konstans nem azt jelenti, hogy az elemeket nem tudom változtatni, csak hogy nem mutathat új helyre a változó
const szam = 15

nevek1[0] = 'Viktória'
nevek1[8] = 'Laci'
nevek1[-1] = 'Bence'
nevek1['5'] = 'Miklós'
nevek1['alma'] = 'Gábor'
nevek1.alma = 'Kiskutya'

console.log(nevek1)
console.log(nevek1.length)
for(let i = 0; i < nevek1.length; i++){
    console.log(nevek1[i])
}
for(let nev of nevek1){ // for-of az elemeken megy végig
    //nev = 'Rezső'
    console.log(nev)
}
for(let index in nevek1){ // for-in az indexen megy végig
    console.log(index)
}
console.log(nevek1)

let ember1 = {
    nev: 'Peti',
    eletkor: 25,
    eletben: true,
    allatok: [
        {nev: 'Mici', faj: 'macska', benti: true},
        {nev: 'Bodri', faj: 'lemur', benti: false},
        {nev: 'Iggy', faj: 'iguana', benti: false},
    ]
}
let ember2 = ember1
ember2.nev = 'Laci'
console.log(ember1.nev)

// deep copy

let fajokEmoji = {
    macska: '🐈',
    lemur: '🐒',
    kutya: '🐕'
}

console.log(ember1)

for(const allat of ember1.allatok){
    //console.log(allat.nev + ' (' + allat.faj + ')')
    let fajStringHossz = fajokEmoji[allat.faj]?.length
    let emoji = fajokEmoji[allat.faj] ?? '❓'
    console.log(`${ember1.nev} egyik háziállata ${allat.nev}, aki egy ${allat.faj}. ${emoji}`)
}


function nevKiir(ember){
    console.log(ember.nev ?? 'Nincs neve ennek')
    return 'siker'
}

nevKiir(ember1)
console.log(nevKiir(ember1))

const eletkorKiir = function(ember){
    console.log(ember.eletkor)
}
eletkorKiir(ember1)

const eletbenKiir = (ember) => {
    let eredmeny = 'eletben'
    if(!ember.eletben){
        eredmeny = 'elhunyt'
    }
    //console.log(eredmeny)
    console.log(ember.eletben ? 'eletben' : 'elhunyt')
}

eletbenKiir(ember1)