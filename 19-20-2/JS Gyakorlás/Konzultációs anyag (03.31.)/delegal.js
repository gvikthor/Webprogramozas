let linkLista = document.querySelector('#linkek');
let linkek = linkLista.querySelectorAll('a');

function shiftGomb(event,elem){
    if(!event.shiftKey) return;

    event.preventDefault();;
    console.log(elem.href);
}

function delegal(szulo, gyerek, esemeny, csinaljaAzt){
    function esemenyKezelo(event){
        let kezeloElem = this;
        let celElem = event.target;
        let legkozelebbi = celElem.closest(gyerek);

        if(kezeloElem.contains(legkozelebbi)){
            csinaljaAzt(event,legkozelebbi);
        }
    }

    szulo.addEventListener(esemeny, esemenyKezelo);
}

delegal(linkLista, 'a', 'click', shiftGomb);

delegal(szulo, 'gyerek', 'esemenyTipus', fuggveny);