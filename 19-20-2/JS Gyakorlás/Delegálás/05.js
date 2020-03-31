let lista = document.querySelector('#linkList');
let linkek = lista.querySelectorAll('a');

function esemenyKezelo(event){

    let target = event.target;
    if(!target.matches('a')) return; //a <div> miatt nem működik

    if(!event.shiftKey) return;
    event.preventDefault();
    console.log(target.href);
}

lista.addEventListener('click',esemenyKezelo);