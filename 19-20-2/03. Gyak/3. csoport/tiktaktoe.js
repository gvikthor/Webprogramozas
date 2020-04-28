//nézet
let nezetSorok = document.querySelector('#amoba-jatek').querySelectorAll('tr');
let nezetCellak = document.querySelector('#amoba-jatek').querySelectorAll('td');
let info = document.querySelector('#amoba-jatek').querySelector('#infok');
function nezetInicializal(){
    info.innerHTML = `Nincs aktív játék.`;
}
function nezetUjJatek(){
    for(cella of nezetCellak){
        cella.innerHTML = '';
    }
    info.innerHTML = `Új játék kezdődött, X jön.`;
}
function nezetRajzol(oszlop, sor, jatekos){
    nezetSorok[sor].querySelectorAll('td')[oszlop].innerHTML = nezetXO(jatekos);
    info.innerHTML = `Előbb ${nezetXO(jatekos)} lépett.`;
}
function nezetXO(jatekos){
    if(jatekos == 1){
        return 'X';
    }else{
        return 'O';
    }
}
function nezetJatekVege(jatekos){
    info.innerHTML = `${nezetXO(jatekos)} nyert.`;
}


//modell
let jatektabla;
let jatekVegetErt = true;
let jatekos;

function modellUjJatek(){
    jatektabla = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    jatekVegetErt = false;
    jatekos = 1;
    nezetUjJatek();
}
function modellJatekVege(oszlop, sor, jatekos){
    if(
        (jatektabla[oszlop][0] == jatekos && 
         jatektabla[oszlop][1] == jatekos &&
         jatektabla[oszlop][2] == jatekos)
         ||
        (jatektabla[0][sor] == jatekos &&
         jatektabla[1][sor] == jatekos &&
         jatektabla[2][sor] == jatekos)
    ){
        jatekVegetErt = true;
        nezetRajzol(oszlop, sor, jatekos);
        nezetJatekVege(jatekos);
        return true;
    }else{
        if(
            (  jatektabla[0][0] == jatekos &&
            jatektabla[1][1] == jatekos &&
            jatektabla[2][2] == jatekos
            )
        ||
            (
            jatektabla[2][0] == jatekos &&
            jatektabla[1][1] == jatekos &&
            jatektabla[0][2] == jatekos
            )
        ){
            jatekVegetErt = true;
            nezetRajzol(oszlop, sor, jatekos);
            nezetJatekVege(jatekos);
            return true;
        }
        return false;
    }
}
function modellGombNyomas(oszlop, sor){
    if(!jatekVegetErt){
        if(jatektabla[oszlop][sor] == 0){
            jatektabla[oszlop][sor] = jatekos;
            if(!modellJatekVege(oszlop, sor, jatekos)){
                nezetRajzol(oszlop, sor, jatekos);
                if(jatekos == 1){
                    jatekos = 2;
                }else{
                    jatekos = 1;
                }
            }
        }
    }
}


//main
let cellak = document.querySelector('#amoba-jatek').querySelectorAll('td');
let gomb = document.querySelector('#amoba-jatek').querySelector('button');

for(let i = 0; i < cellak.length; i++){
    cellak[i].addEventListener('click', ()=>{
        modellGombNyomas(cellak[i].dataset.oszlop, cellak[i].dataset.sor);
    });
}
gomb.addEventListener('click',()=>{
    modellUjJatek();
});
nezetInicializal();