let adatok = [
    {
        megnevezes: 'Almafa',
        mennyiseg: 5,
        egyseg: 'csemete',
        egysegar: 1500
    },
    {
        megnevezes: 'Körtefa',
        mennyiseg: 10,
        egyseg: 'csemete',
        egysegar: 2700
    },
    {
        megnevezes: 'Kaspó',
        mennyiseg: 15,
        egyseg: 'db',
        egysegar: 700
    }
];

let cimek = ['Megnevezés','Mennyiség','Egység','Egységár'];
let ujTablazat, ujSor, ujCella;

ujTablazat = document.createElement('table');
    ujSor = document.createElement('tr');
        /*ujCella = document.createElement('th');
            ujCella.innerText = 'Megnevezés';
        ujSor.appendChild(ujCella);
        
        ujCella = document.createElement('th');
            ujCella.innerText = 'Mennyiség';
        ujSor.appendChild(ujCella);
        
        ujCella = document.createElement('th');
            ujCella.innerText = 'Egység';
        ujSor.appendChild(ujCella);
        
        ujCella = document.createElement('th');
            ujCella.innerText = 'Egységár';
        ujSor.appendChild(ujCella);*/
        for(cim of cimek){
            ujCella = document.createElement('th');
                ujCella.innerText = cim;
            ujSor.appendChild(ujCella);
        }
    ujTablazat.appendChild(ujSor);

    for(adat of adatok){
        ujSor = document.createElement('tr');
            for(adattag in adat){
                ujCella = document.createElement('td');
                    ujCella.innerText = adat[adattag];
                ujSor.appendChild(ujCella);
            }
        ujTablazat.appendChild(ujSor);
    }

document.body.appendChild(ujTablazat);