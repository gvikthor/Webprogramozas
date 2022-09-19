let numbers = [1,7,-5,7,-10,26,100,10,45,-75,14,-54,74,-60]

// Find the numbers that are even, and are greater than 10

function isEven(num){
    return num % 2 == 0 // mod
}

function greaterThanTen(num){
    return num > 10
}

let evenLargeNubers

evenLargeNubers = []
for(const number of numbers){
    if(isEven(number) && greaterThanTen(number)){
        evenLargeNubers.push(number)
    }
}
console.log('First: ', evenLargeNubers)
//
evenLargeNubers = numbers.filter(isEven).filter(greaterThanTen)
console.log('Second: ', evenLargeNubers)
//
evenLargeNubers = numbers.filter(isEven).filter(function (num){
    return num > 10
})
console.log('Third: ', evenLargeNubers)
//
evenLargeNubers = numbers.filter(isEven).filter(num => num > 10)
console.log('Fourth: ', evenLargeNubers)
//
evenLargeNubers = numbers.filter(num => num % 2 == 0).filter(num => num > 10)
console.log('Fourth: ', evenLargeNubers)


let twiceAsBig

twiceAsBig = []
for(const number of numbers){
    twiceAsBig.push(number*2)
}
console.log('Fifth: ', twiceAsBig)
//
twiceAsBig = numbers.map(num => num*2)
console.log('Sixth: ', twiceAsBig)

let isAnyNumberLargerThan90 = numbers.some(num => num > 90)
console.log('7.:', isAnyNumberLargerThan90)

let allAboveZero = numbers.every(num => num > 0)
console.log('8.:', allAboveZero)

let above10 = numbers.find(num => num > 10)
let above10index = numbers.findIndex(num => num > 10)
console.log('9.:', above10, above10index)


let sum = 0
for(const number of numbers){
    sum += number
}
console.log('10.:', sum)
//
function add(sum, num){
    //console.log(sum, num)
    return sum + num
}
sum = numbers.reduce(add, 0)
console.log('11.:', sum)
//
sum = numbers.reduce((sum, num) => sum + num)


let numGreaterThan10 = numbers.reduce((result, num) => {
    if(num > 10){
        return num
    }else{
        return result
    }
})
console.log('12.:', numGreaterThan10)
//
numGreaterThan10 = numbers.reduce((result, num) => num > 1000 ? num : result)
console.log('13.:', numGreaterThan10)
//
numGreaterThan10 = numbers.reduce((result, num) => num > 10 ? num : result, null)
console.log('14.:', numGreaterThan10)
//
numGreaterThan10 = numbers.reduce((result, num) => (result == null && num > 10) ? num : result, null)
console.log('15.:', numGreaterThan10)

// some         [x,x,x] -bool-> bool
// every        [x,x,x] -bool-> bool
// find         [x,x,x] -bool-> x
// findIndex    [x,x,x] -bool-> index
// filter       [x,x,x] -bool-> [x,x,x]
// map          [x,x,x] -any--> [y,y,y]
// reduce       [x,x,x], v -any(p1,p2)-> v


let numbers2 = [1,-6,3,2,6,-4,2,5,8,5,-3,-4,8,5,2,-9,9]

console.log(
    numbers2
        .filter(num => num > 0)  // gives us an array of positive numbers
        .map(num => num*2)       // gives us an array of the positive numbers that are doubled
        .filter(num => num > 15) // gives us an array of the positive numbers that are doubled to greater than 15
        .some(num => num == 18)  // gives us a boolean, whether the array of the positive numbers that are doubled to greater than 15 contains the number 18
)

//////////////////////////////////////////////////////////////
// Find all element that is greater than 100 in each of the arrays
let arrayOfNumArrays = [
    [2,6,3,6,150,8,34,2,6],
    [-3,7,9,-5,10],
    [3,32,7,8,5,4,574,7,245,-46]
]

console.log('Reduce solution: ',
    arrayOfNumArrays.reduce((result, array) => {
        result.push(array.filter(num => num > 100))
        return result
    }, [])
)

// Find all elements, in all lists that are greater than 100,
// but they don't have to be separated into arrays
console.log('Reduce solution: ',
    arrayOfNumArrays.reduce((result, array) => result.concat(array.filter(num => num > 100)), [])
)


// Find an element that is greater than 100 in each of the arrays
console.log('Single find with map: ',
    arrayOfNumArrays.map(array => array.find(num => num > 100))
)

////////////////////////////////////////////

let people = [
    {
        name: 'Steve',
        pets: [
            {species: 'cat', name: 'Catty', attitude: 'witty'},
            {species: 'dog', name: 'Doggy', toy: 'ball'}
        ]
    },
    {
        name: 'Michael',
        pets: [
            {species: 'cat', name: 'Meow', attitude: 'cuddly'}
        ]
    },
    {
        name: 'Janie',
        pets: [
            {species: 'dog', name: 'Doggo', toy: 'bone'},
            {species: 'dog', name: 'Dogger', toy: 'ball'},
            {species: 'dog', name: 'Doge', toy: 'squeaky toy'}
        ]
    },
    {
        name: 'Lily',
        pets: []
    }
]

console.log(
    people.find(person => person.pets.some(pet => pet.name == 'Dogger' && pet.species == 'dog'))
)

// List all the dogs that have a ball as a toy