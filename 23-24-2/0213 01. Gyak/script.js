console.log(5+7)
console.log(5+'alma')
console.log(5+'5')
console.log(5-'5')
console.log(5/0)
console.log(5-'alma')
console.log(true && false) // false
console.log(true || false) // true

/*
de Morgan
nem(A és B) --> nemA vagy nemB   nem(sütanap és esikazeső) --> nem(sütanap) vagy nem(esikazeső)
nem(A vagy B) --> nemA és nemB
*/

console.log(true && 'alma')
console.log('alma' && true)
console.log(false && 'alma')

//python: if True:
if('alma'){
    console.log('1. Beléptem')
}

if(0){
    console.log('2. Beléptem')
}

if('0'){
    console.log('3. Beléptem')
}

console.log(null)
console.log(undefined)
console.log(null == undefined)
console.log(null && true)

if(null || undefined){
    console.log('4. Beléptem')
}

console.log(null + 5)
console.log(null - 5)
console.log(5/null)
console.log(undefined + 5)
console.log(undefined - 5)

console.log(undefined + 'alma')

console.log(null == undefined)
console.log(null == 0)
console.log(0 == undefined)

let something = 'apple'
something = 5

let names = ['apple', 5, true, [null, 'happy'], false || true]
console.log(names)
console.log(names[0])
names[100] = 'far away'
console.log(names)
console.log(names[95])
names['apple'] = 'what?'
console.log(names['length'])
names[-1] = 'whaaaaaaaaat?'
console.log(names)

for(let i = 0; i < names.length; i++){
    console.log(names[i])
}
for(let elem of names){
    console.log(elem)
}
// while(){}

function firstFunction(){
    console.log('first')
}
firstFunction()

let randomFunction = function(){}
randomFunction()

let randomFunction2 = (a,b) => { return a+b }
let randomFunction3 = (a,b) => a+b
console.log(randomFunction3(5,1))

names.forEach((elem, index, array) => {
    console.log(elem, index, array)
})

function isEven(a){
    return a % 2 == 0
}

let numbers = [1,65,5,3,5,7,4,4,6,10]
//let numbers = [1,65,5,3,5,7]

//numbers.every(a => a%2==0)
console.log(
    numbers.every(isEven),
    numbers.some(isEven),
    numbers.find(isEven),
    numbers.findIndex(isEven)
)