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

for(const allat of allatok){
    let ujSor, ujCella, ujGomb;

    ujSor = document.createElement('tr');

        ujCella = document.createElement('td');
            ujCella.innerHTML = `${allat.nev} ${allat.faj}`;
        ujSor.appendChild(ujCella);

        let latogatokCella = document.createElement('td');
            latogatokCella.innerHTML = allat.latogatok;
        ujSor.appendChild(latogatokCella);

        ujCella = document.createElement('td');
            ujGomb = document.createElement('button');
                ujGomb.innerHTML = '+';
                ujGomb.addEventListener('click', ()=>{
                    allat.latogatok++;
                    latogatokCella.innerHTML = allat.latogatok;
                });
            ujCella.appendChild(ujGomb);
        ujSor.appendChild(ujCella);

    tablazat.appendChild(ujSor);
}