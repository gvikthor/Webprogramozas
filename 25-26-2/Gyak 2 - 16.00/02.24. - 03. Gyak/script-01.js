const numbers = [5,2,-56,8,23,75,34,-67,8,43,-34,6,78]

function isNegative(num) {
    return num < 0
}

function makeItDouble(num) {
    return num * 2
}

// sort: olyan függvényt kér, ami
// - negatív, ha az egyik a nagyobb
// - nulla, ha egyenlőek
// - pozitív, ha a másik a nagyobb
function compareNums(a, b) {
    return a - b
}

console.log(
    // tömb -logikai fgv-> egy logikai érték
    numbers.some(isNegative), // paraméter: egy* paraméteres függvény ami logikai returnt ad (*: egy paraméter amit mi relevánsan használunk, amúgy át tudja venni az akt indexet és az egész tömböt is)
    numbers.every(isNegative),
    // tömb -logikai fgv-> egy érték
    numbers.find(isNegative),
    numbers.findIndex(isNegative),
    // tömb -logikai fgv-> több érték (de lehet kevesebb, mint ami az eredeti tömbben)
    numbers.filter(isNegative),
    // tömb -bármilyen fgv-> több érték (ugyanannyit, mint amennyi az eredeti tömbben)
    numbers.map(isNegative),
    numbers.map(makeItDouble),
    // speciális függvény, ami végiggörget egy értéket a tömbön
    numbers.reduce((snowball, current) => snowball + current, 0),
    numbers.reduce(function (snowball, current) { return snowball + current }, 0),
    // rendező függvények
    // numbers.sort(compareNums), // veszélyes, mert átrendezi az eredeti tömböt is
    numbers.toSorted(compareNums) // biztonságos, mert nem rendezi át az eredetit
)

console.log(numbers)

/*
Így rendezné egy program:
meggyfa
meggyőz
nyitva
Nyx
Ádám

Így helyes:
Ádám
meggyőz
meggyfa
Nyx
nyitva
*/

// Írjuk ki a negatív számok dupláját
console.log(
    numbers
        .filter(isNegative)
        .map(makeItDouble)
)

// Írjuk ki, hogy van-e olyan negatív szám, aminek a négyszerese kisebb mint -200
console.log(
    numbers
        .filter(isNegative)
        .map(makeItDouble)    
        .map(makeItDouble)
        .some(num => num < -200)    
)

/*
function isSmallerThanMinus200(num) {
    return num < -200
}

console.log(
    numbers
        .filter(isNegative)
        .map(makeItDouble)    
        .map(makeItDouble)
        .some(isSmallerThanMinus200)    
)
*/

///////////////////////////////////

// Minden számnak a duplája jön utána?
const numbers2 = [2,4,8,16,32,64]
const result = numbers2.reduce((searchResult, current) => {
    return {
        prev: current,
        everyNumberIsDoubleOfPrev: searchResult.everyNumberIsDoubleOfPrev && (searchResult.prev === null || searchResult.prev*2 == current)
    }
}, {prev: null, everyNumberIsDoubleOfPrev: true})

console.log(result.everyNumberIsDoubleOfPrev)

/*
let everyNumberIsDoubleOfPrev = true
let index = 1
while(everyNumberIsDoubleOfPrev && index < numbers2.length) {
    if(numbers2[index] != makeItDouble(numbers2[index-1])) {
        everyNumberIsDoubleOfPrev = false
    }
    index++
}
console.log(everyNumberIsDoubleOfPrev)
*/