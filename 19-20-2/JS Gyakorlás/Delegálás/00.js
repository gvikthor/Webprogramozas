let lista = document.querySelector('#linkList');
let linkek = lista.querySelectorAll('a');

for(let i = 0; i < linkek.length; i++){
    linkek[i].addEventListener('click', ()=>{
        if(!event.shiftKey) return;

        event.preventDefault();
        console.log(linkek[i].href);
    });
}