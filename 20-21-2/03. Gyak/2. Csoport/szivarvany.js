/*
const szinek = document.querySelectorAll('.szin')
for(const szin of szinek){
    szin.addEventListener('click', ()=>{
        szin.innerHTML += 'x'
    })
}
*/


//a delegal függvény most benne volt egy másik js fileban
const szivarvany = document.querySelector('#szivarvany')
delegal(szivarvany, '.szin', 'click', (esemeny, elem) => {
    elem.innerHTML += 'x'
})



/*
Generálj egy listát nevekkel
[{
    nev: 'Nándor',
    kor: 20
},
{
    nev: 'Áron',
    kor: 21
},
{
    nev: 'Gergő',
    kor: 25
},
{
    nev: 'István',
    kor: 20
},
{
    nev: 'Péter',
    kor: 23
},
{
    nev:'Tamás',
    kor: 23
}]
<ul>
    <li></li>
    ...
</ul>
ha rákattintunk egy névre, változzon át az ember korává, újra rákattintunk, vissza a nevére
*/