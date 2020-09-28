let szo = 'katalógus';
let sor = document.querySelector('tr');
let tippGomb = document.querySelector('button');
let tipp = document.querySelector('input');
let rosszTippek = document.querySelector('#rossz-tippek');
let lepesekDiv = document.querySelector('#lepesek');
let cellak, felhasznaloiInput, lepesek, jatekban;
let kitalaltBetuk = [];


for (const betu of szo) {
    let ujCella = document.createElement('td');
    kitalaltBetuk.push(false);
    sor.appendChild(ujCella);
}
cellak = document.querySelectorAll('td');

lepesek = 10;
jatekban = true;
tippGomb.addEventListener('click', () => {
    if (jatekban) {
        felhasznaloiInput = tipp.value;
        let voltIlyen = false;
        for (i = 0; i < szo.length; i++) {
            if (felhasznaloiInput == szo[i]) {
                cellak[i].innerHTML = szo[i];
                voltIlyen = true;
                kitalaltBetuk[i] = true;
            }
        }

        if (!voltIlyen) {
            rosszTippek.innerHTML

                += ' ' + felhasznaloiInput;
            lepesek--;
            lepesekDiv.innerHTML = `${lepesek} lépésed van hátra.`;
            if (lepesek == 0) {
                jatekban = false;
                lepesekDiv.innerHTML = 'Vesztettél';
            }
        }

        else {
            let nyert = true;
            for (const kitalaltBetu of kitalaltBetuk) {
                nyert = nyert && kitalaltBetu;
            }
            if (nyert) {
                jatekban = false;
                lepesekDiv.innerHTML = 'Nyertél';
            }
        }
    }


});