let szobafesto = document.querySelector('button');
let szin = document.querySelector('input');

function kifest(esemeny){
    if(document.body.style.backgroundColor == szin.value){
        document.body.style.backgroundColor = 'white';
    }else{
        document.body.style.backgroundColor = szin.value;
    }
}

szobafesto.addEventListener('click', kifest);