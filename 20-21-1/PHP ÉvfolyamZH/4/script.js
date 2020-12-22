const arany = document.querySelector('#gold')
const ezust = document.querySelector('#silver')
const plusz = document.querySelector('#income')
const minusz = document.querySelector('#spend')
const tablazat = document.querySelector('table')

function frissit(mennyiA, mennyiE, pozitiv){
    fetch(`keres.php?arany=${mennyiA}&ezust=${mennyiE}&szorzo=${pozitiv ? 1 : -1}`)
    .then(valasz => valasz.json())
    .then(eredmeny => {
        if(eredmeny.valtozott){
            const sor = document.createElement('tr')
                let cella = document.createElement('td')
                    cella.innerText = eredmeny.ido
                    sor.appendChild(cella)
                cella = document.createElement('td')
                    cella.innerText = `${eredmeny.arany}g ${eredmeny.ezust}s`
                    sor.appendChild(cella)
                tablazat.appendChild(sor)
        }
    })
}

plusz.addEventListener('click', ()=>{
    frissit(arany.value, ezust.value, true)
})

minusz.addEventListener('click', ()=>{
    frissit(arany.value, ezust.value, false)
})