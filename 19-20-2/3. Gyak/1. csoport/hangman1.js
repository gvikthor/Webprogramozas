let jatekter = document.querySelector('#akasztofa-jatek');
let ujJatekGomb = jatekter.querySelector('button');
let infoSav = jatekter.querySelector('div');
let tablazatSor = jatekter.querySelector('tr');

ujJatek();

document.addEventListener('keydown', ()=>{
    //console.log(event);
    if(jatekFut){
        if(szo.includes(event.key)){
            //console.log('Tartalmazza');
            for(let i = 0; i < szo.length; i++){
                if(event.key == szo[i]){
                    tablazatSor.querySelectorAll('td')[i].style.color = 'red';
                    kitalalva[i] = true;
                }
            }
            //console.log(kitalalva)
            let j = 0;
            while(kitalalva[j]){
                j++;
            }
            if(j == kitalalva.length /*szo.length*/){
                infoSav.innerHTML = 'Nyertél.';
                jatekFut = false;
            }
        }else{
            //console.log('Nem tartalmazza');
            probak--;
            if(probak == 0){
                infoSav.innerHTML = 'Vesztettél.';
                jatekFut = false;
            }else{
                infoSav.innerHTML = `Még ${probak} próbálkozásod maradt.`;
            }
        }
    }
});

ujJatekGomb.addEventListener('click', ()=>{  
    ujJatek();
});

function ujJatek(){
    szo = 'almafa';
    kitalalva = [];
    probak = 11;
    jatekFut = true;
    tablazatSor.innerHTML = '';
    infoSav.innerHTML = `Még ${probak} próbálkozásod maradt.`;
    for(betu of szo){
        tablazatSor.innerHTML += `<td>${betu}</td>`;
        kitalalva.push(false);
    }
}