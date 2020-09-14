# 2. Gyakorlat feladatok
## 1. Feladat - Beszerzés
### Lore
A Hubert és Pancito Kft. minden év legelején leadja az adott évre vonatkozó tervezett költségvetést. Ezt egy táblázatba teszik meg, melybe fel van sorolva, hogy milyen termékből mekkora mennyiséget milyen egységáron fognak beszerezni, de a karalábévírus miatt nem tudják a továbbiakban ezt papíron megtenni, így szükségük van egy szuperhatékony adminisztrációs eszközre, ami kiírja ezeket strukturált formában.

A programot közbeszerzés keretei közt kívánják megkonstruálni. A pályázati kiírás alább olvasható:  
**JavaScript program, mely [megnevezés-mennyiség-egység-egységár] formátumú adatokat igényes, olvasható formában felsorol a böngészőablakba táblázatosan.**

### Feladat
Készíts olyan JavaScript programot, mely kielégíti a közbeszerzés feltételeit. Amit a közbeszerzési kiírás nem specifikál, arról szabadon dönthetsz.

### Példa
|Megnevezés|Mennyiség|Egység|Egységár|
|-|:-:|:-:|:-:|
|Lábfertőtleníő (1L)|200|db|3900Ft|
|Iratmegsemmisítő|1|db|6990Ft|
|Széf|1|db|198900Ft|
|Opel Astra H 3-Ajtós irányjelző lámpa jobb első (index)|1|db|4799 Ft|
|Opel Astra H 3-Ajtós irányjelző lámpa bal első (index)|1|db|4799 Ft|
|Online híroldal (index)|1|szerkesztőség|ajánlatra vár|
|Adriai nyaralás|3|család|nincs információ|

### Induló kód
*nincs*

## 2. Feladat - Megfigyelés
### Lore
Köztudott, hogy a szíriuszi ős-MAGyarok fényen utazva érkeztek a ~~bolyg~~ Kárpát-medencébe, és azóta is megfigyelik az emberiséget. Ezek a hiperintelligens lények sajnos azonban nem tudták megérteni, hogy a HTML nem egy programozási nyelv, ezért a kiemelet prioritású személyeket számon tartó adatbázisuk átláthatatlanná vált. Mint a Hunok és a csillagok aranyvérű közvetlen leszármazottját, Téged bíztak meg azzal, hogy átláthatóvá tedd nekik a listát.

### Feladat
Készíts olyan JavaScript programot, ami a listában található összes olyan embert, akinek a nevében van `t` betű, aláhúz, valamint mindenkit, aki 20 éves vagy idősebb, megvastagít (a két tulajdonság egyszerre is teljesülhet). Mindenki más csak standard módon legyen kiírva.

### Példa
<ul>
    <li style="text-decoration: underline;"><ins>Szűts Viktória (19)</ins> </li>
<li><b>Ikea Nándor (56)</b></li>
<li style="text-decoration: underline;"><ins>Frappáns Patrik (10)</inst> </li>
<li><b>Hoska Áron (23)</b></li>
<li style="text-decoration: underline;"><ins>Lajka Henrietta (18)</ins> </li>
<li><b>Csíkos Míra (48)</b></li>
<li>József Erik (3) </li>
<li style="text-decoration: underline;"><ins>Bucsári Katalin (15)</ins> </li>
<li style="text-decoration: underline;"><b><ins>Bogár Tamás (20)</ins></b></li>
</ul>

### Induló kód
````JS
[
    {nev: 'Szűts Viktória', kor: 19},
    {nev: 'Ikea Nándor', kor: 56},
    {nev: 'Frappáns Patrik', kor: 10},
    {nev: 'Hoska Áron', kor: 23},
    {nev: 'Lajka Henrietta', kor: 18},
    {nev: 'Csíkos Míra', kor: 48},
    {nev: 'József Erik', kor: 3},
    {nev: 'Bucsári Katalin', kor: 15},
    {nev: 'Bogár Tamás', kor: 20}
]
````

## 3. Feladat - Barkácsolás
### Lore
A Bors Inc. megbízott, hogy fejleszd egy kicsit a felsoroló szoftverüket, de valaki barkácsolni kezdett, és gondolkodás nélkül a HTML-be írt adatokat. Mint jólnevelt programtervező informatikus, azonnal kiszúrod ezt, de mivel nem kaptál rá felhatalmazást, nem javítod ki, csak haladsz tovább a megbízással: minden felsorolt elemet kiszínezni megfelelő színűre.

### Feladat
Készíts olyan JavaScript programot, ami egy HTML-ben olvasható adatsokaság minden eleméhez színt rendel annak függvényében, hogy mi olvasható az adatmezőjükben. Az adatokat nem égetheted be a JavaScript kódba, és a HTML-t kézzel nem módosíthatod. Ha az adott elem `tipus` értéke `helyes`, akkor legyen a szöveg zöld, ha `barkacs`, akkor legyen piros.

### Példa

```diff
+ Programozási tételek

+ Ciklusinvariáns kiszámolása

- Amit előző óra végén csináltunk

+ Szekvenciák szekvencializálása

- "NeM mEgYeK aZ iKeÁbA, mAjD mEgoLdOm MaGaMnAk"
```


</h2>
    
### Induló kód
````HTML
<ul>
    <li data-tipus="helyes">Programozási tételek</li>
    <li data-tipus="helyes">Ciklusinvariáns kiszámolása</li>
    <li data-tipus="barkacs">Amit előző óra végén csináltunk</li>
    <li data-tipus="helyes">Szekvenciák szekvencializálása</li>
    <li data-tipus="barkacs">"NeM mEgYeK aZ iKeÁbA, mAjD mEgoLdOm MaGaMnAk"</li>
</ul>
````
