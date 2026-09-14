let numbers = [4,-7,3,2,-6,4,23,-67,4]

function is_negative(num) {
    return num < 0
}

/*
let is_negative = function(num) {
    return num < 0
}

let is_negative = (num) => {
    return num < 0
}

let is_negative = num => num < 0
*/

// tömb -> logikai ; logikai fgv segítségével
console.log(
    numbers.every(is_negative),
    numbers.some(is_negative)
)

// tömb -> elem/index ; logikai fgv segítségével
console.log(
    numbers.find(is_negative),
    numbers.findIndex(is_negative) // -1et ad vissza ha nem találja
)

let add_ten = num => num + 10

// tömb -> tömb ; logikai fgv segítségével
console.log(
    numbers.filter(is_negative)
)

// tömb -> tömb ; fgv segítségével
console.log(
    numbers.map(add_ten)
)

console.log(
    numbers
        .filter(is_negative)
        .map(add_ten)
        .find(num => num < -50)
)

// összegzés: reduce, most nem vesszük

let words = ["nyitva", "meggyfa", "Nyx", "meggyőz"]

/*
meggyőz
meggyfa
Nyx
nyitva
*/