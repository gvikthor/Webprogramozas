# CsoportZH
## 1. Feladat - Bíróság

**OLVASD VÉGIG A FELADATOT, MIELŐTT NEKIKEZDESZ, HOGY EL TUDD DÖNTENI, MILYEN MÓDSZERREL FUTSZ NEKI**

### Lore
A Fővárosi Ítélőtábla éppen ma tárgyalta a hírhedt Kabalinet banda ügyét. A bűnszervezet tagjai többszázezer forinttal károsítottak meg telek- és szállodatulajdonosokat többszörös befizetési csalással. Legnagyobb ügyük a májusi Dunakorzó botrány, amikor fejenként 200.000 forintot nem fizettek ki a birtokosnak rálépéskor. A mutyizó gaztevők nevét és elsikkasztott pénzösszegeit egy táblázatba gyűjtötték, a bírók pedig felkészültek az ítélet meghozására.

### Feladat
Legyen az oldalon egy táblázat, ami a vádlottakat sorolja fel. Minden sor egy vádlott nevét, összesen elsikkasztott pénzét és a kiszabott fegyházbüntetés hosszát tárolja. Ha egy sorra rákattintunk, az legyen innentől kijelölve, ha újra rákattintunk, szűnjön meg a kijelölés.
A táblázaton kívül a következő elemek találhatók az oldalon:
- Egy gomb, mely megnyomásra kiírja egy mellette található mezőbe, hogy a kijelölt vádlottak összesítve mekkora anyagi kárt okoztak.
- Egy-egy gomb, melyek megnyomásra egy évvel csökkentik/növelik a kijelölt vádlottak büntetését.
- Egy beviteli mező és egy gomb. A gombot megnyomja vastagítsuk meg azon elítéltek nevét, akik egyenként több kárt okoztak, mint a beviteli mező értéke.  

### Pontozás
- A listaelemek kattintással kijelölhetők, a kijelölt elemek kijelölése kattintással megszüntethető (2 pont)
    - Részpont: A kijelölés működik, de nem szüntethető meg (1.5 pont)
    - Valamilyen módon jelezd a kijelölést, például aláhúzással!
    - Ha az órán írt `delegal` függvényt használod, és működik, az +2 pont (de nem mehetsz 10 fölé)
    - *Tipp: A `delegal` függvényt itt találod: [Webprogramozas/20-21-1/3. Gyak/Delegalas/](https://github.com/gvikthor/Webprogramozas/tree/master/20-21-1/3.%20Gyak/Delegalas)*
- Az első gomb megnyomására a kijelölt vádlottak sikkasztott pénzeinek összege kiíródik a szomszédos elembe. (2 pont)
    - Részpont: A kijelölés nem működik, viszont a teljes összeg kiíródik dinamikusan, tehát nem stringként beégetve a konkrét összeg. (1 pont)
    - *Tipp: Egy kijelölt sorban nem nehéz megtalálni az összeg celláját, és azzal közvetlen számolni, azonban kézenfekvőbb lehet valamilyen módon eltárolni a sorban (valamilyen adathalmazzal), hogy melyik adathoz tartozik az eredeti tömbünkben (mi az indexe), és onnan dolgozni.*
- A csökkentő/növelő gombok megnyomására a kijelölt elítéltek letöltendő börtönbüntetése egy évvel csökken/nő (3 pont)
    - Részpont: A kijelölés nem működik, viszont mindenkinek a büntetése módosul (1.5 pont)
    - Részpont: ha csak az egyik irány működik (csak csökkenteni, vagy csak növelni lehet) a kapott pont feleződik.
    - Ha a büntetés nem csökkenhet 1 év alá, az +1 pont (de nem mehetsz 10 fölé)
- A harmadik gomb megnyomására megvastagodik azon elítéltek neve (vagy teljes sora), akik egyenként többet sikkasztottak, mint az input mezőben megadott összeg. Ilyenkor a korábban már esetleg megvastagított elemek legyenek az új vastagítás előtt visszaállítva! (3 pont)
    - Részpont: A vastagítás működik, de a korábban kijelölt elemek nem állítódnak vissza vékonyra az újabb vastagítás előtt (2 pont)
    - *Tipp: Figyelj arra, hogy milyen típusú adatot mivel hasonlítasz össze!*
- Ha a táblázatot dinamikusan generálod ki, +1 pont (de nem mehetsz 10 fölé)
    - A táblázatot nem muszáj JavaScriptből generálni, azonban az eseménykezelőknek akkor is jól kell működni, ha a HTML-be égetett adatok számát változtatjuk.
- Szavazz Neptunban az IK HÖK választásokon (0 pont, de hatalmas szeretet)
    - *Tipp: Ügyéntézés > Kérdőívek*

### Példa
![Animáció, ami bemutatja, hogyan működik a program.](jscszh4.gif)

### Induló kód
````JS
[
    {
        nev: 'Nabor Purple',
        sikkasztas: 1200530,
        buntetes: 5
    },
    {
        nev: 'Patrick Router',
        sikkasztas: 1200420,
        buntetes: 5
    },
    {
        nev: 'Aaron Treihoard',
        sikkasztas: 1200128,
        buntetes: 5
    },
    {
        nev: 'Heinrich Studius',
        sikkasztas: 1200803,
        buntetes: 5
    },
    {
        nev: 'Myriam Church',
        sikkasztas: 1180526,
        buntetes: 5
    },
    {
        nev: 'Erick Spkult',
        sikkasztas: 1190923,
        buntetes: 5
    },
    {
        nev: 'Catherine Fügi',
        sikkasztas: 1200813,
        buntetes: 5
    },
    {
        nev: 'Thomas Fury',
        sikkasztas: 1181008,
        buntetes: 5
    },
    {
        nev: 'Victoria Secret',
        sikkasztas: 1200608,
        buntetes: 5
    },
    {
        nev: 'Victor General',
        sikkasztas: 1190930,
        buntetes: 5
    }
]
````

### Visszajelzés

Ha végeztél a ZH-val, ezen az űrlapon keresztül tudod jelezni, hogy kb hány pontot értél el, és visszajelzést tudsz adni a nehézséggel kapcsolatban: [Űrlap](https://forms.office.com/Pages/ResponsePage.aspx?id=SLszAZD3YEWmTaxGpHL7vBhPmSkViFhMlGQ0CrcUApNURDBES1NLVlVWUlhHWDBBRVo5Slg2RU42Qi4u)