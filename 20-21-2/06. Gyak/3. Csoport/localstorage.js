const tarhely = window.localStorage
const gomb = document.querySelector('button')
const ertek = document.querySelector('input')

gomb.addEventListener('click', ()=>{
    tarhely.setItem('mentes', JSON.stringify(
        {
            nev: 'Iksz ipszilon',
            eletkor: 25
        }
    ))
})

console.log(JSON.parse(tarhely.getItem('mentes')))

/*
Egy szabályos JSON objektum pl.:
[
    {
        "nev": "Valaki valaki",
        "kor": 35,
        "ferfi": true,
        "gyerekek": [
            {
                "nev": "Valaki Ifj.",
                "kor": 7
            },
            {
                "nev": "Valaki Valami",
                "kor": 5
            }
        ]
    },
    {
        "nev": "Valakiné Valaki Ágnes",
        "kor": 40,
        "ferfi": false,
        "gyerekek": [
            {
                "nev": "Valaki Ifj.",
                "kor": 7
            },
            {
                "nev": "Valaki Valami",
                "kor": 5
            }
        ]
    }
]
*/