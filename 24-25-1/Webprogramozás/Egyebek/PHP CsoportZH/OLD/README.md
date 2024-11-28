# PHP - CsoportZH

## Információk
- A feladatmegoldására 45 perc van, a Canvas feltöltésre további 5.
- Adott egy induló csomag zip-ként.
    - Induló PHP, de nem kötelező azt használni (`index.php`, `fuggvenyek.php`).
    - Induló adathalmaz (`adatok` mappa).
    - Induló readme file (`readme.md`).
    - Styluslap, de nem kötelező használni (`style.css`)
- Egyetlen zip filet tölts fel, melynek tartalma:
    - Minden releváns `php` file.
    - Egy readme file.
- A webes számonkéréseknél README file-t használunk, hogy könnyebben követhessük, szerintetek mely részfeladatokra kéne pontot adnunk. Így, ha valami nem egyértelmű, hogy jelen van, tudjuk, hogy keresni kell. Írj `x` ikszet a zárójelek közé, ha a feladat kész; `.` pontot, ha elkezdted, de nincs kész; hagyd üresen szóközzel, ha nem kezdtél bele.
- A nevet és Neptun kódot értelemszerűen írd át.
- Ezen felül ebben a fileban van egy bekezdés, amit bele kell tennem. Ez a HKR szabályozásainak tudomásul vételéről szól.
    - ELTE HKR, IK kari különös rész 377/A. § : Az a hallgató, aki olyan tanulmányi teljesítménymérés (vizsga, zárthelyi, beadandó feladat) során, amelynek keretében számítógépes program vagy programmodul elkészítése a feladat, az oktató által meghatározottakon kívül más segédeszközt vesz igénybe, illetve más hallgatónak meg nem engedett segítséget nyújt, tanulmányi szabálytalanságot követ el, ezért az adott félévben a tantárgyat nem teljesítheti és a tantárgy kreditjét nem szerezheti meg.
```
Ráczkevey Péter
R216KT
Webprogramozás - számonkérés

Ezt a megoldást a fent írt hallgató küldte be és készítette a Webprogramozás kurzus számonkéréséhez.
Kijelentem, hogy ez a megoldás a saját munkám. Nem másoltam vagy használtam harmadik féltől 
származó megoldásokat. Nem továbbítottam megoldást hallgatótársaimnak, és nem is tettem közzé. 
Nem használtam mesterséges intelligencia által generált kódot, kódrészletet.
Az ELTE HKR 377/A. § értelmében, ha nem megengedett segédeszközt veszek igénybe,
vagy más hallgatónak nem megengedett segítséget nyújtok, a tantárgyat nem teljesíthetem.

[x] 1. Ez egy példa feladat, ami hibátlanul készen van.
[ ] 2. Ez egy példa feladat, amibe Péter nem kezdett bele.
[.] 3. Ez egy példa feladat, amibe Péter belekezdett, de nem fejezte be, vagy nem működik teljesen.
```

## Lore
Egy teljesen objektív metrika alapján összegyűjtöttük a Pannon Köztársaság legnépszerűbb videósait. Szeretnénk egy oldalt készíteni, ahol elolvashatjuk róluk a legfontosabb információkat.

## Elindulás
Az`adatok` mappában megtalálod a csatornákat PHP változókként is (amiket be tudsz másolni a főoldal kódjába, vagy behúzni) illetve JSON-ként is.

## 1. Feladat - 3 pont
Listázd ki a csatornákat a példában megadott formátumban. (A belső `div` elem az elrendezést segíti, nem érdemes kihagyni.)
- 1 pont: A csatorna neve megjelenik `h3` elemként; alatta pedig a vesszővel elválasztott feliratkozószám és a műsorvezető influencer neve.
- 1 pont: A kép megjelenik a megfelelő helyen.
- 1 pont: Az adatokat a JSON file-ból olvasod be.

```HTML
<div class="csatorna">
    <img src="https://kamrashop.hu/wp-content/uploads/2022/11/trmk-kokusz.jpg">
    <div>
        <h3>Mókuscsoport</h3>
        <p>213000, TheFirstMan</p>
    </div>
</div>
```

## 2. Feladat - 4 pont
Az új csatorna hozzáadása űrlap elküldhető, és az ellenőrzések helyesen megtörténnek.  
*Csak egy későbbi feladatban kell visszaküldeni a hibákat a főoldalra. Ha esetleg azt nem tudod megcsinálni, attól még az ellenőrzésekre kapsz pontot, ha helyesek.*
- 1 pont: A csatorna név kötelező (nem lehet kihagyott, üres, vagy csak szóköz)
    - Hiba: `A csatorna neve ne legyen üres!`
- 1 pont: A csatorna név minimum 5 karakter.
    - Hiba: `A csatorna neve legyen minimum 5 karakter hosszú!`
- 1 pont: Influencer megadása nem kötelező, de ha üres, akkor írd be a csatorna nevét ide is.
- 1 pont: A kép egy link legyen. Nyugodtan használd a `fuggvenyek.php` fileban található `helyes_url` függvényt.
    - Hiba: `A profilképnek megadott link helyes URL formátumú legyen!`
- Mikor csináltam a ZH-t, kimaradt a felirartkozó szám megadása és annak ellenőrzése:( Tehát űrlap elem sincs neki, írj be valami default értéket, hogy ne dobjon hibát, mikor iterálsz rajta. (Vagy ha későbbi évben nézed vissza gyakorlás képpen, csináld meg itt a szám ellenőrzést!)

## 3. Feladat - 1 pont
Feldolgozás után (akár volt hiba, akár nem) irányítsd vissza a felhasználót a kezdőlapra.

## 4. Feladat - 2 pont
Mentsd el az újonnan hozzáadott csatornákat a JSON file-ba.

## +2. Feladat - +1 pont
Hiba esetén a főoldalon jelenítsd meg a problémákat a `#hibak` elemben. Ez az elem ne látszódjon, ha nem volt hiba.

## +1. Feladat - +1 pont
Az űrlap legyen állapottartó!  
*Ha így van megfogalmazva egy követelmény, az csak a hibás esetekre vonatkozik, sikeres hozzáadás esetén ne legyenek megtartva az adatok az űrlapban!*

