let urlap = document.querySelector('form');
let hibak = document.querySelector('#hibak');
document.addEventListener('submit', ellenoriz);
let voltHiba = false;

function ellenoriz(event){
	event.preventDefault();
	hibak.innerHTML = '';
	voltHiba = false;
	
	let eredmeny = {
		nev: urlap.nev.value.trim(),
		kor: urlap.kor.value.trim(),
		nem: urlap.nem.value.trim(),
		leanykori: urlap.leanykori.value.trim(),
		egyeb: urlap.egyeb.value.trim()
	};
	
	if(eredmeny.nev == ''){
		hibak.innerHTML += 'A név megadása kötelező!<br>';
		voltHiba = true;
	}
	
	if(eredmeny.kor == ''){
		hibak.innerHTML += 'A kor megadása kötelező!<br>';
		voltHiba = true;
	}else if(isNaN(eredmeny.kor)){
		hibak.innerHTML += 'A kor nem lehet szöveg!<br>';
		voltHiba = true;
	}
	
	if(eredmeny.nem == ''){
		hibak.innerHTML += 'A nem megadása kötelező!<br>';
		voltHiba = true;
	}
	
	if(eredmeny.nem == 'no'){
		if(eredmeny.leanykori == ''){
			hibak.innerHTML += 'A leánykori név megadása kötelező!<br>';
		voltHiba = true;
		}
	}
	
	if(!voltHiba){
		hibak.innerHTML += 'Sikeres adatbevitel!';
	}
}

document.querySelector('#div-leany').style.display = 'none';

document.querySelector('#rad-ffi').addEventListener('click', ()=>{
	document.querySelector('#div-leany').style.display = 'none';
});

document.querySelector('#rad-no').addEventListener('click', ()=>{
	document.querySelector('#div-leany').style.display = 'block';	
});









