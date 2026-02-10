/*
több
soros
komment
*/

// egy soros komment

/*
5+7
12

'alma' + 'fa'
"almafa"

'alma' + 1
"alma1"

'1' + '1'
"11"

'alma' - 1
NaN

'1' - '1'
0

5 / 0
Infinity

100000 > Infinity
false 
*/

console.log('alma')


let valami1 = 'almafa'
// var valami2 = 'almafa'  // vart nem használunk
const valami3 = 'almafa'

const personName = 'Peter'
console.log(personName + ' Smith')
console.log('Hello ' + personName + '!')
console.log(`Hello ${personName}!`) // ` backtick   magyar billentyűzeten AltGr+7

const firstArray = [5, 7, -10, Infinity, 'kiscica', null, ['alma', 'körte']] // a tömbbe bármit belerakhatunk, de szerencsés egy azonos jelleget követni
console.log(firstArray[4]) // a tömbök nullától indexelnek

const person = {
    name: 'Peter Smith',
    age: 28,
    hasCat: true
}
console.log(person.name)
console.log(`Hello ${person.name}!`)
console.log(person)

console.log('aLmAfA'.toUpperCase())
console.log('aLmAfA'.toLowerCase())

/////////////////////////////////////////////////////////////////////////////

/*
function makeItDouble(num) {
    return 2*num
}
    // így is lehet, meg a constos megoldással is, ugyanúgy működik, csak máshogy néz ki
*/

const makeItDouble = function(num) {
    return 2*num
}

const tempDoubleNumber = makeItDouble(-7)
console.log(tempDoubleNumber)
console.log(makeItDouble(5))

console.log(makeItDouble)

//////
// az arrow function más, mint az előző két megoldás, de hasonlóan működik
const add5toNum = num => num + 5
console.log(add5toNum(15))

//////////////////////////////////////////////////////////////////////////////

const movies = [
    {title: 'Dark Knight', director: 'Christopher Nolan', year: 2008},
    {title: 'Star Wars: New Hope', director: 'George Lucas', year: 1977},
    {title: 'Interstellar', director: 'Christopher Nolan', year: 2012},
    {title: 'Eclipse: Twilight Saga', director: '???', year: 1234},
    {title: 'iPhone The Movie', director: 'Steve Jobs', year: 2008}
]

// Névelő függvények
function solution01(movie) {
    return 'a(z)'
}

function solution02(movie) {
    const vowels = ['A', 'Á', 'E', 'É', 'I', 'Í', 'O', 'Ó', 'Ö', 'Ő', 'U', 'Ú', 'Ü', 'Ű', 'a', 'á'] // nem akarjuk felsorolni az összes betűt megint
    const firstLeter = movie.title[0]

    let found = false
    for(const vowel of vowels) {
        if(firstLeter == vowel) {
            found = true
        }
    }

    if(found) {
        return 'az'
    }else{
        return 'a'
    }
}

function solution03(movie) {
    const vowels = ['A', 'Á', 'E', 'É', 'I', 'Í', 'O', 'Ó', 'Ö', 'Ő', 'U', 'Ú', 'Ü', 'Ű']
    const firstLeter = movie.title[0].toUpperCase()

    let found = false
    for(const vowel of vowels) {
        if(firstLeter == vowel) {
            found = true
        }
    }

    if(found) {
        return 'az'
    }else{
        return 'a'
    }
}

function solution04(movie) {
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'
    const firstLeter = movie.title[0].toUpperCase()

    let found = false
    for(const vowel of vowels) {
        if(firstLeter == vowel) {
            found = true
        }
    }

    vowels.includes(firstLeter)

    if(found) {
        return 'az'
    }else{
        return 'a'
    }
}

function solution05(movie) {
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'
    const firstLeter = movie.title[0].toUpperCase()

    let found = vowels.includes(firstLeter)

    if(found) {
        return 'az'
    }else{
        return 'a'
    }
}


function solution06(movie) { // én ezt javaslom mint legolvashatóbb megoldás
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'
    const firstLeter = movie.title[0].toUpperCase()

    let found = vowels.includes(firstLeter)

    return found ? 'az' : 'a'
}

function solution07(movie) {
    const firstLeter = movie.title[0].toUpperCase()

    let found = 'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(firstLeter)

    return found ? 'az' : 'a'
}

function solution08(movie) {
    let found = 'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(movie.title[0].toUpperCase())

    return found ? 'az' : 'a'
}

function solution09(movie) {
    return 'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(movie.title[0].toUpperCase()) ? 'az' : 'a'
}

/*
for(const movie of movies) {
    console.log(`Peti megnézte ${solution09(movie)} ${movie.title} filmet.`)
}
*/

for(const movie of movies) {
    console.log(`Peti megnézte ${'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(movie.title[0].toUpperCase()) ? 'az' : 'a'} ${movie.title} filmet.`)
}

// Javasolt gyakorlás: hasonló, csak angolul: csinálj egy groceris tömböt objektumokkal, és írd ki, hogy Peti bought a gallon of milk; Peti bought an apple