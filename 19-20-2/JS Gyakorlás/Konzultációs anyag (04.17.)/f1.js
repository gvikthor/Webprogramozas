let tablazat = document.querySelector('tbody');
let sorok = tablazat.querySelectorAll('tr');
let gomb = document.querySelector('button');
let input = document.querySelector('input');

gomb.addEventListener('click',()=>{
    for(sor of sorok){
        let cellak = sor.querySelectorAll('td');
        let meret =    parseFloat(cellak[1].innerHTML.split('N')[0]);
        let szazalek = parseFloat(cellak[2].innerHTML.split('%')[0]);
        let letoltve = meret*(szazalek/100);
        let elorehaladas = parseFloat(input.value);

        if(szazalek < 100){
            console.log(`${cellak[0].innerHTML} méret: ${meret}, letöltve: ${letoltve}`);
            let ujErtek = ((letoltve + elorehaladas)/meret)*100;
            if(ujErtek > 100){
                ujErtek = 100;
            }
            cellak[2].innerHTML = `${ujErtek}%`;
        }
    }
});