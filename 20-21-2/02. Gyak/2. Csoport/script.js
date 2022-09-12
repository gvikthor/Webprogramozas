const varosok = [
    [7,9,2,1,6,4,7,8,2,0,3,9,9,9],
    [1,0,4,5,5,3],
    [2],
    [0,0,0,0,0],
    [9,7,5],
    [0],
    [1,7,3,6,8,4,2,5,78,5,0,2,1,5,7,4,5,8,4,12],
    [1,7,6,4]
]

/*
function paros(szam){ return szam%2 == 0 }
function osszead(a,b){ return a+b }

[11,15,8,3,3,5,7,5].some(paros)
true
[11,15,8,3,3,5,7,5].find(paros)
8
[11,15,8,3,3,5,7,5].findIndex(paros)
2
[11,13,3,3,5,5,7,5].find(paros)
undefined
[11,13,3,3,5,5,7,5].some(paros)
false
[11,15,7,3,3,5,7,5].findIndex(paros)
-1
[7,8,96,4,7,8,5].reduce(osszead,0)
135
[7,8,96,4,7,8,5].reduce(osszead,'')
"78964785"
*/

// Városok kerületekre bontva.

// Van olyan város, ahol nem láttak madarakat?
function nulla(madar){
    return madar == 0
}

function uresVaros(varos){
    return varos.every(nulla)
}

console.log(
    varosok.some(uresVaros)
)

// Találjunk egy várost, ahol valamelyik kerületben volt 10-nél több madár!
function nagyobbMintTiz(madar){
    return madar > 10
}

function voltTiznelTobbMadar(varos){
    return varos.some(nagyobbMintTiz)
}

console.log(
    varosok.findIndex(voltTiznelTobbMadar)
)

// Mutassunk egy várost, ahol több mint 100 madarat láttak!
function madarOsszead(osszeg, madar){
    return osszeg + madar
}

function legalabbSzazMadar(varos){
    return varos.reduce(madarOsszead, 0) >= 100
}

console.log(
    varosok.findIndex(legalabbSzazMadar)
)

// Összesen hány madarat számoltunk?
//function madarOsszead...

function madarakOsszesen(osszeg, varos){
    return osszeg + varos.reduce(madarOsszead, 0)
}

console.log(
    varosok.reduce(madarakOsszesen, 0)
)

///////////////////////////////////////////////////////////

const mozik = [
    {
        bevasarlokozpont: 'Allee',
        uzemelteto: 'CinemaCity',
        filmek: [
            {
                cim: 'Tenet',
                felnott: 1500,
                diak: 2800
            },
            {
                cim: 'Mulan',
                felnott: 300,
                diak: 150
            },
            {
                cim: 'WandaVision',
                felnott: 2600,
                diak: 3400
            }
        ]
    },
    {
        bevasarlokozpont: 'Aréna',
        uzemelteto: 'CinemaCity',
        filmek: [
            {
                cim: 'Tenet',
                felnott: 2700,
                diak: 3900
            },
            {
                cim: 'Mulan',
                felnott: 600,
                diak: 450
            },
            {
                cim: 'WandaVision',
                felnott: 3000,
                diak: 4000
            },
            {
                cim: 'Mandalorian',
                felnott: 3500,
                diak: 3900
            }
        ]
    },
    {
        bevasarlokozpont: 'Mammut',
        uzemelteto: 'CinemaPink',
        filmek: [
            {
                cim: 'Tenet',
                felnott: 900,
                diak: 850
            },
            {
                cim: 'WandaVision',
                felnott: 1700,
                diak: 1400
            }
        ]
    },
    {
        bevasarlokozpont: 'Corvin',
        uzemelteto: 'Corvin Mozi',
        filmek: [
            {
                cim: 'Tenet',
                felnott: 700,
                diak: 800
            },
            {
                cim: 'Almafa',
                felnott: 400,
                diak: 900
            }
        ]
    }
]

const megoldasDiv = document.querySelector('#megoldas')

// Volt olyan mozi, ahol az egyik film diák nézőszáma elérte a 4000-et?
function legalabbNegyezer(film){
    return film.diak >= 4000
}

function diakElerteANegyezret(mozi){
    return mozi.filmek.some(legalabbNegyezer)
}

console.log(
    mozik.some(diakElerteANegyezret)
)

if(mozik.some(diakElerteANegyezret)){
    megoldasDiv.innerHTML = '<li>Volt ilyen mozi</li>'
}else{
    megoldasDiv.innerHTML = '<li>Nem volt ilyen mozi</li>'
}  

// Volt olyan mozi, ahol az elmúlt hónapban több mint 10000 jegyet adtak el?
function filmOsszead(osszeg, film){
    return osszeg + film.felnott + film.diak
}

function tobbMintTizezer(mozi){
    return mozi.filmek.reduce(filmOsszead, 0) > 10000
}

console.log(
    mozik.some(tobbMintTizezer), //<-- ez konkrétan a feladat
    mozik.find(tobbMintTizezer), //<-- melyik mozi?
    mozik.findIndex(tobbMintTizezer), //<-- melyik indexű mozi?
    mozik.find(tobbMintTizezer).bevasarlokozpont //<-- hol volt ez a mozi, NEM FIGYELJÜK, HA UNDEFINED
)

if(mozik.some(tobbMintTizezer)){
    megoldasDiv.innerHTML += '<li>Volt ilyen mozi</li>'
}else{
    megoldasDiv.innerHTML += '<li>Nem volt ilyen mozi</li>'
}

// Adjuk meg, hogy melyik bevásárlóközpontban adtak el több mint 30000 jegyet
//function filmOsszead...

function tobbMintHarmincezer(mozi){
    return mozi.filmek.reduce(filmOsszead, 0) > 30000
}

console.log(
    mozik.some(tobbMintHarmincezer) ? mozik.find(tobbMintHarmincezer).bevasarlokozpont : 'Nem volt ilyen mozi'
)

megoldasDiv.innerHTML += `<li>${mozik.some(tobbMintHarmincezer) ? mozik.find(tobbMintHarmincezer).bevasarlokozpont : 'Nem volt ilyen mozi'}</li>`

// Összesen ezekben a mozikban hány jegyet adtak el?
//function filmOsszead...

function mozikOsszead(osszeg, mozi){
    return osszeg + mozi.filmek.reduce(filmOsszead, 0)
}

console.log(
    mozik.reduce(mozikOsszead, 0)
)

megoldasDiv.innerHTML += `<li>Össz nézőszám a hónapban: ${mozik.reduce(mozikOsszead, 0)}</li>`


/*

Tömbfüggvényes
Adjuk meg azt a CinemaCity-t, ahol kevesebb, mint 5000 felnőtt néző volt összesen a hónapban!

DOM/Kimenet/Lista
[
    {
        cim: 'Első fejezet'
        tartalom: 'Almafa almafa lorem ipsum'
    },
    {
        cim: 'Második fejezet'
        tartalom: 'Almafa almafa lorem ipsum'
    },
    {
        cim: 'Harmadik fejezet'
        tartalom: 'Almafa almafa lorem ipsum'
    },
    {
        cim: 'Negyedik fejezet'
        tartalom: 'Almafa almafa lorem ipsum'
    }
]
Minden cím egy <h1> elem és minden tartalom alatta egy div

*/