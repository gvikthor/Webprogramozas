const numbers = [2,15,5,-7,34,3,-54,2,65,4,67,-8,-78,4,45,3]

// every      [x,x,x] -(bool)-> bool
// some       [x,x,x] -(bool)-> bool
// find       [x,x,x] -(bool)-> x
// findIndex  [x,x,x] -(bool)-> index
// filter     [x,x,x] -(bool)-> [x,x]
// map        [x,x,x] -(x->y)-> [y,y,y]
// reduce     [x,x,x] -> y

function isEven(num){
    return num % 2 == 0 // mod
}

function double(num){
    return num*2
}

function doubleObject(num){
    return {
        original: num,
        double: num*2
    }
}

console.log(
    'Every:', numbers.every(isEven),
    'Some: ', numbers.some(isEven),
    'Find: ', numbers.find(isEven),
    'FindIndex: ', numbers.findIndex(isEven),
    'Filter: ', numbers.filter(isEven),
    'Map:', numbers.map(isEven),
    'Map:', numbers.map(double),
    'Map:', numbers.map(doubleObject),
    'Map: ', numbers.map(function (num){
        return num*16
    }),
    'Map: ', numbers.map(num => num*16), // arrow function
    'Map: ', numbers.map(num => {
        let double = num*2
        let triple = num*3
        return double*triple-num
    })
)


let sum = 0
for(const number of numbers){
    sum = sum + number
}

function summation(sum, number){
    /*sum = */return sum + number  // ezt a sum =-t csinálja meg a reduce automatikusan
}
console.log(
    numbers.reduce(summation, 0), // második paraméter opcionális, az az induló; ha nincs megadva, akkor az első elem lesz az első sum érték
    numbers.reduce((sum, number) => sum + number, 0)
)

// Keresés reduce-al
console.log('Reduce keresés:',
    [1,-2,3,-4,5,-6,7].reduce((elem, number) => (elem == null && number < 0) ? number : elem, null)
)

////////////////////////////////////////////////////

const people = [
    {
        name: 'Míra',
        age: 23,
        pets: [
            {species: 'cat', name: 'Luna', attitude: 'witty'},
            {species: 'penguin', name: 'Ted', height: 185}
        ]
    },
    {
        name: 'Áron',
        age: 22,
        pets: [
            {species: 'dog', name: 'Bogyó', toy: 'bone'},
            {species: 'dog', name: 'Babóca', toy: 'ball'}
        ]
    },
    {
        name: 'Lacika',
        age: 25,
        pets: [
            {species: 'cat', name: 'Móka', attitude: 'cuddly'},
            {species: 'cat', name: 'Kacagás', attitude: 'dead'}
        ]
    },
    {
        name: 'Erzsébet',
        age: 15,
        pets: [
            {species: 'dog', name: '1', toy: 'ball'},
            {species: 'dog', name: '2', toy: 'bone'},
            {species: 'dog', name: '3', toy: 'crown'}
        ]
    }
]

// Válogassuk ki az 50 évesnél fiatalabb emberek azon kutyáit,
// amelyeknek van labdájuk.

/*

[[1,2,3],[4,5,6],[7,8,9]].flat()
Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

[[1,2,[1,2,3],3],[4,5,[5,6,8,9],6],[7,8,9]].flat()
Array(11) [ 1, 2, (3) […], 3, 4, 5, (4) […], 6, 7, 8, … ]

[[1,2,[1,2,3],3],[4,5,[5,6,8,9],6],[7,8,9]].flat(2)
Array(16) [ 1, 2, 1, 2, 3, 3, 4, 5, 5, 6, … ]

*/

function getBallyDogs(dogList, person){
    /*if(person.age < 50){
        let ballyDogs = person.pets.filter(pet => pet.species == 'dog' && pet.toy == 'ball')
        return dogList.concat(ballyDogs)
    }else{
        return dogList
    }*/
    return dogList.concat(
        person.age < 50 ?
            person.pets.filter(pet => pet.species == 'dog' && pet.toy == 'ball')
            :
            []
        )
}

console.log(
    people.reduce(getBallyDogs, []),
    people.reduce(
        (dogList, person) => dogList.concat(person.age < 50 ?
            person.pets.filter(pet => pet.species == 'dog' && pet.toy == 'ball') : []),
        []
    )
)