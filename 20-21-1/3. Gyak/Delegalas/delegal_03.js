let szivarvany = document.querySelector('#szivarvany');
let bekezdesek = szivarvany.querySelectorAll('.szin');

for(const bekezdes of bekezdesek){
    bekezdes.addEventListener('click', (esemeny)=>{
        bekezdes.innerHTML += 'X';
    });
}