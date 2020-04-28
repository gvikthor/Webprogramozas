let elsoDiv = document.createElement('div');
document.body.appendChild( elsoDiv );
elsoDiv.innerHTML = 'Gyerek vagyok';

/*let masodikDiv = document.createElement('div');
elsoDiv.appendChild( masodikDiv );
masodikDiv.innerHTML = 'Hello there!';*/

elsoDiv.appendChild( document.createElement('div') );
elsoDiv.appendChild( document.createElement('div') );
elsoDiv.appendChild( document.createElement('div') );

elsoDiv.querySelectorAll('div')[1].innerHTML = 'Én vagyok a középső kisfiú!';

//////////////

let filmek = [
    {
        cim: 'Star Wars',
        rendezo: 'George Lucas',
        megjelenes: 1977,
        ertekeles: 10,
        szereplok: [
            {
                nev: 'Mark Hamil',
                karakter: 'Luke Skywalker'
            },
            {
                nev: 'Carrie Fisher',
                karakter: 'Leia Skywalker'
            }
        ]
    },
    {
        cim: 'Avengers',
        rendezo: 'J&A Russeau',
        megjelenes: 2019,
        ertekeles: 9,
        szereplok: [
            {
                nev: 'Chris Hemsworth',
                karakter: 'Thor'
            },
            {
                nev: 'Chris Evans',
                karakter: 'Steve Rogers'
            },
            {
                nev: 'Chris Pratt',
                karakter: 'Star Lord'
            }
        ]
    },
    {
        cim: 'Matrix',
        rendezo: 'Rip',
        megjelenes: 1900,
        ertekeles: 8,
        szereplok: [
            {
                nev: 'Keanu Reeves',
                karakter: 'Neo'
            }
        ]
    },
    {
        cim: 'ELTE IK Promófilm',
        rendezo: 'Rip',
        megjelenes: 2004,
        ertekeles: 2,
        szereplok: [
            {
                nev: 'Nem vállaták fel',
                karakter: ':('
            }
        ]
    }
];

let tablazat = document.createElement('table');
let sor, cella;

//Header sor
    sor = document.createElement('tr');

    cella = document.createElement('th');
    cella.innerHTML = 'Cím';
    sor.appendChild(cella);

    cella = document.createElement('th');
    cella.innerHTML = 'Rendező';
    sor.appendChild(cella);

    cella = document.createElement('th');
    cella.innerHTML = 'Megjelenés';
    sor.appendChild(cella);

    cella = document.createElement('th');
    cella.innerHTML = 'Értékelés';
    sor.appendChild(cella);

    cella = document.createElement('th');
    cella.innerHTML = 'Szereplők';
    sor.appendChild(cella);

    tablazat.appendChild(sor);
// /Header sorok

// Adat sorok
for(film of filmek){
    
    sor = document.createElement('tr');

    cella = document.createElement('td');
    cella.innerHTML = film.cim;
    sor.appendChild(cella);

    cella = document.createElement('td');
    cella.innerHTML = film.rendezo;
    sor.appendChild(cella);

    cella = document.createElement('td');
    cella.innerHTML = film.megjelenes;
    sor.appendChild(cella);

    cella = document.createElement('td');
    cella.innerHTML = film.ertekeles;
    sor.appendChild(cella);

    cella = document.createElement('td');
    for(szereplo of film.szereplok){
        cella.innerHTML += `Név: ${szereplo.nev}, Karakter: ${szereplo.karakter} <br>`;
    }
    sor.appendChild(cella);

    tablazat.appendChild(sor);
}
// /Adat sorok

document.body.appendChild(tablazat);

/////////////////////////////////////////////////////



let cellak = tablazat.querySelectorAll('td');
let megnyitva = false;
let nyitott = -1;
for(let i = 0; i < cellak.length; i++){
    cellak[i].addEventListener('click',()=>{
        //console.log(cellak[i].innerHTML);
        if(!megnyitva){
            let szoveg = cellak[i].innerHTML;
            cellak[i].innerHTML = `<input value="${szoveg}">`;
            megnyitva = true;
            nyitott = i;
        }
    });
}

document.querySelector('button').addEventListener('click', ()=>{
    if(megnyitva){
        let szoveg = cellak[nyitott].querySelector('input').value;
        cellak[nyitott].innerHTML = szoveg;
        megnyitva = false;
        nyitott = -1;
    }
});
/*
for(cella of cellak){
    let temp = cella.innerHTML;
    cella.addEventListener('click',()=>{
        console.log(temp);
    });
}
*/