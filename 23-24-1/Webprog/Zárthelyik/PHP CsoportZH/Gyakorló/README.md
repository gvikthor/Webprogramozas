# PHP - CsoportZH

## Információk
- A feladatmegoldására 45 perc van, a Canvas feltöltésre további 5.
- Adott egy induló csomag zip-ként.
    - Induló HTML, de nem kötelező azt használni (`index.html`, `varos.html`).
    - Induló adathalmaz (`data.php`).
    - Induló readme file (`readme.md`).
- Egyetlen zip filet tölts fel, melynek tartalma:
    - Minden releváns `php` file.
    - Egy readme file *(a gyakorló feladatban most ez nincs benne)*.
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
Ad

## 1. Feladat - 1 pont
Listázd ki a városok nevét a főoldalra egy listába.

## 2. Feladat - 2 pont
Minden város neve egy link legyen, ami a `varos.php` oldalra mutat a város ID-jának megfelelő GET paraméterrel.

## 3. Feladat - 2 pont
A `varos.php` oldal listázza ki az adott város adatait.

## 4. Feladat - 2 pont
Legyen a főoldalon egy űrlap, amivel új várost vehetünk fel. Ezt egyelőre nem kell eltárolni, csak a hibaellenőrzést kell megcsinálni:
- A név ne legyen üres.
- A lakosság legyen szám.
Nem kell hibaüzeneteket kiírni, elég, ha van egy elágazás a végén. Ha az 5. feladatto nem tudod megcsinálni, írd az elágazásba kommentben, hogy mire való az adott ág.

## 5. Feladat - 3 pont
Az oldal a városokat munkamenetben tárolja, a listázás is innen történik. Ha létrehozunk egy új várost, az bekerül a munkamenetbe.

Segítség: Amikor a felhasználó először az oldalra jut, akkor ne felejtsd el, hogy még nincs munkamenet, és valahogy kezdőértéket kell adnod a megfelelő változónak.

## +1. Feladat - +2 pont
Tárold, hogy mely városok oldalait látogatta már meg a felhasználó, és a listában jelezd valamilyen módon (pl egy pipa emojival).