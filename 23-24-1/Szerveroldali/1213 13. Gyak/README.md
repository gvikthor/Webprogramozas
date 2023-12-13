# Szerveroldali 13. gyak

Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.

⌨️ : Githubon a sources mappában megtalálod az ide tartozó kódrészletet.
⚠️ : Ez egy feladat, amit neked kell megcsinálnod.
KisZH: https://forms.office.com/e/UfCGYtARKR

## REST API - Bonyolult lekérdezősdi auth-tal
A REST API-nk jelenleg be tud jelentkeztetni valakit felhasználónévvel és jelszóval a `/login` végponton keresztül post kérésben. Ha sikeres a bejelentkezés, visszaad egy tokent hozzá. Na most ha ezt a tokent egy megfelelően paraméterezett kérésbe tesszük (Authorization header bearer-je), akkor a `/me` vissza is adja az aktuális usert. A probléma, hogy ha nem valid a token, akkor internal server errort kapunk (ezt az `index.php` dobja), nem pedig unauthorized-ot. Javítsuk ezt ki.

Emlékezzünk vissza rá, hogy kétféle middleware létezik: horizontális és vertikális. A jelenlegi hibakezelésünk az `index.php`-ban vertikális, tehát minden kérésbe bele van építve. Az auth error handling horizontális, hiszen, mint megtanultuk, minden kérésnek önmagát kell tudni ellenőrizni ebből a szempontból is (ez a REST lényege). Tehát kell egy error handling függvény.

routers\users.js
```JS
function handleAuthError(err, req, res, next){
    if(err.name === 'UnauthorizedError'){
        res.status(401).json({ message: 'Not authorized' })
    }else{
        next(err)
    }
}
```

Ezt pedig alkalmazzuk vertikális middleware-ként.
```JS
router.get('/me',
    expressjwt({ secret: 'secret-key', algorithms: ['HS256'] }),
    handleAuthError,
    async (req, res) => {
        res.json(req.auth)
    }
)
```

Ezzel a lendülettel töröljük ki a routingjainkat, és csináljunk újat a mostani feladatunknak. Miket kell törölni, hogy az alkalmazás továbbra is megfelelően fusson? A `server.js`-ben a routingot. (Ezt azért csináljuk, hogy begyakoroljuk, milyen file mihez kapcsolódik, és újra tudjuk építeni a routing és kérés kezelés folyamatot.)
```JS
app.use('/genres', require('./routers/genres'))
app.use('/users', require('./routers/users'))
```
Törölhetjük továbbá a routersből a `genres.js` és `users.js` fileokat is, és készítsünk egy új filet `task.js` néven.

Szükségünk van az alapvető routing előkészítéskre:
```JS
const { User } = require('../models')
const express = require('express')
const router = express.Router()
```

Illetve kelleni fog az autentikáció előkészítése is:
```JS
const jwt = require('jsonwebtoken')
const {expressjwt} = require('express-jwt')

function handleAuthError(err, req, res, next){
    if(err.name === 'UnauthorizedError'){
        res.status(401).json({ message: 'Not authorized' })
    }else{
        next(err)
    }
}
```

Írjunk egy nagyon egyszerű login függvényt, ami nem néz jelszót, csak annyit, hogy az adott e-mail címmel létezik-e ilyen felhasználó. Ennyi lesz a bejelentkezésünk.
```JS
router.post('/login', async (req, res) => {
    const { email } = req.body ?? { email: null }
    const user = await User.findOne({ where: { email } }) 
    if(!user) return res.status(401).json({ message: 'Not authorized' })

    const token = jwt.sign(user.toJSON(), 'secret-key', {algorithm: 'HS256', expiresIn: '1h'})
    res.json({ token }) 
})
```

Tartsuk meg a `/me` endpointot.
```JS
router.get('/me',
    expressjwt({ secret: 'secret-key', algorithms: ['HS256'] }),
    handleAuthError,
    async (req, res) => {
        res.json(req.auth)
    }
)
```

Most még nem fog működni az alkalmazásunk. Miért?  
Nincs megfelelően routingolva. A `server.js`-be írjuk bele a szükséges átirányítást.

```JS
app.use('/task', require('./routers/task'))
```

És ne felejtsük el, hogy a `task.js` az egy modul.
```JS
module.exports = router
```

Próbáljuk ki a végpontot.
1. Bejelentkezés (token megszerzése)
    - Method: POST
    - URL: http://localhost:3000/task/login
    - Headers:
        - Content-Type: application/json
    - Body: `{"email": "bthygerg0@elte.hu"}`
    - Küldés után ne felejtsd el kiszedni a tokent!
    - Próbáld ki nem létező e-mail címmel is!
2. Kérés
    - Method: GET
    - URL: http://localhost:3000/task/me
    - Headers:
        - Authorization: Bearer tokenedértéke.ezegyhosszústring
    - Próbáld ki hibás tokennel is!

Rengeteg féle képpen lehet hiányzó kérésparamétereket kezelni. Ha szeretnéd gyakorolni a vertical middleware-eket, itt egy megoldás rá.
```JS
const handleMissingParamError = (requiredParams) => (req, res, next) => {
    const missingParams = requiredParams.filter(param => !(param in req.body))
    if (missingParams.length > 0) {
        res.status(400).json({ error: `Missing required parameters: ${missingParams.join(', ')}` })
    }else{
        next()
    }
}
```

**⚠️ Készítsd el az alábbi végpontokat!**
- `/task1`: (post) Hitelesített végponton keresztül hozzunk létre egy új filmet! Kötelező paraméterek: title, director, year, ratingsEnabled
- `/task2/:movieId`: (patch) Frissítsük egy film leírását
- `/task3/:movieId`: (post) Hitelesített végpont, adjunk hozzá egy értékelést egy filmhez, de csak akkor, ha engedélyezve vannak a ratingek, egyébként unauthorized, kivéve, ha admin a user.

## Kis átszervezés
Tegyük könnyebbé az életünket. Csináljunk egy mappát `middlewares` néven, és tegyünk bele egy `auth.js` filet. Szedjük ki a mindenféle token generálást a `task.js`-ből ennek segítségével.

auth.js
```JS
const { expressjwt: doAuth } = require('express-jwt')
module.exports = doAuth({ secret: 'secret-key', algorithms: ['HS256'] })
```

task.js
```JS
const jwt = require('jsonwebtoken')
const doAuth = require('../middlewares/auth')
/*...*/
router.get('/me',
    doAuth,
    handleAuthError,
    async (req, res) => {
        res.json(req.auth)
    }
)
```

## GraphQL - Bonyolult lekérdezősdi auth-tal
A kézenfekvő megoldás, hogy a graphql végpontot autentikáljuk, és a `req` változón kereszül érjük el a felhasználó adatait. Ennél tudjuk egy fokkal elegánsabban is, az előző middleware-en keresztül. Viszont a resolverekbe nem tudunk horizontális middleware-t rakni... or can we? Mivel képzett webhajlítók vagyunk, végre tudjuk mi bántani a JavaScriptet, nem fordítva.

Csinálni fogunk a `resolvers.js`-be egy wrapper függvényes autentikációt. Egy wrapper fügvényt fogunk meghívni a resolverekben sima függvény helyett, ami autentikálja a felhasználót, és elutasítja a kérést, ha az nem valid.
```JS
const doAuth = require('../middlewares/auth')

function auth(doThis){
    return async (parent, params, context, info) => {
        await new Promise((resolve, reject) => doAuth(context, null, err => err ? reject(err) : resolve()))
        return doThis(parent, params, context, info)
    }
}
```

Ezt pedig már szinte vertical middleware-ként fogjuk tudni használni.

resolvers.js
```JS
module.exports = {
    Query: {
        /*...*/
        movies: auth(() => Movie.findAll()),
    },
    /*...*/
}
```

typedefs.gql
```
type Query {
    # ...
    movies: [Movie]
}
# ...
```

Rossz kérés:
- kérés: query{movies {id}}
- request headers: -üres-

Jó kérés:
- kérés: query{movies {id}}
- request headers: {"Authorization": "Bearer hosszútoken"}