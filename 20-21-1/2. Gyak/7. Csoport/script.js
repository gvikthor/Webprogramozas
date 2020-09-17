let d = document.querySelector('div');
console.log(d);
d.innerHTML = 'Viktória Királynő';
d.innerHTML += ' Őfelsége';

/*let britishIsles = document.querySelector('#BritishIsles');
let listItems = britishIsles.querySelectorAll('li');*/
let listItems = document.querySelectorAll('#BritishIsles li');
console.log(listItems);

for(listItem of listItems){
    console.log(listItem.innerHTML);
}

let australia = document.querySelector('#AST');
console.log(australia.innerHTML);

let gyarmatok = document.querySelectorAll('.gyarmat');
for(gyarmat of gyarmatok){
    console.log(`Találtam egy új gyarmatot: ${gyarmat.innerHTML}`);
}

let gyarmatokLista = document.querySelector('#gyarmatok');
gyarmatokLista.innerHTML += '<li>Új-Zéland</li>';

let szovetsegesLista = ['Franciaország','Lengyelország','USA'];

let szovetsegesUL = document.createElement('ul');
    for(szovetseges of szovetsegesLista){
        let ujLI = document.createElement('li');
            ujLI.innerText = szovetseges;
            ujLI.style.color = 'red';
        szovetsegesUL.appendChild(ujLI);
    }
document.body.appendChild(szovetsegesUL);

let tengelyLista = ['Németország','Olaszország','Japán'];

let tengelyUL = document.createElement('ul');
    for(tengelyhatalom of tengelyLista){
        let ujLI = document.createElement('li');
            ujLI.innerText = tengelyhatalom;
            ujLI.style.color = 'gray';
        tengelyUL.appendChild(ujLI);
    }
document.body.appendChild(tengelyUL);

// létrehozás       createElement
// feltöltés        innerText / rekurzió
// befűzés          appendChild

for(let i = 10; i < 100; i += 10){
    let bekezdes = document.createElement('p');
        bekezdes.innerText = 'A katalógus javítja a jegyeimet :))))';
        bekezdes.style.fontSize = `${i}px`;
        bekezdes.style.color = `#13${i}4B`;
    document.body.appendChild(bekezdes);
}