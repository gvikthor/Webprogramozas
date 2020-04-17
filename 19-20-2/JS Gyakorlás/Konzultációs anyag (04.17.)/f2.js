function delegate(parent,child,type,toDo){
    function esemenyKezelo(event){
        let handlerElem = this;
        let sourceElem = event.target;
        let closestElem = sourceElem.closest(child);

        if(handlerElem.contains(closestElem)) toDo(event,closestElem);
    }

    parent.addEventListener(type,esemenyKezelo);
}

function szinez(event,elem){
    elem.classList.toggle('termek');
}
function betutipus(event,elem){
    let listaelem = elem.closest('.szallitmany');

    if(elem.innerHTML.startsWith('É')){
        listaelem.classList.toggle('erkezes');
    }else if(elem.innerHTML.startsWith('P')){
        listaelem.classList.toggle('polc');
    }
}
let adatok = document.querySelector('#adatok');
delegate(adatok,'.szallitmany li','click',szinez);
delegate(adatok,'.szallitmany div','click',betutipus);