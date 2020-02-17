let szavak = ['körte', 'abajgat', 'abakusz', 'abál', 'abált', 'abaposztó', 'abárol', 'abba', 'abbahagy', 'abbahagyat', 'abbahagyogat', 'abbamarad', 'abban', 'abbé', 'abbeli', 'abbizony', 'abbreviatúra', 'abcúg', 'abcúgol', 'ábécé', 'ábécérend', 'ábécés', 'ábécéskönyv', 'aberráció', 'aberrált', 'aberráns', 'abesszin', 'abesszíniai', 'abház', 'ablak', 'ablakbélés', 'ablakdeszka', 'ablakemelő', 'ablakfa', 'ablakfülke', 'ablakhőmérő', 'ablakkeret', 'ablakkönyöklő', 'ablakköz', 'ablakmélyedés', 'ablakmosó', 'folyadék', 'ablakmosó', 'ablaknyílás', 'ablakocska', 'ablakos', 'ablakoz', 'ablakpárkány', 'ablakpárna', 'ablakrács', 'ablakráma', 'ablakredőny', 'ablakrózsa', 'ablaksor', 'ablakszárny', 'ablakszem', 'ablaktábla', 'ablaktalan', 'ablaktisztító', 'ablaktok', 'ablaktörlő', 'ablakú', 'ablaküveg', 'ablakvasalás', 'abnormális', 'abnormis', 'abnormitás', 'abortál', 'abortusz', 'ábra', 'ábrahámhegyi', 'abrak', 'abrakadabra', 'abrakol', 'abrakos', 'abrakostarisznya', 'abraktakarmány', 'ábránd', 'ábrándít', 'ábrándkép', 'ábrándos', 'ábrándozás', 'ábrándozik', 'ábrándul', 'ábrándvilág', 'ábrázat', 'ábrázol', 'ábrázolás', 'ábrázolat', 'ábrázoló', 'abroncs', 'abroncsol', 'abroncsos', 'abroncsoz', 'abroncsszoknya', 'abroncsvas', 'abrosz', 'abroszos', 'abszcissza', 'abszint', 'abszolút', 'érték', 'abszolút', 'abszolúte', 'abszolutisztikus', 'abszolutizmus', 'abszolutórium', 'abszolútum', 'abszolvál', 'abszorbeál', 'abszorbens', 'abszorpció', 'absztinens', 'absztrahál', 'absztrakció', 'absztrakt', 'abszurd', 'abszurdum'];

let lista = document.querySelector('#lista');
for(szo of szavak){
    lista.innerHTML += `<p>${szo}</p>`;
}

let inp = document.querySelector('input');
let timer;
inp.addEventListener('input', ()=>{
    //console.log(inp.value);
    clearTimeout(timer);
    timer = setTimeout(()=>{
        lista.innerHTML = '';
        for(szo of szavak){
            if(szo.includes(inp.value)){
                // lista.innerHTML += `<p>${szo}</p>`;
                let aktP = document.createElement('p');
                if(szo.startsWith(inp.value)){
                    //aktP.classList.remove('kezdodik')
                    aktP.classList.add('kezdodik');
                }
                aktP.innerHTML = szo;
                lista.appendChild(aktP);
            }
        }
    }, 500);
});


////////////////

let a = setTimeout(()=>{
    console.log('alma');
}, 3000);

a = setTimeout(()=>{
    console.log('körte');
}, 3000);

clearTimeout(a);

let b = setInterval(()=>{
    console.log('intervallum');
},1000);