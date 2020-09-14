document
.querySelectorAll('li')
.forEach(elem => elem.style.color = elem.dataset.tipus == 'helyes' ? 'green' : 'red');

/*
let listaelemek = document.querySelectorAll('li');
for(elem of listaelemek){
    if(elem.dataset.tipus == 'helyes'){
        elem.style.color = 'green';
    }else{
        elem.style.color = 'red';
    }
}
*/
//console.log(listaelemek[0].dataset.almaAmiPiros);