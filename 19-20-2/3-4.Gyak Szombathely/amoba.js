/* nezet */
let jatekter;
let tablazat;
let cellak;
let info;

function nezetLetrehoz(){
	jatekter = document.querySelector('#jatek-amoba');
	tablazat = jatekter.querySelector('table');
	cellak = jatekter.querySelectorAll('td');
	info = jatekter.querySelector('#info');
	
	for(cella of cellak){
		cella.innerHTML = '';
	}
	info.innerHTML = '';
}

function rajzol(oszlop, sor, aktJatekos){
	let sorok = tablazat.querySelectorAll('tr');
	let cellak = sorok[sor].querySelectorAll('td');
	
	/*if(aktJatekos == 1){
		cellak[oszlop].innerHTML = 'X';
	}else{
		cellak[oszlop].innerHTML = 'O';
	}*/
	cellak[oszlop].innerHTML = szamToXO(aktJatekos);
}

function gyozelem(aktJatekos){
	info.innerHTML = `Gratrulálunk, nyert a ${szamToXO(aktJatekos)} játékos.`;
}

function szamToXO(szam){
	/*if(szam == 1){
		return 'X';
	}else{
		return 'O';
	}*/
	
	// feltétel ? haIgaz : haHamis
	return szam == 1 ? 'X' : 'O';
}

/* modell */
let jatektabla = [];
let aktJatekos ;
let jatekFut;

function ujJatek(){
	jatektabla = [
		[0,0,0],
		[0,0,0],
		[0,0,0]
	];
	aktJatekos = 1;
	jatekFut = true;
	
	nezetLetrehoz();
}

function kattint(oszlop, sor){
	if(jatektabla[oszlop][sor] == 0){
		jatektabla[oszlop][sor] = aktJatekos;
		rajzol(oszlop, sor, aktJatekos);
		
		if(gyozelemTeszt(oszlop, sor, aktJatekos)){
			jatekFut = false;
			gyozelem(aktJatekos);
		}else{
			if(aktJatekos == 1){
				aktJatekos = 2;
			}
			else{
				aktJatekos = 1;
			}
		}
	}
}

function gyozelemTeszt(oszlop, sor, jatekos){
	if(
		(jatektabla[oszlop][0] == jatekos &&
		 jatektabla[oszlop][1] == jatekos &&
		 jatektabla[oszlop][2] == jatekos)
		||
		(jatektabla[0][sor] == jatekos &&
		 jatektabla[1][sor] == jatekos &&
		 jatektabla[2][sor] == jatekos)
		||
		(jatektabla[0][0] == jatekos &&
		 jatektabla[1][1] == jatekos &&
		 jatektabla[2][2] == jatekos)
		||
		(jatektabla[2][0] == jatekos &&
		 jatektabla[1][1] == jatekos &&
		 jatektabla[0][2] == jatekos)
	){
		return true;
	}else{
		return false;
	}
}

/* main */
ujJatek();

document
.querySelector('#jatek-amoba')
.querySelector('button')
.addEventListener('click', ujJatek);

for(let i = 0; i < cellak.length; i++){
	cellak[i].addEventListener('click', ()=>{
		/*console.log(event.target);
		console.log(event.target.dataset.sor);
		console.log(event.target.dataset.oszlop);*/
		if(jatekFut){
			kattint(event.target.dataset.oszlop,event.target.dataset.sor);
		}
	});
}

