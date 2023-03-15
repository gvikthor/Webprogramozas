# 3. Gyakorlat - Szorgalmi feladatok
## Szinema Sziti
### Feladat
Egy baráti társaság összesíteni szeretné a filmeket, amiket közösen néztek mostanában moziban. Minden filmről két információt tárolunk: cím; kik nézték meg. A "kik nézték meg" tömbben emberek vannak, akiknek van neve, és értékelték az adott filmet.

1. Írd ki egy táblázatba a filmek címeit. (1 pont)
2. A második cellába listázd ki (`ul`) a nézők neveit. (1 pont)
3. Csak azokat a filmeket listázd, amelyek legalább átlagos értékelése legalább 7. (1 pont)

### Adatok
Az induló adatokat megtalálod a szorgalmi.js fileban. A szorgalmi.html file-ba raktam css-t meg induló HTML kódot, de nem muszáj használni.

### Instrukciók
Beadás e-mailben: `thor inf.elte.hu`, tárgy: `[Web] Szorgalmi`.

Egy zip filet kell küldened, viszont a levelező rendszerek nem szeretik a script fileokat, még ha be is vannak csomagolva. Éppen ezért a JS fileodat nevezd át `valami.js`-ről `valami.txt`-re (tehát a kiterjesztést kell megváltoztatni). A zip a következő fileokat tartalmazza:
- `valami.html` - ne a HTML-be írd a JS kódot, szokjuk meg, hogy el van választva.
- `valami.txt` - ez a JS file, csak a kiterjesztés módosítva.
- `readme.md` - lásd lentebb. 

Minden részfeladat 1 pluszpontot ér. Azokat csinálod meg, amelyeket szeretnéd, nem kötelező mindet. Értelemszerűen annyi pontot kapsz, ahányat megcsináltál (részpontot is lehet kapni, ha próbálkozol). A webes számonkéréseknél README file-t használunk, hogy könnyebben követhessük, szerintetek mely részfeladatokra kéne pontot adnunk. Így, ha valami nem egyértelmű, hogy jelen van, tudjuk, hogy keresni kell. Írj `x` ikszet a zárójelek közé, ha a feladat kész; `.` pontot, ha elkezdted, de nincs kész; hagyd üresen szóközzel, ha nem kezdtél bele.

```
Vezetéknév Keresztnév
NEPTUN
Szorgalmi - 3. Gyakorlat
[ ] 1. Írd ki egy táblázatba a filmek címeit.
[ ] 2. A második cellába listázd ki (`ul`) a nézők neveit.
[ ] 3. Csak azokat a filmeket listázd, amelyek legalább átlagos értékelése legalább 7.
```

Példa README.md file. Gergely megcsinálta az első feladatot, sikeresen kilistázta a filmek címeit. Elkezdte megírni a szűrést az átlagos értékekre, de elakadt közben. A névlistázásba nem kezdett bele, mert nem akart HTML gyerekek gyerekeinek gyerekeket generálni.
```
Kovácz Gergely Áron
C2R1Y3
Szorgalmi - 3. Gyakorlat
[x] 1. Írd ki egy táblázatba a filmek címeit.
[ ] 2. A második cellába listázd ki (`ul`) a nézők neveit.
[.] 3. Csak azokat a filmeket listázd, amelyek legalább átlagos értékelése legalább 7.
```


# 3. Gyakorlat - Gyakorló feladatok

## Programok - DOM generálás
Egy baráti társaság Dániába indul a nyáron. Segíts nekik, hogy rendszerezettebben láthassák az út részleteit. Induló adatok a data.js fileban (ebben nincs benne a megoldás, csak a kiinduló adatok).

1. Minden naphoz (`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`) generálj egy `div` elemet.
2. Minden `div` elembe készíts egy `h3` elemet a nap nevével.
3. A címek alá írd ki az aznapi programok nevét egy-egy `span` elembe. *Ez egyelőre csúnya lesz, nem lesz köztük hely, de ne aggódj, hamarosan megoldjuk.*
4. Keress egy függvényt online, ami véletlenszerű színt generál, vagy használd a GitHub copilotot vagy a chatGPT-t. Ne feledd tesztelni, mielőtt használod!
5. Minden `span` elemnek legyen véletlenszerű a háttérszíne.
6. A programok neve alatt, de a színes `span` elemen belül szerepeljen zárójelben, hogy milyen hosszúak, például: `Planetarium (2h)`
7. Minden `span` annyiszor száz pixel széles legyen, ahány órás az adott program. *Mivel a `span` elemek nem nyúlnak alapértelmezetten, css-ben meg kell adnod nekik, hogy `display: inline-blobk`
8. Fix százas szorzó helyett minden `span` elem olyan széles legyen, amekkora százalékát felhasználja a 24 órának egy napból.
9. A napok maradék hátralévő részét töltsd ki egy `span` elemmel, aminek a neve `Free time`. Minden `Free time` színe legyen azonos.

## Költések - Események
Az út költségekkel jár. Segíts nekik, hogy könnyebben kiszámolhassák, mennyibe fog kerülni a hét. Induló adatok a data.js fileban (ebben nincs benne a megoldás, csak a kiinduló adatok).

1. Listázd ki egy táblázatba a költéseket: Mire? Mennyit? Milyen valutában?
2. Írj egy függvényt, ami összesíti, hogy hány forintba került az út.
3. Írd ki a táblázat alá, hogy hány forintba került az út.
4. Írd ki a táblázat fölé két `<div>` elembe, hogy mennyi az Euró, és mennyi a Dán Korona árfolyama.
4. Csinálj egy gombot, és csak azután írd ki, mennyibe került az út, ha megnyomtuk a gombot (`click`).
5. Cseréld le az EUR és a DKK diveket input mezőkre (input mezőnél nem `inputElem.innerText` van, hanem `inputElem.value`).
6. Ha megnyomjuk a gombot, frissüljön az összköltség az input mezőkben lévő árfolyamokkal (`parseFloat(inputElem.value)`)
7. **Nehezebb!** Egy helyett 4 gomb legyen az oldalon: HUF, EUR, DKK, Original. Ha megnyomjuk valamelyiket, generáld ki újra a táblázatot, de minden ár legyen a megadott valutában (Original esetén pedig az eredeti pénznemben), valamint az összeg is az adott valutában legyen. Ha csúnya hosszú tizedeseket kapsz, használhatod a `toFixed` függvényt, hogy kevesebb tizedest tudj kiírni.

## Strukturálatlan feladatok
Szokásos random feladatok régi webprog feladatgyűjteményből. Nincs hozzájuk megoldásom készen.

1. Egy gomb megnyomására írd ki a dokumentum valamelyik általad választott részére, hogy "Helló világ!"!
2. Kérj be egy számot, és annyiszor írd ki egymás alá egyre növekvő betűméretekkel a "Hello világ!" szöveget! (szöveges beviteli mező, gomb)
3. Kérj be egy N számot, és készíts azzal egy NxN-es szorzótáblát!
4. Írj egy kör kerületét kiszámoló programot!
5. Egy szöveges beviteli mezőben legyen lehetőség megadni egy interneten elérhető kép URL-jét. Egy mellette lévő gombra kattintva jelenítsd meg a képet a dokumentumban!
6. Másolás
    - a. Adott két szöveges beviteli mező és köztük egy gomb. A gomb lenyomására másold át az egyik szöveges beviteli mező tartalmát a másikba!
    - b. Általánosítsd a feladatot N db szöveges beviteli mezőre! Ha kell, akkor definiáld a megfelelő adatszerkezetet hozzá!
7. Egy űrlapon csak akkor kérd be a leánykori nevet, ha nő az illető! Használd a rádiógombok click eseményét! A megjelenítéshez, eltűntetéshez használd az elemek hidden tulajdonságát!
```HTML
<input type="radio" name="nem" value="ferfi" checked> férfi
<input type="radio" name="nem" value="no"> nő
Leánykori név: <input id="leanykori_nev">
```
8. Oldalbetöltéskor listázd ki az oldal összes hiperhivatkozásának a címét!
```HTML
<a href="http://www.elte.hu">ELTE</a>
<a href="http://webprogramozas.inf.elte.hu">Webprogramozás az ELTÉn</a>
<a href="http://www.inf.elte.hu">ELTE Informatikai Kara</a>
<ul id="hivatkozasok"></ul>
```
9. Oldalbetöltéskor készíts tartalomjegyzéket az oldalon található h1, h2, h3, stb. elemek alapján. A document.querySelectorAll() metódus ún. dokumentumsorrendben adja vissza az elemeket, az adott szülőelemtől mélységi bejárást használva.
    - a. Működjön csak h1 elemekre!
    - b. Működjön csak h1 és h2 elemekre!
    - c. Működjön csak h1,h2, h3 elemekre!
    - d. Működjön az összes címsorelemre!
10. Készíts egy számláló komponenst!
    - a. A számláló egy csak olvasható szöveges beviteli mezőből és két gombból (plusz, mínusz) áll! A gombok meg nyomásával a szöveges beviteli mezőben lévő szám eggyel nő vagy csökken.
    - b. Definiálj a szkriptben egy minimum és egy maximum értéket! Ha a számláló eléri valamelyik értéket, akkor a megfelelő gomb ne legyen elérhető!
    - c. Ha a gombot hosszan nyomjuk le, akkor a számláló automatikusan kezdje el az értéket változtatni.
11. Adott egy három oszlopból álló táblázat! A táblázat felett 3 szöveges beviteli mezővel és egy gombbal. A gombra kattintva a 3 beviteli mező értéke új sorként szúródjon be a táblázatba.
12. Készíts webes alkalmazást kamatos kamat számolására. A számoláshoz meg kell adni a kiindulási összeget, a kamat értékét, valamint azt, hány évvel későbbi összegre vagyunk kíváncsiak. Minden év végén adjuk hozzá a kamatot a tőkéhez, és a következő évben az képezi a kamatozás alapját. A feladat során jelenítsük meg azt is, hogy melyik évben hogyan változik az összeg.
    - a. Tervezd meg a felületet és készítsd el a statikus prototípusát a feladatnak, amely már tartalmazza a megfelelő elemeket!
    - b. Gondold át, milyen adatokat kell tárolni a feladat működtetéséhez! Hozd ezeket létre!
    - c. A felhasználó egy gomb megnyomásával indítja el a számolást. Egy eseménykezelő függvényben reagálj erre, és jelenítsd meg az összeg változását az évek során!
13. Gondoljon a gép egy számra! A mi feladatunk, hogy kitaláljuk. Legyen lehetőség tippelni a számra, a gép pedig annyit válaszoljon, hogy az általa gondolt szám kisebb-e vagy nagyobb az általunk tippeltnél. Véletlen szám generálásához használd a Math.random() függvényt, illetve kerekítéshez a Math.floor() függvényt!
    - a. Tervezd meg a felületet és készítsd el a statikus prototípusát a feladatnak, amely már tartalmazza a megfelelő elemeket!
    - b. Gondold át, milyen adatokat kell tárolni a feladat működtetéséhez! Hozd ezeket létre!
    - c. Végül egy eseménykezelő függvényben reagálj a felhasználó tippelésére, és írd ki, hogy a gondolt szám, nagyobb, kisebb vagy egyenlő vele.
    - d. Opcionálisan tüntesd fel a korábbi tippeléseket is, pl. egy listában!
    - e. Ha kitaláltuk a számot, akkor már ne legyen lehetőség újra tippelni! Ezt vagy a gomb letiltásával, vagy a tippelőelemek eltüntetésével tudod megtenni.
14. Adott egy könyvtári nyilvántartás. Egy könyvről a következő adatokat tároljuk: szerző; cím; kiadás éve; kiadó; ISBN szám
    - a. Felületen kérj be egy évszámot, és listázd ki az abban az évben megjelent könyvcímeket!
    - b. Készíts egy legördülő mezőt, amelyben az egyes kiadók vannak felsorolva. Egy gombra kattintva táblázatos formában jelenítsd meg a kiválasztott kiadóhoz tartozó könyveket!