console.log(true == true);
console.log(true == 1);
console.log(false == 0);
console.log(0 == []);
console.log(0 == [[]]);
console.log(0 == [0]);

console.log(true === true);
console.log(true === 1);
console.log(false === 0);
console.log(0 === []);
console.log(0 === [[]]);
console.log(0 === [0]);

let furcsasagok = [
    true, false, 1, 0, -1, 'true', 'false', '0', '1', '-1', '', [], {}, [[]], [0], [1], null, undefined, NaN, Infinity, -Infinity
];

for(cik1 of furcsasagok){
    for(cik2 of furcsasagok){
        console.log(cik1, cik2, cik1 == cik2);
    }
}

console.log(NaN == NaN);
console.log(NaN != NaN);
console.log(NaN > NaN);
console.log(NaN < NaN);

console.log({} == {});

console.log(Math.min(), Math.max());
console.log(Math.min() < 0);
console.log(Infinity < 0);