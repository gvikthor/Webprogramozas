# Szerveroldali 11. gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*  
- ⌨️ : Githubon a sources mappában megtalálod az ide tartozó kódrészletet.
- ⚠️ : Ez egy feladat, amit neked kell megcsinálnod.

KisZH: [https://forms.office.com/e/3knVvggG4h](https://forms.office.com/e/3knVvggG4h)

## npm init
npm init
`npm init`

## Jelszavak
Ha megnyitjuk a users táblát, akkor azt tapasztaljuk, hogy AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA. Ennek oka, hogy minden felhasználónak plain textként az a jelszava, hogy "jelszó". Ezzel több problémánk is van:
- minden felhasználónak
- plain textként
- az a jelszava, hogy jelszó.  
Szeretnénk titkosítani a jelszavainkat egy megfelelően biztonságos algoritmussal. Password hashelésről, saltolásról, algoritmusokról sok mindent lehet találni a neten. Nekünk most az a fontos, hogy bcryptet fogunk használni, mert GPU gyorsítással sem igazán feltörhető reális idő alatt, és szépen széthasheli az azonos jelszavakat.
```
npm i bcrypt
```
Ezt követően jelszó generáláshoz nincs sok dolgunk, csak:
```JS
const bcrypt = require('bcrypt')
const hashedPw = bcrypt.hashSync('jelszo', 10) // a 10 a salt hossza
```
Ezt akár már bele is rakhatjuk a seederbe, és `npm run db-fresh` (!custom parancs) után látjuk is, hogy hashelt jelszavak jöttek létre, és a hashek nem ugyanazok. Ennek ellenőrzése kóddal:
```JS
bcrypt.compareSync('jelszo', '$2b$10$4G...kEz.')
```

Érdemes írni a User modellnek egy olyan függvényt, ami törli a jelszót, így nem mozgatjuk feleslegesen még véletlenül se sehova.
```JS
class User extends Model {
    /*...*/
    toJSON(){
        return {...this.get(), password: undefined}
    }
}
```
És így egy usereket lekérő kérés nem látja a jelszó hasheket.
```JS
app.get('/users', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})
```

Érdemes írni a usernek egy compare password függvényt, hogy a passwordhöz nyúlás nélkül megmondhassuk, hogy adott string a jelszava-e.
```JS
const bcrypt = require('bcrypt')
class User extends Model {
    /*...*/
    comparePasswords(password){
        return bcrypt.compareSync(password, this.password)
    }
}

/*...*/
const user = await User.findByPk(1)
console.log(user.comparePasswords('jelszo'))
```

## Crash
Jelenleg, ha egy végpontban hiba történik, összehal a teljes alkalmazás - ez annyira nem optimális, lássuk be. Például: `http://localhost:3000/movie/alma/add/10`

Az Express 4-es verziója az async függvényekben nem tud rendesen hibát kezelni, az 5-ös meg fogja változtatni (ha a jövőben olvasod ezt, és végül nem tették bele, akkor az szomorú, de elv bele fog kerülni). Szerencsére ez elég sok embernek okoz nehézséget, így létrejöttek különböző könyvtárak, amik ezt megkerülik, mi most használjunk egyet. Ez beinjektálja magát az expresszen belülre
```
npm i express-async-errors
```
```JS
const express = require('express')
require('express-async-errors')
```
Ekkor az előző oldalt megnyitva már visszakapjuk a hibaüzenetet.

Ha a hibakezelést rendesen meg szeretnénk írni, akkor az `app.listen` elé be kell rakni egy új middleware-t. Fontos, hogy a middleware-ek sorrendje számít, ezt tartsuk észben majd, amikor kicsit később berakunk egy parse-olósat! Ez itt azt fogja mondani, hogy ha hiba van, ez a függvény fusson le.
```JS
app.use((err, req, res, next) => {
    if(res.headersSent){
        return next(err) // fusson le a default error handler, ha már küldtünk választ
    }
    res.status(500).json({ // 500: Internal Server Error
        name: err.name,
        message: err.message,
        stack: err.stack
    })
})
```
A stack szép multiline-os splitelése: `err.stack.split(/$\s+/gm)`

## Post
Adjunk hozzá végre valamit. Ehhez tisztában kell lenni vele, hogy a POST body-k elemzése egy körülményes dolog, de szerencsére az express beépítetten megoldja nekünk, csak egy extra middleware lépés kell.
```JS
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/*...*/
app.post('/genres', async (req, res) => {
    const genre = await Genre.create(req.body)
    res.json(genre)
})
```
Hogyan teszteljünk post kérést értelmesen? Megfelelő böngészős kiegészítőkkel. Firefoxban például a RESTer csodákra képes: [https://addons.mozilla.org/hu/firefox/addon/rester/](https://addons.mozilla.org/hu/firefox/addon/rester/)

Ez a kérés most működik, de ugye semmi validáció nincs. A sequelize tele van beépített validációkkal [https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/). Menjünk a migrációba a gernehoz, és módosítsuk kicsit.
```JS
name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
}
```
Ez most adatbázis szinten validál - ne felejtsük el újraseedelni: `npm run db-fresh` (!custom parancs). Ha most megpróbálok `name` nélkül egy create-et futtatni, internal server errort kapunk.

Következő validálás a modellben történik (értelemszerűen csak példaként adtam meg ide, hogy kisbetűs meg csak betű lehet benne, hogy lássuk, itt is van egy ellenőrzési réteg).
```JS
  Genre.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notNull: false,
        isLowercase: true,
        isAlpha: true,
      }
    },
    description: DataTypes.STRING/*...*/
```

A törlés se sokkal bonyolultabb, sima JS-es ellenőrzéseket fogunk végezni, és válaszokat küldünk rá.
```JS
app.delete('/genres/:genreId', async (req, res) => {
    console.log('delete')
    const { genreId } = req.params
    if(!genreId) return res.status(400).json({ message: 'Missing genreId' })
    if(!Number.isInteger(parseInt(genreId))) return res.status(400).json({ message: 'genreId is not an integer' })
    if(parseInt(genreId) < 1) return res.status(400).json({ message: 'genreId is not positive' })

    const genre = await Genre.findByPk(genreId)
    if(!genre) return res.status(404).json({ message: 'Genre not found' })
    await genre.destroy()
    res.json({ message: 'Genre deleted' }) // visszamegy a 200-as kód is, mint minden sima responsenál!
})
```

## Kódszervezés
Érdemes csinálni egy `routers` mappát, és pl. bele egy `genres.js` filet. Ebbe belepakolunk minden releváns routingot:
```JS
const express = require('express')
const router = express.Router()
const { Genre } = require('../models')

//    !!!    V  vegyük észre, hogy itt kiszedtem a genres-t az útvonalból, mingy látjuk, miért
router.post('/', async (req, res) => {  
    /*...*/
})

router.delete('/:genreId', async (req, res) => {
    /*...*/
})

module.exports = router
```
És így a `server.js` úgy néz ki, hogy:
```JS
const express = require('express')
require('express-async-errors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/genres', require('./routers/genres')) // <--- itt behívtam, mint /genres és ezért nem kell fentebb

app.use((err, req, res, next) => {
    /*...*/
})

app.listen(3000, () => {
    /*...*/
})
```

## Autentikáció
Csináljunk a tourerekbe egy `auth.js` filet.
```JS
const express = require('express')
const router = express.Router()
const { User } = require('../models')

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    if(!email || !password) return res.status(400).json({ message: 'Missing email or password' })

    const user = await User.findOne({ where: { email } }) 
    if(!user) return res.status(404).json({ message: 'User not found' })

    if(user.comparePasswords(password)){
        res.json({ message: 'Login successful' })
    } else {
        res.status(401).json({ message: 'Login failed' }) // 401: Unauthorized
    }
})

module.exports = router
```
Ne felejtsük el, hogy a serverben használni is kell ezt a routingot!
```JS
app.use('/auth', require('./routers/auth'))
```
Most a `localhost:3000/auth/login` oldalnak egy rossz jelszavas kéréssel visszakapjuk a hibát, jó jelszavassal meg visszakapjuk az OK-t.

De ez még nem login, csak ellenőrzés. A loginhez nem munkamenetet fogunk használni, hanem web tokent [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).
```
npm i jsonwebtoken
```
Ez úgy működik, hogy az adat visszamegy a kliensnek, aki innentől kezdve minden kérésével eküldheti nekünk a user infót, de a secret key biztosítja, hogy ez fixen ő, és nem valaki más (ennél persze bonyolultabb a technikai oldala). Az authot módosítsuk:
```JS
/*...*/
const jwt = require('jsonwebtoken')
/*...*/
if(user.comparePasswords(password)){
    const token = jwt.sign(user.toJSON(), 'secret-key', { algorithm: 'HS256', expiresIn: '1h' })
    res.json({ token })
}
```
Ha most futtatunk egy login kérést, visszakapunk egy hosszú tokent, amit [https://jwt.io](https://jwt.io) oldalon rögtön meg is szemlélhetünk. Innentől kezdve, ha egy authos kérést szeretnénk indítani, akkor egy auth headerben a `bearer` attribútumot erre a tokenre kell beállítanunk. Ez így működik web standardben, ezzel nincs mit csinálni, csak tudni kell, hogy oda kerül.

Ezt most kézzel mindig feldogozhatnám kérésekben, de természetesen ezt is megírták már helyettünk.
```
npm i express-jwt
```
Eddig mi vertikális middleware-eket írtunk, amik egymás után futottak le, most jönnek a horizontálisak. Szeretnék egy kérést, ami megmondja, hogy ki van bejelentkezve, legyen ennek a neve `/auth/me`.
```JS
const {expressjwt} = require('express-jwt')
/*...*/
router.get('/me', async (req, res) => {
    res.json(req.user)
})
```
Ennek valahogy a userrel dolgozni kéne. A horizontális middleware-ek lényege, hogy a kérésre egymás után lefutnak, és ha az egyiknek nincs next-je (tehát lehalt), akkor a többi nem fut le.
```JS
                                // itt a secret-key azért így van hívva, mert fent a sign-ban így hívtam. kiscica kiskutya
router.get('/me', expressjwt({ secret: 'secret-key', algorithms: ['HS256'] }), async (req, res) => {
    res.json(req.user)
})
```
Most, ha küldök ide egy kérést token nélkül, akkor unauthorized-ot kapok, ha jó tokennel, akkor meg OK-t. Hogy ne legyen olyan csúnya minden kérésünk, írjunk erre egy külön modult. Csináljunk egy `middlewares` mappát és bele egy `auth.js` filet.
```JS
const { expressjwt: ejwt } = require('express-jwt')
module.exports = ejwt({ secret: 'secret-key', algorithms: ['HS256'] })
```
És így az auth routerben csak ennyi kell
```JS
router.get('/me', auth, async (req, res) => {
    console.log('alma')
    res.json(req.user)
})
```