let jatekValtozok;
function mInic(){
    jatekValtozok = {
        jatekTabla: [ //0-semmi, 1-O, 2-X
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ],
        vegetErt: true,
        koviJatekos: 1
    };
}
function mUjJatek(){
    mInic();
    jatekValtozok.vegetErt = false;
}
function mGomb(oszlop, sor){
    if(jatekValtozok.vegetErt){ return; }

    if(jatekValtozok.jatekTabla[oszlop][sor] == 0){
        nRajzol(oszlop, sor, jatekValtozok.koviJatekos);
        if(jatekValtozok.koviJatekos == 1){
            jatekValtozok.koviJatekos = 2;
        }else{
            jatekValtozok.koviJatekos = 1;
        }
    }
}


let nezetValtozok;
function nInic(){
    nezetValtozok = {
        tablazat: document.querySelector('#thor-tiktaktoe').querySelector('table'),
        cellak: document.querySelector('#thor-tiktaktoe').querySelectorAll('td'),
        ujJatekGomb: document.querySelector('#thor-tiktaktoe').querySelector('button')
    }
    nezetValtozok.ujJatekGomb.addEventListener('click', ()=>{
        mUjJatek();
    });
    for(let i = 0; i < nezetValtozok.cellak.length; i++){
        nezetValtozok.cellak[i].addEventListener('click', ()=>{
            mGomb(nezetValtozok.cellak[i].dataset.oszlop, nezetValtozok.cellak[i].dataset.sor);
        });
    }
}
function nRajzol(oszlop, sor, ertek){
    nezetValtozok.tablazat.querySelectorAll('tr')[sor].querySelectorAll('td')[oszlop].innerHTML = ertek;
}


mInic();
nInic();