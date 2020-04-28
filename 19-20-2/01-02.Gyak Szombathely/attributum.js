let listaElemek = document.querySelectorAll('li');

for(elem of listaElemek){
	console.log(elem.innerHTML);
	console.log(elem.dataset.szin);
}

listaElemek[2].dataset.hullAFarol = 'igen';

///////////////

let kiindulas = document.querySelector('#innen');
kiindulas.parentNode.parentNode.parentNode.querySelector('div').querySelector('ul').querySelectorAll('li')[1].innerHTML = 'Yay';