let tablazat = document.querySelector('table');
let input = document.querySelector('input');
let gombok = document.querySelectorAll('button');
let cellak = [];

let szavak = [
    ['meggy','makk','meggymakk','ananász','tejföl'],
    ['meggyfa', 'makkfa', 'meggyfamakkfa', 'ananászfa', 'tejfölfa'],
    ['fameggy', 'famakk', 'fameggyfamakk', 'fananász', 'fatejföl'],
    ['felmeggy', 'felmegy', 'fára', 'fa tetejére', 'tetejére a fának'],
    ['lemeggy', 'lemegy', 'legény', 'leány', 'Felmegy a legény a fára, a meggyfa tetejére, oszt lerázza a meggyet, te meg babám szedjed a rózsás kötényedbe']
];

for(let i = 0; i < 5; i++){
    let sor = document.createElement('tr');
    for(let j = 0; j < 5; j++){
        let cella = document.createElement('td');
        cella.innerHTML = szavak[i][j];
        sor.appendChild(cella);
        cellak.push(cella);
    }
    tablazat.appendChild(sor);
}

for(let i = 0; i < gombok.length; i++){
    gombok[i].addEventListener('click', ()=>{
        for(cella of cellak){
            if(cella.innerHTML.includes(input.value)){
                console.log(gombok[i].dataset.color);
                cella.style.background = gombok[i].dataset.szin;
            }
        }
    });
}