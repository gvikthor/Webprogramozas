let divValami = document.createElement('div');
document.body.appendChild(divValami);
divValami.innerHTML = 'Alma';
/////////////////////////
divValami.appendChild( document.createElement('div') );
divValami.querySelector('div').innerHTML = 'Körte';
/////////////////////////

let adatok = [
    {
        cim: 'Star Wars',
        megjelenes: 1977,
        rendezo: 'George Lucas',
        szereplok: ['Luke', 'Leia', 'Han']
    },
    {
        cim: 'Lord of the Rings',
        megjelenes: 2069,
        rendezo: 'Valaki',
        szereplok: ['Boromir', 'Gollam']
    },
    {
        cim: 'Jojo Rabbit',
        megjelenes: 2019,
        rendezo: 'Taika Waititi',
        szereplok: ['Jojo', 'Scarlet Johansson']
    }
];

let tablazat = document.createElement('table');
let sor = document.createElement('tr');
sor.innerHTML = `<th>Cim</th><th>Rendezo</th><th>Megjelenes</th><th>Szereplők</th>`;
document.body.appendChild(tablazat);
tablazat.appendChild(sor);
/*
for(let i = 0; i < adatok.length; i++){
    let sor = document.createElement('tr');

    let aktCella = document.createElement('td');
    aktCella.innerHTML = adatok[i].cim;
    sor.appendChild(aktCella);

    aktCella = document.createElement('td');
    aktCella.innerHTML = adatok[i].rendezo;
    sor.appendChild(aktCella);

    aktCella = document.createElement('td');
    aktCella.innerHTML = adatok[i].megjelenes;
    sor.appendChild(aktCella);

    aktCella = document.createElement('td');
    aktCella.innerHTML = '';
    for(let j = 0; j < adatok[i].szereplok.length; j++){
        aktCella.innerHTML += adatok[i].szereplok[j] + '<br>';
    }
    sor.appendChild(aktCella);

    tablazat.appendChild(sor);
}
*/

for(adat of adatok){
    let sor = document.createElement('tr');

    let aktCella = document.createElement('td');
    aktCella.innerHTML = adat.cim;
    sor.appendChild(aktCella);

    aktCella = document.createElement('td');
    aktCella.innerHTML = adat.rendezo;
    sor.appendChild(aktCella);

    aktCella = document.createElement('td');
    aktCella.innerHTML = adat.megjelenes;
    sor.appendChild(aktCella);

    aktCella = document.createElement('td');
    aktCella.innerHTML = '';
    for(szereplo of adat.szereplok){
        aktCella.innerHTML += szereplo + '<br>';
    }
    sor.appendChild(aktCella);

    tablazat.appendChild(sor);
}

////////////////////////////

let cellak = tablazat.querySelectorAll('td');
let megnyitva = false;
let elozoI = -1;
let elozoSzoveg = '';

for(let i = 0; i < cellak.length; i++){
    cellak[i].addEventListener('click',()=>{
        //console.log(cellak[i].innerHTML);
        if(i != elozoI){
            if(megnyitva){
                cellak[elozoI].innerHTML = cellak[elozoI].querySelector('input').value;
                elozoSzoveg = cellak[i].innerHTML;
                elozoI = i;

                cellak[i].innerHTML = `<input value="${elozoSzoveg}">`;
            }else{
                elozoSzoveg = cellak[i].innerHTML;
                elozoI = i;
                megnyitva = true;

                cellak[i].innerHTML = `<input value="${elozoSzoveg}">`;
            }
        }
    });
}

let headerek = document.querySelectorAll('th');
for(let i = 0; i < headerek.length; i++){
    headerek[i].addEventListener('click', ()=>{
        if(megnyitva){
            cellak[elozoI].innerHTML = cellak[elozoI].querySelector('input').value;
            megnyitva = false;
        }
    });
}

//////////////////

let dataPeldaDiv = document.querySelector('#dataPelda');
console.log(dataPeldaDiv.dataset.iskola)

//////////////

let szinesTablazat = document.querySelector('#szinesTablazat');
let gombok = szinesTablazat.querySelectorAll('button');
for(let i = 0; i < gombok.length; i++){
    gombok[i].addEventListener('click', ()=>{
        console.log(gombok[i].dataset.szin)
        szinesTablazat.querySelectorAll('tr')[gombok[i].dataset.sor].style.backgroundColor = gombok[i].dataset.szin;
    });
}
/* referenciák miatt nem működik
for(gomb of gombok){
    gomb.addEventListener('click', ()=>{
        console.log(gomb.dataset.szin)
        szinesTablazat.querySelectorAll('tr')[gomb.dataset.sor].style.backgroundColor = gomb.dataset.szin;
    });
}
*/