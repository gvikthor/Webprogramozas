let lista = document.querySelector('#linkList');
let linkek = lista.querySelectorAll('a');

function esemenyKezelo(event,elem){
    if(!event.shiftKey) return;

    event.preventDefault();
    console.log(elem.href);
}

for(let i = 0; i < linkek.length; i++){
    linkek[i].addEventListener('click', ()=>{
        esemenyKezelo(event,linkek[i]);
    });
}