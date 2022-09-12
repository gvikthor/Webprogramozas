# CsoportZH

## Technikai infók
A feladat megoldására 45 perc áll rendelkezésre, plusz 5 perc kifejezetten a becsomagolásra és elküldésre.

Egy tömörített file-t küldjetek emailben a **mohmas@inf.elte.hu** címre, tárgy **[Web] CsoportZH - *Neptun-kódod*** (pl.: [Web] CsoportZH - MOHMAS). A szögletes zárójelek is legyenek a tárgyban, mert így biztosan a külön erre fenntartott mappába érkezik, nem pedig spambe, kukába stb (volt már rá példa sajnos).

A tömörített állományokban található php fileokat nem szokta megfogni a levelezőrendszer, de ha mégis visszadobná (erről küld e-mailt), akkor a php file kiterjesztését írjátok át, tehát index.php helyett legyen például index.php.txt vagy index.txt.

**TÖLTSD KI A NEPTUN.TXT FILET, ÉS NEVEZD ÁT A SAJÁT NEPTUNKÓDODNAK MEGFELELŐRE!**

## GYIK
- A tört pont nem kerekül.
- Nem lehet JavaScripttel megoldani.
- Mindegy, hogy néz ki.
- Én javítom.
- Lehet az órai kódokat használni.
- Lehet a Googleben keresni, de az órai kódokban könnyebb.
- type="submit" value="Számol"
- Azért dobja a permission errort, mert nem adtál írási jogot a filera.

## Lore
Yavaszkripsztán parlamentjében 2022-ben választások lesznek. A yavaszkripsztáni Háttérszál Párt előválasztást szeretne tartani, hogy eldönthessék, melyik jelöltjük induljon az egyes körzetekben.

Minden jelöltről tudjuk a nevét (string), a körzetet/kerületet, ahol indul (string), és a felmérések alapján számolt népszerűségét a körzetében (egész). Yavascriptsztánban az emberek több jelöltre is szavazhatnak, így a népszerűségek összege nem 100% lesz.

Példa képviselő:
```
nev: Vidor Gergő
kerulet: Vidékpuszta
nepszeruseg: 57
```

## Induló kód
- Az induló kódban megtalálod az adatokat JSON fileban és PHP objektumok tömbjeként is, használd belátásod szerint bármelyiket.
- Az induló HTML filet érdemes átalakítani PHP-vé, és azzal dolgozni, de nem követelmény.
- Az induló HTML fileban adott stílusokhoz nem feltétlen kell hozzányúlni, megoldható a feladat csak azok használatával, de nem kötelező használni/meghagyni őket.
- Az induló HTML fileban lévő táblázatban található adatok csak mintaként szolgálnak, azokat ne hagyd benne a feladat megoldásakor!

**Szánj időt az induló adatok értelmezésére!**

## Feladatok

### 1. Feladat (2 pont)
Ebben a feladatban strukturált formában szeretnénk megjeleníteni az adatokat, és bizonyos attribútumok függvényében színezni szeretnénk a sorokat.
- a) Kilistázod egy táblázatba a jelöltek nevét, körzetét és népszerűségét (egy százalékjellel kiegészítve). (1 pont)
    - *Az index.html induló fileban látod ehhez a mintát.*
- b) A listázott sorok színe zöld, ha a felmérés szerint valaki abszolút többséget (50%-nál többet) fog elérni, piros, ha nem éri el a bekerülési küszöböt (5%). (1 pont)
    - *Érdemes használni az `magas` és `alacsony` stílusosztályokat, de nem kötelező.*

### 2. Feladat (3+1 pont)
Ebben a feladatban lehetőséget szeretnénk adni a felhasználónak, hogy egy általa megadott választókerületben megszámolja az indulók számát.
- a) A táblázat alatti mező elküldi valahova a kerületet valamilyen kérésparaméterként. (0.5 pont)
- b) A táblázat oldala megkapja valahonnan a kerületet valamilyen kérésparamétereként. (0.5 pont)
- c) Kiírod a paraméterként kapott kerületet a táblázat alá. (0.5 pont)
- d) Kiírod, hogy az adott kerületben hány jelölt indul. (1.5 pont)
- **Plusz pont:** Ha nem érkezik paraméter, nem írod ki a körítő szöveget se. (1 pont)
    - *Ha eleve nem írsz ki semmit, ez a plusz pont természetesen nem jár.*

### 3. Feladat (5+2 pont)
Ebben a feladatban az a cél, hogy új jelöltet lehessen hozzáadni a táblázathoz. A felhasználó megadja a jelölt nevét, kerületét és népszerűségét, ezt követően pedig, ha nincs hiba, az eredmény hozzáadódik a táblázathoz, és elmentésre kerül a szerveren.
- a) A lista alatti mező elküldi valahova a nevet, kerületet és népszerűséget. (0.5 pont)
- b) Az a) részfeladatból kapott adatokra ellenőrzöd a következőket:
    - Megérkezett név, kerület és népszerűség, azok nem üresek. (0.5 pont)
    - A népszerűség paraméter egy szám. (0.5 pont)
    - A népszerűség paraméter egész. (0.5 pont)
    - A népszerűség paraméter értéke legalább 1, legfeljebb 100. (0.5 pont)
- c) Az alábbiak közül csak az egyikre jár pont, egymást kizárják:
    - A fogadó oldalon az adatokat egy objektumba teszed, és azt az objektumot kidumpolod az oldalra. (0.5 pont)
    - A fogadó oldalról az adatokat strukturálatlanul beleírod egy fileba, akár felülírva annak tartalmát. (1 pont)
    - A fogadó oldalról az adatokat hozzáfűzöd egy JSON fileban tárolt tömbhöz, és visszamented a fileba. (1.5 pont)
- d) A c) feladatrészben a kiírás/mentés csak akkor történik meg, ha nem volt hiba az adatokban (0.5 pont)
    - *Ha az ellenőrző feladatrészt nem sikerült megcsinálni, akkor a feltétel lehet konstans igaz, de kommentben jelezd, mit kéne ellenőrizni!*
- e) Az adatok elküldése után visszajutunk a főoldalra. (0.5 pont)
- **Plusz pont:** Az c) feladatrészben keletkezett hibákat kiírod a felhasználónak. (2 pont)

## Megoldás
![Így nézzen ki a végeredmény](delutan.gif)
