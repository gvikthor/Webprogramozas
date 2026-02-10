// egy soros komment

/*
több soros komment

5+7
12

'alma' + 'fa'
"almafa"

'alma' + 7
"alma7"

'5' + '7'
"57"

'alma' - 7
NaN

'5' - '7'
-2

5 / 0
Infinity

-5 / 0
-Infinity 
*/

console.log('alma')
console.log(5+7)

let person1 = 'Peter'
let person2 = "George"
const person3 = 'Valentine'
// var person4 = '' // régi, elavult, már nem használjuk

console.log(person1)

let firstArray = ['apple', 45, true, [person1, null], Infinity]
let fruits = ['apple', 'peach', 'orange']

// for-of nem ugyanaz mint for-in
for(const fruit of fruits) {
    console.log(fruit)
}
for(const fruitIndex in fruits) {
    console.log(fruitIndex)
    console.log(fruits[fruitIndex])
}
// for(let i = 0; i < fruits.length; i++) {}

// while(valami < max){.... valamit növeljük}

const person = {
    name: 'Aaron',
    age: 26,
    hasDog: false
}
console.log(person)

let person5 = person
// shallow copy vs deep copy

person.name = 'Áron' // a propertyt meg tudtam változtatni annak ellenére hogy const, csak azt nem tudom, hog hova mutat a változó

console.log(person.name)
console.log(person5.name)

function addNumbers(a, b) {
    console.log(a, b)
    return a + b
}
console.log(addNumbers(5,7))
console.log(addNumbers)
console.log(addNumbers())

console.log(`Szia ${person.name}!`) // backtick AltGr+7 windows magyar billenytűzet

//////////////////////////////////////////////////////////////////////////////////

const movies = [
    {title: 'Star Wars', year: 1977},
    {title: 'Avatar 3', year: 2025},
    {title: 'iPhone the movie', year: 1234}
]

//console.log(`Áron megnézte a ${movies[0].title} című filmet`)
function solution01() {
    return 'a(z)'
}

function solution02(movie) {
    const firstLetterOfTitle = movie.title[0]
    const vowels = ['A', 'Á', 'E', 'É', 'I', 'Í', 'O', 'Ó', 'Ö', 'Ő', 'U', 'Ú', 'Ü', 'Ű']
    // a kis és nagybetűket még kezelnünk kell majd

    let found = false
    for(const vowel of vowels) {
        if(firstLetterOfTitle == vowel) { // ez itt nem kezeli a kis-nagy betűket
            found = true
        }
    }

    if(found) {
        return 'az'
    }else {
        return 'a'
    }
}

function solution03(movie) {
    const firstLetterOfTitle = movie.title[0]
    const vowels = ['A', 'Á', 'E', 'É', 'I', 'Í', 'O', 'Ó', 'Ö', 'Ő', 'U', 'Ú', 'Ü', 'Ű']

    let found = false
    for(const vowel of vowels) {
        if(firstLetterOfTitle.toUpperCase() == vowel) {
            found = true
        }
    }

    if(found) {
        return 'az'
    }else {
        return 'a'
    }
}

function solution04(movie) {
    const firstLetterOfTitle = movie.title[0]
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'

    let found = false
    for(const vowel of vowels) {
        if(firstLetterOfTitle.toUpperCase() == vowel) {
            found = true
        }
    }

    if(found) {
        return 'az'
    }else {
        return 'a'
    }
}

function solution05(movie) {
    const firstLetterOfTitle = movie.title[0]
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'

    let found = vowels.includes(firstLetterOfTitle.toUpperCase())

    if(found) {
        return 'az'
    }else {
        return 'a'
    }
}

function solution06(movie) { // szerintem ez a sweet spot olvashatóság szempontjából
    const firstLetterOfTitle = movie.title[0]
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'

    let found = vowels.includes(firstLetterOfTitle.toUpperCase())

    return found ? 'az' : 'a'
}

function solution07(movie) {
    const firstLetterOfTitle = movie.title[0]
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'

    return vowels.includes(firstLetterOfTitle.toUpperCase()) ? 'az' : 'a'
}

function solution08(movie) {
    const firstLetterOfTitle = movie.title[0]

    return 'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(firstLetterOfTitle.toUpperCase()) ? 'az' : 'a'
}

function solution09(movie) {
    return 'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(movie.title[0].toUpperCase()) ? 'az' : 'a'
}

for(const movie of movies) {
    console.log(`Áron megnézte ${solution06(movie)} ${movie.title} című filmet`)
}

/*
for(const movie of movies) {
    console.log(`Áron megnézte ${'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(movie.title[0].toUpperCase()) ? 'az' : 'a'} ${movie.title} című filmet`)
}
*/