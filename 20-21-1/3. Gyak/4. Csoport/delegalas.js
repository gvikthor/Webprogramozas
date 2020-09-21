let szivarvany = document.querySelector('#szivarvany');
let szinek = szivarvany.querySelectorAll('.szin');

function xetHozzafuz(esemeny, elem){
    elem.innerHTML += 'x';
}

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

delegal(szivarvany, '.szin', 'click', xetHozzafuz);

//delegal(szulo, 'gyerek', 'esemeny', fuggveny)


//delegal(szuloEgy, '.alatalnosIskolasGyerek', 'beiraAzEllenorzobe', bemegyAzOsztalyfonokhoz);
//function bemegyAzOsztalyfonokhoz(esemeny, elem){
//  elem.puszitAd();
//  hutoreFelir(esemeny);
//}