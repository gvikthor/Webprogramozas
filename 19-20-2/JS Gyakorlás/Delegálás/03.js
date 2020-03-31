let lista = document.querySelector('#linkList');
let linkek = lista.querySelectorAll('a');

function esemenyKezelo(event){
    if(!event.shiftKey) return;
    event.preventDefault();
    console.log(this.href);
}

for(link of linkek){
    link.addEventListener('click', esemenyKezelo);
}