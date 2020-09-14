let div = document.querySelector('div');
console.log(div);
console.log(div.innerHTML);
div.innerHTML = 'Neptun :)';
div.style.color = 'blue';

let divek = document.querySelectorAll('div');
console.log(divek);
divek[1].innerHTML = 'kék';
divek[2].style.fontSize = '50px';
divek[3].innerHTML = 'esőfelhő';

let fa = document.querySelector('#almafa');
console.log(fa.innerHTML);

let termesek = fa.querySelectorAll('.termes');
for(alma of termesek){
    console.log(alma);
}

let uveg = document.querySelector('#keverouveg');

/* rossz
uveg.innerHTML = '<ul>';
uveg.innerHTML += '<li>víz</li>';
for(alma of termesek){
    uveg.innerHTML += `<li>${alma.innerHTML}</li>`;
}
uveg.innerHTML += '</ul>';*/

/* szöveges
let szoveg = '<ul>';
szoveg += '<li>víz</li>';
for(alma of termesek){
    szoveg += `<li>${alma.innerHTML}</li>`;
}
szoveg += '</ul>';
uveg.innerHTML = szoveg;*/

let ujLista = document.createElement('ul');
    let ujListaElem = document.createElement('li');
    ujListaElem.innerHTML = 'víz';
    ujLista.appendChild(ujListaElem);
    for(alma of termesek){
        ujListaElem = document.createElement('li');
        ujListaElem.innerHTML = alma.innerHTML;
        ujLista.appendChild(ujListaElem);
    }
uveg.appendChild(ujLista);

/*
CREATE
    INNERHTML/GYEREKEK LÉTREHOZÁSA
HOZZÁFŰZ
*/

let fontos = document.querySelector('#fontos');
for(let i = 10; i < 100; i += 10){
    let ujBekezdes = document.createElement('p');
    ujBekezdes.style.fontSize = `${i}px`;
    ujBekezdes.style.color = `#13${i}4B`;
    ujBekezdes.innerText = 'A katalógus javítja a jegyeimet :))))))';
    fontos.appendChild(ujBekezdes);
}

console.log(document.body); //ez a teljes body a dokumentumban