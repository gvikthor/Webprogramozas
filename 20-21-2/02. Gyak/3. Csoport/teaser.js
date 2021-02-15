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

/*console.log(
    'Ez itt a névtelen',
    teaserMozik.reduce(function (osszeg, mozi){
        return osszeg + ( mozi.filmek.some(function (film){
            return film.cim == 'Tenet'
        }) ? mozi.filmek.reduce(function (osszeg, film){ return osszeg + film.diak}, 0) : 0)
    }, 0)
)*/

//szam => szam+1

console.log(
    'Ez itt a névtelen',
    teaserMozik
    .reduce(
        (osszeg, mozi) => osszeg + ( mozi.filmek.some(film => film.cim == 'Tenet') ?
            mozi.filmek.reduce((osszeg, film) => osszeg + film.diak, 0)
            :
            0)
    , 0)
)


console.log(
    teaserMozik.find(
        mozi => mozi.filmek.some(
            film => film.cim == 'Frozen 2'
        )
    ).hely
)