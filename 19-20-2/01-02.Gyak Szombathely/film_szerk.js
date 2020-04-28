let div = document.querySelector('#div_filmek');

let filmek = [
	{
		cim: 'Star Wars',
		rendezo: 'George Lucas',
		karakterek: ['Luke Skywalker','Han Solo','Leia Organa']
	},
	{
		cim: 'Gyűrűk Ura',
		rendezo: 'James Cameron',
		karakterek: ['Frodo','Samu','Gandalf','Aragorn']		
	},
	{
		cim: 'Star Trek',
		rendezo: 'J.J. Abrams',
		karakterek: ['James T. Kirk']	
	},
	{
		cim: 'Avengers',
		rendezo: 'J&A Russeau',
		karakterek: ['Vasember','Amerika Kapitány','Hulk','Hawkeye','Black Widow','Thor']		
	}
];

let tablazat = document.createElement('table');
let headerSor = document.createElement('tr');

let cimkek = ['ID', 'Cím', 'Rendező', 'Karakterek'];
for(cimke of cimkek){
	let header = document.createElement('th');
	header.innerHTML = cimke;
	headerSor.appendChild(header);
}
tablazat.appendChild(headerSor);

for(let i = 0; i < filmek.length; i++){
	let sor = document.createElement('tr');
	
	let idCella = document.createElement('td');
	idCella.innerHTML = i+1;
	sor.appendChild(idCella);
	
	let cimCella = document.createElement('td');
	cimCella.innerHTML = filmek[i].cim;
	sor.appendChild(cimCella);
	
	let rendezoCella = document.createElement('td');
	rendezoCella.innerHTML = filmek[i].rendezo
	sor.appendChild(rendezoCella);
	
	let karakterekCella = document.createElement('td');
	for(karakter of filmek[i].karakterek){
		karakterekCella.innerHTML += `${karakter}<br>`;
	}
	sor.appendChild(karakterekCella);
	
	tablazat.appendChild(sor);
	
}

div.appendChild(tablazat);

////////////////////////////////////////////////

let gomb = document.createElement('button');
gomb.innerHTML = 'Ment';
div.appendChild(gomb);

let nyitva = false;
let nyitottCella = -1;
let cellak = tablazat.querySelectorAll('td');
for(let i = 0; i < cellak.length; i++){
	cellak[i].addEventListener('click', ()=>{
		if(!nyitva){
			let tartalom = cellak[i].innerHTML;
			cellak[i].innerHTML = `<input value="${tartalom}">`;
			nyitva = true;
			nyitottCella = i;
		}
	} );
}

gomb.addEventListener('click', ()=>{
	if(nyitva){
		let ertek = cellak[nyitottCella].querySelector('input').value;
		cellak[nyitottCella].innerHTML = ertek;
		nyitva = false;
		nyitottCella = -1;
	}
} );


