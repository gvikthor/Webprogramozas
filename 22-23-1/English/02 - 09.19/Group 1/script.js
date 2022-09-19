const array1 = [4,9,6,7,2,-1,6,9,-1,5,6,10,12,4,17,0,-75,45]

function isEven(num){
    return num % 2 == 0 // mod
}

function greaterThanFive(num){
    return num > 5
}

let evenAmount = 0
for(let i = 0; i < array1.length; i++){
    if(isEven(array1[i])){
        evenAmount++
    }
}

evenAmount = 0
for(let number of array1){
    if(isEven(number)){
        evenAmount++
    }
}

console.log(array1.filter(isEven).length)
console.log(
    array1
        .filter(isEven)
        .filter(greaterThanFive)
)

function isNine(num){
    return num == 9
}

console.log(
    array1.find(isNine)
)

console.log(
    array1.findIndex(isNine)
)

function isRandom(num){
    return num == 9999999
}

console.log(
    array1.find(isRandom),
    array1.findIndex(isRandom),
    array1.some(isNine),
    array1.some(isEven),
    array1.some(isRandom)
)

console.log(
    array1.some(function (num){
        return num == 5
    })
)


// x^2 : IR => IR

console.log(
    array1.some(num => num == 5),
    array1.some(num => num % 2 == 0)
)

/*
(num1, num2) => {
    let sum = num1 + num2
    return sum % 2 == 0
}
*/


// Does array 1 have an even element
// that is greater than 10?

console.log(
    array1
        .filter(num => num % 2 == 0)
        .some(num => num > 10)
)

console.log(
    array1
        .every(num => num > -150)
)

//[1,2,3,4,5,6].forEach(num => console.log(num))

// forEach   [x,x,x] -> 
// some      [x,x,x] -> true/false
// every     [x,x,x] -> true/false
// find      [x,x,x] -> x
// findIndex [x,x,x] -> x
// filter    [x,x,x] (boolean function)-> [x,x,x]
// map       [x,x,x] (any function)-> [x,x,x]
// reduce    [x,x,x] (two parameter function, w return value)-> x

console.log(
    array1
        .map(num => num*3)
        .filter(num => num % 2 == 0)
        .some(num => num > 20)
)

//array1 = array1.map(...)

/*array1.reduce((a, b) => {
    console.log(a, b)
    return a+b
}, 100)*/

array1.reduce((a, b) => a + b)

console.log(
    "Here: ",
    [true, true, true, false, true]
        .reduce((a,b) => a && b, true)
)

/////////////////////////////

const array2 = [
    [1,5,3,5,7,34],
    [-1,-6,-9,-4,-24],
    [4,6,9,-13,12346,-345,14]
]

// Is there any array inside array2,
// that has atleast one element,
// that is even and less than -20

console.log(
    array2.some(ar => ar
                .filter(isEven)
                .some(num => num < -20))
)

console.log(
    array2.some(ar => ar
                .some(num => isEven(num) ? (num < -20) : false))
                //.some(num => num < -20)) // when it's even, it will look like this
                //.some(num => false) // when it's odd, it will look like this
)

console.log(
    array2.some(ar => ar
                .some(num => isEven(num) && num < -20))
)

/*
if(question){
    return 1
}else{
    return 2
}

question ? 1 : 2
*/

// Turn each of the even numbers twice as big,
// and each of the off numbers into their negative

console.log(
    array2.map(ar => ar.map(num => isEven(num) ? num*2 : num*-1))
)

// Calculate the sum of all the elements inside all the arrays
console.log(
    array2.reduce(
        (outerSum, ar) => {
            return ar.reduce((innerSum, num) => num + innerSum, outerSum)
        }, 0
    )
)

/////////////////////////////////////////

const person1 = {
    name: 'Steve',
    age: 20,
    pets: [
        {name: 'Doggo', species: 'dog', toy: 'rubber bone'},
        {name: 'Catty', species: 'cat', attitude: 'witty'}
    ]
}
const person2 = {
    name: 'Myra',
    age: 24,
    pets: [
        {name: 'Marcell', species: 'cat', attitude: 'witty'},
        {name: 'Luna', species: 'cat', attitude: 'huggy'}
    ]
}
const person3 = {
    name: 'Flora',
    age: 18,
    pets: []
}
const person4 = {
    name: 'Thomas',
    age: 25,
    pets: [
        {name: 'Amy', species: 'dog', toy: 'playstation'}
    ]
}

console.log(
    person1.pets.some(pet => pet.species == 'dog' && pet.name == 'Doggy')
)

let people = [person1, person2, person3, person4]

console.log(
    person1.pets.filter(pet => pet.species == 'cat' && pet.attitude == 'witty')
)
//person1.pets.filter(pet => pet.species == 'cat' ? (pet.attitude == 'witty' ? true : false) : false)

console.log(
    people
        .map(person => person.pets.find(pet => pet.species == 'cat' && pet.attitude == 'witty'))
        .filter(pet => pet != undefined)
        .map(pet => pet.name)
)

// Do the same, but in another way.
// Group 1 - Lab 2 - Witty cats