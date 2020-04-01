function delegate(parent,child,type,toDo){
    function esemenyKezelo(event){
        let handlerElem = this;
        let sourceElem = event.target;
        let closestElem = sourceElem.closest(child);

        if(handlerElem.contains(closestElem)) toDo(event,closestElem);
    }

    parent.addEventListener(type,esemenyKezelo);
}

function szinez(event, elem){
    elem.style.background = 'green';
}

let tablazat = document.querySelector('table');
delegate(tablazat,'td','click',szinez);