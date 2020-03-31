let lista = document.querySelector('#linkList');
let linkek = lista.querySelectorAll('a');

function esemenyKezelo(event){
    if(!event.shiftKey) return;
    event.preventDefault();
    console.log(event.target.href); //a <div> miatt undefined lesz
}

lista.addEventListener('click',esemenyKezelo);