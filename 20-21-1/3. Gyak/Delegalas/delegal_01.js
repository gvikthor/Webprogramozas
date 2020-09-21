let bekezdesek = document.querySelectorAll('.szin');

for(let i = 0; i < bekezdesek.length; i++){
    bekezdesek[i].addEventListener('click', (esemeny)=>{
        bekezdesek[i].innerHTML += 'X';
    });
}