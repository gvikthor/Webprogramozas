function delegate(parent,child,type,toDo){
    function esemenyKezelo(event){
        let handlerElem = this;
        let sourceElem = event.target;
        let closestElem = sourceElem.closest(child);

        if(handlerElem.contains(closestElem)) toDo(event,closestElem);
    }

    parent.addEventListener(type,esemenyKezelo);
}

let elso = document.querySelector('#elso');
let masodik = document.querySelector('#masodik');
let aktMuv = document.querySelector('#aktMuv');
let szamokDiv = document.querySelector('#szamok');
/*let szamGombok = szamokDiv.querySelectorAll('button');

for(let i = 0; i < szamGombok.length; i++){
    szamGombok[i].addEventListener('click', ()=>{
        let kivalasztva = document.querySelector('.kivalasztva');

        if(kivalasztva.innerHTML == '0'){
            kivalasztva.innerHTML = szamGombok[i].innerHTML;
        }else{
            kivalasztva.innerHTML += szamGombok[i].innerHTML;
        }
    });
}*/

function szamBeir(event,elem){
    let kivalasztva = document.querySelector('.kivalasztva');
    if(kivalasztva.innerHTML == '0'){
        kivalasztva.innerHTML = elem.innerHTML;
    }else{
        kivalasztva.innerHTML += elem.innerHTML;
    }
}
delegate(szamokDiv,'button','click',szamBeir);

document.querySelector('#valt').addEventListener('click',()=>{
    elso.classList.toggle('kivalasztva');
    masodik.classList.toggle('kivalasztva');
});

let muveletekDiv = document.querySelector('#muveletek');
/*let muveletGombok = document.querySelectorAll('.muvelet');
for(let i = 0; i < muveletGombok.length; i++){
    muveletGombok[i].addEventListener('click', ()=>{
        aktMuv.innerHTML = muveletGombok[i].innerHTML;
    });
}*/
function muveletAtir(event,elem){
    aktMuv.innerHTML = elem.innerHTML;
}
delegate(muveletekDiv,'.muvelet','click',muveletAtir);

document.querySelector('#egyenlo').addEventListener('click', ()=>{
    let a = parseInt(elso.innerHTML);
    let b = parseInt(masodik.innerHTML);

    if(aktMuv.innerHTML == '+'){
        elso.innerHTML = a+b;
        masodik.innerHTML = '0';
    }else if(aktMuv.innerHTML == '-'){
        elso.innerHTML = a-b;
        masodik.innerHTML = '0';
    }else if(aktMuv.innerHTML == '*'){
        elso.innerHTML = a*b;
        masodik.innerHTML = '0';
    }else if(aktMuv.innerHTML == '/'){
        elso.innerHTML = a/b;
        masodik.innerHTML = '0';
    }
});

document.querySelector('#torol').addEventListener('click', ()=>{
    document.querySelector('.kivalasztva').innerHTML = '0';
});