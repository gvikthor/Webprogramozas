let kapcsolo = document.querySelector('button');
let fenySzin = document.querySelector('input');

document.body.style.backgroundColor = 'black';
let villanyFelkapcsolva = false;

kapcsolo.addEventListener('click', ()=>{
    /*
    if(villanyFelkapcsolva){
        document.body.style.backgroundColor = 'black';
        villanyFelkapcsolva = false;
    }else{
        document.body.style.backgroundColor = 'yellow';
        villanyFelkapcsolva = true;
    }
    */

    document.body.style.backgroundColor = villanyFelkapcsolva ? 'black' : fenySzin.value;
    villanyFelkapcsolva = !villanyFelkapcsolva;
});