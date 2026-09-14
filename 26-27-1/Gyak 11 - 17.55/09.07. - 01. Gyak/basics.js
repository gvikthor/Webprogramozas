console.log(5+7, "apple")

console.log(5+7) // (12)
console.log(5+"7") // 12 (57) 
console.log("5"+7) // 4 (57)
console.log("5"+"7") // (57)
console.log(5-7) // (-2)
console.log(5-"7") // error (-2) undefined NaN 57
console.log("5"-7) // (-2)
console.log("5"-"7") // (-2)
console.log(5+7-1) // (11)
console.log(5+"7"-1) // (56) 11 571 undefined NaN
console.log("5"+7-1) // (56)  undefined NaN
console.log(5+7-"1") // (11) undefined NaN
console.log("5"+"7"-"1") // undefined NaN (56)

console.log(5 + "apple") // (5apple)
console.log(5 - "apple") // undefined (NaN)

console.log(5 == 5)
console.log(5 != 5)
console.log(5 == "5")
console.log(5 === "5")
console.log(5 !== "5")

console.log(null)
console.log(undefined)
console.log(null == 0)
console.log(undefined == 0)
console.log(null == undefined) // (true)
console.log(null === undefined) // (false)

console.log(false + 7) // (7)
console.log(true + 7) // (8)
console.log(5 - true) // (4)
console.log(true + "5") // (true5)
console.log(true - "5") // (-4) false
console.log(false == 0) // (true)
console.log(false === 0) // (false)

console.log(undefined + false) // (NaN)
console.log("" + undefined + false) // (undefinedfalse)

let person = "George"
let people = ["george", 5+7, [undefined, "7"-1, null, {name: "George"}], -1, false + undefined]

console.log(people.length)
console.log(people[2])

people[2] = 7
//people[972] = "kitten"
people[15] = "kitten"
people["metadata"] = "something"
people[-1] = 5
people.push("doggy")

console.log(people)

console.log("--- for i ---")
for(let i = 0; i < people.length; i++) {
    console.log(people[i])
}
console.log("--- for of ---")
for(let person of people) {
    console.log(person)
}
console.log("--- for in ---")
for(let index in people) {
    console.log(index, people[index])
}