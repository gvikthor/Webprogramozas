let szivarvany = document.querySelector('#szivarvany');
let bekezdesek = szivarvany.querySelectorAll('.szin');

function xetHozzafuz(fuggvenyBekezdese){
    fuggvenyBekezdese.innerHTML += 'X';
}

for(const bekezdes of bekezdesek){
    bekezdes.addEventListener('click', (esemeny)=>{
        xetHozzafuz(bekezdes);
    });
}