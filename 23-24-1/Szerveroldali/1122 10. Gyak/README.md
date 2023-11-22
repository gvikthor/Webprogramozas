# Szerveroldali 10. gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*  
- ⌨️ : Githubon a sources mappában megtalálod az ide tartozó kódrészletet.
- ⚠️ : Ez egy feladat, amit neked kell megcsinálnod.

KisZH: [https://forms.office.com/e/P3zAN48GPg](https://forms.office.com/e/P3zAN48GPg)

## Adatbázis kezelés
Oké, hogy a modellekből importáltuk a felhasználók, filmeket, műfajokat, véleményeket, de hogyan fogjuk ezeket kezelni? Milyen módon kérhetjük le a keresett rekordokat? Szerencsére a sequelize nagyon kényelmes lehetőséget ad erre. Azt követően, hogy megvannak a modelljeink, beépített függvényeken keresztül tudjuk elérni az összes SQL-ből is megszokott queryt.

```JS
const { User, Movie, Genre, Rating } = require('./models')
const result = await User.valamifüggvény(paraméterek)
```

Mik lehetnek ezek a valamifüggvények?
- ⌨️ sequelize-examples.js <-- ebbe összeszedtem mindenféle példa lekérdezéseket, de nem fedi le az összes lehetőséget
- Full doksi: [https://sequelize.org/docs/v6/core-concepts/model-querying-basics/](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)

## API és REST
Mi az az API?  
Az Application Programming Interface-ek lényege, hogy felületet biztosítson az alkalmazásaink eléréséhez, úgy, hogy nekünk nem kell ismerni a mögöttes kódot. Ez azt jelenti, hogy a program mint fekete doboz működik, és mi csak előre meghatározott kéréseket indíthatunk. Mintha lenne egy halom kis kiadó ablak, mindegyik egy levélbedobó nyílással; mindegyik ablakra ki van írva, hogy milyen infókat kell bedobni a nyíláson, és cserébe mit kapunk vissza.

Mi az a REST?  
A REST architektúra egységes, könnyen kezelhető hátteret ad az API-k készítéséhez. Egy REST architektúrának számos követelménye van, de kettőt nagyon fontos már most megjegyezni:
- **szerepkörökre bontott**: a kliens és a szerver teljesen szét van választva, semmit nem foglalkoznak a másik lelki világával, csak az interfészen keresztül kommunikálnak;
- **állapotmentes**: a szerver nem tárol adatot a kliens állapotáról, minden szükséges információt a kérésnek kell tartalmaznia.

A Node is ezt fogja használni, viszont ehhez szükségünk van arra, hogy szerverként futtassuk, ne pedig csak scriptként. Ehhez az [Express](https://expressjs.com/)t fogjuk használni, hogy ne kelljen nulláról megírni a különböző hálózati folyamatokat.
```
npm i express
```

*Ha nem szeretnéd majd folyamatosan úújraindítani a folyamatot, telepítheted a nodemon-t is. Ezzel a mentések után rögtön működnek a változtatások, nem kell újraindítani a szervert.*

Készítsünk egy server.js nevű filet (lehet bármi a neve), és írjuk bele a kiinduló Express kódot.
```JS
const express = require('express')
const app = express()

app.listen(3000)
```
Opcionálisan, ha szerentél inicializációs dolgokat futtatni, a listennek át lehet adni egy függvényt.
```JS
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
```
Indítsuk el a `node ./server.js` parancsot használva. Ekkor a webprogos PHP futtatáshoz hasonlóan a konzolban nem jelenik meg semmi, olyan, mintha beakadt volna az alkalmazás - ez jó, hiszen innentől figyeli a 3000-es portot folyamatosan. Menjünk fel a `localhost:3000` címre, látni fogjuk, hogy itt bizony lakik valaki. Jelenleg a lakó egy hibaüzenet, hogy itt mi nem GET-elhetünk, ezt javítsuk is ki. Az Expressben megmondjuk az appnak, hogy adott kérés típushoz adott címen milyen függvény tartozzon.
```JS
app.get('/', (req, res) => {
    console.log('Hello There!')
})
```
Ezzel azt monduk, hogy a `/` kezdőoldalon a get kérés annyit csináljon, hogy kilogol egy üzenetet. Ha ezt kipróbáljuk (indítsd újra a szervert, és nyisd meg megint a localhost:3000-et), akkor a node konzolon meg is jelenik a "Hello There!"... viszont az oldal csak tölt a végtelenségig. Persze, hogy csak tölt, hiszen nem kapott semmilyen választ a szervertől, ezt most tegyük bele. Ki fogjuk használni a két attribútumunk küzöl az egyiket: a `res` feladata, hogy a válasz objektumot képviselje (míg a `req` értelemszerűen a kérést).
```JS
app.get('/', (req, res) => {
    console.log('Hello There!')
    res.send('General Kenobi!')
})
```
Ha most újratöltjük, akkor meg is kaptuk a plain HTML-t. Kérjünk el valami bonyolultabbat.
```JS
const { Movie } = require('./models')

app.get('/', async (req, res) => {
    res.send(await Movie.findAll())
})
```
Figyeljünk rá, hogy async a függvény, hiszen awaitet szeretnénk tenni bele. Futtassuk a szervert.

Vegyél részt most a BuzzFeed személyiség tesztben annak alapján, hogy mit látsz!
- **a) Olvashatatlan plain-text formátumú JSON:** Chrome-ot használsz, hisz mindenki azt használ. Az óra után átmész az Allee-ba elkölteni az új BurgerKing appból a havi egy ingyenes menüdet. Kívülről tudod a Gyurcsány Show összes részét, mert nem működik a uBlock YouTube-on.
- **b) Lenyíló menükkel böngészhető igényes JSON megjelenítő:** Firefox felhasználó vagy, támogatod a kerékpárutat a körúton. Kipróbáltad az IKEA-s zöldséggolyót, de nem jött be annyira, viszont ezt nem szeretnéd beismerni. A Frei miatt jársz a Libribe.
- **c) Egy különösebben érdektelen, indentált JSON file:** Valamiért Edge-et használsz fejlesztéshez. A OneDrive-od össze van szinkronizálva az összes eszközödön. Az egyetemi levelezésből rögtön jönnek az értesítések a telefonodra, de általában nem olvasod el őket. Lowkey visszamennél Google keressőre, de most már elvből itt maradsz, plusz a BingAI igazából egész jó lett, csak ne törölné a chatet, ha véltetlen túlzottan legörgetsz.

Azonban rossz practice plain textet visszaküldeni, amikor tudjuk, hogy JSON érkezik, ezért ilyenkor nem a `send`, hanem a `json` függvényt kell meghívni.
```JS
app.get('/', async (req, res) => {
    res.json(await Movie.findAll())
})
```
Azt is szeretnénk, hogy valami értelmes, logikus elérési útvonalon keresztül kapjuk meg a filmeket, például a `localhost:3000/movies/all` címen keresztül.
```JS
app.get('/movies/all', async (req, res) => {
    res.json(await Movie.findAll())
})
```
Sokszor előfordul, hogy csak valami konkrét dolgot szeretnénk megkapni egy paraméteren keresztül.
```JS
app.get('/movie/:movieKey', async (req, res) => {
    res.json(await Movie.findByPk(req.params.movieKey))
})
```
Esetleg egy paraméterezett dologba szeretnék bemászni mélyebbre, és még abban is paraméterezni.
```JS
app.get('/movie/:movieKey/year/:plus', async (req, res) => {
    const movie = await Movie.findByPk(req.params.movieKey)
    res.json(movie.year + parseInt(req.params.plus))
})
```

## Nagy feladat
**⚠️ Készítsd el az API-kat a következő lekérdezésekhez! Ha nem specifikálja az adott pont külön, akkor JSON objektumban add vissza az eredményt!**  

1. Töltsd le a kiinduló ZIP-et.
2. Telepítsd a függőségeket.
3. Setupold az adatbázist.
4. Írd meg a feladatokat.

*A feladatok nem feltétlen nehézségi sorrendben vannak.*  
- `/movies`
    - `/all`: Az összes adatbázisban található film.
    - `/titles`: Az összes film címe egy HTML `ul`-ben.
    - `/nolan`: Az összes Christopher Nolan film adata.
    - `/oldest`: A legrégebbi film képe egy `<img>` tagben kirajzolva.- `
    - `/genre/:genreId`: Az összes film, aminek a kategóriája
- `/ratings`
    - `/happy`: A pozitív (4, 5) értékelések.
    - `/sad`: A negatív (1, 2) értékelések.
    - `/movie/:movieId`: A `movieId` film összes értékelése.
    - `/user/:userId`: A `userId` felhasználó összes értékelése.
    - `/all/:pagesize/:page`: `ul` listában azon értékelések tartalma, amik a `page`-edik listaoldalon megjelennének `pagesize` oldalmérettel. (Tehát ha az oldalméret 2, és a 3. oldalon vagyunk, akkor az 5. és 6. ratinget kell listázni.)
- `/genres`
    - `/name/:genreName`: Az összes film, ami a `genreName` nevű műfajba tartozik.
- `/users`
    - `/likes/:movieId`: Azoknak a felhasználóknak az e-mail címei egy `ul`-ben, akik pozitív értékelést adtak a `movieId` ID-jú filmre.
    - `/ratingavgs`: Minden felhasználó neve és az értékeléseik átlaga. Ez mehet akár JSON-be, akár listába, amelyiket könnyebbnek találod.
    


