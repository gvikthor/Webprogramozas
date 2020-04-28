let szavak = ['aaaaaaaaaa','aaaaaaaaaaaa','aaaaaaaaaaaaaa','aaaaaaaaaaaaaaaa','alma', 'almafa', 'faalma', 'almalé', 'körte', 'elte'];

let lista = document.querySelector('#lista');
for(szo of szavak){
    let p = document.createElement('p');
    p.innerHTML = szo;
    lista.appendChild(p);
}

let inputMezo = document.querySelector('input');
let timer;
inputMezo.addEventListener('input', ()=>{
    //console.log( inputMezo.value );
    clearTimeout(timer);
    timer = setTimeout(()=>{
        lista.innerHTML = '';
        for(szo of szavak){
            if(szo.includes(inputMezo.value)){
                let p = document.createElement('p');
                p.innerHTML = szo;
                if(inputMezo.value != '' && szo.startsWith(inputMezo.value)){
                    p.style.backgroundColor = 'green';
                }
                lista.appendChild(p);
            }
        }
    },500);
});


/////////////////////////////////////

let a = setTimeout(()=>{
    console.log('alma');
},3000);

a = setTimeout(()=>{
    console.log('körte');
},4000);
clearTimeout(a);