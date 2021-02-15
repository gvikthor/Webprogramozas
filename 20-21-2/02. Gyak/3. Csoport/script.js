/*
function pozitiv(szam){ return szam > 0 }

[1,0,45,7,4,2,5].some(pozitiv)
true
[-1,0,-45,-7,-4,-2,-5].some(pozitiv)
false
[-1,0,-45,-7,-4,-2,-5].every(pozitiv)
false
[1,0,45,7,4,2,5].every(pozitiv)
false
[1,1,45,7,4,2,5].every(pozitiv)
true

function osszeg1(szam1, szam2){ return szam1 + szam2 }

[3,4,6,2,1,5,7,3,1,5,7].reduce(osszeg1) //görgetéssel összegezzük, szám1 mindig az összeg, szám2 pedig az akt elem
44

function osszeg2(szam1, szam2){ 
    console.log(szam1, szam2)
    return szam1 + szam2
}

[3,4,6,2,1,5,7,3,1,5,7].reduce(osszeg2)
3 4 
7 6 
13 2
15 1
16 5
21 7
28 3
31 1
32 5
37 7
44

[3,4,6,2,1,5,7,3,1,5,7].reduce(osszeg1, '')
"34621573157"
*/

//////////////////////////////////////////////////////////////////////////////////////////////

// Városok, minden város kerületekből áll, minden kerületben madarakt számolunk.
const varosok = [
    [23,64,38,96,10],
    [12],
    [0,2,7,0,1,6,0,0,0,0,4,6,2],
    [257],
    [12,4,7,54,23],
    [156,743,145,642,257,100,123,456,310],
    [0,0,0,0],
    [35]
]

// Van olyan város, ahol több mint 5 kerület van?
// Adjuk meg a várost, ahol több mint 5 kerület van!
// Hanyadik városban van több mint 5 kerület?
// Igaz, hogy az összes városban több mint 5 kerület van?
function tobbMintOtKerulet(varos){
    return varos.length > 5
}

console.log(
    varosok.some(tobbMintOtKerulet),
    varosok.find(tobbMintOtKerulet),
    varosok.findIndex(tobbMintOtKerulet),
    varosok.every(tobbMintOtKerulet)
)

// Volt olyan város, ahol valamelyik kerületben 500-nál több madár van?
function keruletbenTobbMintOtszaz(kerulet){
    return kerulet > 500
}

function voltTobbMintOtszat(varos){
    return varos.some(keruletbenTobbMintOtszaz)
}

console.log(
    varosok.some(voltTobbMintOtszat),
    varosok.findIndex(voltTobbMintOtszat)
)

// Van olyan város, ahol több mint 2000 madár volt?
function keruletOsszeg(osszeg, aktKerulet){
    return osszeg + aktKerulet
}

function osszesenTobbMintKetzer(varos){
    return varos.reduce(keruletOsszeg, 0) > 2000
}

console.log(
    varosok.some(osszesenTobbMintKetzer),
    varosok.findIndex(osszesenTobbMintKetzer)
)

//////////////////////////////////////////////////////////////////////////////////////////////

const mozik = [
    {
        hely: 'Allee',
        ceg: 'CinemaCity',
        filmek: [
            {
                cim: 'Tenet',
                felnott: 1500,
                diak: 2000
            },
            {
                cim: 'Mulan',
                felnott: 700,
                diak: 600
            },
            {
                cim: 'Twilight',
                felnott: 2500,
                diak: 7800
            },
            {
                cim: 'Frozen 2',
                felnott: 9800,
                diak: 2
            }
        ]
    },
    {
        hely: 'Mammut',
        ceg: 'CinemaPink',
        filmek: [
            {
                cim: 'Mulan',
                felnott: 800,
                diak: 1200
            },
            {
                cim: 'Frozen 2',
                felnott: 4300,
                diak: 2100
            }
        ]
    },
    {
        hely: 'Aréna',
        ceg: 'CinemaCity',
        filmek: [
            {
                cim: 'Tenet',
                felnott: 1700,
                diak: 2500
            },
            {
                cim: 'Mulan',
                felnott: 1200,
                diak: 1300
            },
            {
                cim: 'High School Musical',
                felnott: 1500,
                diak: 3700
            },
            {
                cim: 'Twilight',
                felnott: 2800,
                diak: 10000
            },
            {
                cim: 'Frozen 2',
                felnott: 15000,
                diak: 350
            }
        ]
    },
    {
        hely: 'Corvin Pláza',
        ceg: 'Corvin Mozi',
        filmek: [
            {
                cim: 'Frozen 2',
                felnott: 750,
                diak: 150
            }
        ]
    }
]

const valaszok = document.querySelector('#feladat-megoldasok')

// Volt olyan mozi, ahol leadták a Frozen2-t?
function filmAFrozen2(film){
    return film.cim == 'Frozen 2'
}

function leadtakAFrozent(mozi){
    return mozi.filmek.some(filmAFrozen2)
}


console.log(
    mozik.some(leadtakAFrozent),
    mozik.find(leadtakAFrozent).hely
)

valaszok.innerHTML += `<li> ${ mozik.some(leadtakAFrozent) ? 'Leadták a Frozen 2-t: '+mozik.find(leadtakAFrozent).hely : 'Nem adták sehol a Frozen 2-t.' } </li>`

// Összesen hány jegyet adtak el a mozikban?
function filmekOsszeg(osszeg, film){
    return osszeg + film.felnott + film.diak
}

function mozikOsszeg(osszeg, mozi){
    return osszeg + mozi.filmek.reduce(filmekOsszeg, 0)
}

console.log(
    mozik.reduce(mozikOsszeg, 0)
)

valaszok.innerHTML += `<li> Összesen eladott jegyek száma: ${ mozik.reduce(mozikOsszeg, 0) } </li>`

// Összesen hány diákjegyet adtak el azokban a mozikban, ahol leadták a Tenet című filmet?
function diakjegyOsszeg(osszeg, film){
    return osszeg + film.diak
}

function filmATenet(film){
    return film.cim == 'Tenet'
}

function tenetFeltetelesOsszeg(osszeg, mozi){
    /*if( mozi.filmek.some(filmATenet) ){
        return osszeg + mozi.filmek.reduce(diakjegyOsszeg, 0)
    }else{
        return osszeg
    }*/

    return osszeg + ( mozi.filmek.some(filmATenet) ? mozi.filmek.reduce(diakjegyOsszeg, 0) : 0 )
}

console.log(
    mozik.reduce(tenetFeltetelesOsszeg, 0)
)

valaszok.innerHTML += `<li> Összesen eladott diákjegyek száma, azokban a mozikban, ahol leadták a Tenetet: ${ mozik.reduce(tenetFeltetelesOsszeg, 0) } </li>`


/*

TÖMBFÜGGVÉNYEK
Volt olyan CinemaCity mozi, ahol leadtak legalább 2 filmet, és egyik a Frozen 2 volt?

DOM GENERÁLÁS
[
    {
        cim: '1. fejezet',
        szoveg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        cim: '2. fejezet',
        szoveg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        cim: '3. fejezet',
        szoveg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]
Minden egyes fejezetcím legyen egy <h1> és minden szöveg alatta legyen <div> és ezeket egymás alá listázzátok ki.

E-mail: mohmas@inf.elte.hu
Tágy: [Web] Szorgalmi - NEPTUN

*/