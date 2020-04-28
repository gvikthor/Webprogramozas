let szo = "alma";
let kitalalva = [false, false, false, false];
let probalkozasok = 11;
let jatekFut = true;

let jatekter = document.querySelector('#jatek-akasztofa');
let sor = jatekter.querySelector('tr');
let info = jatekter.querySelector('#info');

for(betu of szo){
	sor.innerHTML += `<td>${betu}</td>`;
}
let cellak = document.querySelectorAll('td');
info.innerHTML = `${probalkozasok} próbálkozásod maradt`;

document.addEventListener('keydown', ()=>{
		//console.log(event.key);
	if(jatekFut){
		if(szo.includes(event.key)){
			for(let i = 0; i < szo.length; i++){
				if(szo[i] == event.key){
					cellak[i].style.color = 'red';
					kitalalva[i] = true;
				}
			}
			
			let j = 0;
			while(j < kitalalva.length && kitalalva[j]){
				j++;
			}
			if(j == kitalalva.length){
				info.innerHTML = 'Gratulálunk, nyertél!';
				jatekFut = false;
			}
			
			//console.log(kitalalva);
		}else{
			probalkozasok--;
			if(probalkozasok == 0){
				info.innerHTML = 'Sajnáljuk, vesztettél';
				jatekFut = false;
			}else{
				info.innerHTML = `${probalkozasok} próbálkozásod maradt`;
			}
		}
	}
});