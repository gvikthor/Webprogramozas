function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }


    szulo.addEventListener(mikor, esemenyKezelo);
}

function fetchke(celnev, fuggveny, json = true){
    if(json) fetch(celnev).then(v => v.json()).then(e => fuggveny(e))
    else     fetch(celnev).then(v => v.text()).then(e => fuggveny(e))
}

function kimenet(lego){
    const div = document.querySelector('div')
    div.querySelector('h1').innerHTML = `${lego.nev} (${lego.szam})`
    div.querySelector('p').innerHTML = lego.leiras
    div.style.display = "block";
}

function leker(esemeny, listaelem){
    fetchke(`legoszett.php?id=${listaelem.dataset.id}`, kimenet)
}

delegal(document.querySelector('ul'), 'li', 'click', leker)