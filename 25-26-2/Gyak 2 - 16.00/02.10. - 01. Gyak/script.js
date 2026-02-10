// egy soros komment

/*
több soros komment

5+7
12

'apple' + 'tree'
"appletree"

'apple' + 7
"apple7"

'5' + '7'
"57"

'5' + 7
"57"

5 + '7'
"57"

5-7
-2

'apple' - 5
NaN

'5' - '7'
-2

5 - ''
5

10 / 0
Infinity 

*/

let name1 = 'Peter'
const name2 = 'Peter'
let name3 = "Peter"
const name4 = "Peter"
let name5 = `Peter` // backtick, windows magyar billentyűzeten AltGr+7
// var name3 = 'Peter' 

console.log(name1)

console.log(document.body)

let person1 = {
    name: 'George',
    color: 'brown',
    age: 30,
    hasDog: true,
    dog: {
        name: 'Dogo',
        age: 7
    }
}

/*
let person2 = person1
console.log(person1)
console.log(person2)
person1.color = 'yellow'
console.log(person1)
console.log(person2)
// shallow copy vs deep copy
*/

const exampleArray = ['blue', 7, false, person1, [5, 10*2], {something: 'something'}]
// egy tömbbe tipikusan egymáshoz hasonlító dolgokat szeretnénk tenni
const fruits = ['apple', 'orange']

function noInputNoOutput() {
    let a = 5
    let b = 7
    let c = a+b
    console.log(c) // igazából itt a console log egy mellékhatás
}

function inputButNoOutput(a, b) {
    console.log(a+b)
}

function inputOutput(a, b) {
    return a+b
}

//inputButNoOutput(5, 7)
//console.log(inputOutput(5, 7))
//console.log(inputButNoOutput(5,7))

/////////////////////////////////////////////////////////

const movies = [
    {title: 'Star Wars New Hope', year: 1977},
    {title: 'Avatar Fire and Ash', year: 2025},
    {title: 'iPhone The Movie', year: 2008}
]

//console.log(movies[0].title)
//console.log('Peti megnézte a ' + movies[0].title + ' című filmet.')
//console.log(`Peti megnézte a ${movies[0].title} című filmet.`)

function solution01() {
    return 'a(z)'
}

function solution02(movie) {
    const firstLetter = movie.title[0]
    const vowels = ['A', 'Á', 'E', 'É', 'I', 'Í', 'O', 'Ó', 'Ö', 'Ő', 'U', 'Ú', 'Ü', 'Ű']

    let found = false
    for(const vowel of vowels) {
        if(vowel == firstLetter) {
            found = true
        }
    }

    if(found) {
        return 'az'
    } else {
        return 'a'
    }
}

function solution03(movie) {
    const firstLetter = movie.title[0]
    const vowels = ['A', 'Á', 'E', 'É', 'I', 'Í', 'O', 'Ó', 'Ö', 'Ő', 'U', 'Ú', 'Ü', 'Ű']

    let found = false
    for(const vowel of vowels) {
        if(vowel == firstLetter.toUpperCase()) {
            found = true
        }
    }

    if(found) {
        return 'az'
    } else {
        return 'a'
    }
}

function solution04(movie) {
    const firstLetter = movie.title[0]
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'

    let found = false
    for(const vowel of vowels) {
        if(vowel == firstLetter.toUpperCase()) {
            found = true
        }
    }

    if(found) {
        return 'az'
    } else {
        return 'a'
    }
}

function solution05(movie) {
    const firstLetter = movie.title[0]
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'

    let found = false
    for(const vowel of vowels) {
        if(vowel == firstLetter.toUpperCase()) {
            return 'az'
        }
    }

    return 'a'
}

function solution06(movie) {
    const firstLetter = movie.title[0]
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'

    if(vowels.includes(firstLetter.toUpperCase())) {
        return 'az'
    }

    return 'a'
}

function solution07(movie) {
    const firstLetter = movie.title[0]
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'

    return vowels.includes(firstLetter.toUpperCase()) ? 'az' : 'a'
}

function solution08(movie) {
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'

    return vowels.includes(movie.title[0].toUpperCase()) ? 'az' : 'a'
}

function solution09(movie) {
    return 'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(movie.title[0].toUpperCase()) ? 'az' : 'a'
}


function solutionMaybeBestLooking(movie) {
    const firstLetter = movie.title[0]
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'
    const isFirstLetterVowel = vowels.includes(firstLetter.toUpperCase())
    return isFirstLetterVowel ? 'az' : 'a'
}

// nem for-in, hanem for-of!
for(const movie of movies) {
    console.log(`Peti megnézte ${solution08(movie)} ${movie.title} című filmet.`)
}

/*
for(const movie of movies) {
    console.log(`Peti megnézte ${'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(movie.title[0].toUpperCase()) ? 'az' : 'a'} ${movie.title} című filmet.`)
}
*/

/*
for(const movieIndex in movies) {
    console.log(`Peti megnézte a ${movies[movieIndex].title} című filmet.`)
}
*/