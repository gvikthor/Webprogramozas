# Szerveroldali 12. gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*  
- ⌨️ : Githubon a sources mappában megtalálod az ide tartozó kódrészletet.
- ⚠️ : Ez egy feladat, amit neked kell megcsinálnod.

KisZH: [???](???)

## npm i
npm i
`npm i`

## Elindulás
A GraphQL a Reacthez hasonlóan a Facebook környékén született. Ez egy leeíró nyelv, aminek a lényege, hogy csak releváns adatokat kérjek el a szervertől mindig, ne mozogjanak feleslegesen adatok a hálózaton. [https://graphql.org/](https://graphql.org/)
```
npm i express-graphql graphql
```
Hogy működik? A graphqlt mint egy middleware-t fogjuk használni az expressben. Olyan lesz, mint egy router. Van egy GraphQL nyelve, amivel le tudjuk írni a queryjeinket, és minden queryhez tartozni fog egy resolver is, ami megmondja, mit csinál a dolog. 

Mivel ebben nagyon sok lenne a repetitív dolog, kiváltjuk azokat is egy package-el. [https://the-guild.dev/graphql/tools/docs/introduction](https://the-guild.dev/graphql/tools/docs/introduction)
```
npm i @graphql-tools/schema
```

Na most már tényleg készen vagyunk, csináljunk egy `graphql` mappát a projekt mappájába, és tegyünk bele egy `index.js` filet.
```JS
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')
 
const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = graphqlHTTP({
    schema: schema,
    graphiql: { // <-- ez most csak azért kell, hogy tudjunk mókázni vele 
        headerEditorEnabled: true 
    }
})
```
Egészítsük ki a `server.js`-t is, hogy futhasson a graphql.
```JS
/*...
app.use('/users', require('./routers/users'))
*/
app.use('/graphql', require('./graphql'))
/*...*/
```

Na ha ezt most megpróbáljuk futtatni, szomorúak leszünk, mert hibát kapunk, hiszen értelemszerűen fogalma sincs, mi az a typeDefs, illetve a resolvers. Hogyan tudjuk ezt megoldani? Írjuk meg őket!

A `graphql` mappába hozzunk létre egy `typedefs.gql` filet, ami graphql nyelven le fogja írni a típusdefinícióinkat, illetve egy `resolvers.js`-t, ami pedig értelemszerűen a resolver függvényinket fogja tartalmazni.

`typedefs.gql`
```
type Query {
    testText: String
}
```

`resolvers.js`
```JS
module.exports = {
    Query: {
        testText: () => 'Hello There!'
    },
}
```

Hogyan kerülnek bele ezek az adatok a graphql-ünkbe?
`index.js`
```JS
/*...*/
const { readFileSync } = require('fs')
 
// fontos, hogy tömbbe teszem őket, mert több is lehetne
const typeDefs = [readFileSync('./graphql/typedefs.gql').toString()] //lehetne pathJoin és akkor __dirname-mel szépen relative pathozni
const resolvers = [require('./graphql/resolvers')]
/*...*/
```

Most ha felmegyek a `http://localhost:3000/graphql` oldalra, akkor rögtön bedobja nekem a graphql default felületét (ez a sajátja, ezt magának generálja). Ha beírjuk kérésként, hogy `{testText}` és futtatjuk, akkor vissza is adja az eredményt.

*Ha valaki szeretné, használhatja a graphql playgroundot, ami ugyanilyen, csak kicsit más.*
*server.js fileba:*
```JS
/*...*/
const expressPlayground = require('graphql-playground-middleware-express').default
app.get('/playground', expressPlayground({endpoint: '/graphql'}))
```
*És így a /playground oldalon el lehet ezt is érni.*

## Első Kérésünk
A query és a resolver fileokat fogjuk most bővítgetni. Kommentelni #-el lehet.

Első lépésként valami paramétert adjunk át.
```
type Query {
    testText: String
    testParam(text: String!): String
}
```

Itt a test param kérésnek van egy string paramétere, ami kötelező (ezt jelenti a felkiáltójel), és stringet ad vissza.

Ez volt a typedef, most jön a resolver, amihez kell egy kis logikai ugrás. A resolverek mindenképp több paramétert kapnak: szülő, kérésparaméterek, context, info. Ezek közül nekünk csak a kérésparaméterek kellenek, a szülőt átugorjuk, a hátsó kettőt meg ki is hagyjuk. A params dekonstruálható.
```JS
Query: {
    testText: () => 'Hello There!',
    testParams: (_, { text }) => `Hello ${text}!`,
}
```
És így a kérés: `{testParams(text: "Kenobi")}`

## Modellek
Innentől egész egyszerű az egész, bepakolom a modelleket és használom úgy, mint eddig.

Először is, próbáljuk meg lekérni a műfajokat. A typedef fileba belepakolhatju, de ez nem elég, azt is meg kell mondani, hogy mi a szösz az a Genre típus.
```
type Query {
    # ...
    genres: [Genre] # műfajok tömbjét adja vissza
}

type Genre {
    id: ID!
    name: String!
    description: String
    # createdAt
    # updatedAt
}
```

A resolver már egyszerűbb.
```JS
const { User, Genre, Movie, Rating } = require('../models')

module.exports = {
    Query: {
        /*...*/
        genres: () => Genre.findAll(),
    },
}
```

Ekkor a kérésem például: `{genres{id, name}}`. Fontos, hogy meg kell adnom, mit kérek le, nem mondhatom csak azt, hogy genres.

Ha csak egy műfajt szeretnék lekérni:
```
genre(id: ID!): Genre
```
```JS
genre: (_, { id }) => Genre.findByPk(id),
```
```
{genre(id: 1){name, description}}
```

## Gyakori típusok
A `createdAt`, `updatedAt` megadható, hogy Stringként érkezzen, de akkor epochot kapunk, amit nem biztos, hogy olyan kényelmes. Ez esetben lehet használni pl a graphql scalars resolvers könyvtárat. Ez belepakol egy halom típust az egészbe, amiket innentől használhatunk, mintha mi megírtuk volna őket.
`npm i graphql-scalars`
És az `index.js`-be most már tényleg több dolog megy a tömbökbe.
```JS
/*...*/
const {
    typeDefs: scalarTypeDefs,
    resolvers: scalarResolvers
} = require('graphql-scalars')
 
const typeDefs = [
    scalarTypeDefs,
    readFileSync('./graphql/typedefs.gql').toString()
]
const resolvers = [
    scalarResolvers,
    require('./resolvers')
]
/*...*/
```
És most ha azt a createdAt-et belerakjuk a modellbe, és kiíratjuk, máris látszódni fog, hogy van dátumunk.
```
type Genre {
    # ...
    createdAt: DateTime
}
```
```
{genre(id: 1){name, description, createdAt}}
```

## Bonyolultabb kérések
typedef file:
```
type Genre {
    # ...
    movies: [Movie]
}

type Movie {
    id: ID!
    title: String!
    director: String
    description: String
    year: Int
    imageUrl: URL # Ez is a scalarsból jön
    createdAt: DateTime
    updatedAt: DateTime
}
```
A resolverben most már lényeges lesz a parent, ugyanis a genre fog megérkezni, mint szülő, amikor a genret kérem le. De honnan tudjuk ezt? Valójában eddig olyan kéréseket csináltunk, hogy `Query{genre(id: 1){name, description}}`, csak a Query kulcsszót elhagytuk kényelmesen. Viszont most, ahogy mászunk befele, lesz már egy Genre kulcsszavunk is.
```JS
    Query: {
        /*...*/
        genre: (_, { id }) => Genre.findByPk(id),
    },
    Genre: {
        movies: (genre) => genre.getMovies(),
    },
```
és így a lekérdezés (a query lehagyható):
```
query{
  genre(id:1){
    name
    movies{
      title
      year
    }
  }
}
```


Egészítsük ki a filmeket kategóriákkal.
```
type Movie {
    #...
    genres: [Genre]
}
```
És resolve-oljuk.
```JS
Query: {/*...*/},
Genre: {/*...*/},
Movie: {
    genres: (movie) => movie.getGenres(),
},
```
És így a lekérés:
```
{
  genre(id:1){
    name
    movies{
      title
      year
      genres {
        name
      }
    }
  }
}
```
Ez nem kerül semmiféle végtelen ciklusba/rekurzióba, hiszen egész egyértelműen definiáltasm azt a véges számú adatot, amit kérek.

Igen, előfordulhat, hogy több soros a függvény. Igen, async await működik benne.
