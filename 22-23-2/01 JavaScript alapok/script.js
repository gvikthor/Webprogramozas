console.log('apple')
console.log(45+7*59/(-12))
console.log(window)

let familyName = 'Smith'
let age = 25
const hairColor = 'black'

//hairColor = 'blonde'

/*

*/

console.log(true && true)
console.log(true || false)
console.log(true && false)
console.log(false || false)

const a = true
const b = false
console.log(!(a && b))
console.log(!a || !b)
console.log(!(a || b))
console.log(!a && !b)
// De Morgan azonosság

if(true){

}else if(false){

}else{

}

for(let i = 0; i < 10; i++){

}

let j = 0
while(j < 10){
    j++
}

let k = 0
for(;k < 10;){
    k++
}

const exampleArray = ['apple', 5+7, false, [true, 'orange']]
console.log(exampleArray.length)
exampleArray[0] = 7
console.log(exampleArray)

const exampleArray2 = exampleArray
exampleArray2[1] = 'changed'
console.log(exampleArray)

//for(let i = 0; i < exampleArray.length; i++)
for(const elem of exampleArray){
    console.log(elem)
}
for(const index in exampleArray){
    console.log(index, exampleArray2[index])
}

console.log('apple' + ' ' + 'tree')
console.log('5' + 'apples')
console.log(5 + '5')
console.log(5 - '5')
console.log(true + 3)
console.log(true == 3)
console.log(true == 1)
console.log(true === 1)
console.log(5 == '5')
console.log(5 === '5')
console.log(true + 'apple')
console.log(true - '5')
console.log(exampleArray + 'apple' - true)
console.log(exampleArray + 'apple')
console.log(exampleArray.join(' '))
console.log('apple' * 5)
console.log(exampleArray * 5)
console.log('apple' / 5)
console.log(exampleArray / 5)
console.log(55 / false)
console.log(55 / -0)

console.log(Infinity - 5)
console.log(Infinity * 5)
console.log(isNaN('apple'))
console.log(isNaN('5'))
console.log(isNaN(true))
console.log(isNaN(Infinity))
console.log(isNaN(NaN))

console.log(typeof(Infinity))

console.log(`appletree ${5+7/3} appletree`) //altgr 7  backtick
console.log("Luke's lightsaber")
console.log('Luke\'s lightsaber')

console.log(typeof(console.log))
console.log(console.log)

/*
string
number
boolean

array
object
function
*/
//////////////////////////////////////////////////////

const numbers = [5,7,-2,3,-10,9,2]

function isNegative(number){
    return number < 0
}

function isSmallerThan100(number){
    return number < 100
}

function isGreaterThan100(number){
    return number > 100
}

function add5(number){
    return number + 5
}

function writeSentence(number){
    return `The number in this place is ${number}.`
}

/*
[] --> elem --> boolean
every
some

[] --> elem --> boolean
find
findIndex

filter
[] -->  elem --> any
map


reduce
*/

console.log(
    numbers.every(isNegative),
    numbers.every(isSmallerThan100),
    numbers.some(isNegative),
    numbers.find(isNegative),
    numbers.find(isGreaterThan100),
    numbers.findIndex(isNegative),
    numbers.findIndex(isGreaterThan100),
    numbers.map(add5),
    numbers.map(writeSentence),
    numbers.filter(isNegative)
)
/*
console.log(numbers[-1])
numbers[-1] = 5
numbers['apple'] = 5
numbers[157] = 3
numbers.push(7)
console.log(numbers)
console.log(numbers.findIndex(isGreaterThan100))
*/

console.log(
    numbers.map(add5).filter(isNegative).every(isSmallerThan100)
)

function add(sum, number){
    return sum + number
}

console.log(
    numbers.reduce(add)
)