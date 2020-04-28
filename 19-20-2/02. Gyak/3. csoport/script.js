let peldaDiv = document.createElement('div');
document.body.appendChild(peldaDiv);
peldaDiv.innerHTML = 'Alma';

peldaDiv.appendChild( document.createElement('div') );
peldaDiv.querySelector('div').innerHTML = 'Körte';
//////////////////////////

let filmek = [
    {
        cim: "Start Wars",
        rendezo: "George Lucas",
        megjelenes: 1977,
        ertekeles: 9,
        szereplok: ['Han','Leia','Luke']
    },
    {
        cim: "Avangers",
        rendezo: "J&A Russeau",
        megjelenes: 2019,
        ertekeles: 8,
        szereplok: ['Thor','Iron Man','Captain America', 'Black Widow']
    },
    {
        cim: "Jojo Rabbit",
        rendezo: "Taika Waititi",
        megjelenes: 2019,
        ertekeles: 10,
        szereplok: ['Jojo']
    },
    {
        cim: "Twilight",
        rendezo: "Nem tudom",
        megjelenes: 3000,
        ertekeles: 2,
        szereplok: ['Vámpír1','Vámpír2']
    }
];

let tablazat = document.createElement('table');

let sor = document.createElement('tr');
sor.innerHTML = '<th>Cím</th><th>Rendező</th><th>Megjelenés</th><th>Értékelés</th><th>Szereplők</th>';
tablazat.appendChild(sor);

/*for(let i = 0; i < filmek.length; i++){
    sor = document.createElement('tr');

    let aktCella = document.createElement('td');
    aktCella.innerHTML = filmek[i].cim;
    sor.appendChild(aktCella);

    aktCella = document.createElement('td');
    aktCella.innerHTML = filmek[i].rendezo;
    sor.appendChild(aktCella);

    aktCella = document.createElement('td');
    aktCella.innerHTML = filmek[i].megjelenes;
    sor.appendChild(aktCella);

    aktCella = document.createElement('td');
    aktCella.innerHTML = filmek[i].ertekeles;
    sor.appendChild(aktCella);

    aktCella = document.createElement('td');
    for(let j = 0; j < filmek[i].szereplok.length; j++){
        aktCella.innerHTML += filmek[i].szereplok[j] + '<br>';
    }
    sor.appendChild(aktCella);

    tablazat.appendChild(sor);
}*/

for(film of filmek){
    sor = document.createElement('tr');

    let aktCella = document.createElement('td');
    aktCella.innerHTML = film.cim;
    sor.appendChild(aktCella);

    aktCella = document.createElement('td');
    aktCella.innerHTML = film.rendezo;
    sor.appendChild(aktCella);

    aktCella = document.createElement('td');
    aktCella.innerHTML = film.megjelenes;
    sor.appendChild(aktCella);

    aktCella = document.createElement('td');
    aktCella.innerHTML = film.ertekeles;
    sor.appendChild(aktCella);

    aktCella = document.createElement('td');
    for(szereplo of film.szereplok){
        aktCella.innerHTML += szereplo + '<br>';
    }
    sor.appendChild(aktCella);

    tablazat.appendChild(sor);
}

document.body.appendChild(tablazat);

/////////////////////////////////

let cellak = document.querySelectorAll('td');
let inputNyitva = false;
let elozoI = -1;

for(let i = 0; i < cellak.length; i++){
    cellak[i].addEventListener('click', ()=>{
        //console.log(cellak[i].innerHTML);
        if(elozoI != i){
            if(inputNyitva){
                let szoveg = cellak[elozoI].querySelector('input').value;
                cellak[elozoI].innerHTML = szoveg;
                inputNyitva = false;
                elozoI = -1;
            }else{
                let szoveg = cellak[i].innerHTML;
                cellak[i].innerHTML = `<input value="${szoveg}">`;
                elozoI = i;
                inputNyitva = true;
            }
        }
        
    });
}

/* mutatók/refernciák miatt furcsán viselkedik
for(cella of cellak){
    cella.addEventListener('click', ()=>{
        console.log(cella.innerHTML);
    });
}*/