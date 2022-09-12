const teaserMozik = [
    {
        hely: 'Allee',
        ceg: 'CinemaCity',
        filmek: [
            {
                cim: 'Tenet',
                felnott: 1500,
                diak: 2000
            },
            {
                cim: 'Mulan',
                felnott: 700,
                diak: 600
            },
            {
                cim: 'Twilight',
                felnott: 2500,
                diak: 7800
            },
            {
                cim: 'Frozen 2',
                felnott: 9800,
                diak: 2
            }
        ]
    },
    {
        hely: 'Mammut',
        ceg: 'CinemaPink',
        filmek: [
            {
                cim: 'Mulan',
                felnott: 800,
                diak: 1200
            },
            {
                cim: 'Frozen 2',
                felnott: 4300,
                diak: 2100
            }
        ]
    },
    {
        hely: 'Aréna',
        ceg: 'CinemaCity',
        filmek: [
            {
                cim: 'Tenet',
                felnott: 1700,
                diak: 2500
            },
            {
                cim: 'Mulan',
                felnott: 1200,
                diak: 1300
            },
            {
                cim: 'High School Musical',
                felnott: 1500,
                diak: 3700
            },
            {
                cim: 'Twilight',
                felnott: 2800,
                diak: 10000
            },
            {
                cim: 'Frozen 2',
                felnott: 15000,
                diak: 350
            }
        ]
    },
    {
        hely: 'Corvin Pláza',
        ceg: 'Corvin Mozi',
        filmek: [
            {
                cim: 'Frozen 2',
                felnott: 750,
                diak: 150
            }
        ]
    }
]

/*
Tömbfüggvényes
Volt olyan CinemaCity mozi, ahol leadtak legalább 2 filmet, és egyik a Frozen 2 volt?
*/
function filmAFrozen(film){
    return film.cim == 'Frozen 2'
}

function cinemacityKettoFrozen(mozi){
    return mozi.ceg == 'CinemaCity' && mozi.filmek.length >= 2 && mozi.filmek.some(filmAFrozen)
}

console.log(
    teaserMozik.some(cinemacityKettoFrozen)
)

/*
console.log(
    teaserMozik.some(mozi => mozi.ceg == 'CinemaCity' && mozi.filmek.length >= 2 && mozi.filmek.some(film => film.cim == 'Frozen 2'))
)
*/

/*
Minden cím egy <h1> elem és minden tartalom alatta egy div
*/
const fejezetek = [
    {
        cim: '1. fejezet',
        szoveg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        cim: '2. fejezet',
        szoveg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        cim: '3. fejezet',
        szoveg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]
const div = document.querySelector('#szorgalmi')

for(const fejezet of fejezetek){
    div.innerHTML += `<h1>${fejezet.cim}</h1><div>${fejezet.szoveg}</div>`
}

///for of/in

const szinek = [
    'piros', 'zöld', 'kék'
]
for(const szin of szinek){
    console.log(szin)
}

const gyerekek = {
    nandi: {
        teljesNev: 'Nándi Bándi',
        lakcim: 'kdjhflksah'
    },
    mirci: {
        teljesNev: 'Mirci Pinci',
        lakcim: 'lfkjhlkdfjh'
    },
    aron: {
        teljesNev: 'Áron Máron',
        lakcim: 'lksdfjgskdflh'
    }
}

const kedvencSzinek = {
    nandi: 'lila',
    mirci: 'zold',
    aron: 'fekete'
}

for(const id in kedvencSzinek){
    console.log(
        kedvencSzinek[id],
        gyerekek[id].teljesNev,
        gyerekek[id].lakcim
    )
}

