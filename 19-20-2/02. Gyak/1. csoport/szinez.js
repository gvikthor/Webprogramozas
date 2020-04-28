let d = document.querySelector('div');
console.log(d.dataset.magassag);
console.log(d.dataset.suly);
console.log(d.dataset.anyjaNeve);

let gombok = document.querySelectorAll('button');
let sorok = document.querySelectorAll('tr');

for(let i = 0; i < gombok.length; i++){
    gombok[i].addEventListener('click', ()=>{
        //sorok[gombok[i].dataset.sor].style.backgroundColor = gombok[i].dataset.szin;
        sorok[gombok[i].dataset.sor].classList = [];
        // sorok[gombok[i].dataset.sor].remove('blue');
        sorok[gombok[i].dataset.sor].classList.add(gombok[i].dataset.szin);
    });
}


////////////////

document.querySelectorAll('.green');