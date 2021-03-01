# CsoportZH

## Technikai infók
A feladat megoldására 45 perc áll rendelkezésre, plusz 5 perc kifejezetten a becsomagolásra és elküldésre. Egy tömörített file-t küldjetek emailben a **mohmas@inf.elte.hu** címre, tárgy **[Web] CsoportZH - *Neptun-kódod*** (pl.: [Web] CsoportZH - MOHMAS). A szögletes zárójelek is legyenek a tárgyban, mert így biztosan a külön erre fenntartott mappába érkezik, nem pedig spambe, kukába stb (volt már rá példa sajnos). A js file kiterjesztését írjátok át, nehogy a levelezőrendszer megfogja, tehát script.js helyett legyen például script.js.txt vagy script.txt.

## Lore
Yavaszkripsztán egyik legnépesebb városa Kombathely, ahol az ország gépiparának lelke működik, a Kombathelyi Űrsiklómanufaktúra. A gyár számos járművet gyárt. Mindegyiknek ismert a neve, tömege (a tömeg mértékegysége `Yoteon`) és típusa (`teher` vagy `személy`). A **teher**űrjárművek mindegyikéről tudjuk, hogy mekkora a maximális terhelhetőségük, míg a **személy**űrjárműveknek a maximális utasszáma ismert.

Minden legyártott járműről tudjuk, hogy kik adtak le megrendelést, mekkora mennyiségben, illetve milyen határidővel (év).

**Szánj időt az induló adatok értelmezésére, amik a kiinduló kódban adottak!**

## Feladatok
A járműveket és megrendelőket a nevükkel kell megadni (`nev` illetve `ugyfel`). Olvasd végig a feladatokat, mielőtt nekik futsz!

### 1. Feladat (1 pont)
Listázd ki a legalább 1500Yoteon tömegű űrhajókat!

### 2. Feladat (1 pont)
Adj meg egy űrhajót, melyre pontosan egy megrendelő adott le igényt! **Ne feltételezd**, hogy létezik ilyen - ha nem lenne, írd ki, hogy nincs ilyen űrhajó.

### 3. Feladat (2 pont)
Listázd ki azokat a megrendelőket, akik 2025 előtt szeretnének legalább 5 darab `IMP SD II. flottalogisztikai főjármű`-höz jutni. **Feltételezheted**, hogy létezik ilyen nevű űrhajó.

### 4. Feladat (2 pont)
Adj meg egy **személy**űrjárművet, melyre érkezett be 15.000 főnél nagyobb kapacitású megrendelés - vagyis valaki olyan sokat rendelt belőle, hogy az adott járműből annyi darab 15.000 embernél többet is tudna szállítani. **Feltételezheted**, hogy létezik ilyen.

Segítség: ehhez nem kell összegzés, csak keresés, és két megfelelő attribútum szorzása.

### 5. Feladat (4 pont)
Összesen hány Yoteon tömegű áru mozgatására alkalmasak azok a **teher**űrjárművek, amiket a `Kuat Drive Yards` cég rendelt? Egy járművet elég egyszer számolnod, nem kell annyiszor, ahány darabot rendeltek!

### 1. Bónusz (1 pont)
A megoldások ne számolódjanak/íródjanak ki helyből, csak egy gomb megnyomására (egyszerre az összes)!

### 2. Bónusz (1 pont)
Minden feladatnak legyen külön saját gombja, ami csak azt a feladatot oldja meg/írja ki!

### 3. Bónusz (1 pont)
Minden feladatnak legyen külön saját gombja, de egyetlen eseménykezelőt használj (delegálás)!

## Megoldás
![Így nézzen ki a végeredmény](foszk3.png)