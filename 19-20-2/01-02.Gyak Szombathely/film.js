let tomb = [5,10,15,20];
for(let i = 0; i < tomb.length; i++){
	console.log(tomb[i]);
}
for(szam of tomb){
	console.log(szam);
}

let testDiv = document.querySelector('#testDiv');
let gyerek1 = document.createElement('p');
gyerek1.innerHTML = 'Gyerek 1';
testDiv.appendChild(gyerek1);

let gyerek2 = document.createElement('p');
gyerek2.innerHTML = 'Gyerek 2';
let p = testDiv.querySelector('#testP');
testDiv.insertBefore(gyerek2, p); //szülő.insertBefore(mit, miElé)

/////////////////////////////////

let div = document.querySelector('#div_filmek');

/*
let filmek = ['Star Wars','Gyűrűk Ura','Star Trek','Avengers'];
for(let i = 0; i < filmek.length; i++){
	div.innerHTML += `A ${i+1}. film címe ${filmek[i]} <br>`;
}
*/


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
/*
for(let i = 0; i < filmek.length; i++){
	div.innerHTML += `A ${i+1}. film címe ${filmek[i].cim}, rendezője ${filmek[i].rendezo}<br>`;
	//for(let j = 0; j < filmek[i].karakterek.length; j++){
	//	div.innerHTML += `${filmek[i].karakterek[j]}, `;
	//}
	for(karakter of filmek[i].karakterek){
		div.innerHTML += `${karakter}, `;
	}
	div.innerHTML += '<br>';
	
}
*/
/*
let tartalom = '<table>';
tartalom += '<tr> <th>ID</th> <th>Cím</th> <th>Rendező</th> <th>Karakterek</th> </tr>'
for(let i = 0; i < filmek.length; i++){
	tartalom += '<tr>';
	
	tartalom += `
			<td>${i+1}</td>
			<td>${filmek[i].cim}</td>
			<td>${filmek[i].rendezo}</td>`;
			
	tartalom += '<td>';
	for(karakter of filmek[i].karakterek){
		tartalom += `${karakter}<br>`;
	}
	tartalom += '</td></tr>';
	
}
tartalom += '</table>';

div.innerHTML = tartalom;
*/

/*
let letrehozottDiv = document.createElement('div');
document.body.appendChild(letrehozottDiv);
letrehozottDiv.innerHTML = 'Hello, div vagyok';
let letrehozottP = document.createElement('p');
letrehozottP.innerHTML = 'Én vagyok a P';
letrehozottDiv.appendChild(letrehozottP);
*/

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
	
	//sor.removeChild(cimCella);
			
	let karakterekCella = document.createElement('td');
	for(karakter of filmek[i].karakterek){
		karakterekCella.innerHTML += `${karakter}<br>`;
	}
	sor.appendChild(karakterekCella);
	
	tablazat.appendChild(sor);
	
}

div.appendChild(tablazat);
