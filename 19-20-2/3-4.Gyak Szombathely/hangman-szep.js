/*nézet*/
let jatekter;
let sor;
let info;
let cellak;

function nezetLetrehoz(szohossz, maxProbak){
	jatekter = document.querySelector('#jatek-akasztofa');
	sor  = jatekter.querySelector('tr');
	info = jatekter.querySelector('#info');
	sor.innerHTML = '';
	for(let i = 0; i < szohossz; i++){
		sor.innerHTML += '<td></td>';
	}
	info.innerHTML = `${maxProbak} próbálkozásod maradt`;
	cellak = document.querySelectorAll('td');
}

function betuFrissit(mit, hova){ //frissíti a táblázatot az adott betűvel az adott helyre
	//cellak[hova].style.color = 'red';
	cellak[hova].innerHTML = mit;
}

function jatekVege(gyozelem){
	if(gyozelem){
		info.innerHTML = 'Gratulálunk, nyertél!';
	}else{
		info.innerHTML = 'Sajnáljuk, vesztettél';
	}
}

function probaFrissit(hany){
	info.innerHTML = `${hany} próbálkozásod maradt`;
}

/*-----*/


/* modell */
let szo;
let kitalalva;
let probalkozasok;
let jatekFut;

function gombTesztel(gomb){
	if(szo.includes(gomb)){
		for(let i = 0; i < szo.length; i++){
			if(szo[i] == gomb){
				betuFrissit(gomb, i);
				kitalalva[i] = true;
			}
		}
		
		let j = 0;
		while(j < kitalalva.length && kitalalva[j]){
			j++;
		}
		if(j == kitalalva.length){
			modellJatekVege(true);
		}
	}else{
		probalkozasok--;
		if(probalkozasok == 0){
			modellJatekVege(false);
		}else{
			probaFrissit(probalkozasok);
		}
	}
}

function modellJatekVege(gyozelem){
	jatekVege(gyozelem);
	jatekFut = false;
}

function veletlenSzo(){
	let szavak = ['alma', 'körte', 'szilva', 'barack']
	let index = Math.floor(Math.random()*4);
	return szavak[index];
}

function ujJatek(){
	szo = veletlenSzo();
	//kitalalva = [false,false,false,false];
	kitalalva = [];
	//for(let i = 0; i < szo.length; i++){
	for(betu of szo){
		kitalalva.push(false);
	}
	probalkozasok = 11;
	jatekFut = true;
	
	nezetLetrehoz(szo.length,probalkozasok);
}
/* ------ */


/* main */

document.addEventListener('keydown', ()=>{
	if(jatekFut){
		gombTesztel(event.key);
	}
});

document
.querySelector('#jatek-akasztofa button')
.addEventListener('click', ujJatek);

ujJatek();

/*
let szavak = ['alma', 'körte', 'szilva', 'barack']
for(let i = 0; i < 100; i++){
	let index = Math.floor(Math.random()*4);
	console.log(szavak[index]);
}
*/

/* ---- */