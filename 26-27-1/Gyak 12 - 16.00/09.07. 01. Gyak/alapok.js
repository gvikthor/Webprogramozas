let first_number = 5 + 7
let first_string = "kitten"

console.log(first_number)
console.log(first_string)

console.log(
    5 + 7, // 12
    5 + "7", // 57
    "5" + "7", // 57 
    5 - 7, // -2
    5 - "7", // -2
    "5" - 7, // -2 
    "5" - "7", // -2
    5 + 7 - 1, // 11
    "5" + 7 - 1, // 56
    5 + "7" - 1, // 56
    5 + 7 - "1", // 11
    "5" + "7" - "1", // 56
    "alma" + 5, // alma5
    "alma" - 5, // NaN (not a number)
    5 / "alma" // NaN
)

console.log(
    5 / 0, // Infinity
    -5 / 0, // -Infinity
    Infinity - 5, // Infinity
    7 - Infinity, // -Infinity
    Infinity / 0, // Infinity
    Infinity - Infinity, // NaN
    Infinity + "alma", // Infinityalma
    true + 5, // 6
    false + 5, // 5
    false + "5",  // false5
    false - 5, // -5
    true / 2, // 0.5
    true + "alma", // truealma
    null,
    undefined,
    null == 0,
    undefined == 0,
    null == undefined,
    "5" == 5,
    null === 0,
    undefined === 0,
    null === undefined,
    "5" === 5,
)

if (true) {

} else if (true) {

} else {

}

let something_that_can_be_null = null

if(something_that_can_be_null) {
    // ide akkor lépünk be, ha a ebben a
    // változóban olyas valami van, ami "truthy"

    // "falsy" az, ami hasonlít a nullára,
    // pl. 0, false, null, undefined
}

let people = ["Peter", "George", "Aron"]
let random_array = ["Peter", 5, undefined, [first_number, false], people, 5+7]
random_array[1] = "something"
//random_array[975] = "something" //működik csak lassú tőle
random_array[-7] = "something"
random_array["something"] = 7
random_array[false] = 5
console.log(random_array)
console.log(
    random_array.length,
    random_array.something,
    random_array["-7"],
    random_array["length"],
    random_array[false],
    random_array[true]
)

for(let i = 0; i < random_array.length; i++) {
    console.log(random_array[i])
}

// for(let animal of animals)
for(let elem of random_array) {
    console.log(elem)
}

for(let index in random_array) { // véggimegy a speckó indexeken is, mint a something meg a -7, de a lengthet mindig kihagyja
    console.log(index, random_array[index])
}