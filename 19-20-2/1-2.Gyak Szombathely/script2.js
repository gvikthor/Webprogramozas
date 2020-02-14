let d = document.querySelector('div');
console.log(d);
console.log(d.innerHTML);
console.log(d.innerText);

d.innerHTML = 'Szia valaki!';


let d2 = document.querySelectorAll('div');
console.log(d2);
console.log(d2[1]);
d2[1].innerHTML = 'Második div';

//let d3 = document.getElementById('div3');
let d3 = document.querySelector('#div3');
d3.innerHTML = 'ID alapján';

let d4 = document.querySelectorAll('.divek');
d4[1].innerHTML = 'Másik';

///////////////

function kattintas(){
	//console.log('Katt');
	//d3.innerHTML += 'Alma';
	console.log(document.querySelector('input').value);
	d3.innerHTML = `Szia ${document.querySelector('input').value}!`;
}

let gomb = document.querySelector('button');
console.log(gomb)
gomb.addEventListener('click', kattintas);