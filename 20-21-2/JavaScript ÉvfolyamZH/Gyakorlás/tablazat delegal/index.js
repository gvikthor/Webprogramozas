function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }


    szulo.addEventListener(mikor, esemenyKezelo);
}

const tablazat = document.querySelector('table')
const lakossagOutput = document.querySelector('#lakossag-output')
const teruletOutput = document.querySelector('#terulet-output')
const szoveg = document.querySelector('#randomszoveg')
const varosok = [
    {
        nev: 'Budapest',
        lakossag: 1752286,
        terulet: 525.14
    },
    {
        nev: 'Debrecen',
        lakossag: 201432,
        terulet: 461.66
    },
    {
        nev: 'Szeged',
        lakossag: 160766,
        terulet: 280.99
    },
    {
        nev: 'Miskolc',
        lakossag: 154521,
        terulet: 236.67
    }
]

for(const varos of varosok){
    let tr, td
    
    tr = document.createElement('tr')
        tr.classList.add('varos')

        td = document.createElement('td')
            td.innerHTML = varos.nev
            td.classList.add('nev')
        tr.appendChild(td)

        td = document.createElement('td')
            td.innerHTML = varos.lakossag
            td.classList.add('lakossag')
        tr.appendChild(td)

        td = document.createElement('td')
            td.innerHTML = varos.terulet
            td.classList.add('terulet')
        tr.appendChild(td)

    tablazat.appendChild(tr)
}

function osszLakossag(){
    const kijeloltek = document.querySelectorAll('.kijelolt')
    let szum = 0
    for(const varosTR of kijeloltek){
        //szum += parseInt(varosTR.querySelectorAll('td')[1].innerHTML)
        //szum += parseInt(varosTR.querySelector('td:nth-of-type(2)').innerHTML)
        szum += parseInt(varosTR.querySelector('.lakossag').innerHTML)
    }

    return szum
}

function osszTeruletNegyzete(){
    const kijeloltek = document.querySelectorAll('.kijelolt')
    let szum = 0
    for(const varosTR of kijeloltek){
        let ertek = parseFloat(varosTR.querySelector('.terulet').innerHTML)
        szum += ertek*ertek
    }

    return szum
}

function kijelol(esemeny, sor){
    sor.classList.toggle('kijelolt')
    lakossagOutput.innerHTML = osszLakossag()
    teruletOutput.innerHTML  = osszTeruletNegyzete()
}

function kiir(esemeny, cella){
    cella.classList.toggle('kijeloltcella')

    let string = ''
    const kijeloltcellak = tablazat.querySelectorAll('.kijeloltcella')
    for(let i = 0; i < kijeloltcellak.length; i++){
        string += kijeloltcellak[i].innerHTML + ((i == kijeloltcellak.length-1) ? '' : ', ')
    }

    szoveg.innerHTML = string
}

delegal(tablazat, '.varos', 'click', kijelol)
delegal(tablazat, 'td', 'click', kiir)





/*
document.querySelectorAll('tr')[3].dataset.alma = 'valami'
document.querySelectorAll('[data-alma=valami]')
*/