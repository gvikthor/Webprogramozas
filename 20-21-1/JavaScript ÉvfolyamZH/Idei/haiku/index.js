const tarea  = document.querySelector('#haiku-editor');
const noc    = document.querySelector('#number-of-characters');
const nor    = document.querySelector('#number-of-rows');
const vpl    = document.querySelector('#vowels-per-row');
const nagyp  = tarea.parentNode;
const gomb   = nagyp.querySelector('button');
const haikuk = document.querySelector('#haikus');
const maganhangzok = 'aáeéiíoóöőuúüű';

function maganhangzokSzamaAdottSorban(sor){
    let mghk = 0;
    for(const betu of sor){
        if(maganhangzok.includes(betu)){
            mghk++;
        }
    }
    return mghk;
}

tarea.addEventListener('input', ()=>{
    //Minden feladatot függetlenül csináltam egymástól, tehát nem építenek arra, amit a másik csinál.
    //Emiatt nyilván egy csomó mindent többször számolok ki, azok persze összevonhatóak.
    //A maganhangzokSzamaAdottSorban függvény az átláthatóságot segíti.
    console.log('-------');

    //b. A szöveges beviteli mezőbe gépelve írd ki a mező tartalmát a konzolra! 
    console.log('a. feladat:',tarea.value);

    //c. A szerkesztőben gépelve a number-of-characters azonosítójú elembe írd ki a szerkesztőben lévő karakterek számát!
    noc.innerHTML = tarea.value.length;

    //d. A szerkesztőben gépelve a number-of-rows azonosítójú elembe írd ki a szerkesztőben lévő sorok számát (amiket \n jel választ el egymástól)!
    nor.innerHTML = tarea.value.split('\n').length;

    //e. A szerkesztőben gépelve írd ki a konzolra az első sorban lévő magánhangzók számát!
    console.log('e. feladat:', maganhangzokSzamaAdottSorban(tarea.value.split('\n')[0]));

    //f. A vowels-per-row azonosítójú listában sorold fel, hogy soronként hány magánhangzó szerepel!
    vpl.innerHTML = '';
    for(const sor of tarea.value.split('\n')){
        let li = document.createElement('li');
            li.innerHTML = maganhangzokSzamaAdottSorban(sor);
            vpl.appendChild(li);
    }

    //g. Ha 3 sor van, és soronként 5-7-5 szótagszám, akkor add a szöveges beviteli mezőt tartalmazó p elemnek a haiku stílusosztályt. Ekkor zöldre vált a háttér, és megjelenik egy gomb. Ha a feltétel nem teljesül, akkor ne legyen rajta ez a stílusosztály!
    if(
        tarea.value.split('\n').length == 3 &&
        maganhangzokSzamaAdottSorban(tarea.value.split('\n')[0]) == 5 &&
        maganhangzokSzamaAdottSorban(tarea.value.split('\n')[1]) == 7 &&
        maganhangzokSzamaAdottSorban(tarea.value.split('\n')[2]) == 5
    ){
        nagyp.classList.add('haiku');
    }else{
        nagyp.classList.remove('haiku');
    }
});

//h. Ha jól alkalmaztad a stílusosztályt, akkor haiku sorában megjelent egy gomb. Erre kattintva a szerkesztő tartalmát add hozzá a haikus azonosítójú elemhez <pre> elemek között (ld. az oldalon lévő példákat)!
gomb.addEventListener('click', ()=>{
    let pre = document.createElement('pre');
        pre.innerHTML = tarea.value;
        haikuk.appendChild(pre);
});