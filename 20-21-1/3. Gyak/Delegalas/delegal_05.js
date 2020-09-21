let szivarvany = document.querySelector('#szivarvany');
let bekezdesek = szivarvany.querySelectorAll('.szin');

function xetHozzafuz(fuggvenyBekezdese){
    console.log(fuggvenyBekezdese); //->ez egy esemény
    fuggvenyBekezdese.innerHTML += 'X';
}

for(const bekezdes of bekezdesek){
    bekezdes.addEventListener('click', xetHozzafuz);
}