//nézet
let jatekter = document.querySelector('#akasztofa-jatek');
let ujJatekGomb = jatekter.querySelector('button');
let infoSav = jatekter.querySelector('div');
let tablazatSor = jatekter.querySelector('tr');

function nezetJatekVege(gyozelem){
    if(gyozelem){
        infoSav.innerHTML = 'Nyertél.';
    }else{
        infoSav.innerHTML = 'Vesztettél.';
    }
}
function nezetProbak(probak){
    infoSav.innerHTML = `Még ${probak} próbálkozásod maradt.`;
}
function nezetCella(hol, betu){
    //tablazatSor.querySelectorAll('td')[hol].style.color = 'red';
    tablazatSor.querySelectorAll('td')[hol].innerHTML = betu;
}
function nezetLetrehoz(szo){
    tablazatSor.innerHTML = '';
    for(betu of szo){
        tablazatSor.innerHTML += `<td>?</td>`;
    }
}

ujJatekGomb.addEventListener('click', ()=>{  
    ujJatek();
});

//modell
let szo;
let kitalalva = [];
let probak;
let jatekFut;

document.addEventListener('keydown', ()=>{
    //console.log(event);
    if(jatekFut){
        if(szo.includes(event.key)){
            //console.log('Tartalmazza');
            for(let i = 0; i < szo.length; i++){
                if(event.key == szo[i]){
                    nezetCella(i,szo[i]);
                    kitalalva[i] = true;
                }
            }
            //console.log(kitalalva)
            let j = 0;
            while(kitalalva[j]){
                j++;
            }
            if(j == kitalalva.length /*szo.length*/){
                nezetJatekVege(true);
                jatekFut = false;
            }
        }else{
            //console.log('Nem tartalmazza');
            probak--;
            if(probak == 0){
                nezetJatekVege(false);
                jatekFut = false;
            }else{
                nezetProbak(probak);
            }
        }
    }
});

function ujJatek(){
    szo = 'almafa';
    kitalalva = [];
    probak = 11;
    jatekFut = true;
    nezetLetrehoz(szo);
    nezetProbak(probak);
    for(betu of szo){
        kitalalva.push(false);
    }
}

//main
ujJatek();