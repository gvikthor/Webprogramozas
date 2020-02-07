console.log(">>"+document.cookie+"<<"); //ez az aktuálisan tárolt süti
//ez egy string szerű dolog, ami így néz ki:
//   sutineve=Süti Értéke; expires=Tue, 24 Dec 2069 04:20:00 UTC; path=/
//először egy változónév, aztán annak az értéke, aztán a lejárat, és ezt követően az elérési út, ami nekünk az egyetlen oldal amit használunk

function sutiBeallit(valtozonev, ertek, lejaratNapban) {
    let d = new Date();
    d.setTime(d.getTime() + (lejaratNapban*24*60*60*1000));
    let lejar = "expires="+ d.toUTCString(); //átalakítjuk olyan stringgé, amit elvár a süti
    document.cookie = (valtozonev + "=" + ertek + ";" + lejar + ";path=/");
}

function sutiKiszed(valtozonev) {
    let retval = {};
    retval.talalt = false;
    retval.ertek = '';

    let dekodoltSuti = decodeURIComponent(document.cookie); //nem szépen fogja tárolni, a speciális karakterek (ő, $, %, stb) másképp jelennének meg
    let sutik = dekodoltSuti.split(';'); //felbontjuk egy tömbbé
    
    let i = 0;
    while(i < sutik.length && !retval.talalt){
        let sutiBontva = sutik[i].split('=');
        retval.talalt = (sutiBontva[0].trim() == valtozonev); //a trim azért kell, mert lehet előtte a tárolás miatt space, pl.: teszt1=tezst érték valami; teszt2=teszt valami valami
        if(retval.talalt){                                                                                                          //                     ^itt
            retval.ertek = sutiBontva[1];
        }
        i++;
    }
    return retval;
}

let nev = sutiKiszed('nev');
if(!nev.talalt){
    document.getElementById('nev').innerHTML = 'Kérlek, add meg a neved!';
}else{
    document.getElementById('nev').innerHTML = 'Szia '+nev.ertek+'!';
}

document.querySelector('button').addEventListener('click', ()=>{
    if(document.querySelector('input').value.trim() != ''){
        sutiBeallit('nev',document.querySelector('input').value,2);
    }
});