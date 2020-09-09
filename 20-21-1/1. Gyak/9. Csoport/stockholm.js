console.log(true == 1);
console.log(false == 0);

console.log(true === 1);
console.log(false === 0);

console.log(1 == '1');
console.log(-1 == '-1');

console.log('' == false);
console.log('' == 0);
console.log('' == []);
console.log(0 == []);
console.log(0 == [[]]);
console.log(0 == [0]);

console.log(0 == {});
console.log({} == []);
console.log({} == {});

let t = [
    true, false, 1, 0 -1, 'true', 'false', '1', '0', '-1', '', null, undefined, Infinity, -Infinity, [], {}, [[]], [0], [1], NaN
];
for(t1 of t){
    for(t2 of t){
        console.log(t1, t2, t1 == t2);
    }
}

console.log('I<0',Infinity < 0);
console.log('I>0',Infinity > 0);
console.log('I=0',Infinity == 0);
console.log('-I<0',-Infinity < 0);
console.log('-I>0',-Infinity > 0);
console.log('-I=0',-Infinity == 0);
console.log('alma' < Infinity);