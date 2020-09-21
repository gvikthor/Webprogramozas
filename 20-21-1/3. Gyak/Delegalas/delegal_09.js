let szivarvany = document.querySelector('#szivarvany');

function xetHozzafuz(esemeny){
    let esemenyCelja    = esemeny.target;   //akire kattintottam
    let esemenyKezeloje = this;             //aki meghívta az eventlistenert
}


szivarvany.addEventListener('click', xetHozzafuz);