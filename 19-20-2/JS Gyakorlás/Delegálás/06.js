let lista = document.querySelector('#linkList');
let linkek = lista.querySelectorAll('a');

function esemenyKezelo(event){
    let handlerElem = this;
    let sourceElem = event.target;
    let closestElem = sourceElem.closest('a');

    if(handlerElem.contains(closestElem)){
        if(!event.shiftKey) return;
        event.preventDefault();
        console.log(closestElem.href);
    }
}

lista.addEventListener('click',esemenyKezelo);