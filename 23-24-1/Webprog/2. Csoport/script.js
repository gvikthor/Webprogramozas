console.log(5+7)

// Egyszerű típusok
let personName = 'Áron'
let personName2 = "Gergő"
console.log(personName)
let personAge = 23
let hasDog = true

console.log('Luke\'s lightsaber')
console.log("Luke's lightsaber")
console.log("C3PO said: \"Jaj tervezőm!\"")
console.log('C3PO said: "Jaj tervezőm!"')
console.log(`C3PO said: "${personName}'s lightsaber"`)

// Összetett típusok
let peopleNames = ['Áron', 'Gergő', 'Péter', 'Patrik']
peopleNames[12] = 'Bálint'
peopleNames[-1] = 'Dalma'
peopleNames['alma'] = 'László'
console.log(peopleNames)
for(let i = 0; i < peopleNames.length; i++){
    console.log(peopleNames[i])
}
for(let personName of peopleNames){
    console.log(personName)
}
for(let personNameIndex in peopleNames){
    console.log(personNameIndex)
}

function isEven(number){
    return number % 2 == 0
}

let isOdd = function (number){
    return number % 2 != 0
}

console.log(isEven(5))
console.log(isEven(undefined))
console.log(isEven([]))
console.log(isEven(''))
console.log(isEven)

let person = {
    name: 'Gergő',
    age: 27,
    isMarried: false,
    pets: ['dog', 'fish']
}

console.log(person)
console.log(person.pets[0])

//////////////////

function greaterThan500(number){
    return number > 500
}
function lessThan500(number){
    return number < 500
}

let numbers = [3,67,3,-31,54,6,24,3,-35,68,68,-4,1,-24,346,67,2,13,235]

// tömb x logikaiFgv => logikai
console.log( numbers.some(isEven) )
console.log( numbers.some(greaterThan500) )
console.log( numbers.every(isEven) )
console.log( numbers.every(lessThan500) )

// tömb x logikaiFgv => tömbelem/tömbindex
console.log( numbers.find(isEven) )
console.log( numbers.find(greaterThan500) )
console.log( numbers.findIndex(isEven) )
console.log( numbers.findIndex(greaterThan500) )

// tömb x logikaiFgv => tömb
console.log( numbers.filter(isEven) )
console.log( numbers.filter(greaterThan500) )

// tömb x átalakítóFgv => tömb
console.log( numbers.map(isEven) )
/*console.log( numbers.map(function (number){
    return (10 - (number * 2)) % 9
}) )*/
console.log( numbers.map(number => (10 - (number * 2)) % 9 ) )

// tömb x görgetőKétParaméteresFüggvény => érték
// reduce

///////////////////


let people = [
    {
        name: 'Áron',
        age: 223,
        isMarried: true,
        pets: ['dragon']
    },
    {
        name: 'Gergő',
        age: 27,
        isMarried: false,
        pets: ['dog', 'dog']
    },
    {
        name: 'Patrik',
        age: 0,
        isMarried: false,
        pets: []
    },
    {
        name: 'Dalma',
        age: 10,
        isMarried: true,
        pets: ['horse','horse','dog','dog','dog','horse','horse']
    }
]

console.log(
    people.filter(person => person.age > 20)
)

// List all the people who have at least two dogs.
console.log(
    people.filter(person => person.pets.filter(pet => pet == 'dog').length >= 2)
)