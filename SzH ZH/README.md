# Javascript csoportZH - Szombathely

**Írjátok át a fileok nevét valami.js helyett valami-js re (tehát pont helyett kötőjel)**
Készíts egy számológépet a következő komponensekkel:
- Adott két szöveg, ami a két számot mutatja, melyeken műveleteket végzünk (hívjuk ezeket számmezőknek). Az egyik ki van választva, a másik nincs.
- A kettő között egy szöveg, ami az aktuális műveletet mutatja.
- Alattuk 10 gomb, melyek 0-tól 9-ig a számjegyek
- Azok alatt 7 gomb
    - 4 alapművelet,
    - 1 egyenlőségjel,
    - egy VÁLT gomb, ami megfordítja a kijelölést a két számmezőn,
    - egy C gomb, ami visszaállítja a kijelölt mezőt nullára.
```html
<div>
    <div>0</div>
    <div>+</div>
    <div>0</div>
</div>
<div>
    <div>
        <button>0</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
    </div>
    <div>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
        <button>VÁLT</button>
        <button>C</button>
    </div>
</div>
```
A számológép a következő képpen működik:
- Ha megnyomunk egy számjegyet, az hozzáíródik a kijelölt számmezőhöz.
    - Ha megnyomjuk a VÁLT gombot, akkor innentől a másik számmező lesz kiválasztva, tehát ahhoz íródnak hozzá a számjegyek.
- Ha megnyomunk egy műveletet, arra cserélődik le a középső művelet.
- Ha megnyomjuk az egyenlőség gombot, az eredmény bekerül a baloldali számmezőbe, a jobboldali pedig kinullázódik.

Beadás:
- mohmas@inf.elte.hu , tárgy: WEB ZH
