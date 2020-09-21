function delegal(szulo, gyerek, mikorCsinal, mitCsinal){
    function esemenykezeles(esemeny){
        let akireKattintottunk = esemeny.target;
        let akiFigyelteEzt = this;
        let legekozelebbiKeresettElem = akireKattintottunk.closest(gyerek);

        if(akiFigyelteEzt.contains(legekozelebbiKeresettElem)){
            mitCsinal(esemeny, legekozelebbiKeresettElem);
        }
    }

    szulo.addEventListener(mikorCsinal, esemenykezeles);
}

let lista = document.querySelector('ul');
function alahuz(esemeny, elem){
    elem.style.textDecoration = 'underline';
}
delegal(lista, 'li', 'click', alahuz);