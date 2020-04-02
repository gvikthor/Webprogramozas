# JavaScript gyakorló feladatok

## Matekórás színező
### Lore
Anakin nagyon unatkozik a Jedi Templomban tartott matekóráján (náluk nincs távoktatás, hisz a midikloriánok feltörlik a padlót a koronával). Össze van zárva egy csomó hatodikossal, akiket néha a fénykardja közepére kíván, és már amúgy is elvégezte ezt a tárgyat, de megbukott a ZH-n, mert nem tudta kiszámolni a homokszemek számát a Tatooine-on. Miközben kizoneol az óráról, színezgetni kezd a négyzetrácsos füzetébe. Ehhez nagy koncentráció kell, de nem megy ki a kis négyzetekből, pontosan tudja tartani a vonalakat. "Obi-Wan büszke lenne rám" - gondolja. "Biztos kiragasztaná a szobánk hűtőjére". Eltelik a nap, és megmutatja a rajzot Obi-Wannak, akinek ez annyira megtetszik, hogy valóban rögtön ki is ragasztja a hűtőre. Viszont nem akármilyen hűtőjük van - ez egy General Electric Profile Limited Edition Star Wars 36" Counter Depth 23.1 Cu. Ft. French Door Refrigerator with Internal Water Dispenser - Stainless Steel mindössze $4997.00-ért, amire akár alkalmazásokat is lehet telepíteni. Obi-Wan nem is rest, fel is megy az AppStoreba, és keresni kezd, hátha lehet ilyen négyzetrácsos színezőt találni. Sajnos az archívum hiányos, és köztudott, hogy ami ott nem található, az nem létezik. Te, mint a galaxis vezető egyetemének hallgatója, az Erő segítségével rögtön meg is érzed a piaci rést, és gyorsan nekiesel, hogy még azelőtt lefejleszd a négyzetrács színezőt okoshűtőkre, hogy valaki shootupolná a Jedi Templomot.

### Feladat
Készíts egy olyan oldalt, ahol négyzetrácsos cellákat lehet színezgetni.
- A táblázat méretét (n x m) input mezőkkel lehessen megadni, és egy gomb megnyomására generálódjon le a táblázat. Ha már volt valami a táblázatban, akkor írd felül.
- Ha belekattintunk egy cellába, az színeződjön ki.
- Lehessen színt választani egy valamilyen menüből.

## Nem spam, eskü, jó lesz
### Lore
A jelenlegi globális egészségügyi helyzettől teljesen függetlenül, tök véletlen egybeeséssel Asgard lezárta a határait, így Thor nem tud hazatérni. Ez nem is tűnik akkora problémának, de nincs nála pénz, és a Bosszúálóknak elegük van belőle, hogy el kell tartaniuk, ezért ráparancsolnak, hogy szerezzen valami munkát. Thor gondolkozik, de tudja, hogy egyetem mellett főbenjáró bűn dolgozni, ezért inkább olyan eszközöket választ, ami bejött a Brit Birodalomnak is, és ha ők megtehették, akkor biztos neki is szabad - abból szerez majd pénzt, hogy kihasznál védtelen embereket. Persze kolonizálni már nem tud, így az internet felé fordul, és megpróbál spam-eket küldözgetni a Stark Industries levelezőlistáira. Sajnos Tony Stark nem engedte be a Google spamszűrőit a szervereire, és JARVIS-nak sem tűnt fel a dolog. Mekkora szerencse, hogy pont Te is ott dolgozol, és azonnal elkezdesz dolgozni egy JavaScript programon, ami ki tudja válogatni a levelek közül azokat, amiket valószínűleg Thor küldött.

### Feladat
Adott egy adatszerkezet, tele e-mailekkel (2_thor_spam.json, vagy beégetve 2_thor_spam.txt). Egy e-mail sok tulajdonsággal rendelkezik, és minden tulajdonságban lehetnek jelek, amik spamgyanússá teszik az üzenetet. Egy-egy ilyen jel pontot ad az e-mailnek, és ha az összeg elér egy határt, spam-be kerül. A kritériumok átfedésben lehetnek, ekkor minden rá vonatkozó pontot megkap.
- -3 pont, ha a feladó domain-je stark.com
- +3 pont, ha a feladó domain-je mail.asg
- +1 pont, ha a tárgyban szerepel a 'nyer' szórészlet (akár szó, akár szótő, stb, pl.: nyeremény, megnyer)
- +2 pont, ha a tárgyban szerepel az 'ingyen' szórészlet
- +2 pont, ha a tárgyban szerepel a 'fizet' szórészlet
- +1 pont, ha a tárgyban szerepel az 'adó' szótő (csak a szó elején, közben/végén nem számít, pl.: odaadó)
- +1 pont, ha az üzenettörzsben link van (valami.valami.valami formátumot nézzünk, egyik tag sem üres) *reguláris kifejezés kell hozzá, php-ből mutatom majd, de a mintakódban szerepel*
- +4 pont, ha az üzenettörzsben asgardi link van (valami.valami.asg) *ez is reguláris kifejezés*
- +1 pont, ha van csatolmány
- +1 pont, ha 3-nál több csatolmány van
- +5 pont, ha egy csatolmány kiterjesztése .exe (minden exe-ért jár a pont!)

Legyen egy input mező, amibe beírhatjuk a kívánt minimális spam-pontot. Egy gomb megnyomására listázzuk a nem spam  e-maileket.
A spam pontokat szűrésenként nem kell minden szűrésre újra kiszámolni.

Próbáld becsapni a saját szűrődet, készíts saját e-maileket!

## Császkáló teknősök
### Lore
A Budapesti Állat- és Növénykertből megszökött Leonardo, a Galapagosi Óriásteknős. Ez alap esetben nem lenne akkor probléma, hiszen elég lassú teremtés, de sajnos pont arra járt az MVM Paks egyik teherautója, összeütközött vele, és kétszáz tonna urán szívódott bele a teknőc testébe, aki ettől ninjává változott, és eltűnt a hatóságok elől. A Budapesti Rendőrfőkapitányság ötlete alapján Imagine Logoban szeretnék követni Leonardo útvonalát, de az a szoftver drága, szóval inkább kisource-olják egy IK-snak, aki egy kreditért megcsinálja.

### Feladat
Legyen egy felület, aminek a közepéről indulunk. Legyen egy input mező és egy gomb. Ha a gombot megnyomjuk, a teknős hajtsa végre a beírt parancsot:
- Előre lép x egxséget, ahol x egy egész szám: `ELŐRE x`
- Balra lép x egxséget, ahol x egy egész szám: `BALRA x`
- Jobbra lép x egxséget, ahol x egy egész szám: `JOBBRA x`
- Hátra lép x egxséget, ahol x egy egész szám: `HÁTRA x`
Ha a parancs hibás, ezt írjuk ki.

## Táblázatos barangolás
### Lore
A Győri Pávatollgyár egy egyszerű, de igen fontos kéréssel fordul fiatal honfitársainkhoz: Maradjanak távol a ciklusok használatától. Ebben a kihívásban az ország legjobb programozói azt a feladatot kapták, hogy ciklusok és iterátorok használata nélkül színezzék ki egy táblázatnak azt a celláját, amire kattintottunk.

### Feladat
I mean... leírtam a loreban. Legyen egy táblázat, ha rányomunk egy cellára, az színeződjön ki, de ne használj se ciklust, se iterátort.
