function make_it_double(num) {
    return num * 2
}

let make_it_triple = function(num) {  // névtelen függvény
    return num * 3
}

let make_it_quadruple = (num) => {   // arrow function
    return num * 4
}

let make_it_pentuple = num => num * 5  // arrow function

/////////////////////////////////////////////////////

let numbers = [6,21,-4,7,78,-10,1,1,-4,67,-7]

/*
function is_greater_than_zero(num) {
    return num > 0
}
*/

let is_greater_than_zero = num => num > 0
let add_five = num => num + 5


// tömbből logkiai függvénnyel egy darab értéket csinálnak (vagy logikait, vagy elemet, vagy indexet)
console.log(
    numbers.find(is_greater_than_zero) // find: tömb -(fgv: elem -> logikai)-> elem 
)

console.log( // ha nem találja, -1 az eredmény
    numbers.findIndex(is_greater_than_zero) // findIndex: tömb -(fgv: elem -> logikai)-> index 
)

console.log(
    numbers.every(is_greater_than_zero) // every: tömb -(fgv: elem -> logikai)-> logikai 
)

console.log(
    numbers.some(is_greater_than_zero) // some: tömb -(fgv: elem -> logikai)-> logikai 
)

// tömbből nem logikai függvénnyel másik tömböt csinál
console.log(
    numbers.map(add_five) // map: tömb -(fgv: elem -> valami)-> másik tömb 
)

// tömbből logikai függvénnyel másik tömböt csinál
console.log(
    numbers.filter(is_greater_than_zero) // filter: tömb -(fgv: elem -> logikai)-> másik tömb 
)

console.log(
    numbers
        .map(add_five)
        .filter(is_greater_than_zero)
        .some(num => num > 100)
)