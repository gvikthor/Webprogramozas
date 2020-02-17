let div = document.querySelector('div');
console.log(div.dataset);
console.log(div.dataset.alma);
console.log(div.dataset.egyetem);

div.dataset.dinamikusanMentem = 'valami';

console.log(div.dataset);

console.log('alma');
let tablazat = document.querySelector('table');
let gombok = tablazat.querySelectorAll('button');

for(let i = 0; i < gombok.length; i++){
    gombok[i].addEventListener('click', ()=>{
        console.log(gombok[i].dataset.szin);
        let elem = tablazat.querySelectorAll('tr')[gombok[i].dataset.sor];
        //elem.style.backgroundColor = gombok[i].dataset.szin;
        //elem.classList.add('valami');
        //elem.classList.remove('valami');
        elem.classList = [];
        elem.classList.add(gombok[i].dataset.szin);
    });
}