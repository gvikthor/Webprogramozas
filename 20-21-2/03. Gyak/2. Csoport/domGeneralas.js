const gyumolcsLista = document.querySelector('#gyumolcsok')
console.log(gyumolcsLista.dataset.valami)

const gyumolcsok = [
    {
        nev: 'alma',
        szin: 'red'
    },
    {
        nev: 'szilva',
        szin: '#a145d6'
    },
    {
        nev: 'körte',
        szin: 'yellow'
    },
    {
        nev: 'narancs',
        szin: 'orange'
    }
]

/*
for(const gyumolcs of gyumolcsok){
    gyumolcsLista.innerHTML += `<li>${gyumolcs}</li>`
}
*/

for(const gyumolcs of gyumolcsok){
    const ujListaElem = document.createElement('li')
    gyumolcsLista.appendChild(ujListaElem)

    ujListaElem.innerHTML = gyumolcs.nev
    ujListaElem.style.backgroundColor = gyumolcs.szin
    ujListaElem.dataset.szin = gyumolcs.szin

    /*
    ujListaElem.addEventListener('click', ()=>{
        if(ujListaElem.style.backgroundColor == 'green'){
            ujListaElem.style.backgroundColor = ujListaElem.dataset.szin
        }else{
            ujListaElem.style.backgroundColor = 'green'
        }
    })
    */
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


delegal(gyumolcsLista, 'li', 'click', (esemeny, elem)=>{
    console.log(esemeny)
    if(elem.style.backgroundColor == 'lightgreen'){
        elem.style.backgroundColor = elem.dataset.szin
    }else{
        elem.style.backgroundColor = 'lightgreen'
    }
})

/*delegal(szuloElem, 'li b div .alma #sarga', 'esemeny', (esemeny, elem)=>{

})*/