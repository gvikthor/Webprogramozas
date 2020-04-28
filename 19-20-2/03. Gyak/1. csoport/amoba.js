//nézet
let jatekter = document.querySelector('#amoba-jatek');
let tablazat = jatekter.querySelector('table');
let jatekSorok = tablazat.querySelectorAll('tr');
let jatekCellak = tablazat.querySelectorAll('td');
let ujJatekGomb = jatekter.querySelector('button');
let info = jatekter.querySelector('div');

function nezetCellaFrissit(oszlop, sor, jatekos){
    jatekSorok[sor].querySelectorAll('td')[oszlop].innerHTML = szamToXO(jatekos);
}

function nezetUjJatek(){
    info.innerHTML = '';
    for(cella of jatekCellak){
        cella.innerHTML = '';
    }
}
function nezetJatekVege(jatekos){
    info.innerHTML = `${szamToXO(jatekos)} játékos nyert.`;
}
function szamToXO(szam){
    /*if(szam == 1){
        return 'X';
    }else{
        return 'O';
    }*/
    // logikai ? haIgaz : haHamis
    // osszeg += tomb[i]%2==0 ? tomb[i] : 0
    return szam == 1 ? 'X' : 'O';
}

//modell
let jatekos;
let jatektabla;
let jatekFut;

function jatekosValtas(){
    if(jatekos == 1){
        jatekos = 2;
    }else{
        jatekos = 1;
    }
}
function ujJatek(){
    jatektabla = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    jatekos = 1;
    nezetUjJatek();
    jatekFut = true;
}
function jatekVegeTeszt(oszlop, sor, jatekos){
    if(
        (
            jatektabla[oszlop][0] == jatekos &&
            jatektabla[oszlop][1] == jatekos &&
            jatektabla[oszlop][2] == jatekos 
        )
        ||
        (
            jatektabla[0][sor] == jatekos &&
            jatektabla[1][sor] == jatekos &&
            jatektabla[2][sor] == jatekos 
        )
        ||
        (
            jatektabla[0][0] == jatekos &&
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
        jatekFut = false;
        nezetJatekVege(jatekos);
        return true;
    }else{
        return false;
    }
}

for(let i = 0; i < jatekCellak.length; i++){
    jatekCellak[i].addEventListener('click', ()=>{
        if(jatekFut){
            let oszlop = jatekCellak[i].dataset.oszlop;
            let sor    = jatekCellak[i].dataset.sor

            console.log(`Oszlop: ${oszlop}, Sor: ${sor}`);
            if(jatektabla[oszlop][sor] == 0){
                jatektabla[oszlop][sor] = jatekos;
                nezetCellaFrissit(oszlop, sor, jatekos);
                if(!jatekVegeTeszt(oszlop, sor, jatekos)){
                    jatekosValtas();
                }

            }
        }
    });
}
ujJatekGomb.addEventListener('click',()=>{
    ujJatek();
});

//main
ujJatek();