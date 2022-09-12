let something = 5
let somethingElse = 7
let string1 = "Luke's lightsaber"
let string2 = 'Luke said: "Hello"'
let string3 = 'Luke said"It\'s my lightsaber"'
let string4 = "Luke said\"It's my lightsaber\""
let string5 = `Luke said:
"It's my lightsaber"`

console.log(something * somethingElse)

console.log(
    string1,
    string2,
    string3,
    string4,
    string5
)

console.log(
    string1+'\n'+string2+'\n'+string3+string4+string5
)

let bool1 = true
let bool2 = false

if(bool2){
    console.log(1)
}else if(bool1){
    console.log(2)
}else{
    console.log(3)
}

if(bool2){ // same as above, resembles the tree more
    console.log(1)
}else{
    if(bool1){
        console.log(2)
    }else{
        console.log(3)
        /*
        anything
        I write
        here
        won't run
        */
    }
}


///////////

            //0. 1. 2.  3. 4.  5.
let array1 = [7, 9, -5, 4, -70,145]
console.log(array1)
console.log(array1[2])
console.log(array1[194])
array1[194] = 0
array1[-10] = 10
array1['apple'] = 6 //applest element
console.log(array1)

let array2 = [3,8,6,3,4,6,7,9,10,2,4,6,5,8,3,2,17373]
//let array2 = [3,8,6,3,4,6,7,9,'apple',10,2,4,6,5,8,3,2,17373]
//let array2 = [3,8,6,3,4,6,7,9,true,10,2,4,6,5,8,3,2,17373]
//let array2 = [3,8,6,3,4,6,7,9,false,10,2,4,6,5,8,3,2,17373]

let sum = 0
/*sum = sum + array[0]
sum = sum + array[1]
sum = sum + array[2]
sum = sum + array[3]*/

//0 .. | array2.length

let i = 0
//while(i <= array2.length - 1) it's the same
while(i < array2.length){
    //sum = sum + array[i]
    sum += array2[i] // increase the value of sum by array2[i]'s value

    // i = i + 1
    // i += 1 // increase the value of i by 1
    i++ // increase by one
}
//console.log('The sum is: ', sum)

console.log(`The sum is: ${sum}`)

console.log(`I'll add two numbers, ${70} and ${65}, and the sum is ${70+65} yay`)

/*
let i = 0
while(i < array2.length){
    sum += array2[i]
    i++
}
*/

sum = 0
//for(start; condition; after each step)
for(let i = 0; i < array2.length; i++){
    sum += array2[i]
}
console.log(`Second sum is ${sum}`)

sum = 0
for(let num of array2){
    sum += num
}
console.log(`Third sum is ${sum}`)

/////////////////////////////////

let person1 = {
    name: 'David',
    age: 18,
    likesDogs: false,
    classes: [
        'Web programming',
        'Running',
        'Maths'
    ],
    car: {
        type: 'Opel',
        subtype: 'Astra',
        doors: 4,
        errors: [
            {
                type: 'serious',
                desc: 'The windshield fell off'
            },
            {
                type: 'minor',
                desc: 'Scratch on the back' 
            },
            {
                type: 'minor',
                desc: 'Weird noise from the radio'
            }
        ]
    }
}

let person2 = {
    name: 'Emily',
    age: 19,
    likesDogs: true,
    classes: [
        'Web programming',
        'Maths',
        'Chemistry',
        'Teaching'
    ],
    car: null //null means: I have seen this, I have thought about it, but decided to leave it empty
}

let person3 = {
    name: 'Anne',
    age: 19,
    likesDogs: true,
    classes: [
        'Singing',
        'Painting',
        'Photography',
        'Music writing'
    ],
    car: {
        type: 'BMW',
        subtype: 'X5',
        doors: 5,
        errors: []
    }
}

let people = [person1, person2, person3]

console.log(people)

for(let person of people){
    if(person.car){
        for(let error of person.car.errors){
            console.log(error)
        }
    }
}