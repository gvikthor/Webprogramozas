let szavak = ['alma', 'körte', 'szilva', 'barack'];
let lista = document.querySelector('ul');
let listaElemek = [];

for(szo of szavak){
	//lista.innerHTML += `<li>${szo}</li>`;
	
	let ujLi = document.createElement('li');
	ujLi.innerHTML = szo;
	ujLi.dataset.eredeti = szo; //visszaállít gomb második megvalósításához kell
	listaElemek.push(ujLi);
	lista.appendChild(ujLi);
}

//let listaElemek = document.querySelectorAll('li');

function kattintasEsemeny(event){
	//console.log(event);
	let elem = event.target;
	
	if(elem.classList[0] == 'kijelolve'){
		elem.classList.remove('kijelolve');
	}else{
		elem.classList.add('kijelolve');
	}
}

for(let i = 0; i < listaElemek.length; i++){
	/*listaElemek[i].addEventListener('click', ()=>{
		console.log(event);
		listaElemek[i].classList.add('kijelolve');
	});*/
	listaElemek[i].addEventListener('click', kattintasEsemeny);
}

document
.querySelector('#btn-atir')
.addEventListener('click', ()=>{
	let input = document.querySelector('#in-atir');
	//console.log(input.value);
	let kijelolve = document.querySelectorAll('.kijelolve');
	for(elem of kijelolve){
		elem.innerHTML = input.value;
		elem.classList.remove('kijelolve');
	}
});


function szinAngolra(szin){
	if(szin == 'kék') return 'blue';
	if(szin == 'sárga') return 'yellow';
	if(szin == 'zöld') return 'green';
	return 'black';
	
	/*if(){
		
	}else if(){
		
	}*/
}

document
.querySelector('#btn-szinez')
.addEventListener('click', ()=>{
	let input = document.querySelector('#in-szinez');
	let kijelolve = document.querySelectorAll('.kijelolve');
	for(elem of kijelolve){
		elem.style.color = szinAngolra(input.value);
		elem.classList.remove('kijelolve');
	}
});

/*
document
.querySelector('#btn-vissza')
.addEventListener('click', ()=>{
	let kijelolve = document.querySelectorAll('.kijelolve');
	for(let i = 0; i < kijelolve.length; i++){
		kijelolve[i].style.color = 'black';
		kijelolve[i].innerHTML = szavak[i];
		kijelolve[i].classList.remove('kijelolve');
	}
});
*/

document
.querySelector('#btn-vissza')
.addEventListener('click', ()=>{
	let kijelolve = document.querySelectorAll('.kijelolve');
	for(elem of kijelolve){
		elem.style.color = 'black';
		elem.innerHTML = elem.dataset.eredeti;
		elem.classList.remove('kijelolve');
	}
});





