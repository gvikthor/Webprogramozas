let villanykapcsolo = document.querySelector('#gomb');

function villanyFelkapcsol(esemeny){
    console.log(esemeny);
}

function egerRavisz(){
    console.log('mouseover');
}

function egerMozog(){
    console.log('mousemove');
}

villanykapcsolo.addEventListener('click', villanyFelkapcsol);
villanykapcsolo.addEventListener('mouseover', egerRavisz);
villanykapcsolo.addEventListener('mousemove', egerMozog);

villanykapcsolo.removeEventListener('mousemove', egerMozog);

villanykapcsolo.addEventListener('click', function (esemeny){
    console.log('névtelen függvény kattintáskor');
});

villanykapcsolo.addEventListener('click', (esemeny)=>{
    console.log('arrow funcition kattintáskor');
});