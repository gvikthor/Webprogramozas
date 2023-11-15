# Szerveroldali 9. gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*  
- ⌨️ : Githubon a sources mappában megtalálod az ide tartozó kódrészletet.
- ⚠️ : Ez egy feladat, amit neked kell megcsinálnod.

KisZH: [https://forms.office.com/e/mMQLYHqisf](https://forms.office.com/e/mMQLYHqisf)


## Elindulás
A [Sequelize](https://sequelize.org) egy promise alapú ORM Node-ban, ami szinte minden létező adatbázissal működik, ami releváns lehet. Mi sqlite-ot fogunk használni megintcsak. Van a sequelize-nak is egy CLI-je, mint amilyet Laravelben is láttunk már.

```
npm init --yes
npm install sequelize
npm install sqlite3
npm install sequelize-cli --save-dev
```

A `--save-dev` kapcsoló annyit tud, hogy az csak development mode-ban jelenik meg követelményként, release-ben nem.

Az npm-en keresztül tudunk a node modulok közül különböző parancsfileokat futtatni, így például a sequelize command line interface-t. Ehhez nem az `npm`, hanem az `npx` parancsot kell használni.

```
npx sequelize-cli
```

Ez kilistázza a parancsokat. Futtassuk az initet.

```
npx sequelize-cli init
```

Ez szépen telepakolta egy halom ismerős dologgal a workspace-ünket: config, migrations, models, seeder. A `config/config.json` kiüríthető, hisz dev modeban csak sqlite-ot fogunk használni.
```JSON
{
  "development": {
    "dialect": "sqlite",
    "storage": "database.sqlite"
  },
  "test": {
    "dialect": "sqlite",
    "storage": "database.sqlite"
  },
  "production": {
    "dialect": "sqlite",
    "storage": "database.sqlite"
  }
}
```
Innentől soha az életben nem fogunk ezen a gyakon hozzányúlni a confighoz. A migrations és a seeders üres, a modelsben pedig van egy `index.js`.  Ez egyelőre annyit csinál, hogy a megfelelő configokart setupolja., összegyűjti a megfelelő fileokat pl. a model mappából, majd exportálja az adatbázist. Ehhez nem fogunk hozzányúlni.

## Modell
Csináljunk valamilyen filmes oldalt, amiben vannak midnenféle filmek, ratingek, userek, kategóriák. Itt most már tényleg fogunk használni n-n kapcsolatot, muszáj lesz!

Először setupolni kell a modellt.
```
npx sequelize-cli model:generate --name Genre --attributes name:string,description:string
```
Ez létrehozta a megfelelő migrationt és modellt is. Ha belenézünk a modellbe, akkor látunk egy `associate` nevű függvényt, ebben fogjuk a relációkat definiálni, mert a sequelize asszociációknak hívja, nem relációknak. Futtassunk egy ismerősnek kinéző migrációs parancsot.

```
npx sequelize-cli db:migrate.
```

Setupoljuk a teljes adatbázist.
```
npx sequelize-cli model:generate --name Movie --attributes title:string,director:string,description:text,year:integer,imageUrl:string,ratingsEnabled:boolean

npx sequelize-cli model:generate --name User --attributes username:string,displayname:string,email:string,password:string,isAdmin:boolean

npx sequelize-cli model:generate --name Rating --attributes rating:integer,comment:string,UserId:integer,MovieId:integer

npx sequelize-cli db:migrate
```
Adatbázis szinten ebben előre gondolkozunk. Megadjuk a ratingeknek, hogy van `UserId` és `MovieId` attribútuma. Ez azt jelenti, hogy minden ratinghez tartozni fog egy felhasználó (aki szavazptt) és egy film (ami rate-elve van) is. Fontos, hogy ezek az attribútum elnevezések pontosan a másik modell neve + `Id` legyenek, különben nem fogja tudni összekapcsolni abban a táblában az (automatikusan generált) `id` attribútummal.

Sajnos olyan parancs nincs, mint Laravelben, hogy migrate fresh, hogy teljesen újrakezdje, de van olya, ami mindent revertel és lefuttathatjuk újra az összeset. Ez am nem olyan izgalmas probléma, de meg lehet rajta keresztül nézni egy jó featuret. Menjünk be a `package.json` fileba és írjunk egy saját scrpitet.
```JSON
"scripts": {
    "db-fresh": "npx sequelize-cli db:migrate:undo:all && npx sequelize-cli db:migrate"
},
```
Ez így lefuttatja ezt a két parancsot egymás után, ha azt mondom, hogy `npm run db-fresh`.

## Relációk (asszociációk)
Megint csak, a sequelize asszociációknak hívja a relációkat.
Nagyon fullos sequelize asszociáció dokumentáció: [https://github.com/szerveroldali/leirasok/blob/main/SequelizeAsszociaciok.md](https://github.com/szerveroldali/leirasok/blob/main/SequelizeAsszociaciok.md) 

### 1-N
Nézzük először az 1-N kapcsolatot. Tegyük fel, hogy vannak A-k és B-k, és minden A-hoz tartozik sok B, de minden B-hez csak egy A tartozik. Ilyenkor az A-nak azt kell adni a `hasMany` metódust, míg a B-nek a `belongsTo`-t. Ez konkrétabban nálunk a ratingeknél jelenik meg: egy filmnek lehet több rating-je, illetve egy user rate-el több filmet is.

Movie és User modellekbe is:
```JS
static associate(models) {
    this.hasMany(models.Rating)
}
```

Míg a Rating modelljábe:
```JS
static associate(models) {
    this.belongsTo(models.User)
    this.belongsTo(models.Movie)
}
```

Ezzel modell szinten meg is vagyunk, próbáljuk ki. Hozzunk létre a gyökérmappába egy `test.js` filet. Mondjuk meg, hogy hozzáférs a modellekhez, és én használni is akarom amodelljeimet.
```JS
const models = require('./models')
const { User, Rating, Genre, Movie } = models
```

Hozzuk létre a "main" függvényt akár tényleg így, akár self invoked functionnel.
```JS
async function main() {
    
}

main()
```

```JS
;(async () => {

})();
```

Itt is van egy olyan package, mint Laravelben az adatok generálásához (itt nincsenek Factoryk).
```
npm i @faker-js/faker
```

```JS
const user = await User.create({
    username: faker.internet.userName(),
    displayname: faker.person.fullName(),
    email: faker.internet.email(),
    password: 'jelszo',
    isAdmin: false
})
console.log(user)
```
```
node test.js
```

**⚠️ Hozz létre egy filmet!** 
*Faker doksi: [https://fakerjs.dev/api/](https://fakerjs.dev/api/)*
Megoldás:
```JS
// nyilván máshogy is lehetett
const movie = await Movie.create({
    title: faker.lorem.words({min: 1, max: 5}),
    director: faker.person.fullName(),
    description: faker.lorem.sentences({min: 4, max: 10}),
    year: faker.number.int({min: 1980, max: 2023}),
    imageUrl: faker.image.urlPicsumPhotos(),
    ratingsEnabled: true
})
```

És akkor most csináljunk egy ratinget.
```JS
await Rating.create({
    rating: faker.number.int({min: 1, max: 4}),
    comment: faker.lorem.sentences({min: 1, max: 3}),
    UserId: user.id,
    MovieId: movie.id
    
})
```

Próbáljuk ki, hogyan tudjuk lekérni pl a ratingjeit egy filmnek.
```JS
console.log(
    await movie.getRatings()
)
```

### N-N
Nah és akkor most viszont már nem kerüljük ki az N-N relációt, sorry:(

Először is létrehozzuk a kapcsolótáblát.
```
npx sequelize-cli migration:generate --name create-genre-movie
```
Ez még semmit sem tud, mi fogjuk megmondani, hogy mit csinál. Fontos, hogy előbb a genre és a movie legyen a migrationsben. Másoljuk be a generate migration up és down függvényeit, csak írjuk át a tábla nevét `GenreMovie`-ra. A legtöbb mezőt békénhagyhatjuk, csak a name meg a description változik.
```JS
{
    /*...*/
    GenreId: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    MovieId: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    /*...*/
}
```

Ki tudjuk kötni, hogy egy ilyen gerne-film páros csak egyszer szerepeljen.
```JS
await queryInterface.addConstraint('GenreMovie', {
    fields: ['GenreId', 'MovieId'],
    type: 'unique',
    name: 'unique_genre_movie'
});
```

Ezen kívül, ki tudjuk kötni (advanced), hogy az idegen kulcsokra is figyeljen.
```JS
await queryInterface.addConstraint('GenreMovie', {
    fields: ['GenreId'],
    type: 'foreign key',
    name: 'fk_genre_movie_genre',
    references: {
    table: 'Genres',
    field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
});
await queryInterface.addConstraint('GenreMovie', {
    fields: ['MovieId'],
    type: 'foreign key',
    name: 'fk_genre_movie_movie',
    references: {
    table: 'Movies',
    field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
});
```

Most töltsük ki az asszociációkat a genrenak meg a movienak. Van okos függvény, ami megmondja, hogy a GenreMovie kapcsolótáblán keresztül történik ez a dolog.
```JS
/* movie.js asszociációs függvényébe: */
this.belongsToMany(models.Genre, { through: 'GenreMovie' })

/* genre.js asszociációs függvényébe: */
this.belongsToMany(models.Movie, { through: 'GenreMovie' })
```

Migráljunk `npm run db-fresh` és nézzük meg, létrejött-e a kapcsolótábla.
Csináljunk is genre-t a filmnek.
```JS
const genre1 = await Genre.create({
    name: faker.lorem.words({min: 1, max: 3})
})
const genre2 = await Genre.create({
    name: faker.lorem.words({min: 1, max: 3})
})

await movie.addGenre(genre1)
await movie.addGenre(genre2)
```

## Seeder
Nagyon hasonlít ez is a Laravelhez.
```
npx sequelize-cli seed:generate --name DatabaseSeeder
```
Adjuk hozzá a seedelést is a scriptünkhöz.
```JSON
/*...*/
"scripts": {
    "db-fresh": "npx sequelize-cli db:migrate:undo:all && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
},
/*...*/
```

**⚠️ Készítsd el az adatbázis felseedelését!** 
*Faker doksi: [https://fakerjs.dev/api/](https://fakerjs.dev/api/)*
Megoldási tippek:
- Generálj ki random számokat, pl.: `const moviesCount = faker.number.int({min: 3, max: 10})`
- Készíts üres tömböket, pl.: `const users = []`
- Ciklusokkal ismételgetve töltögesd fel ezeket a tömböket.
    - Próbáld ki a faker random array elements függvényét.
    - Figyelj arra, hogy pl. egy filmhez ne generáld ki kétszer ugyanazt a user egy-egy értékeléssel.
- A következő sorrendet javaslom:
    1. Genre-k (műfajok)
    2. Userek
    3. Filmek
    4. Ratingek
- Ellenőrzést sok módon tudsz végezni, de csinálhatsz például ilyet node-on belül:
    ```JS
    console.log(
        await Movie.findAll({       // Keress a filmek közt
            where: {                // Ahol
                year: {             // Az év
                    [Op.gt]: 2000   // [operator greater] Nagyobb mint 2000 
                }
            }
        })
    )
    ```
    Értelemszerűen a sequelize doksi leír végtelen sok ilyesmit.