let szivarvany = document.querySelector('#szivarvany');

function xetHozzafuz(esemeny){
    let esemenyCelja    = esemeny.target;
    let esemenyKezeloje = this;

    esemenyCelja.innerHTML += 'X';
    //gyakorlatilag semmi nem változott 07-hez képest, csak elnevztük a dolgainkat
    //minek kellett ez?
}


szivarvany.addEventListener('click', xetHozzafuz);