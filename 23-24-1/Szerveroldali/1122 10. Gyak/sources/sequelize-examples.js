const { User, Movie, Genre, Rating } = require('./models')

async function main() {    
    // Itt egy halom példa lekérés, amik egyre bonyolultabbak.
    // Az adatbázisod tartalmától függően ezek nem biztos, hogy visszaadnak valamit, de a lényeg, hogy lássátok, hogy működik a Sequelize.
    // Ha valamire üres tömböt kapsz, érdemes megpróbálni létrehozni egy új rekordot, ami megfelel a feltételeknek.

    console.log('Find by primary key:')
    console.log(await Rating.findByPk(1))
    console.log('-'.repeat(20))

    console.log('select *:')
    console.log(await Rating.findAll())
    console.log('-'.repeat(20))

    console.log('Count:')
    console.log(await Rating.count())
    console.log('-'.repeat(20))

    console.log('Sum:')
    console.log(await Rating.sum('rating'))
    console.log('-'.repeat(20))

    console.log('Max:')
    console.log(await Rating.max('rating'))
    console.log('-'.repeat(20))

    console.log('Min:')
    console.log(await Rating.min('rating'))
    console.log('-'.repeat(20))

    console.log('Where:')
    console.log(await Rating.findAll({ where: { rating: 4 } }))

    console.log(
        await Rating.findAll({       // Keress a filmek közt
            where: {                // Ahol
                rating: {             // Az év
                    [Op.gt]: 3   // [operator greater] Nagyobb mint 3 
                }
            }
        })
    )
    console.log('-'.repeat(20))

    console.log('Kapcsolatokkal együtt:')
    console.log(await Rating.findAll({ where: { rating: 4 }, include: [User, Movie] }))
    console.log('-'.repeat(20))

    console.log('Limit:')
    console.log(await Rating.findAll({ where: { rating: 4 }, include: [User, Movie], limit: 1 }))
    console.log('-'.repeat(20))

    console.log('Csúsztatás/offset:')
    console.log(await Rating.findAll({ where: { rating: 4 }, include: [User, Movie], limit: 1, offset: 1 }))
    console.log('-'.repeat(20))

    console.log('Rendezés/orderBy:')
    console.log(await Rating.findAll({ where: { rating: 4 }, include: [User, Movie], limit: 1, offset: 1, order: [['createdAt', 'DESC']] }))
    console.log('-'.repeat(20))

    console.log('Csoportosítás/groupBy:')
    console.log(await Rating.findAll({ where: { rating: 4 }, include: [User, Movie], limit: 1, offset: 1, order: [['createdAt', 'DESC']], group: ['UserId'] }))
    console.log('-'.repeat(20))

    // Adatb emlékeztető: a where és a having között az a különbség, hogy a having a groupby után fut le, a where pedig előtte.
    console.log('Having:')
    console.log(await Rating.findAll({ where: { rating: 4 }, include: [User, Movie], limit: 1, offset: 1, order: [['createdAt', 'DESC']], group: ['UserId'], having: { rating: 4 } }))
    console.log('-'.repeat(20))

    console.log('Attributes:')
    console.log(await Rating.findAll({ where: { rating: 4 }, include: [User, Movie], limit: 1, offset: 1, order: [['createdAt', 'DESC']], group: ['UserId'], having: { rating: 4 }, attributes: ['UserId'] }))
    console.log('-'.repeat(20))

    console.log('Raw:')
    console.log(await Rating.findAll({ where: { rating: 4 }, include: [User, Movie], limit: 1, offset: 1, order: [['createdAt', 'DESC']], group: ['UserId'], having: { rating: 4 }, attributes: ['UserId'], raw: true }))
    console.log('-'.repeat(20))

    // Itt minden genrenak lesz egy dataValues attribútuma, ami tartalmaz minden infót a műfajról.
    console.log('A 2. számú filmhez tartozó műfajok')
    console.log(await (await Movie.findByPk(2)).getGenres())
    console.log('-'.repeat(20))

    // Itt csak a műfajok nevei lesznek.
    console.log('A 2. számú filmhez tartozó műfajok nevei')
    console.log(await (await Movie.findByPk(2)).getGenres({
        attributes: ['name']
    }))
    console.log('-'.repeat(20))

    // Itt csak a műfajok lesznek, de a kapcsolótáblából nem jönnek adatok (tehát a jointableattributes-ot üressé teszem)
    console.log('A 2. számú filmhez tartozó műfajok')
    console.log(await (await Movie.findByPk(2)).getGenres({
        joinTableAttributes: []
    }))
    console.log('-'.repeat(20))

    console.log('A 2. számú filmhez tartozó műfajok nevei')
    console.log(await (await Movie.findByPk(2)).getGenres({
        attributes: ['name'],
        joinTableAttributes: []
    }))
    console.log('-'.repeat(20))
}

main()