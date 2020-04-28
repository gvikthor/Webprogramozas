console.log("Alma")

let a = '5'
let b = 5

console.log(a+b)
console.log(b+a)

if(a == b){
    console.log('igaz')
}else{
    console.log('hamis')
}

if(a === b){
    console.log('igaz')
}else{
    console.log('hamis')
}

if(a != b){
    console.log('igaz')
}else{
    console.log('hamis')
}

if(a !== b){
    console.log('igaz')
}else{
    console.log('hamis')
}

let c = true
let d = false
if(c && d){
    console.log('alkma')
}
if(c || d){
    console.log('alkma')
}
//////////////////
/*let bodyVar = document.querySelector('body')
console.log(bodyVar)
bodyVar.innerHTML = 'Alma'
bodyVar.innerHTML = bodyVar.innerHTML+'Körte'
bodyVar.innerHTML += 'Szilva'*/
//////////////////
/*let bodyVar = document.querySelector('body')
let tomb = ['alma','körte','szilva']
for(let i = 0; i < tomb.length; i++){
    //bodyVar.innerHTML += tomb[i] + '<br>'
    bodyVar.innerHTML += `asjcgsdhgdh ysfk.vjhxdflkbvjh ${tomb[i]}<br>`
}*/
/*
let tablazat = document.querySelector('table')
let adatok = ['Star Wars', 'Lord of the Rings', 'Jojo Rabbit']
let szoveg = ''
for(adat of adatok){
    szoveg += `<tr><td>${adat}</td></tr>`
}

tablazat.innerHTML = szoveg*/
/*
let tablazat = document.querySelector('table')
let adatok = [
                ['Star Wars', 'George Lucas', '7/10'],
                ['Lord of the Rings', 'Valaki', '7/10'],
                ['Jojo Rabbit', 'Taika Waititi', '9/10']
            ]
let szoveg = ''
for(film of adatok){
    szoveg += '<tr>'
    for(adat of film){
        szoveg += `<td>${adat}</td>`
    }
    szoveg += '</tr>'
}*/
/*
let e = {
    cim: 'Star Wars',
    megjelenes: 1977,
    jofilm: true
}
console.log(e.cim)
e.cim = 'A New Hope'
console.log(e.cim)




let tablazat = document.querySelector('table')
let adatok = [
               {
                    cim: 'Star Wars',
                    megjelenes: 1977,
                    rendezo: 'George Lucas'
                },
               {
                    cim: 'Lord of the Rings',
                    megjelenes: 2069,
                    rendezo: 'Valaki'
                },
               {
                    cim: 'Jojo Rabbit',
                    megjelenes: 2019,
                    rendezo: 'Taika Waititi'
                }
            ]
let szoveg = '<tr><th>Cím</th><th>Megjelenés</th><th>Rendező</th></tr>'
for(film of adatok){
    szoveg += `
        <tr>
            <td>${film.cim}</td>
            <td>${film.megjelenes}</td>
            <td>${film.rendezo}</td>
        </tr>
    `
}

tablazat.innerHTML = szoveg*/

function fgv(){
    console.log('alma')
    return 6
}
console.log(fgv())

function fgv2(a, b, c ,d){
    console.log(a)
}
fgv2('egy almafa',2,true,[])

function tablazatKiir(){
    let tablazat = document.querySelector('table')
    let adatok = [
                {
                        cim: 'Star Wars',
                        megjelenes: 1977,
                        rendezo: 'George Lucas'
                    },
                {
                        cim: 'Lord of the Rings',
                        megjelenes: 2069,
                        rendezo: 'Valaki'
                    },
                {
                        cim: 'Jojo Rabbit',
                        megjelenes: 2019,
                        rendezo: 'Taika Waititi'
                    }
                ]
    let szoveg = '<tr><th>Cím</th><th>Megjelenés</th><th>Rendező</th></tr>'
    for(film of adatok){
        szoveg += `
            <tr>
                <td>${film.cim}</td>
                <td>${film.megjelenes}</td>
                <td>${film.rendezo}</td>
            </tr>
        `
    }

    tablazat.innerHTML = szoveg
}
let gomb = document.querySelector('button')
//gomb.addEventListener('click',tablazatKiir)
//gomb.addEventListener('click', function(){
gomb.addEventListener('click', () => {
    let tablazat = document.querySelector('table')
    let adatok = [
                {
                        cim: 'Star Wars',
                        megjelenes: 1977,
                        rendezo: 'George Lucas'
                    },
                {
                        cim: 'Lord of the Rings',
                        megjelenes: 2069,
                        rendezo: 'Valaki'
                    },
                {
                        cim: 'Jojo Rabbit',
                        megjelenes: 2019,
                        rendezo: 'Taika Waititi'
                    }
                ]
    let szoveg = '<tr><th>Cím</th><th>Megjelenés</th><th>Rendező</th></tr>'
    for(film of adatok){
        szoveg += `
            <tr>
                <td>${film.cim}</td>
                <td>${film.megjelenes}</td>
                <td>${film.rendezo}</td>
            </tr>
        `
    }

    tablazat.innerHTML = szoveg
})

for(let i = 0; i < 10; i++){
    gomb.addEventListener('click', () => {
        fgv2(i,1,2,3)
    })
}

///////////////////////////////

let divek = document.querySelectorAll('div')
for(div of divek){
    div.innerHTML = 'alma'
}

document.getElementById('id1').innerHTML = 'körte'
document.querySelector('#id2').innerHTML = 'szilva'
let div3 = document.querySelector('#id3')
for(let i = 10; i < 50; i += 5){
    div3.innerHTML += `<div style="font-size: ${i}px;">Alma</div>`
}
