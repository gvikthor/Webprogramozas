# 3. Gyakorlat feladatok
## 1. Feladat - Állatkert
### Lore
Megnyitotta kapuit a III. Kerületi Nemzeti Kisállatsimogató, ahova a fővárosi és vidéki famíliák közösen látogathatnak el, hogy honfitársakkal karöltve szemléljék meg a hazai fauna számos lélegzetelállító példányát. Az intézmény számon tartja, hogy egy-egy szőrmókra hányan voltak kíváncsiak, hogy a népszerűségi adatok alapján készíthessék el a megvásárolható játékfigurákat.

### Feladat
Az oldaladon legyenek felsorolva a simogatóban élő állatok. Mindegyükhöz tartozzon egy gomb és egy szám. A gomb megnyomására az említett szám növekedjen eggyel.

### Példa
![Példa felépítés az első feladatra. Felsorolva pár állat neve és faja, majd utánuk a szám, hogy hányan látogatták meg őket eddig, ezt követően pedig egy gomb, melyben plusz jel olvasható.](gy3f1.png)

### Induló kód
*Az induló kód csak javaslat, más megközelítést is használhattok.*
````JS
[
    {
        nev: 'Vilmos',
        faj: 'medve',
        latogatok: 5
    },
    {
        nev: 'Gergő',
        faj: 'mókus',
        latogatok: 15
    },
    {
        nev: 'Timi',
        faj: 'hörcsög',
        latogatok: 1
    }
]
````

## 2. Feladat - Boldog kis család
### Lore
Él egy rettentő boldog család, nem messze innen, ők a Habsváriak. A Habsvári család szereti járni Európát, és sok városban megfordultak már. Egyik ilyen utazásuk alatt azonban csúnya vitába keveredtek, ugyanis egy félreértés miatt Habsvári Ottóra mérges lett a felesége, a testvére és az unokatestvére. Hogy feszültségeiket feloldják, mindketten felfüggesztették szarajevói nyaralásukat, és új úti célt keresnek.

### Feladat
Készíts olyan JavaScript programot, ami segít megtalálni a Habsvári házaspárnak, hogy a keresett országon belül mely városokba utazhatnak vonattal.

### Példa
![Példa felépítés a második feladatra. Egy input mezőbe van írva, hogy Németország, mellette a keres gomb. Ezek alatt egy rendezetlen listában (ul) listaelemekként (li) felsorolva városok: Berlin, München, Königsberg.](gy3f2.png)

### Induló kód
*Az induló kód csak javaslat, más megközelítést is használhattok.*
````JS
[
    {
        orszag: 'Németország',
        varos: 'Berlin'
    },
    {
        orszag: 'Németország',
        varos: 'München'
    },
    {
        orszag: 'Németország',
        varos: 'Königsberg'
    },
    {
        orszag: 'Franciaország',
        varos: 'Párizs'
    },
    {
        orszag: 'Egyesült Királyság',
        varos: 'London'
    },
    {
        orszag: 'Egyesült Királyság',
        varos: 'Dublin'
    },
    {
        orszag: 'Egyesült Királyság',
        varos: 'Hong Kong'
    },
    {
        orszag: 'Egyesült Királyság',
        varos: 'Delhi'
    },
    {
        orszag: 'Ausztria',
        varos: 'Bécs'
    },
    {
        orszag: 'Ausztria',
        varos: 'Pozsony'
    },
    {
        orszag: 'Ausztria',
        varos: 'Budapest'
    },
    {
        orszag: 'Moszkva',
        varos: 'Oroszország'
    },
    {
        orszag: 'Kijev',
        varos: 'Oroszország'
    },
    {
        orszag: 'Varsó',
        varos: 'Oroszország'
    },
]
````