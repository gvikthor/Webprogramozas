# 1. Gyakorlat - Gyakorló feladatok
## ÁFA
Ezt a feladatot még nem érdemes tömbfüggvényekkel megcsinálni. 2. gyakorlaton nézünk objektumokat és array functionöket, na majd akkor. Ez csak szimpla JS szintax gyakorlásra van.
1. Készíts egy függvényt, ami egy számnak megadja a 27%-át.
2. Készíts egy függvényt, ami egy számnak megadja egy tetszőleges százalékát.
3. Készíts egy függvényt, ami megmondja egy országról (kód alapján), hogy mennyi ott az általános forgalmi adó. Ha a megadott kód vagy országnév nem létezik, a függvény térjen vissza `-1` értékkel.

|Ország|Kód|ÁFA|
|-|-|-|
|Ausztria|AUT|20|
|Csehország|CZE|21|
|Horvátország|CRO|25|
|Magyarország|HUN|27|

4. Legyen mindegy, hogy kódot vagy országnevet írunk be.
5. Ezekben az országokban kétféle csökkentett ÁFA kulcs létezik, lehessen azokat is lekérni.

|Ország|Kód|ÁFA1|ÁFA2|ÁFA3
|-|-|-|-|-|
|Ausztria|AUT|20|13|10
|Csehország|CZE|21|15|10|
|Horvátország|CRO|25|13|5|
|Magyarország|HUN|27|18|5|

6. Készíts egy függvényt, ami egy árról megmondja, hogy minden egyes országban, minden egyes kategóriában mennyi lenne az adómentes értéke. *Érdemes megírni a készített függvényekkel és nélkülük is.**

## Tömbfüggvények
Ha az alábbi tömböt használod, a bonyolult eredményt adó feladatok megoldását tudod ellenőrizni, mert belerakom a feladat szövegébe.
```JS
[6,10,18,7,3,42,8,14,9,5]
```
1. Van a tömbben páros szám? Használd a maradék (modulo) operátort. Pl.: `13 % 5 == 3`, `7 % 2 == 1`
2. Minden szám páros?
3. Találj egy páros számot.
4. Találj egy páros számot, és add meg az indexét.
5. Adj meg egy tömböt, ami erre a tömbre épül, de a páratlanoknak a duplája, a párosaknak a fele van benne.
6. Találd meg a JavaScript dokumentációban (Mozilla Developer Network) azt a függvényt, ami megmondja, hogy egy tömb tartalmaz-e egy megadott értéket. Miben különbözik a `some`-tól?
7. Írj egy függvényt, ami megadja két számról, hogy a legkisebb közös osztójuk benne van-e a tömbben.
```JS
// LNKO (== GCD: Greatest common divisor)
function GCD(number1, number2){
    let a = Math.min(number1, number2)
    let b = Math.max(number1, number2)
    remainder = a % b
    while(remainder > 0){
        a = b
        b = remainder
        remainder = a % b
    }
    return b
}
```
8. Add meg azokat a számokat a tömbből, amelyeknek benne van a tömbben a 7-tel vett LNKO-juk.
```JS
[ 7, 42, 14 ]
```
9. Add meg minden számpárról a tömbben, hogy benne van-e az LNKO-juk a tömbben. Egy számot ne hasonlíts össze önmagával. *Ezt nyugodtan csináld két egymásba ágyazott ciklussal.*

```
6, 10: ❌
6, 18: ✅
6, 7: ❌
6, 3: ✅
6, 42: ✅
6, 8: ❌
6, 14: ❌
6, 9: ✅
6, 5: ❌
10, 6: ❌
10, 18: ❌
10, 7: ❌
10, 3: ❌
10, 42: ❌
10, 8: ❌
10, 14: ❌
10, 9: ❌
10, 5: ✅
18, 6: ✅
18, 10: ❌
18, 7: ❌
18, 3: ✅
18, 42: ✅
18, 8: ❌
18, 14: ❌
18, 9: ✅
18, 5: ❌
7, 6: ❌
7, 10: ❌
7, 18: ❌
7, 3: ❌
7, 42: ✅
7, 8: ❌
7, 14: ✅
7, 9: ❌
7, 5: ❌
3, 6: ✅
3, 10: ❌
3, 18: ✅
3, 7: ❌
3, 42: ✅
3, 8: ❌
3, 14: ❌
3, 9: ✅
3, 5: ❌
42, 6: ✅
42, 10: ❌
42, 18: ✅
42, 7: ✅
42, 3: ✅
42, 8: ❌
42, 14: ✅
42, 9: ✅
5, 9: ❌
```

## Strukturálatlan feladatok
Volt egy régi feladatgyűjtemény a tárgyhoz, csak bemásoltam ide a feladatokat, nem írtam hozzájuk megoldást. Ránézésre van benne olyan, amit most én is kitaláltam ide, de mindegy.

Objektumokat még nem néztünk, de az előadáson lesz róla szó, onnantól menni fog. Nyilván kövi gyakorlaton már venni fogjuk őket. Nem kell tudni első gyak után mindet megoldani, régi BSc-s Webproghoz készült, máshogy haladunk. Vannak kifejezetten nehezek is az utolsó szakaszban, meg lehet próbálni, de kövi gyakon founk ilyesmit csinálni, lehet utána jobb nekiesni.

### Elemi feladatok
1. Írd ki a konzolra, hogy "Hello világ!"
2. Készítsd el a Fahrenheitből Celsius fokba átalakító függvényt!
3. Készíts egy százalékszámító függvényt! Adott a szám, és az is, hogy hány százalékára vagy kíváncsi. Az eredményt írd ki!
4. Olvass be három számot, és döntsd el, hogy alkothatják-e egy háromszög oldalát!
5. Adott két egész szám, a és b. Írj függvény, amely eldönti, hogy b osztója-e a-nak!
6. Adott egy pont a síkon. Írj függvényt, amely megmondja, hogy a pont melyik síknegyedbe esik!
7. Adott két szám. Írj függvényt, amely visszaadja legnagyobb közös osztójukat!
```
Függvény lnko(a, b: Egész): Egész 
    Ha a < b akkor csere(a, b)
    maradek = a mod b
    Ciklus amíg maradek > 0
        a := b
        b := maradek
        maradek := a mod b
    Ciklus vége
    lnko := b
Függvény vége
```
8. Adott két szám. Írj függvényt, amely visszaadja legkisebb közös többszörösüket!
```
Függvény lkkt(a, b: Egész): Egész 
    x, y := a, b
    Ciklus amíg x ≠ y
        Elágazás
            x < y esetén x := x + a
            x > y esetén y := y + b
    Ciklus vége
    lkkt := x
Függvény vége
```
9. Írj függvényt, ami visszaadja egy egész szám faktoriálisát!
10. Adott a és b egész szám. Osztás művelete nélkül add meg a-nak b-vel való osztásakor keletkező maradékot.

### Programozási tételek
11. Egy számsorozatban keress meg egy negatív számot.
12. Számold meg, hány páros szám van egy számokat tartalmazó tömbben!
13. Válogasd ki azokat a számokat, amelyek mindkét szomszédjuktól egy előre bekért értéken belül térnek el.
14. Adott egy neveket tartalmazó tömb, válogasd ki azokat, amelyek
    - a. egy előre bekért részszöveget tartalmaznak!
    - b. egy előre bekért részszöveggel kezdődnek!
15. Írj függvényt, amely megadja egy egész szám prímtényezős felbontását!
16. Döntsd el egy mátrxiról, hogy minden eleme páros-e!
17. Határozd meg egy mátrixban, hogy hány olyan sora van, amely nem tartalmaz 0 értéket!
18. Válogasd ki egy mátrixból a negatív számokat!

### Adatszerkezetek és programozási tételek
Ezek már kifejezetten nehezek.

19. Adott egy matematikai kifejezés, ami (, [ és { zárójeleket is használ. Döntsd el egy verem segítségével, hogy helyes-e a zárójelezés! A vermet az alábbi módokon valósítsd meg:
    - a. sima tömb használatával (push, pop);
    - b. egy objektumba szervezve a veremhez kapcsolódó adatszerkezetet és metódusokat;
    - c. osztályba szervezve ugyanezeket!
20. Készíts egy sor osztályt, ami a megfelelő tömbműveleteket használja (pl. push-shift vagy unshift-pop)!
21. Egy űrlap adatainak ellenőrzése során számos hiba lehet. Készítsd el azt az adatszerkezetet, amelyekben a hibákat tárolod, és töltsd fel példaadatokkal. Listázd ki a hibákat a konzolra!
22. Készíts egy olyan adatszerkezetet, amely egy könyv adatait írja le. A könyvnél a következő adatokat tároljuk:
    - szerző
    - cím
    - kiadás éve
    - kiadó
    - ISBN szám
23. Készítsd el egy bevásárlólistának megfelelő adatszerkezetet, akkor ha a bevásárlólista
    - a. csak a termékek nevét tartalmazza;
    - b. a termékek neve mellett a vásárolandó mennyiséget is tárolja.
    - Az így elkészült listákat írasd ki a konzolra!
24. Készítsd el egy raktárnyilvántartás modelljét! A nyilvántartásban az alábbi adatokat tároljuk egy termékről:
    - a termék neve
    - gyártó
    - cikkszám
    - egységár
    - darabszám
    - Vegyél fel néhány példát az adatszerkezetbe, és oldd meg a következő feladatokat. Minden feladatot külön függvény végezzen, amely paraméterként kapja meg az aktuális raktárnyilvántartást.
    - a. Listázd ki a konzolra a termékek nevét!
    - b. Állíts elő egy olyan szöveget, amely a termékek nevét HTML felsorolásként adja meg!
    - c. Állíts elő egy olyan szöveget, amely a raktárnyilvántartást táblázatos formában jelenítené meg, ha az egy HTML oldalon lenne!
    - d. Add meg, hogy mekkora érték van összesen raktáron!
    - e. Keress meg egy adott cikkszámú terméket, és ha megvan, akkor add vissza!
    - f. Add meg, melyik termékből van a legkevesebb raktáron!
    - g. Add meg egy adott gyártó termékeit!
    - h. Számold meg, hány különböző gyártó terméke van a raktárban!
25. Írj egy olyan függvényt, amely paraméterül megkap egy objektumot, és megnézi, hogy az adott objektumnak van-e id nevű mezője. Ha nincsen, akkor kiegészíti az objektumot ezzel, és visszaadja a hívó programnak.
26. Készítsd el egy angol-magyar szótár adatszerkezetét és töltsd fel példaadatokkal! Írj függényt, amely egy magyar szónak megadja az angol megfelelőjét! Írd meg a másik irányú fordítást elvégző függvényt is!
27. Filmekről szeretnénk adatokat tárolni:
    - film címét,
    - film hosszát,
    - film kategóriáit (akár több kategóriába is tartozhat egy film),
    - gyártási évét,
    - rendezőit (mert lehet, hogy többen vannak),
    - szereplőit olyan formában, hogy melyik szerepet ki játszotta.
    - Készítsd el a megfelelő adatszerkezetet, és töltsd fel néhány példaadattal! Oldd meg a következő feladatokat külön függvényként!
    - a. Listázd ki a nyilvántartásban lévő filmeket!
    - b. Add meg azokat a filmeket, amelyeknek több rendezője is van!
    - c. Add meg a nyilvántartásban szereplő leghosszabb film címét!
    - d. Add meg azokat a filmeket, amelyekben egy paraméterként megkapott színész játszik!
28. Egy adott időszakban minden nap megmértük a Balaton vizének hőmérsékletét, és egy sorozatban tároltuk el. Külön-külön függvénnyel oldd meg a következő feladatokat!
    - a. Mennyi volt a vizsgált időszakban a víz átlaghőmérséklete?
    - b. Hányszor mértünk 26 Celsius fok feletti hőmérsékletet?
    - c. Melyik volt a legnagyobb mért hőmérséklet-érték?
    - d. Hányadik napon volt a leghidegebb a víz?
    - e. Melyik nap volt a víz pontosan 23 fokos?
    - f. Előfordult, hogy két egymást követő nap a víz hőmérséklete 3 fokot is változott?
    - g. Hány napból állt az a leghosszabb időszak, amikor a víz 25 fok felett volt?
29. Pár napon keresztül minden délben megmértük a levegő hőmérsékletét. Oldd meg az alábbi feladatokat!
    - a. Válogasd ki azokat az értékeket, amikor fagyott!
    - b. Mindegyik hőmérséklet érték végére fűzd oda a C szöveget!
    - c. Add meg a legmagasabb hőmérséklet értéke!
    - d. Add meg, hányszor ment a hőmérséklet 20 fok alá!
    - e. Döntsd el, van-e 40 fok fölötti érték!
    - f. Döntsd el, hogy mindegyik hőmérsékletérték pozitív-e!
    - g. Add meg az első olyan értéket, amikor 10 fok fölé ment a hőmérséklet!
