let szivarvany = document.querySelector('#szivarvany');
//let bekezdesek = szivarvany.querySelectorAll('.szin');

function xetHozzafuz(esemeny){
    esemeny.target.innerHTML += 'X';
    //próbáljunk meg úgy a #szivarvany divbe kattintani, hogy ne egy .szin divbe kattintsunk
    //elkezdi hozzáfűzni az X-eket a #szivarvany div végéhez
}


szivarvany.addEventListener('click', xetHozzafuz);