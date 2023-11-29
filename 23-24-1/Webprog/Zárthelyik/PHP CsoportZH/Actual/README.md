# PHP - CsoportZH

## Információk
- A feladatmegoldására 45 perc van, a Canvas feltöltésre további 5.
- Adott egy induló csomag zip-ként.
    - Induló HTML, de nem kötelező azt használni (`index.html`, `kurzus.html`).
    - Induló adathalmaz (`data.php`).
    - Induló readme file (`readme.md`).
- Egyetlen zip filet tölts fel, melynek tartalma:
    - Minden releváns `php` file.
    - Egy readme file.
- A webes számonkéréseknél README file-t használunk, hogy könnyebben követhessük, szerintetek mely részfeladatokra kéne pontot adnunk. Így, ha valami nem egyértelmű, hogy jelen van, tudjuk, hogy keresni kell. Írj `x` ikszet a zárójelek közé, ha a feladat kész; `.` pontot, ha elkezdted, de nincs kész; hagyd üresen szóközzel, ha nem kezdtél bele.
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
Egyetemet alapítunk, és saját tanulmányi rendszerünk lesz, mert annyira megtetszett a Neptun.

*Segítség: Nyugodtan feltételezd az adatokban, hogy minden tárgy `id`-je megegyezik a tömb beli indexével.*

## 1. Feladat - 1 pont
Listázd ki a kurzusok kódját (`code`), nevét (`name`), a jelentkezők létszámát (`applied`) és a létszám limitjét (`limit`) egy táblázatba. Az utóbbi kettő kerülhet egy cellába per `/` jellel elválasztva.

## 2. Feladat - 2 pont
Minden kurzus kódja egy link legyen, ami a `kurzus.php` oldalra mutat a kurzus ID-jának megfelelő GET paraméterrel.

## 3. Feladat - 2 pont
A `kurzus.php` oldal listázza ki az adott kurzus adatait.

## 4. Feladat - 3 pont
- A főoldalon minden kurzus mellett legyen egy jelentkező "gomb", ami átirányít egy jelentkezés ellenőrzése oldalra megfelelő GET paraméterrel (ID). (1 pont)
- Az oldal ellenőrizze, hogy a kapott paraméter szám szerű-e (1 pont)
- Az oldal ellenőrizze, hogy a kapott paraméter -1 és a kurzusok száma közt legyen (tehát -1 < id < kurzusszám), hiszen indexelni fogsz vele a tömbbe. (1 pont)

## 5. Feladat - 2 pont
A kurzusokat munkamenetben tárold, és ha jelentkezünk rá, növeld a létszámot, majd irányítsd vissza a felhasználót a főoldalra.

*Segítség: Amikor a felhasználó először az oldalra jut, akkor ne felejtsd el, hogy még nincs munkamenet, és valahogy kezdőértéket kell adnod a megfelelő változónak.*

## +1. Feladat - +2 pont
Legyen egy lejelentkezés funkció, ami csökkenti a jelentkezők számát, de nem csökkenti 0 alá. Azt ellenőrzéseket ugyanúgy végezd el!