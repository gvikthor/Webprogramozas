let szivarvany = document.querySelector('#szivarvany');
let bekezdesek = szivarvany.querySelectorAll('.szin');

function xetHozzafuz(esemeny){
    esemeny.target.innerHTML += 'X';
}

for(const bekezdes of bekezdesek){
    bekezdes.addEventListener('click', xetHozzafuz);
}