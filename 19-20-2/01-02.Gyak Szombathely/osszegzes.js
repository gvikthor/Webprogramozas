let gombok = document.querySelectorAll('button');

function szinValt(){
	let sor = document.querySelector('tr');
	sor.classList.add('piros');
	sor.classList.add('kek');
}

//gombok[0].addEventListener('click', szinValt);

for(let i = 0; i < gombok.length; i++){
	gombok[i].addEventListener('click', ()=>{
		console.log(event.target.dataset.sor);
		gombok[i].parentNode.parentNode.classList = [];
		gombok[i].parentNode.parentNode.classList.add(gombok[i].dataset.szin);
	});
}
