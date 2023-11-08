# Szerveroldali 8. gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*  
- ⌨️ : Githubon a sources mappában megtalálod az ide tartozó kódrészletet.
- ⚠️ : Ez egy feladat, amit neked kell megcsinálnod.

KisZH: Új anyagrész, nincs KisZH


## Alapok
Kis kitekintés, hogy biztosan közös nevezőről induljunk:
- var ilyen: rósz
- let const ilyen: lyó
- const objektumnak csak a hivatkozása konstans
- objektumok referencia szerint mozognak
- [JavaScript event loop működése](https://www.youtube.com/watch?v=5vkqfhB_8mU)

## Elindulás
Először is telepíteni kell a NodeJS-t: [https://nodejs.org/en/download](https://nodejs.org/en/download)  
Az LTS verziót érdemes telepíteni (long time support), hiszen ez a legstabilabb. Ha sikerült, ellenőrizd, hogy a Node és a [Node Package Manager](https://www.npmjs.com/) is települt-e.
```
node --version
npm --v           (vagy --version)
```

Mi az a NodeJS? A lényege, hogy a böngészőben tapasztalt csodálatos JavaScript élményt elhozzuk a szerverre is. Ezt a V8 Engine biztosítja (ez robog a chromium alapú böngészők alatt, ami kb minden, ami nem Firefox). Viszont azért a NodeJS okosabb, mint egy böngésző, ugyanis bele vannak integrálva az oprendszer szolgáltatásai.

Csináljunk egy új mappát, és futtassuk is le az npm inicializációt. Ha nem írjuk be a `yes` kapcsolót, akkor mindenféle kérdéseket fel fog tenni, a kapcsolóval viszont defaulton hagyja.
```
npm init --yes
```
Ez generált egy `package.json` filet, aminek a nagy része nekünk most teljesen felesleges, úgyhogy töröljünk ki mindent, ami most nem kell nekünk. Ezt majd ő úgyis töltögeti magának mindenfélével.
```JSON
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```
Ugyanúgy, mint composernél, telepíthetünk csomagokat globálisan (ritkán akarjuk) és projekt szinten (áltlaában ezt akarjuk) is.
```
npm i -g valami           (vagy install)
npm i valami              (vagy install)
```
Ha érdekel, mik vannak jelenleg feltelepítve, arra is van parancs, de ez most most likely üres lesz.
```
npm ls
```

**⚠️ Telepítsd a Cowsay package-et!**  
Megoldás:
```

```
Nézzük meg az oldalát, mik vannak itt? Látjuk a dependencyjeit, a tőle függő dolgokat, az issuekat, pull requesteket és mindenféle hasznos dolgot (leginkább a leírást, meg a hogyan telepítsük részt, ezt érdemes elolvasni).

**Fontos: az MIT licence rád tolja az összes felelősséget, ha használod, és bajod lesz belőle!**

Telepítés után meg is jelent a `package.json` fileban a Cowsay mint függőség, mutatja a verzióját is. Verziószám: ^1.15.0
- 1: Major verzió - eltöri az eddigi kódot
- 15: Minor verzió - nem töri el az eddigi kódot, de valami változot
- 0: Patch verzió - nagyon pici frissítés
A kalap `^` azt jelenti, hogy az 1-es major verziót lezárjuk, és az npm nem fog ráfrissíteni például 2-es majorre. Sok jelölés létezik, részletek: [https://docs.npmjs.com/cli/v10/configuring-npm/package-json#dependencies](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#dependencies)

Na és most akkor nyissuk meg a `node_modules` mappát. Látjuk, hogy tele lett rakva mindennel. Ez miért van? Nem 4 dependencyje volt csak a cowsaynek? Igen, de mind a 4-nek volt valami dependencyje még, meg azoknak is volt még dependencyje, és azoknak is... 

A `package-lock.json` egy segítség a telepítéshez, hogy ne kelljen felderítenie az npm-nek a függőségeket, hadd fusson csak végig ezen. De a projektet fel lehet építeni csak a `package.json` alapján is, nem kell se a `package-lock.json`, se a `node_modules`.

Érdemes még megnézni például az `is-even` package-et.

## Első kódunk
Hozzunk létre egy JS filet a mappánkba (de ne a `node_modules` mappába), bármi lehet a neve, legyen most `01-intro.js`. Írjunk bele valamit.
```JS
console.log('Hello There!')
```
Futtassuk is le.
```
node .\01-intro.js
```
A node, csak úgy mint a sima JS, scriptként fut.

Pakoljuk be a cowsay-t, és futtassuk le az egyik függvényét.
```JS
const cowsay = require('cowsay')
console.log(cowsay.say({
    text : 'Hello There!',
    e : 'oO',
    T : 'U'
}))
```

## Feladat setup
Három megközelítéssel fogunk megismerkedni, amik egyre modernebbek egymás után: callback, prmise, async-await. Ezt a következő feladaton keresztül fogjuk megézni: Adott egy mappa, és az abban lévő összes filet fűzzük össze egy outputba.

Csináljunk pár filet:
- 02-task.js
- 02-inputs/input-1.txt
- 02-inputs/input-2.txt
- 02-inputs/input-3.txt
És írjunk valami egyedit mind a négy fileba.

Ahhoz, hogy beolvassak egy filet, tudnom kell a nevét. Ahhoz, hogy tudjam a fileok neveit, ismernem kell a mappa tartalmát. Így először a mappaszerkezetet kell valahogy megszereznem. Ehhez a `readdir` függvényt fogjuk használni. Ez eleve része a file system könyvtárnak, ami a node-al együtt települ.
```JS
// Egyik módszer
const fs = require('fs')
console.log(fs.readdirSync('./02-inputs'))
console.log('Done')

// Másik módszer
const { readdirSync } = require('fs')
console.log(readdirSync('./02-inputs'))
console.log('Done')
```
```
node .\02-task.js
```
Ez kiírta nekem egy tömbbe a fileneveket szép szinkron módon.

## Callback
Hogyan lehet ezt webprogos callbackel megírni? Csináljunk egy `02-callback.js` filet, és dolgozzunk ebbe.
```JS
fs.readdir('./02-inputs', (err, filenames) => {
    console.log(filenames)
})
console.log('Done')
```
Vegyük észre, hogy a done előbb íródik ki, mint a filenevek. Rövid magyarázat: az aszinkronitás miatt történik. Hosszú válasz: ha van idő gyakon, elmondom. Ha berakjuk a done logot a függvénybe, akkor máris a célt érem el. Érdemes még a hibát is kezelni.
```JS
fs.readdir('./02-inputs', (err, filenames) => {
    if(err) throw err
    console.log(filenames)
    console.log('Done')
})
```
Na most akkor végre olvassuk be a fileokat végre.
```JS
fs.readdir('./02-inputs', (err, filenames) => {
    if(err) throw err
    console.log(filenames)
    filenames.forEach(filename => {
        fs.readFile(`./02-inputs/${filename}`, 'utf8', (err, data) => {
            if(err) throw err
            console.log(`${data}`)
        })
    })
    console.log('Done')
})
```
Ha kihagyjuk az `utf8` paramétert, akkor azt fogja mondani a datara, hogy az egy buffer, és akkor utána kell tenni, hogy ebből csináljon szöveget: `data.toString()`. Szeretném, hogy a done az egész után íródjon ki, de nem rakhatom a foreachbe, mert akkor minden file után kiíródik. Ezt callbackes módszerrel úgy tudjuk megtenni, hogy nézzük, elértük-e már az utolsó filet, például egy index futtatásával.
```JS
fs.readdir('./02-inputs', (err, filenames) => {
    if(err) throw err
    filenames.forEach((filename, index) => {
        fs.readFile(`./02-inputs/${filename}`, 'utf8', (err, data) => {
            if(err) throw err
            console.log(`${data}`)
            if(index == filenames.length - 1){
                console.log('Done')
            }
        })
    })
})
```
Na most akkor az eredményt ne konzolra írjuk, hanem egy fileba. Ehhez a writefile függvényt fogjuk használni.
```JS
fs.readdir('./02-inputs', (err, filenames) => {
    if(err) throw err
    filenames.forEach((filename, index) => {
        fs.readFile(`./02-inputs/${filename}`, 'utf8', (err, data) => {
            if(err) throw err
            fs.writeFile(
                './02-outputs/02-callback.txt',
                `${data}\n`,
                err => { if(err) throw err }
            )
            if(index == filenames.length - 1){
                console.log('Done')
            }
        })
    })
})
```
De jaj, milyen jó, hogy hibakezelünk benne, hiszen hibát kapunk. A node nem tud beleírni a fileba. Ez nem azért van, mert nem tud filet létrehozni. Ez azért van, mert nem tud mappát létrehozni. Ha megcsináljuk a `02-outputs` mappát, akkor máris működni fog. Ha lefuttatjuk párszor, és mindegyik után megnézzük az output filet, akkor nagyon izgalmas dolgokat tapasztalhatunk. Ezeket az okozza, hogy a write alapvetően felül akarja írni az egész filet, és összecsúsznak a bufferek. Mondjuk meg neki, hogy nulladik lépésként töröld a file tartalmát, majd ezt követően csak appendeld az értékeket. (meg tegyük szebbé egy rövid error kezelő függvénnyel)
```JS
const throwErr = err => { if(err) throw err }
fs.readdir('./02-inputs', (err, filenames) => {
    throwErr(err)
    fs.writeFile('./02-outputs/02-callback.txt', '', throwErr)
    filenames.forEach((filename, index) => {
        fs.readFile(`./02-inputs/${filename}`, 'utf8', (err, data) => {
            if(err) throw err
            fs.writeFile(
                './02-outputs/02-callback.txt',
                `${data}\n`,
                { flag: 'a' }, throwErr
            )
            if(index == filenames.length - 1){
                console.log('Done')
            }
        })
    })
})
```
Kövi probléma, hogy ez az egész egy nagy callback hell, nem akarunk ilyen mélyre beleírogatni folyamatosan, ráadásul minden lépésre egyre mélyebbre haladunk.

## Promise
Mi az a promise, és hogyan lehet vele megoldani? Csináljunk egy `02-promise.js` filet, és dolgozzunk ebbe.
A promise-ok (ígéretek) lényege, hogy azt mondom, itt eskü lesz valami a jövőben, légyszi, várd meg, hogy megérkezzen, és utána cselekedj. Ha most "Programozási nyelvek: JavaScirpt" órán lennénk, akkor szépen végigcisnálnánk kézzel, hogy eljussunk egy custom promisify függvényig, de nem azon vagyunk, így csak szimplán fogjuk az fs-be beépített promise-os megoldást.
```JS
fs.promises.readdir('./02-inputs')
.then(filenames => {
    fs.promises.writeFile('./02-outputs/02-promise.txt', '')
    const promises = filenames.map(filename => fs.promises.readFile(`./02-inputs/${filename}`, 'utf8'))
    return Promise.all(promises)
})
.then(datas => {
    datas.forEach((data, index) => {
        fs.promises.writeFile(
            './02-outputs/02-promise.txt',
            `${data}\n`,
            { flag: 'a' }, throwErr
        )
        if(index == datas.length - 1){
            console.log('Done')
        }
    })
})
```
De minek nézegessem én itt ezt az indexet? Miért ne mondhatnám csak azt, hogy ha kész az egész, akkor készen vagyunk. Meg ez a hibakezelés is nagyon csúnya, miért nem csináljuk valami igényesebb módon?
```JS
fs.promises.readdir('./02-inputs')
.then(filenames => {
    fs.promises.writeFile('./02-outputs/02-promise.txt', '')
    const promises = filenames.map(filename => fs.promises.readFile(`./02-inputs/${filename}`, 'utf8'))
    return Promise.all(promises)
})
.then(datas => {
    datas.forEach(data =>
        fs.promises.writeFile(
            './02-outputs/02-promise.txt',
            `${data}\n`,
            { flag: 'a' }
        )
    )
})
.catch(throwErr)
.finally(() => console.log('Done'))
```

## Async-await
Ez annyit csinál, hogy szépen besorosítja várakozósan kinézőre a promise-okat.
```JS
const main = async () => {
    try {
        const filenames = await fs.promises.readdir('./02-inputs')
        await fs.promises.writeFile('./02-outputs/02-async.txt', '')
        for(const filename of filenames){
            const data = await fs.promises.readFile(`./02-inputs/${filename}`, 'utf8')
            await fs.promises.writeFile(
                './02-outputs/02-async.txt',
                `${data}\n`,
                { flag: 'a' }
            )
        }
        console.log('Done')
    } catch (err) {
        throwErr(err)
    }
}

main()
```
Ez átírható ún. self-invoke functionné, de elég csúnya tud lenni.
```JS
(async () => {
    try {
        const filenames = await fs.promises.readdir('./02-inputs')
        await fs.promises.writeFile('./02-outputs/02-async.txt', '')
        for(const filename of filenames){
            const data = await fs.promises.readFile(`./02-inputs/${filename}`, 'utf8')
            await fs.promises.writeFile(
                './02-outputs/02-async.txt',
                `${data}\n`,
                { flag: 'a' }
            )
        }
        console.log('Done')
    } catch (err) {
        throwErr(err)
    }
})()
```
Kicsit szebben, újra felhasználható kóddal:
```JS
function doAsync(fn) {
    (async () => {
        try {
            await fn()
        } catch (err) {
            throwErr(err)
        }
    })()
}

doAsync(async () => {
    const filenames = await fs.promises.readdir('./02-inputs')
    await fs.promises.writeFile('./02-outputs/02-async.txt', '')
    for(const filename of filenames){
        const data = await fs.promises.readFile(`./02-inputs/${filename}`, 'utf8')
        await fs.promises.writeFile(
            './02-outputs/02-async.txt',
            `${data}\n`,
            { flag: 'a' }
        )
    }
    console.log('Done')
})
```