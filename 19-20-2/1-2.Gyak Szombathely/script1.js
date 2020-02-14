console.log('Hello There!');

const b = 'Béla';
let a = 'alma';
a = a + ' és körte';
a += ' és szilva';

console.log('Van a kertemben egy ' + a + ' fa');
console.log(`Van a kertemben egy ${a} fa`);
console.log(`Van a kertemben egy ${5*17-332+1} fa`);

let valt1 = 10;
let valt2 = '10';
let valt3 = 10;

if(valt1 == valt2){
	console.log('Igaz');
}else{
	console.log('Hamis');	
}
if(valt1 != valt2){
	console.log('Igaz');
}else{
	console.log('Hamis');	
}

if(valt1 === valt2){
	console.log('Igaz');
}else{
	console.log('Hamis');	
}
if(valt1 !== valt2){
	console.log('Igaz');
}else{
	console.log('Hamis');	
}
if(valt1 === valt3){
	console.log('Igaz');
}else{
	console.log('Hamis');	
}

//komment
/*
több soros
komment
*/

function negyzet(szam){
	return szam*szam;
}

function koszones(){
	console.log('Szia!');
}

function kiirDolgokat(){
	let valt = 5;
	valt = 26*30;
	console.log('Alma');
	if(true){
		valt = 2;
	}else{
		valt = 3;
	}
	console.log(valt);
	return false;
}


let bvalt = negyzet(5);
console.log(bvalt);
console.log( negyzet(7) );

koszones();
if( kiirDolgokat() ){
	console.log('Igaz');
}else{
	console.log('Hamis');
}

function haromSzam(a,b,c,d = 0){
	return a+b+c+d;
}
console.log(haromSzam(1,2,3,10));


/*
function paros(a){
	return a % 2 == 0;
}
*/

/*
const paros = function (a){
	return a % 2 == 0;
}
*/

const paros = (a)=>{
	return a % 2 == 0;
}

const almafa = (a,b,c)=>{
	a = b*c;
	c = b*b;
	return a+b+c;
}

console.log( paros(4) );
console.log( almafa(1,2,3) );

//////////////////////////
console.log('-----------');

let tomb = ['alma',56,'szilva',true,45,10];
tomb[2] = 25;
for(let i = 0; i < tomb.length; i++){
	console.log(tomb[i]);
}
console.log(tomb);
console.log(tomb.length);

tomb.push('barack');

console.log(tomb);
console.log(tomb.length);

tomb.pop();

console.log(tomb);
console.log(tomb.length);

tomb.shift();

console.log(tomb);
console.log(tomb.length);

tomb[10] = 5;

console.log(tomb);
for(let i = 0; i < tomb.length; i++){
	console.log(tomb[i]);
}
console.log(tomb.length);

let matrixTomb = [
	[1,2,3,4,5],
	[9,8,7,6,5]
];

console.log(matrixTomb[0][3])

//////////////////////////////////////////
console.log('-----------');

let ember = {
	nev: 'Kiss Valaki',
	nem: 'ferfi',
	kor: 25,
	hazas: false,
	email: [
		'valaki@valami.hu',
		'ember@elte.hu'
	],
	gyerekek:[
		{
			nev: 'Kiss Valakike',
			nem: 'ferfi',
			kor: 2,
			email: [
				'valakigyereke@valami.hu'
			]
		},
		{
			nev: 'Kiss Valakike Lány',
			nem: 'no',
			kor: 5,
			email: [
				'valakigyerekelány@valami.hu'
			]
		}
	]
};

console.log(ember);
console.log(ember.nem);
ember.nem = 'no';
console.log(ember.nem);
console.log(ember.hajszin);
ember.hajszin = 'barna';
console.log(ember.hajszin);

console.log(ember.gyerekek[1].email[0]);


