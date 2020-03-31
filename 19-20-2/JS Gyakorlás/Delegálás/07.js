let lista = document.querySelector('#linkList');
let linkek = lista.querySelectorAll('a');

function shiftClick(event,elem){
    if(!event.shiftKey) return;
    event.preventDefault();
    console.log(elem.href);
}

function esemenyKezelo(event){
    let handlerElem = this;
    let sourceElem = event.target;
    let closestElem = sourceElem.closest('a');

    if(handlerElem.contains(closestElem)) shiftClick(event,closestElem);
}

lista.addEventListener('click',esemenyKezelo);