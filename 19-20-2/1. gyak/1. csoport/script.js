console.log('Alma')

let a = 5
console.log(a)

let b = '5'
console.log(b)

console.log(a+10)
console.log(b+10)

let c = true
let d = false

if(c || d){
    console.log('igaz')
}else{
    console.log('hamis')
}
if(c && d){
    console.log('igaz')
}else{
    console.log('hamis')
}

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

/////////////////////

let tomb = [1,6,5,'alma',true,5,8,'alma',['alma',true],3]
console.log(tomb)

let filmek = [
    {
        cim: 'Star Wars',
        rendezo: 'George Lucas',
        megjelenes: 1977,
        ertekeles: 10,
        szereplok: [
            {
                nev: 'Mark Hamil',
                karakter: 'Luke Skywalker'
            },
            {
                nev: 'Carrie Fisher',
                karakter: 'Leia Skywalker'
            }
        ]
    },
    {
        cim: 'Avengers',
        rendezo: 'J&A Russeau',
        megjelenes: 2019,
        ertekeles: 9,
        szereplok: [
            {
                nev: 'Chris Hemsworth',
                karakter: 'Thor'
            },
            {
                nev: 'Chris Evans',
                karakter: 'Steve Rogers'
            },
            {
                nev: 'Chris Pratt',
                karakter: 'Star Lord'
            }
        ]
    },
    {
        cim: 'Matrix',
        rendezo: 'Rip',
        megjelenes: 1900,
        ertekeles: 8,
        szereplok: [
            {
                nev: 'Keanu Reeves',
                karakter: 'Neo'
            }
        ]
    },
    {
        cim: 'ELTE IK Promófilm',
        rendezo: 'Rip',
        megjelenes: 2004,
        ertekeles: 2,
        szereplok: [
            {
                nev: 'Nem vállaták fel',
                karakter: ':('
            }
        ]
    }
]

console.log(filmek)


document.getElementById('d1').innerHTML = 'alma'
document.getElementById('d2').innerHTML = 'alma'
document.getElementById('d3').innerHTML = 'alma'
//document.querySelector('#d3').innerHTML = 'alma'

document.querySelector('div').innerHTML = 'körte'

let divek = document.querySelectorAll('div')
for(let i = 0; i < divek.length; i++){
    divek[i].innerHTML = 'szilva'
}
for(div of divek){
    div.innerHTML = 'barack'
}

let dk = document.querySelectorAll('.d')
for(d of dk){
    d.innerHTML = 'répa'
}

///////////////////////////

function korte(){
    console.log('korte')
}

function alma(a){
    console.log('alma'+a)
    return 'körte'
}

function filmSzereplok(filmcim){
    let eredmeny = ''
    let i = 0
    while(i < filmek.length && filmek[i].cim != filmcim){
        i++
    }
    if(i < filmek.length){
        for(szereplo of filmek[i].szereplok){
            eredmeny += `${szereplo.nev} : ${szereplo.karakter} <br>`
        }
    }
    return eredmeny
}
/*
let tablazat = document.querySelector('table')

let tartalom = '<tr><th>Cím</th><th>Rendező</th><th>Megjelenés</th><th>Értékelés</th><th>Szereplők</th></tr>'
for(film of filmek){
    //console.log(alma(5))
    tartalom += `
        <tr>
            <td>${film.cim}</td>
            <td>${film.rendezo}</td>
            <td>${film.megjelenes}</td>
            <td style="font-size: ${film.ertekeles*2}px">${film.ertekeles}</td>
            <td>${filmSzereplok(film.cim)}</td>
        </tr>
    `
}

tablazat.innerHTML = tartalom
*/

let gomb = document.querySelector('button')
//console.log(gomb)
//gomb.addEventListener('click', korte)
//gomb.addEventListener('click', alma(5)) rossz
/*gomb.addEventListener('click', function (){
    alma(5)
})*/
/*gomb.addEventListener('click', ()=>{
    alma(5)
})*/

let nyitva = false

gomb.addEventListener('click', ()=>{
    if(nyitva){
        document.querySelector('table').innerHTML = ''
        gomb.innerHTML = '>'
        nyitva = false
    }else{
        let tablazat = document.querySelector('table')

        let tartalom = '<tr><th>Cím</th><th>Rendező</th><th>Megjelenés</th><th>Értékelés</th><th>Szereplők</th></tr>'
        for(film of filmek){
            //console.log(alma(5))
            tartalom += `
                <tr>
                    <td>${film.cim}</td>
                    <td>${film.rendezo}</td>
                    <td>${film.megjelenes}</td>
                    <td style="font-size: ${film.ertekeles*2}px">${film.ertekeles}</td>
                    <td>${filmSzereplok(film.cim)}</td>
                </tr>
            `
        }

        tablazat.innerHTML = tartalom
        gomb.innerHTML = 'V'
        nyitva = true
    }
})
