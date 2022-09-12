const palyazatok = [
    {
        nev: 'YFOP-15569 Kátyújavítás prioritizált beközőutakon',
        eroforras: 15000000,
        jelleg: 'infrastruktúra fejlesztés',
        erintettek: 25000,
        palyazok: [
            {
                onkormanyzat: 'Denópuszta',
                lakosok: 32000
            },
            {
                onkormanyzat: 'Erófánksön felső',
                lakosok: 21000
            }
        ]
    },
    {
        nev: 'YFOP-76894-4 Panelprogram 2022 - Fűtéskorszerűsítés IV.',
        eroforras: 78000000,
        jelleg: 'infrastruktúra fejlesztés',
        erintettek: 50000,
        palyazok: [
            {
                onkormanyzat: 'Varburg - Nódmegyer III. Kerület',
                lakosok: 57000
            },
            {
                onkormanyzat: 'Miskólbeck',
                lakosok: 180000
            },
            {
                onkormanyzat: 'Varburg - Constel XXI. Kerület',
                lakosok: 68000
            }
        ]
    },
    {
        nev: 'YFOP-14487 Fedettpályás uszodakomplexum',
        eroforras: 1697500000,
        jelleg: 'közterületi beruházás',
        befogadokepesseg: 15000,
        palyazok: [
            {
                onkormanyzat: 'Varburg - Margitháb XIII. Kerület',
                befogadokepesseg: 17000
            },
            {
                onkormanyzat: 'Nubrecen',
                befogadokepesseg: 16500
            },
            {
                onkormanyzat: 'Erófánksön alsó',
                befogadokepesseg: 12000
            }
        ]
    },
    {
        nev: 'YFOP-47165 Elsőbbségadás kötelező táblák kihelyezése',
        eroforras: 900000,
        jelleg: 'infrastruktúra fejlesztés',
        erintettek: 70000,
        palyazok: [
            {
                onkormanyzat: 'Varburg - Jéesváros VIII. Kerület',
                lakosok: 68000
            },
            {
                onkormanyzat: 'Varburg - Ergébéváros VII. Kerület',
                lakosok: 69000
            }
        ]
    },
    {
        nev: 'YFOP-68940 Űrkomp kikötő korszerűsítése',
        eroforras: 160000000000,
        jelleg: 'közterületi beruházás',
        befogadokepesseg: 185000,
        palyazok: [
            {
                onkormanyzat: 'Varburg Fővárosi',
                befogadokepesseg: 275000
            },
            {
                onkormanyzat: 'Nubrecen',
                befogadokepesseg: 190000
            },
            {
                onkormanyzat: 'Miskólbeck',
                befogadokepesseg: 280000
            },
            {
                onkormanyzat: 'Elszged',
                befogadokepesseg: 250000
            }
        ]
    }
]

// 1. Feladat - 3 önkormányzat
const f1 = document.querySelector('#f1')
palyazatok
    .filter(palyazat => palyazat.palyazok.length >= 3)
    .forEach(palyazat => f1.appendChild(document.createElement('li')).innerHTML = palyazat.nev)

// 2. Feladat - 2mil Yeet
const f2 = document.querySelector('#f2')
const f2index = palyazatok.findIndex(palyazat => palyazat.eroforras > 2000000)
f2.innerHTML = f2index == -1 ? 'Nincs ilyen pályázat' : palyazatok[f2index].nev

// 3. Feladat - Érvényes uszodakomplexumra
const f3 = document.querySelector('#f3')
const f3palyazat = palyazatok.find(palyazat => palyazat.nev == 'YFOP-14487 Fedettpályás uszodakomplexum')
f3palyazat.palyazok
    .filter(palyazo => palyazo.befogadokepesseg > f3palyazat.befogadokepesseg)
    .forEach(palyazo => f3.appendChild(document.createElement('li')).innerHTML = palyazo.onkormanyzat)

// 4. Feladat - Nincs érvényes
const f4 = document.querySelector('#f4')
f4.innerHTML = palyazatok
                    .find(
                        palyazat => 
                            palyazat.jelleg == 'infrastruktúra fejlesztés' &&
                            palyazat.palyazok.every(palyazo => palyazo.lakosok < palyazat.erintettek)
                    ).nev

// 5. Feladat - Fővárosi összközpénz
const f5 = document.querySelector('#f5')
f5.innerHTML = palyazatok
                    .filter(palyazat => palyazat.palyazok.some(palyazo => palyazo.onkormanyzat.includes('Varburg')))
                    .reduce((sum, palyazat) => sum + palyazat.eroforras, 0)
               + ' Yeet'