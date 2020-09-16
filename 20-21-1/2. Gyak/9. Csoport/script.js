let d = document.querySelector('div');

console.log(d.innerHTML);
console.log(d.innerText);

d.innerHTML = '<i>alma</i>fa';

let dk = document.querySelectorAll('div');
console.log(dk);
dk[1].innerHTML = 'ez is egy almafa lett';
dk[2].innerHTML = 'ezt a fát átültették';

let keletiOrszagok = document.querySelectorAll('.kelet');
for(orszag of keletiOrszagok){
    console.log(orszag.innerHTML);
}

let lengyelorszag = document.querySelector('#POL');
lengyelorszag.style.color = 'red';
let franciaorszag = document.querySelector('#FRA');
franciaorszag.style.fontSize = '50px';

let lista = document.querySelector('#orszagok');
lista.innerHTML += '<li>Németország</li>';

let allamok = document.querySelector('#allamok');
/*allamok.innerHTML = `
    <ul>
        <li>Texas</li>
        <li>California</li>
        <li>Washington D.C.</li>
    </ul>
`;*/
let allamLista = ['Texas','California','Florida'];
/*allamok.innerHTML = '<ul>';
for(allam of allamLista){
    allamok.innerHTML += `<li>${allam}</li>`;
}
allamok.innerHTML += '</ul>';*/

/*let szoveg = '<ul>';
for(allam of allamLista){
    szoveg += `<li>${allam}</li>`;
}
szoveg += '</ul>';
allamok.innerHTML = szoveg;*/

let ujLista = document.createElement('ul');
for(allam of allamLista){
    let ujListaElem = document.createElement('li');
    ujListaElem.innerText = allam;
    ujLista.appendChild(ujListaElem);
}
allamok.appendChild(ujLista);

// createElement
// feltöltjük tartalommal
// befűzzük a helyére

//document.body