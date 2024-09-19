/**
 * JS Docsot érdemes használni, de nem kényszeríti ki a típusokat,
 * és teljesen opcionális minden amit leírsz bene.
 * @param {Kiscica} param1 
 * @returns 
 */
function pelda(param1){
    return param1+3
}

const szamok = [1,5,2,-232,35,-13,12,-4,346,23,23]

// tömb[T] --> logikai
    // Eldöntés, egyéb keresések
    // Van a tömbben páros szám?
    let van = false
    for(const szam of szamok){
        van = szam % 2 == 0
        if(van) break
    }
    console.log(van)

    const paros = function (szam) {
        return szam % 2 == 0
    }

    let szam = 5
    paros(szam)

    console.log(
        szamok.some(paros),

        szamok.some(function(szam){
            return szam % 2 == 0
        }),

        szamok.some(szam => szam % 2 == 0), // van olyan, amire teljesül?
        szamok.every(szam => szam % 2 == 0) // mindegyikre teljesül?
    )
// tömb[T] --> T
    // Kiválasztás
    console.log( szamok.find(szam => szam < -1000) )

    const emberek = [
        {nev: 'Peti', eletkor: 27},
        {nev: 'Alma', eletkor: 19},
        {nev: 'Gergő', eletkor: 28},
        {nev: 'Rezső', eletkor: 23},
        {nev: 'Áron', eletkor: 25},
    ]
    
    console.log( emberek.find(ember => ember.nev == 'Laura')?.eletkor ?? 'Nincs Laura' )
// tömb[T] --> Y
    // Kiválasztás (index)
    console.log( szamok.findIndex(szam => szam < -1000) )
    
// tömb[T] --> tömb[T]
    // Kiválogatás
    console.log( szamok.filter(szam => szam > 20) )
    console.log( emberek.filter(ember => ember.eletkor > 25) )

    // Rendezés
    //console.log( szamok.sort((balszam, jobbszam) => balszam - jobbszam) )
    //console.log( emberek.sort((ember1, ember2) => ember1.eletkor - ember2.eletkor) )
    console.log( emberek.toSorted((ember1, ember2) => ember1.eletkor - ember2.eletkor) )

    // meggyfa, nyitva, Nyx, meggyőz
    // meggyőz meggyfa Nyx nyitva  --> nem lehet egyszerűen detektálni magyar dupla és tripla betűket

// tömb[T] --> tömb[Y]
    console.log( szamok.map(szam => szam*2) )
    console.log( szamok.map(szam => szam%2 == 0) )
    console.log(
        emberek
        .filter(ember => ember.eletkor <= 25)
        .toSorted((ember1, ember2) => ember1.eletkor - ember2.eletkor)
        .map(ember => ember.nev)
    )

/* Reactben példa a mapre
    <ul>
        {emberek.map(ember => <li>ember.nev</li>)}
    </ul>
*/

///////////////////////////////////////////////////////////////

const filmek = [
    'Star Wars',
    'Eredet',
    'Jurassic Park',
    'Inception',
    'Gyűrűk Ura',
]

function nevelo0(film){
    return 'a(z)'
}

function nevelo1(film){
    const maganhangzok = ['e', 'i'] // ez egy hosszú tömb az összes magánhangzóval
    const elsoBetu = film[0].toLowerCase() // toUpperCase()
    let van = false
    for(const maganhangzo of maganhangzok){
        if(elsoBetu == maganhangzo){
            van = true
        }
    }
    if(van){
        return 'az'
    }else{
        return 'a'
    }
}

function nevelo2(film){
    const maganhangzok = ['e', 'i'] // ez egy hosszú tömb az összes magánhangzóval
    const elsoBetu = film[0].toLowerCase() // toUpperCase()
    let van = false
    for(const maganhangzo of maganhangzok){
        if(elsoBetu == maganhangzo){
            van = true
        }
    }
    return van ? 'az' : 'a'
}

function nevelo3(film){
    const maganhangzok = ['e', 'i'] // ez egy hosszú tömb az összes magánhangzóval
    const elsoBetu = film[0].toLowerCase() // toUpperCase()
    const van = maganhangzok.some(maganhangzo => maganhangzo == elsoBetu)
    return van ? 'az' : 'a'
}

function nevelo4(film){
    const maganhangzok = ['e', 'i'] // ez egy hosszú tömb az összes magánhangzóval
    const elsoBetu = film[0].toLowerCase() // toUpperCase()
    const van = maganhangzok.includes(elsoBetu)
    return van ? 'az' : 'a'
}

function nevelo5(film){
    const maganhangzok = ['e', 'i'] // ez egy hosszú tömb az összes magánhangzóval
    const van = maganhangzok.includes(film[0].toLowerCase())
    return van ? 'az' : 'a'
}

function nevelo6(film){
    const maganhangzok = ['e', 'i'] // ez egy hosszú tömb az összes magánhangzóval
    return maganhangzok.includes(film[0].toLowerCase()) ? 'az' : 'a'
}

function nevelo7(film){
    return ['e', 'i'].includes(film[0].toLowerCase()) ? 'az' : 'a'
}

function nevelo8(film){
    // e é i í a á ...
    return 'ei'.includes(film[0].toLowerCase()) ? 'az' : 'a'
}

filmek.forEach(film => console.log(
    `Peti megnézte ${'ei'.includes(film[0].toLowerCase()) ? 'az' : 'a'} ${film} filmet.`
))

/*
filmek
.map(film => `Peti megnézte ${nevelo0(film)} ${film} filmet.`)
.forEach(szoveg => console.log(szoveg))
*/

////////////////////////////////////////////////////////////////////

console.log(
    document.querySelector('div').innerText,
    document.querySelector('div').innerHTML
)

const elsoBekezdes = document.querySelector('div')
elsoBekezdes.innerHTML = 'Helló valami'
/* Event queueu egy érdekes dolog, ami alapján a js működik 
elsoBekezdes.innerHTML = 'Szia'
elsoBekezdes.innerHTML = 'Egyéb'
elsoBekezdes.innerHTML = 'Kecske'
*/

const filmnezesUL = document.querySelector('#filmnezesek') // # az id-t jelöli CSS selectorban
filmek.forEach(film => {
    filmnezesUL.innerHTML += `<li>Peti megnézte ${'ei'.includes(film[0].toLowerCase()) ? 'az' : 'a'} ${film} filmet.</li>`
})