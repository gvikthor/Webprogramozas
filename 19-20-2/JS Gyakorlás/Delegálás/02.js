let lista = document.querySelector('#linkList');
let linkek = lista.querySelectorAll('a');

function esemenyKezelo(event){
    if(!event.shiftKey) return;
    event.preventDefault();
    console.log(this.href);
}

for(let i = 0; i < linkek.length; i++){
    linkek[i].addEventListener('click', esemenyKezelo);
}