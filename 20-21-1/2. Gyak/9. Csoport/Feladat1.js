let ujTablazat, ujSor, ujCella;
let headerSorok = ['Megnevezés','Mennyiség','Egység','Egységár'];
let adatok = [
    {
        megnevezes: 'Almafa',
        mennyiseg: '10',
        egyseg: 'csemete',
        egysegar: 12359
    },
    {
        megnevezes: 'Körtefa',
        mennyiseg: '5',
        egyseg: 'csemete',
        egysegar: 17489
    },
    {
        megnevezes: 'Kaspó',
        mennyiseg: '15',
        egyseg: 'db',
        egysegar: 5499
    }
];

ujTablazat = document.createElement('table');
    ujSor = document.createElement('tr');
        for(headerSor of headerSorok){
            ujCella = document.createElement('th');
                ujCella.innerText = headerSor;
            ujTablazat.appendChild(ujCella);
        }
    ujTablazat.appendChild(ujSor);
        
    for(adat of adatok){
        ujSor = document.createElement('tr');
            for(index in adat){
                ujCella = document.createElement('td');
                    //ujCella.innerText = adat.index; //undefined
                    ujCella.innerText = adat[index];
                ujSor.appendChild(ujCella);
            }
        ujTablazat.appendChild(ujSor);
    }

document.body.appendChild(ujTablazat);