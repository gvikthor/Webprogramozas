console.log('apple')

let personName = 'Áron'
console.log(personName)
console.log(document.body)

let personAge = 23
let isAlive = true

console.log(
    'Luke\'s lightsaber',
    "Luke's lightsaber",
    `Leia said: "This is ${personName}'s lightsaber"`
)

if(isAlive){

}else if(age < 5){

}else{
    
}

let peopleNames = ['Áron', 'Péter', 'Gergő']
let person = {
    name: 'Zoltán',
    age: 22,
    animals: ['dog', 'cat']
}
console.log(person)

let people = [
    { name: 'Áron', age: 23, animals: [{species: 'dog', name: 'Morgó'}, {species: 'dog', name: 'Mázli'}] },
    { name: 'Péter', age: 23, animals: [{species: 'cat', name: 'Macska'}] },
    { name: 'Gergő', age: 23, animals: [{species: 'dog', name: 'Alma'}] }
]
console.log(people[0].name)

function writeMessage(message, sender){
    console.log(`${sender} said: ${message}`)
    return 5
}

writeMessage('Szia', 'Áron')


function hasCat(person){
    let hasCat = false
    //for(let i = 0; i < person.animals.length; i++){}
    for(let animal of person.animals){
        if(animal.species == 'cat'){
            hasCat = true
        }
    }
    return hasCat
}
let catperson = null
let i = 0
while(catperson == null){
    if(hasCat(people[i])){
        catperson = people[i]
    }
    i++
}

console.log(catperson.name)

///////////////////////////////

let numbers = [1,5,3,2,-4,6,7,-6,5,2,-34,66,103,5]

/*function isEven(number){
    return number % 2 == 0
}*/

let isEven = function (number){
    return number % 2 == 0
}

let something = (param1, param2) => {
    //ldkfjbhlkdfjb
    return 0
}



console.log(
    numbers.some(isEven),
    numbers.every(isEven),
    numbers.find(isEven),
    numbers.findIndex(isEven),
    numbers.filter(isEven),
    numbers.map(isEven),
    numbers.map(function (number){
        return (15-(number*2))/3
    }),
    numbers.map(number => (15-(number*2))/3)
)

///////////////////////

console.log(
    people.find(
        person => person.animals.some(
            animal => animal.species == 'cat'
        )
    ).name
)

// Is everyone above the age of 22?
console.log(
    people.every(
        person => person.age > 22
    )
)

// Give me someone who has atleast two dogs
console.log(
    people.find(
        person => person.animals.filter(
            animal => animal.species == 'dog'
        ).length >= 2
    )
)