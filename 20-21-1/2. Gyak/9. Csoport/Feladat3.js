/*let pelda = document.querySelector('#peldaDiv');
console.log(pelda.dataset.szin);
pelda.dataset.figura = 'gyalog';
pelda.dataset.lepes = '50';*/

/*let lista = document.querySelectorAll('li');
for(elem of lista){
    if(elem.dataset.tipus == 'helyes'){
        elem.style.color = 'green';
    }else{
        elem.style.color = 'red';
    }
}*/

document
  .querySelectorAll('li')
  .forEach(elem => elem.style.color = elem.dataset.tipus == 'helyes' ? 'green' : 'red');
    