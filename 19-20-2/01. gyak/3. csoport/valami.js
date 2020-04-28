//console.log("alma")

let a = 5
console.log(a)
let b = '5'
console.log(b)

console.log(a+a)
console.log(a+b)

if(a == b){
    console.log('igaz')
}else{
    console.log('hamis')
}
if(a != b){
    console.log('igaz')
}else{
    console.log('hamis')
}

if(a === b){
    console.log('igaz')
}else{
    console.log('hamis')
}
if(a !== b){
    console.log('igaz')
}else{
    console.log('hamis')
}


//let c = 'alma ' + a + ' körte'
let c = `alma ${a} körte`
console.log(c)

let l1 = true
let l2 = false

if(l1 && l2){
    console.log(1)
}
if(l1 || l2){
    console.log(2)
}

let tomb = [5,7,34,2,'lkdflkj',true,'fskjhdf',45,false]
for(let i = 0; i < tomb.length; i++){
    console.log(tomb[i])
}
for(elem of tomb){
    console.log(elem)
}

////////////////////


let d = document.getElementById('d2')
d.innerHTML = 'ALMA'

document.querySelector('div').innerHTML = 'körte'

let divek = document.querySelectorAll('div')
for(div of divek){
    div.innerHTML += 'szilva'
}

///////////////////////

function fgv1(elso,masodik){
    console.log(elso+5)
    return masodik+10
}

console.log(fgv1(5,7))

////////////////////

/*let filmek = ['Star Wars', 'Avangers', 'Jojo Rabbit']
//let filmekDiv = document.getElementById('filmek')
let filmekDiv = document.querySelector('#filmek')
filmekDiv.innerHTML = ''
for(film of filmek){
    filmekDiv.innerHTML += `${film} <br>`
}*/

/////////////////////
let valamilyenObjektum = {
    cim: "Valami",
    rendezo: "Valaki",
    megjelenes: 2010,
    ertekeles: "10/10"
}
console.log(valamilyenObjektum.cim)
valamilyenObjektum.cim = "Valami más"
console.log(valamilyenObjektum.cim)
console.log(valamilyenObjektum)
///////////////////

let filmek = [
                {
                    cim: "Start Wars",
                    rendezo: "George Lucas",
                    megjelenes: 1977,
                    ertekeles: 9
                },
                {
                    cim: "Avangers",
                    rendezo: "J&A Russeau",
                    megjelenes: 2019,
                    ertekeles: 8
                },
                {
                    cim: "Jojo Rabbit",
                    rendezo: "Taika Waititi",
                    megjelenes: 2019,
                    ertekeles: 10
                },
                {
                    cim: "Twilight",
                    rendezo: "Nem tudom",
                    megjelenes: 3000,
                    ertekeles: 2
                }
            ]
console.log(filmek)
/*
//let filmekDiv = document.getElementById('filmek')
let filmekTablazat = document.querySelector('#filmek')

let tartalom = '<tr><th>Cím</th><th>Rendező</th><th>Megjelenés</th><th>Értékelés</th></tr>'
for(film of filmek){
    tartalom += `<tr>
                    <td>${film.cim}</td>
                    <td>${film.rendezo}</td>
                    <td>${film.megjelenes}</td>
                    <td style="font-size: ${2*film.ertekeles}px;">${film.ertekeles}</td>
                </tr>`
}
filmekTablazat.innerHTML = tartalom*/

let gomb = document.querySelector('button')
console.log(gomb)

function fgv2(){
    console.log("függvény2")
}
gomb.addEventListener('click', ()=>{
    let filmekTablazat = document.querySelector('#filmek')

    let tartalom = '<tr><th>Cím</th><th>Rendező</th><th>Megjelenés</th><th>Értékelés</th></tr>'
    for(film of filmek){
        tartalom += `<tr>
                        <td>${film.cim}</td>
                        <td>${film.rendezo}</td>
                        <td>${film.megjelenes}</td>
                        <td style="font-size: ${2*film.ertekeles}px;">${film.ertekeles}</td>
                    </tr>`
    }
    filmekTablazat.innerHTML = tartalom
})