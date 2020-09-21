/*let vilmosSzam = document.querySelector('#vilmos-szam');
let vilmosGomb = document.querySelector('#vilmos-gomb');

vilmosGomb.addEventListener('click', ()=>{
    vilmosSzam.innerHTML = parseFloat(vilmosSzam.innerHTML) + 1;
});*/


let allatok = [
    {
        nev: 'Vilmos',
        faj: 'medve',
        latogatok: 5
    },
    {
        nev: 'Gergő',
        faj: 'mókus',
        latogatok: 15
    },
    {
        nev: 'Timi',
        faj: 'hörcsög',
        latogatok: 1
    }
];
let tablazat = document.querySelector('table');
for(let allat of allatok){
    let ujSor = document.createElement('tr');
        let ujCella = document.createElement('td');
            ujCella.innerText = `${allat.nev} ${allat.faj}`;
        ujSor.appendChild(ujCella);

        ujCella = document.createElement('td');
            ujCella.innerText = allat.latogatok;
            ujCella.id = allat.nev;
        ujSor.appendChild(ujCella);

        ujCella = document.createElement('td');
            let ujGomb = document.createElement('button');
                ujGomb.innerText = '+';
                ujGomb.addEventListener('click', ()=>{
                    allat.latogatok++;
                    document.querySelector(`#${allat.nev}`).innerHTML = allat.latogatok;
                });
            ujCella.appendChild(ujGomb);
        ujSor.appendChild(ujCella);

    tablazat.appendChild(ujSor);
}