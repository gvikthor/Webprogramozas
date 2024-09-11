# Szerveroldali 1. Gyak
*Disclaimer: a gyakorlaton haladva eltérünk attól, amit előre terveztem, így kisebb nagyobb különbségek vannak a kódban.*

## Bevezető
A tárgy alapvetően arról fog szólni, hogy szerveroldali keretrendszerekkel készítünk alkalmazásokat, de óhatatlanul bele fogunk futni a kliensoldalba is - tisztán szerveroldali tárgyat nehéz is lenne csinálni, van rá ötlet, de felhasználói élmény miatt minden fullstack lesz.

Az előkövetelmény "Webprogramozás" tárgy azért eléggé felszínes, csak a körvonalait ismerjük meg a webes technológiáknak. Sok csoport a fetch/ajax technológiáig sem jut el, ami a modern web alapját képezni. Ha ez kimaradt, érdemes utánanézni, vagy bátran kérdezzetek!

### Követelmények
- Minden gyakorlat elején kisZH (kifejtős kérdés)
- 1 PHP beadandó, amit be kell mutatni és megvédeni (nem annyira vészes, sima CRUD alkalmazás)
- 1 vegyes ZH a félév anyagából (eléggé hosszú ZH, beefy feladatokkal; javítóZH van)
- Mivel folyamatos számonkérésű tárgy, nincs UV belőle

### Egyéb utility infók
- thor@inf.elte.hu (Légyszi, e-mailt írjatok, ne teamsen, mert a teams üzeneteimet nem tudom trackelni, az e-maileket viszont tudom címkézni)
- Minden gyakot felveszünk, visszanézhető
- Minden kód elérhető lesz githubon (https://bit.ly/web-thor)
- Minden gyakhoz lesz kísérő doksi, amit igyekszem hozzáigazítani a tempónkhoz, de nem mindig fog sikerülni
- VS Code + LiveShare is lesz minden órán
- Először is fel kell telepíteni a PHP-t és a Composert a gépünkre:  
    - https://github.com/totadavid95/PhpComposerInstaller/blob/master/README_hu.md
- Hasznos régebbi dolgok:
    - https://github.com/szerveroldali/
- Hasznos olvasmány a web működéséről
    - https://medium.com/storyblocks-engineering/web-architecture-101-a3224e126947

### Hogyan jutottunk ide? Hova?
Webfejlesztés: Statikus weboldalak, HTML, CSS  
Webprogramozás: Dinamikus weboldalak natív JS és PHP segítségével  
Szerveroldali: Csomagkezelőkkel és keretrendszerekkel kiegészített dinamikus, perzisztens oldalak készítése  

Jó, de mi az a csomagkezelő?
Nagyon sok mindent már mások megírtak helyettünk, és mi nem szeretnénk úket nulláról kezdeni. Ezért az ő kódjaikat fel tudjuk használni. Mivel mindenféle projekt más csomagokat fog használni, illetve a csomagoknak sok verziója van, egy jó csomagkezelő a munka nagyrészét megoldja nekünk, és így könnyebben szállíthatvá, modulárisabbá válik az alkalmazásunk (nem kell a csomagokat is felölteni például githubra, mert a csomagok verziókkal kiegészített listájából bárki le tudja tölteni ugyanazokat a fileokat).

## Composer
Próbáljuk ki a frissen beszerzett csomagkezelőt (package manager-t), a composert.
```
composer init
```
Mindenféle kérdést fel fog tenni, de igazából mindent átugorhatunk. (Néhol egy `n` betűt nyomni kell még, de a legtöbbre csak enter kell). Ez kigenerál egy `composer.json` filet, ami a függőségeket (dependencyket) fogja tárolni - ezek azok a csomagok (package-ek) lesznek, amiket telepítünk. Telepítsük fel a [Faker](https://fakerphp.org/) csomagot. 
```
composer require fakerphp/faker
```
Létrejön egy `package.lock` file és egy `vendor` mappa, valamint a `composer.json` fileba bekerül a faker mint követelmény. Se a lock fileba, se a vendor mappába nem fogunk belenyúlni, ezeket a composer kezeli automatikusan. Az érdekesebb dolog a composer JSON-ben a verzió: a pont elválasztja a főverziót és az alverziót, a kis kalap pedig lezárja a főverziót, így ha olyan frissítés jön ki, ami eltörheti az alkalmazást (ezt jelenti a főverzió váltás), nem fogja frissíteni a composer.

Csináljunk a mappánkba (ne a vendor mappába, hanem azon kívül, a két composer file mellé) egy `teszt.php` filet, és tegyük bele a következő kódot.
```PHP
<?php
require_once 'vendor/autoload.php';

$faker = Faker\Factory::create();
echo $faker->name() . PHP_EOL;
echo $faker->email() . PHP_EOL;
echo $faker->text() . PHP_EOL;
```
Ez ki fog generálni nekem mindenféle kamu adatokat egészen beszédes függvényekkel.

Ha most törlöm a `vendor` mappát és a `composer.lock` filet, akkor nem tudom futtatni a programot, mert nincsenek meg a szükséges fileok hozzá - de ne pánikoljunk, nincs semmi gond, a `composer.json`-ből tudjuk telepíteni. Egyszerűen csak a telepítés parancsát kell lefuttatnunk.
```
composer install
```

A vendor mappa persze felesleges, mint korábban is írtuk, hiba lenne feltölteni gitre például. Csináljunk tehát egy `.gitignore` nevű mappát, és írjuk bele, hogy hagyja ki ezeket a fileokat.
```
/vendor
composer.lock
```
Így nem fogja feltölteni azokat a fileokat, amiket a telepítő parancs ki tud generálni.

## Laravel
Ezt nem másolom be, de nagyon hasznos elolvasni (és nagyjából végig is fogunk rajta menni):  
https://github.com/szerveroldali/leirasok/blob/main/LaravelProjektszerkezet.md

A Laravel egy Modell - Nézet - Kontroller (Model-View-Controller) archotektúrájú keretrendszer. Ez persze eléggé idealista megközelítés, gyakorlatban kicsit bonyolultabb lesz, mert be fog jönni a routing is. 

Hozzunk létre egy laraveles projektet
```
composer create-project laravel/laravel Projekt_neve
```
Ez egy kis időt fog igénybe venni, legyetek türelemmel.

Nézzünk bele a `routes/web.php` fileba. Ebben azt látjuk, hogy van egy get kéréssel elérhető valami, ami visszad valami welcome nézetet. Ebbe a függvénybe lehetne például middleware-eket pakolni, lehetne mindenféle ellenőrzésekkel teletolni, előfeldolgozással, stb. Tovább haladva, keressük meg ezt a welcome nézetet. Logikusan a `public` mappába szeretnénk menni, de ez már a kész oldalt tárolná, abba nem akarunk kézzel írni. A helyes út a `resources/views/` mappa, abban is a `welcome.blade.php`. Ne ijedjünk meg ettől a kettős kiterjesztéstől, a [Blade](https://laravel.com/docs/11.x/blade) segít nekünk template-eket csinálni különböző oldalakhoz.

De hiába ez a sok segítség, semmi oldalt nem láttunk eddig, hiába a sok szenvedés, nincs weblapom. Hogyan tudom futtatni (kiszolgálni) ezt a projektet? A Laravel legjobb barátja az (Artisan CLI)[https://laravel.com/docs/11.x/artisan] (command line interface), ami segít nekünk rengeteg leegyszerűsített paranccsal, hogy könnyű legyen az életünk.
```
cd Projekt_neve
php artisan serve
```
Ekkor elindul az alapértelmezett porton a szerver, és meg is nyithatjuk az oldalt. Az oldalon pontosan azt látjuk, ami a `resources/views/welcome.blade.php` fileba van írva. Ha bemegyünk a `routes/web.php`-ba, át tudjuk írni az elérési útvonalat
```PHP
Route::get('/alma', function () {
    return view('welcome');
})
```
Ha rámentünk, majd újratöltjük az oldalt, akkor 404 errort kapunk, de ha átírjuk az elérési útvonalat, hogy `/` helyett `/alma`-ra végződjön, akkor meg is fog jelenni az oldal.

Ha kitöröljük a `resources/views/welcome.blade.php` teljes tartalmát, és beírunk a helyére valamit, akkor az fog megjelenni. Tehát ez nem nagy tudomány, csak egy oldalt bepakol nekünk, ami meg van írva.

Ha ezen a ponton még valamiért nem beszéltünk az adatbázis seedelésről, most eljött az ideje. A `database` mappában találunk sok érdekességet, amiket meg fogunk tanulni használni, de a legkönnyebb koncepció, amihez most nem kell Laravel tudás sem, az a seedelés. A seedelés lényege, hogy feltöltünk kiinduló adatokkal egy adatbázist, és ezekkel úgy tudjuk teszteln az alkalmazást, mintha valós adataink lennének - de igazából nincsneek, hiszen például a Revolut appot a fejlesztők nem élesben fogják a te számláddal tesztelni.

Egyéb hasznos, hogy a `config/app.php` fileban a timezone-t át lehet írni `UTC`-ről `Europe/Budapest`-re (nem muszáj). A CORS hibák elkerülésére is van egy külön file, ami megcsinálja helyettünk a szenvedős részét. Van egy `.env` meg egy `.env.example` file is. A kettő közt a különbség, hogy a `.env` az éles, benne vannak olyan privát információk is, mint az app key, adatbázis felhasználók stb., míg a `.env.example` az csak példa adatokkal van feltöltve, és ez így felmehet githubra is. Szerencsére a github sok ilyesmit tud észlelni, de a Laravel is elébe megy és a gitignore-ba rögtön beteszi.