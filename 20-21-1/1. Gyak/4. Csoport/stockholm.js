console.log(true == true);
console.log(true == 1);
console.log(false == false);
console.log(false == 0);

console.log(true === true);
console.log(true === 1);
console.log(false === false);
console.log(false === 0);

let furcsasagok = [
    true, false, 1, 0, -1, 'true', 'false', '1', '0', '-1', '', [], {}, [[]], [0], [1], null, NaN, undefined, Infinity, -Infinity
];

for(cik1 of furcsasagok){
    for(cik2 of furcsasagok){
        console.log(cik1, cik2, cik1 == cik2);
    }
}