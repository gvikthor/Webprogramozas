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
    let ujCella;

        ujCella = document.createElement('td');
            ujCella.innerHTML = `${allat.nev} ${allat.faj}`;
        ujSor.appendChild(ujCella);

        let latogatokSzamaCella = document.createElement('td');
            latogatokSzamaCella.innerHTML = allat.latogatok;
        ujSor.appendChild(latogatokSzamaCella);

        ujCella = document.createElement('td');
            let ujGomb = document.createElement('button');
                ujGomb.innerHTML = '+';
                ujGomb.addEventListener('click', ()=>{
                    allat.latogatok++;
                    latogatokSzamaCella.innerHTML = allat.latogatok;
                });
            ujCella.appendChild(ujGomb);
        ujSor.appendChild(ujCella)

    tablazat.appendChild(ujSor);
}
