let szivarvany = document.querySelector('#szivarvany');

function xetHozzafuz(esemeny){
    console.log(esemeny.target); //akire kattintottam
    console.log(this);           //aki meghívta az eventlistenert
}


szivarvany.addEventListener('click', xetHozzafuz);