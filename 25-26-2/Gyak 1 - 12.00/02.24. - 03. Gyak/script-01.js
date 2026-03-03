
const numbers = [6,3,65,8,5,3,5,67,-1,276,-3245]
 
function isNegative(num) { // 5 => false  0 => false  -3 => true
    return num < 0
}

// Csak a sorthoz fogjuk használni, azt csinálja, hogy megmondja, melyik a nagyobb (vagy egyenlőek), mindezt a -1, 0, 1 számok használatával - vagyis pontosabban bármilyen negatív vagy pozitív számmal működik
// nem egy logikai függvény, de egészen úgy viselkedik, mint egy logikai függvény, csak három értékű
function compareNums(a ,b) {
    return a-b
}
 
function makeItDouble(num) { // 5 => 10  0 => 0  -3 => -6
    return num * 2
}

// egy bonyolult függvény, az a lényeg, hogy egy értéket görget maga előtt, és mindig átírja arra, amit returnként kiadunk belőle
function reduceSum(gorgetettOsszeg, current) {
    return gorgetettOsszeg + current
}
 
console.log(
    // logikai függvény, egy logikai eredménnyel
    numbers.some(isNegative) ,
    numbers.every(isNegative) ,
    // logikai függvény, egy nem logikai eredménnyel
    numbers.find(isNegative) ,
    numbers.findIndex(isNegative) ,
    // logikai függvény, több eredménnyel
    numbers.filter(isNegative) ,
    //numbers.sort(compareNums) ,
    // nem egészen logikai, csak kb.
    // Vigyázz! A sort módosítja az eredeti tömböt is!!
    // A sort ezektől eltérően nem egy, hanem két paraméteres függvényt vár el tőlünk (ld.: compareNums-nak két paramétere van)
    numbers.toSorted(compareNums) , // ugyanaz, mint a sort, de nem módosítja az eredeti tömböt, csak visszaadja az eredménmyét
    // nem logikai függvény, több eredménnyel
    numbers.map(makeItDouble) ,
    numbers.map(isNegative) , // kaphat a map logikai függvényt is, akkor csak egy lista lesz, amiben true-k meg false-ok vannak
    // nem logikai függvény, egyetlen eredménnyel
    numbers.reduce(reduceSum, 2000) // megadhatok egy kezdőértéket, de nem muszáj, ha nem adom meg, az első elemet teszi be kiinduló görgetett összegként
)

/*
amit egy sorting algoritmus csinálna:
meggyfa
meggyőz
nyitva
Nyx
álmos

helyes magyar sorrend:
álmos
meggyőz
meggyfa
Nyx
nyitva
*/



// Írjuk ki csak a negatív számok négyszereseit!
console.log(
    numbers.filter(isNegative).map(makeItDouble).map(makeItDouble)
)


// Van a negatív számok négyszeresei közt olyan ami kisebb mint 10000?
console.log(
    numbers
        .filter(isNegative)
        .map(makeItDouble)
        .map(makeItDouble)
        .some(num => num < -10000)
        // lehet adhoc névtelen függvényt / arrow functiont beleírni ahelyett, hogy külön függvényt írnánk
)

//////////////////////////////////

const people = [
    { name: 'Peter',   familyName: 'Smith', age: 28 },
    { name: 'George',  familyName: 'Rácz', age: 31 },
    { name: 'Laure',   familyName: 'Smith', age: 32 },
    { name: 'Matthew', familyName: 'Németh', age: 25 },
    { name: 'Peter',   familyName: 'Pettigrew', age: 31 }
]

// Listázzuk azoknak az embereknek a nevét, akik 30 évnél idősebbek
console.log(
    people
        .filter(person => person.age > 30)
        .map(person => `${person.name} ${person.familyName} is older than 30 years.`)
)