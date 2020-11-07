const placesInput = document.querySelector('#places')
const speciesInput = document.querySelector('#species')
const button = document.querySelector('#btn-generate')
const tableContainer = document.querySelector('#table-container')
const task1 = document.querySelector('#task-1')
const task2 = document.querySelector('#task-2')
const task3 = document.querySelector('#task-3')
const task4 = document.querySelector('#task-4')
const task5 = document.querySelector('#task-5')

let matrix = []

function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if (esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }
    szulo.addEventListener(mikor, esemenyKezelo);
}
const tablazat = document.createElement('table');

button.addEventListener('click', onGenerate)
function onGenerate(e){
    const n = placesInput.valueAsNumber
    const m = speciesInput.valueAsNumber

    matrix = generateMatrix(n, m)
    console.log(matrix);

    //b. A "Generate table" gombra kattintva a table-container azonosítójú elemben jelenítsd meg JavaScript segítségével a matrix változóban tárolt mátrixot HTML táblázatként (table, tr, td elemeket használva)!
    tableContainer.innerHTML = '';
    let sorszam = 0;
    for(const sor of matrix){
        let ujSor = document.createElement('tr');
        let cellaszam = 0;
        for(const cella of sor){
            let ujCella = document.createElement('td');
            ujCella.innerHTML = cella;
            ujCella.dataset.sor = sorszam;
            ujCella.dataset.cella = cellaszam;
            ujSor.appendChild(ujCella);
            cellaszam++;
        }
        sorszam++;
        tablazat.appendChild(ujSor);
    }
    tableContainer.appendChild(tablazat);

    ellenoriz();
}

function generateMatrix(n, m){
    const matrix = []
    for(let i = 0; i < n; i++){
        const row = []
        for (let j = 0; j < m; j++){
            row.push(0)
        }
        matrix.push(row)
    }
    return matrix
}


delegal(tablazat, 'td', 'click', (esemeny, elem)=>{
    //c. A táblázat egy cellájára kattintva írd ki a konzolra az adott cella sor,oszlop koordinátáját! Használj delegálást, ha tudsz, ld. d. pont!
    //d. A c. feladatot úgy oldd meg, hogy csak egy elemhez van eseménykezelő kötve (delegálás)!
    let s = elem.dataset.sor, o = elem.dataset.cella;
    console.log(s, o);
    elem.innerHTML = parseInt(elem.innerHTML) + 1;
    matrix[s][o]++;

    ellenoriz();
});

function ellenoriz(){
    //f. A task-1 azonosítójú elembe írd ki ("Yes" vagy "No" szöveggel), hogy láttak-e madarat a megfigyeltek közül az első helységben (a mátrix első sorában van-e 0-tól eltérő érték)!
    task1.innerHTML = matrix[0].some(m => m > 0) ? 'Yes' : 'No';
    
    //g. A task-2 azonosítójú elembe írd ki, hogy hány helységben láttak valamelyik madárfajból 10-nél többet (hány sorban van olyan cella, aminek az értéke nagyobb, mint 10)!
    task2.innerHTML = matrix.filter(sor => sor.some(m => m > 10)).length;

    //h. A task-3 azonosítójú elembe írd ki egy olyan helység sorszámát, ahol a madár se jár (egyik madárfajból se észleltek egyet sem)! Ha nem létezik ilyen helység, akkor ugyanide írd ki, hogy "No"!
    let sorIndex = matrix.indexOf(matrix.find(sor => sor.some(m => m == 0)));
    task3.innerHTML = sorIndex == -1 ? 'No' : sorIndex;
}
