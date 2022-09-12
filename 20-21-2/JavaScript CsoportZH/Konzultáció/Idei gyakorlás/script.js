const jatekok = [
    {
        nev: 'AmongUs',
        tipus: 'digitalis',
        kategoria: 'tobbjatekos',
        jatekosszamok: [
            10,
            11,
            10,
            11
        ]
    },
    {
        nev: 'Beyblade',
        tipus: 'fizikai',
        meret: 5,
        boltok: [
            'Regio Játék',
            'Lidl'
        ],
        kuponok: [
            {
                hely: 'Glampur Napok szórólap',
                mertek: 45
            },
            {
                hely: 'BurgerKing applikáció',
                mertek: 30
            }
        ]
    },
    {
        nev: 'Anthem',
        tipus: 'digitalis',
        kategoria: 'lootershooter',
        jatekosszamok: [
            7,
            8,
            5,
            5
        ]
    },
    {
        nev: 'Yu-Gi-Oh',
        tipus: 'fizikai',
        meret: 15,
        boltok: [
            'Regio Játék',
            'Lidl',
            'zöldséges'
        ],
        kuponok: [
            {
                hely: 'Glampur Napok szórólap',
                mertek: 20
            }
        ]
    },
    {
        nev: 'LEGO UCS Millenium Falcon',
        tipus: 'fizikai',
        meret: 65,
        boltok: [
            'Regio Játék',
            'LEGO Store Budapest',
            'Aliexpressz'
        ],
        kuponok: [
            {
                hely: 'Glampur Napok szórólap',
                mertek: 25
            },
            {
                hely: 'LEGO Katalógus',
                mertek: 15
            }
        ]
    },
    {
        nev: 'Borderlands',
        tipus: 'digitalis',
        kategoria: 'lootershooter',
        jatekosszamok: [
            13,
            17,
            8,
            9
        ]
    },
    {
        nev: 'League of Legends',
        tipus: 'digitalis',
        kategoria: 'tobbjatekos',
        jatekosszamok: [
            18,
            50,
            20,
            15
        ]
    }
]

// Adjuk meg a lootershooter kategóriájú játékokat. Fontos, csak digitális játéknak van kategóriája!
const feladat1 = document.querySelector('#f1')

/// 1. megoldás
function digitalis(jatek){
    return jatek.tipus == 'digitalis'
}
function lootershooter(jatek){
    return jatek.kategoria == 'lootershooter'
}
const feladat1megoldas1 = jatekok.filter(digitalis).filter(lootershooter)
console.log(feladat1megoldas1)

/// 2. megoldás
function digitalisLootershooter(jatek){
    return jatek.tipus == 'digitalis' && jatek.kategoria == 'lootershooter'
}
const feladat1megoldas2 = jatekok.filter(digitalisLootershooter)
console.log(feladat1megoldas2)

/// 3. megoldás
const feladat1megoldas3 = jatekok.filter(jatek => jatek.tipus == 'digitalis').filter(jatek => jatek.kategoria == 'lootershooter')
console.log(feladat1megoldas3)
/*
feladat1megoldas3.forEach(jatek => {
    //feladat1.innerHTML += `<li>${jatek.nev}</li>`
    let ujListaElem = document.createElement('li')
        ujListaElem.innerHTML = jatek.nev
        feladat1.appendChild(ujListaElem)
})
*/

/// 4. megoldás
jatekok
    .filter(jatek => jatek.tipus == 'digitalis')
    .filter(jatek => jatek.kategoria == 'lootershooter')
    .forEach(jatek => {
        let ujListaElem = document.createElement('li')
            ujListaElem.innerHTML = jatek.nev
            feladat1.appendChild(ujListaElem)
    })

// Adjuk meg a 20 centinél nagyobb játékokat!
const feladat2 = document.querySelector('#f2')
jatekok
    .filter(jatek => jatek.tipus == 'fizikai')
    .filter(jatek => jatek.meret > 20)
    .forEach(jatek => feladat2.appendChild(document.createElement('li')).innerHTML = jatek.nev)

    /*
    .forEach(jatek => {
        let ujListaElem = document.createElement('li')
            ujListaElem.innerHTML = jatek.nev
            feladat2.appendChild(ujListaElem)
    })
    */


// Adjuk meg azokat a játékokat, amiket lehet a Lidl-ben venni! Fontos, csak fizikai játéknak van boltok attribútuma!
const feladat3 = document.querySelector('#f3')
jatekok
    .filter(jatek => jatek.tipus == 'fizikai')
    .filter(jatek => jatek.boltok.some(bolt => bolt == 'Lidl'))
    .forEach(jatek => feladat3.appendChild(document.createElement('li')).innerHTML = jatek.nev)

// Adjuk meg azokat a játékokat, amik legalább 3 boltban kaphatók! Fontos, csak fizikai játéknak van boltok attribútuma!
const feladat4 = document.querySelector('#f4')
jatekok
    .filter(jatek => jatek.tipus == 'fizikai')
    .filter(jatek => jatek.boltok.length >= 3)
    .forEach(jatek => feladat4.appendChild(document.createElement('li')).innerHTML = jatek.nev)

// Adjunk meg egy játékot, aminek volt olyan hete, hogy legalább 50-en játszottak vele!
const feladat5 = document.querySelector('#f5')

/// 1. Megoldás -> nem jó, hiszen csak egy ilyet keresek!
/*
jatekok
    .filter(jatek => jatek.tipus == 'digitalis')
    .filter(jatek => jatek.jatekosszamok.some(jatekosszam => jatekosszam >= 50))
    .forEach(jatek => feladat5.appendChild(document.createElement('li')).innerHTML = jatek.nev)
*/

/// 2. Megoldás -> nem jó, mert ha a find nem talál senkit, undefined-ot at
/*
feladat5.innerHTML = jatekok
                        .filter(jatek => jatek.tipus == 'digitalis')
                        .find(jatek => jatek.jatekosszamok.some(jatekosszam => jatekosszam >= 50))
                        .nev
*/

/// 3. Megoldás
const digitalisJatekok = jatekok.filter(jatek => jatek.tipus == 'digitalis')
/*
if(digitalisJatekok.some(jatek => jatek.jatekosszamok.some(jatekosszam => jatekosszam >= 50))){
    feladat5.innerHTML = digitalisJatekok.find(jatek => jatek.jatekosszamok.some(jatekosszam => jatekosszam >= 50)).nev
}else{
    feladat5.innerHTML = 'Nincs ilyen játék.'
}
*/

/*
feladat5.innerHTML = digitalisJatekok.some(jatek => jatek.jatekosszamok.some(jatekosszam => jatekosszam >= 50)) ?
                     digitalisJatekok.find(jatek => jatek.jatekosszamok.some(jatekosszam => jatekosszam >= 50)).nev :
                     'Nincs ilyen játék.'
*/

/// 4. Megoldás
const f5index = digitalisJatekok
                    .findIndex(jatek => jatek.jatekosszamok.some(jatekosszam => jatekosszam >= 50))

feladat5.innerHTML = f5index == -1 ? 'Nincs ilyen játék' : digitalisJatekok[f5index].nev

// Adjuk meg azokat a játékokat, amivel minden héten több mint 10-en játszottak a hónapban!
const feladat6 = document.querySelector('#f6')
jatekok
    .filter(jatek => jatek.tipus == 'digitalis')
    .filter(jatek => jatek.jatekosszamok.every(jatekosszam => jatekosszam >= 10))
    .forEach(jatek => feladat6.appendChild(document.createElement('li')).innerHTML = jatek.nev)

// Adjuk meg azokat a játékokat, amivel összesen több mint 45-en játszottak a hónapban!
const feladat7 = document.querySelector('#f7')
jatekok
    .filter(jatek => jatek.tipus == 'digitalis')
    .filter(jatek => jatek.jatekosszamok.reduce((sum, jatekosszam) => sum + jatekosszam) > 45, 0)
    .forEach(jatek => feladat7.appendChild(document.createElement('li')).innerHTML = jatek.nev)

// Adjuk meg az összes fizikai játékról, hogy a kuponokkal összesen hány százalékot spórolhatunk!
const feladat8 = document.querySelector('#f8')
jatekok
    .filter(jatek => jatek.tipus == 'fizikai')
    .forEach(jatek => {
        console.log(
            jatek.kuponok.reduce((sum, kupon) => sum + kupon.mertek, 0)
        )
    })

jatekok
    .filter(jatek => jatek.tipus == 'fizikai')
    .forEach(jatek => feladat8
                        .appendChild(document.createElement('li')).innerHTML =
                            `${jatek.nev} - ${jatek.kuponok.reduce((sum, kupon) => sum + kupon.mertek, 0)}%`
    )