let szivarvany = document.querySelector('#szivarvany');

function xetHozzafuz(esemeny){
    let esemenyCelja    = esemeny.target;
    let esemenyKezeloje = this;

    if(esemenyCelja.matches('.szin')){
        esemenyCelja.innerHTML += 'X';
    }
    //ez megoldotta a problémát, hogy a #szivarvany diven belülre, de egy .szin diven kívülre kattintva is plusz x-ek jelennek meg
    //viszont innentől kezdve ha a .szin divben van még valami, nem fog működni
    //pl. ha <div class="szin" ...><b>X</b></div> van valahol, azt hiába nyomogatom
}


szivarvany.addEventListener('click', xetHozzafuz);