let lista = document.querySelector('#linkList');
let linkek = lista.querySelectorAll('a');

function shiftClick(event,elem){
    if(!event.shiftKey) return;
    event.preventDefault();
    console.log(elem.href);
}

function delegate(parent,child,type,toDo){
    function esemenyKezelo(event){
        let handlerElem = this;
        let sourceElem = event.target;
        let closestElem = sourceElem.closest(child);

        if(handlerElem.contains(closestElem)) toDo(event,closestElem);
    }

    parent.addEventListener(type,esemenyKezelo);
}

delegate(lista,'a','click',shiftClick);