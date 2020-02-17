let szavak = ['elte', 'gyereelteis', 'csússzelteis', 'elteik', 'eltetátk', 'veled teljes', 'egyetem'];
let lista = document.querySelector('#szavak');

for(szo of szavak){
    let p = document.createElement('p');
    p.innerHTML = szo;
    lista.appendChild(p);
}

let inp = document.querySelector('input');
/*document.querySelector('button').addEventListener('click', ()=>{
    lista.innerHTML = '';
    for(szo of szavak){
        if(szo.includes(inp.value)){
            let p = document.createElement('p');
            p.innerHTML = szo;
            lista.appendChild(p);
        }
    }
});*/

inp.addEventListener('input', ()=>{
    lista.innerHTML = '';
    for(szo of szavak){
        if(szo.includes(inp.value)){
            let p = document.createElement('p');
            p.innerHTML = szo;
            lista.appendChild(p);
            if(inp.value != '' && szo.startsWith(inp.value)){
                p.style.backgroundColor = 'green';
            }
        }
    }
});