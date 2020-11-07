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

const lista = document.querySelector('#todos');

// Ez nem nagyon tudom lépésekre szétszedni, mert organikusan összeépül, ahogy bővíted.

delegal(lista, '.step ul li', 'click', (esemeny, elem) => {
    if(elem.classList.contains('done')){
        if(elem.nextElementSibling == null || !elem.nextElementSibling.classList.contains('done')){
            elem.classList.remove('done');
        }
    }else{
        elem.classList.add('done');
        let testver = elem.previousElementSibling;
        while(testver){ //ezt azért tehetem meg, amit első órán néztünk, a JS típusai varázslatosak. de nyilván a testver != null is jó
            testver.classList.add('done');
            testver = testver.previousElementSibling;
        }

    }
});

delegal(lista, '.step', 'click', (esemeny, elem) => {
    // megoldható persze progtételesen, csak mutatom a tömbfüggvényes megoldást inkább

    let listaElemek = Array.from(elem.querySelectorAll('ul li')); //azért kell az array.from, mert ez egy NodeList, ami nagyon olyan, mint egy array, csak nem az, nincsenek rajta tömbfüggvények
    if(listaElemek.some(li => !li.classList.contains('done'))){ //ha van olyan, amelyik nem done
        elem.classList.remove('done');
    }else{
        elem.classList.add('done');
    }
});