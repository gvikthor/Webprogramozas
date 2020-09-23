function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }

    szulo.addEventListener(mikor, esemenyKezelo);
}

let lista = document.querySelector('ul');
delegal(lista, 'li', 'click', (esemeny, elem)=>{
    /*if(elem.classList.contains('alahuzott')){
        elem.classList.remove('alahuzott');
    }else{
        elem.classList.add('alahuzott');
    }*/

    elem.classList.toggle('alahuzott');
});