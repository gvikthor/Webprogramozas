console.log("apple")
console.log('apple', 5+67, true)
console.log([2,6,7,8,9,4])

console.log(
    'apple',
    "apple",
    "This is Luke's lightsaber",
    'This is Luke\'s lightsaber',
    "Luke said: \"It's my lightsaber\"",
    `Luke said: 
    "It's my lightsaber"`, // backtick, altgr7
    `Luke said: "I'm ${20+40} years old"`
)

console.log(
    5 + "7",
    5 - "7",
    5 + true,
    true + "7",
    5 == "5",
    5 === "5", // típust is vizsgál
    undefined, // nincs semmi, de nem mi mondtuk ezt
    null, // nincs semmi, és ezt mi explicit módon megmondtuk
    null == undefined,
    null == 0,
    undefined == 0,
    5 + null,
    5 + undefined,
    "7" + null,
    "7" + undefined,
    Infinity,
    -Infinity,
    Infinity + 5,
    Infinity == Infinity + 5,
    Infinity + "7",
    5 + parseFloat("7.5"),
    5 + parseInt("7"),
    5 + parseInt("7.9"),
    5 + parseInt("7.5")
)

console.log(
    [7,'apple',true, [4,false], 'something']
)

let array1 = [5,6,3,4,5]

array1[127] = 5
array1[-1] = 9
array1["apple"] = 8
array1[undefined] = 10
array1[null] = 10
array1[Infinity] = 10

console.log(
    array1,
    array1[2],
    array1[127],
    array1.Infinity
)

let object1 = {
    name: 'Robb Stark',
    siblings: ['Arya Stark', 'Brandon Stark'],
    alive: true,
    pet: {
        name: 'Wolfy',
        species: 'Wolf'
    }
}

let object3 = {
    name: 'Arya Stark',
    siblings: ['Robb Stark', 'Brandon Stark'],
    alive: true,
    pet: {
        name: 'Nimeria',
        species: 'Wolf'
    }
}

let object2 = object1
object2.name = "Robert Stark"
console.log(object1.name)

let array2 = [object1, object3]

array2[1].name = 'Noone'
console.log(object3.name)

let wolfy = object3.pet
wolfy.name = 'Nymeria'
console.log(object3.pet.name)

const num = 1
//num = 2 // errort dob

const object4 = {
    name: 'Sean Bean'
}

object4.name = "Bean Sean"

/*object4 = {
    species: 'Wolf'
}*/
//object4 = object3

function modifyName(person, newName){
    person.name = newName
    return `Name modified to ${person.name}`
}

console.log(
    modifyName(object4, "Actor 123")
)

console.log(object4)

const doSomething1 = function (param){
    return param
} // nameless/anonym function

const doSomething2 = (param) => {
    return param
} // arrow function

/////////////////////////////

if(true || false){

}else if(false && true){

}else{

}

for(let i = 0; i < 5; i++){
    console.log(i)
}

/*
while(){

}
*/

let people = ['Nándor', 'István', 'Laura']

for(let person of people){
    console.log(person)
}

const peopleObjects = [
    {name: 'Nándor'},
    {name: 'István'},
    {name: 'Laura'}
]

for(const person of peopleObjects){
    //person = {name: 'Impostor'}
    person.name += ' of the House Lannister'
    console.log(person.name)
}

console.log(peopleObjects)

for(const index in peopleObjects){
    console.log(peopleObjects[index])
}

/////////////////////////////////////////////

// Petike filmeket nézett, írjuk ki:
// Petike megnézte a Minionokat
// Petikemegnézte az Interstellart
const movies = [
    {
        title: 'Minions',
        time: 'hétfő'
    },
    {
        title: 'Interstellar',
        time: 'kedd'
    },
    {
        title: 'Bosszúállók',
        time: 'csütörtök'
    },
    {
        title: 'alienoid',
        time: 'vasárnap'
    }
]

function solution0(word){
    return 'a(z)'
}

function solution1(word){
    if(word[0] == 'A' || word[0] == 'I' /* || ... */){
        return 'az'
    }else{
        return 'a'
    }
}

function solution2(word){
    const first = word[0]
    if(first == 'A' || first == 'I' /* || ... */){
        return 'az'
    }else{
        return 'a'
    }
}

function solution3(word){
    const first = word[0]
    if(first == 'A' || first == 'I' /* || ... */){
        return 'az'
    }
    return 'a'    
}

function solution4(word){
    const first = word[0]
    if(first == 'A' || first == 'a' || first == 'I' /* || ... */){
        return 'az'
    }
    return 'a'    
}

function solution5(word){
    const first = word[0].toUpperCase()
    if(first == 'A' || first == 'I' /* || ... */){
        return 'az'
    }
    return 'a'    
}

function solution6(word){
    const first = word[0].toUpperCase()
    const vowels = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű']
    if(vowels.includes(first)){
        return 'az'
    }
    return 'a'    
}

function solution7(word){
    const first = word[0].toUpperCase()
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'
    if(vowels.includes(first)){
        return 'az'
    }
    return 'a'    
}

function solution8(word){
    const first = word[0].toUpperCase()
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'
    return vowels.includes(first) ? 'az' : 'a'  

    // question ? resultIfTrue : resultIfFalse
}

for(let movie of movies){
    /*console.log(
        `Petike megnézte ${solution8(movie.title)} ${movie.title} filmet ezen a napon: ${movie.time}`
    )*/
    console.log(
        `Petike megnézte ${'AÁEÉIÍOÓÖŐUÚÜŰ'.includes(movie.title[0].toUpperCase()) ? 'az' : 'a'} ${movie.title} filmet ezen a napon: ${movie.time}`
    )
}