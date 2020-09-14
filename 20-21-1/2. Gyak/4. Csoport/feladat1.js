let adatok = [
    {
        nev: 'Lábfertőtleníő (1L)',
        menny: 200,
        egyseg: 'db',
        ar: 3900
    },
    {
        nev: 'Iratmegsemmisítő',
        menny: 1,
        egyseg: 'db',
        ar: 3900
    },
    {
        nev: 'Széf',
        menny: 1,
        egyseg: 'db',
        ar: 3900
    }
];

let headerek = ['Megnevezés','Mennyiség','Egység','Egységár'];

let tablazat = document.createElement('table');

    let ujSor = document.createElement('tr');
        //ujSor.innerHTML = '<th>Megnevezés</th><th>Mennyiség</th><th>Egység</th><th>Egységár</th>';
        /*let ujCella = document.createElement('th');
            ujCella.innerHTML = 'Megnevezés';
        ujSor.appendChild(ujCella);
        ujCella = document.createElement('th');
            ujCella.innerHTML = 'Mennyiség';
        ujSor.appendChild(ujCella);
        ujCella = document.createElement('th');
            ujCella.innerHTML = 'Egység';
        ujSor.appendChild(ujCella);
        ujCella = document.createElement('th');
            ujCella.innerHTML = 'Egységár';
        ujSor.appendChild(ujCella);*/
        for(header of headerek){
            let ujCella = document.createElement('th');
            ujCella.innerHTML = header;
            ujSor.appendChild(ujCella);
        }
    tablazat.appendChild(ujSor);

    for(adat of adatok){
        ujSor = document.createElement('tr');
            for(tulajdonsag in adat){
                let ujCella = document.createElement('td');
                ujCella.innerHTML = adat[tulajdonsag];
                if(tulajdonsag == 'ar') ujCella.innerHTML += 'Ft';
                ujSor.appendChild(ujCella);
            }
        tablazat.appendChild(ujSor);
    }

document.body.appendChild(tablazat);