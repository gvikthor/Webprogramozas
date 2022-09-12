const gombIdo = document.querySelector('#ido')
const gombFilm = document.querySelector('#film')
const lista = document.querySelector('ul')

/*
gombIdo.addEventListener('click', ()=>{
    fetch('ido.php')
    .then(valasz => valasz.text())
    .then(eredmeny => gombIdo.innerHTML = eredmeny)
})

gombFilm.addEventListener('click', ()=>{
    fetch('adatok.php')
    .then(valasz => valasz.json())
    .then(eredmeny => {
        for(const film of eredmeny){
            const ujelem = document.createElement('li')
            ujelem.innerHTML = film.cim
            lista.appendChild(ujelem)
        }
    })
})
*/

/*
fetch('valami.php')
.then(valasz => valasz.formatum())
.then(eredmeny => {

})
*/


function fetchke(celnev, fuggveny, json = true){
    if(json) fetch(celnev).then(v => v.json()).then(e => fuggveny(e))
    else     fetch(celnev).then(v => v.text()).then(e => fuggveny(e))
}

gombIdo.addEventListener('click', ()=>{
    fetchke('ido.php', ido => {
        gombIdo.innerHTML = ido
    }, false)
})

function filmListaz(filmek){
    for(const film of filmek){
        const ujelem = document.createElement('li')
        ujelem.innerHTML = film.cim
        lista.appendChild(ujelem)
    }
}

gombFilm.addEventListener('click', ()=> {
    fetchke('adatok.php', filmListaz)
})
