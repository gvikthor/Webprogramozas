const urhajok = [
    {
        nev: 'ZOMG Kisüzemi Szállító',
        tomeg: 1550,
        tipus: 'teher',
        terhelhetoseg: 2850,
        megrendelok: [
            {
                ugyfel: 'Travel-Y',
                mennyiseg: 15,
                hatarido: 2026
            },
            {
                ugyfel: 'Kuat Drive Yards',
                mennyiseg: 50,
                hatarido: 2027
            },
            {
                ugyfel: 'IKÆ Bolygóberendezési Üzletlánc',
                mennyiseg: 170,
                hatarido: 2028
            }
        ]
    },
    {
        nev: 'Vizsla Model S',
        tomeg: 600,
        tipus: 'személy',
        utasszam: 5,
        megrendelok: [
            {
                ugyfel: 'Pézsma Előd',
                mennyiseg: 1,
                hatarido: 2022
            }
        ]
    },
    {
        nev: 'Century Hawk',
        tomeg: 700,
        tipus: 'személy',
        utasszam: 15,
        megrendelok: [
            {
                ugyfel: 'Egyke Hugó',
                mennyiseg: 1,
                hatarido: 2023
            },
            {
                ugyfel: 'Károlyi Lajos',
                mennyiseg: 1,
                hatarido: 2023
            },
            {
                ugyfel: 'Huttasi Jakab',
                mennyiseg: 1,
                hatarido: 2023
            }
        ]
    },
    {
        nev: 'IMP SD II. flottalogisztikai főjármű',
        tomeg: 15700,
        tipus: 'teher',
        terhelhetoseg: 97150,
        megrendelok: [
            {
                ugyfel: 'Királyi Haditengerészet',
                mennyiseg: 15,
                hatarido: 2028
            },
            {
                ugyfel: 'Kuat Drive Yards',
                mennyiseg: 30,
                hatarido: 2024
            },
            {
                ugyfel: 'Igazságot a Plútónak Alapítvány',
                mennyiseg: 75,
                hatarido: 2021
            },
            {
                ugyfel: 'Lego Group',
                mennyiseg: 1,
                hatarido: 2020
            }
        ]
    },
    {
        nev: 'Ikarus 2187',
        tomeg: 1800,
        tipus: 'személy',
        utasszam: 170,
        megrendelok: [
            {
                ugyfel: 'Betelgeuse Közlekedési Központ',
                mennyiseg: 1000,
                hatarido: 2023
            },
            {
                ugyfel: 'Kuat Drive Yards',
                mennyiseg: 130,
                hatarido: 2026
            }
        ]
    }
]

//1. Feladat - 1500Yoteon
const f1 = document.querySelector('#f1')
urhajok
    .filter(urhajo => urhajo.tomeg >= 1500)
    .forEach(urhajo => f1.appendChild(document.createElement('li')).innerHTML = urhajo.nev)ű
    


//2. Feladat - Egy megrendelő
const f2 = document.querySelector('#f2')
const f2index = urhajok.findIndex(urhajo => urhajo.megrendelok.length == 1)
f2.innerHTML = f2index == -1 ? 'Nincs ilyen űrhajó' : urhajok[f2index].nev



//3. Feladat - 5db IMP SD II.
const f3 = document.querySelector('#f3')
urhajok
    .find(urhajo => urhajo.nev == 'IMP SD II. flottalogisztikai főjármű')
    .megrendelok
    .filter(megrendelo => megrendelo.mennyiseg >= 5 && megrendelo.hatarido < 2025)
    .forEach(megrendelo => f3.appendChild(document.createElement('li')).innerHTML = megrendelo.ugyfel)



//4. Feladat - 15.000-nél több utas
const f4 = document.querySelector('#f4')
f4.innerHTML = urhajok
                    .filter(urhajo => urhajo.tipus == 'személy')
                    .find(urhajo =>
                        urhajo.megrendelok.some(megrendelo => megrendelo.mennyiseg * urhajo.utasszam > 15000)
                    )
                    .nev
                    


//5. Feladat - Kuat össztömeg
const f5 = document.querySelector('#f5')
f5.innerHTML = urhajok
                    .filter(urhajo =>
                        urhajo.tipus == 'teher' &&
                        urhajo.megrendelok.some(megrendelo => megrendelo.ugyfel == 'Kuat Drive Yards')
                    )
                    .reduce((sum, urhajo) => sum + urhajo.terhelhetoseg, 0)


