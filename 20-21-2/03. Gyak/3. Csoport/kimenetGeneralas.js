const gyumolcsLista = document.querySelector('#gyumolcsok')
const gyumolcsok = [
    {
        nev: 'alma',
        szin: 'red'
    },
    {
        nev: 'korte',
        szin: 'yellow'
    },
    {
        nev: 'szilva',
        szin: 'purple'
    },
    {
        nev: 'barack',
        szin: 'orange'
    }
]

/*
for(const gyumolcs of gyumolcsok){
    gyumolcsLista.innerHTML += `<li>${gyumolcs}</li>`
}
*/

function szinvaltas(esemeny){
    this.style.color = 'lightgreen'
}

function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }


    szulo.addEventListener(mikor, esemenyKezelo);
}

for(const gyumolcs of gyumolcsok){
    const ujListaElem = document.createElement('li')

    ujListaElem.innerHTML = `${gyumolcs.nev} <b>ez egy gyümölcs</b>`
    ujListaElem.style.color = gyumolcs.szin
    ujListaElem.dataset.szin = gyumolcs.szin
    ujListaElem.style.fontSize = '30px'

    //ujListaElem.addEventListener('click', szinvaltas)

    gyumolcsLista.appendChild(ujListaElem)
}

//      ki a szülő?   gyerek? esemény?  mit csinálj (mindig két paraméter!)?
delegal(gyumolcsLista, 'li', 'click', (esemeny, elem) => {
    console.log(elem)
    if(elem.style.color == 'lightblue'){
        elem.style.color = elem.dataset.szin
    }else{
        elem.style.color = 'lightblue'
    }    
})