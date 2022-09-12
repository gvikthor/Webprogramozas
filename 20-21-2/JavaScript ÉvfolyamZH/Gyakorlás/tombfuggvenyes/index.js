const allatok = [
    {
        nev: 'Regő',
        faj: 'oroszlán',
        suly: 205,
    },
    {
        nev: 'Vilmos',
        faj: 'medve',
        suly: 350,
    },
    {
        nev: 'Timi',
        faj: 'mókus',
        suly: 0.5,
    },
    {
        nev: 'Mici',
        faj: 'medve',
        suly: 20,
    },
    {
        nev: 'Paddington',
        faj: 'medve',
        suly: 150,
    }
]

//100 kilónál nehezebb állatok
console.log(
    allatok.filter(a => a.suly > 100).length
)

//100 kilónál nehezebb medvék
console.log(
    allatok.filter(a => a.suly > 100 && a.faj == 'medve').length
)

//100 kilónál nehezebb állatok összsúlya
console.log(
    allatok.filter(a => a.suly > 100).reduce((szum, a) => szum += a.suly, 0)
)

console.log(
    allatok.reduce((szum, a) => szum += a.suly > 100 ? a.suly : 0, 0)
)

//100 kilónál nehezebb állatok súlyának szorzata
console.log(
    allatok.reduce((szum, a) => szum *= a.suly > 100 ? a.suly : 1, 1)
)

//Ajunk meg egy 300 kilónál nehezebb állatot, ha nincs ilyen, akkor pedig azt, hogy nincs
let eredmeny1 = allatok.findIndex(a => a.suly > 300)
console.log(
    eredmeny1 == -1 ? 'Nem volt ilyen állat' : allatok[eredmeny1].nev
)

let eredmeny2 = allatok.filter(a => a.suly > 300)
console.log(
    eredmeny2.length == 0 ? 'Nem volt ilyen állat' : eredmeny2[0].nev
)

//Adjuk meg minden szám négyzetét!
const tomb = [1,2,3,4,5,6]
console.log(
    tomb.map(sz => sz*sz)
)
