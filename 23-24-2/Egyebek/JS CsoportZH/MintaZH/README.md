# JavaScript - CsoportZH

## Információk
- A feladatmegoldására 45 perc van, a Canvas feltöltésre további 5.
- Adott egy induló csomag zip-ként.
    - Induló HTML, de nem kötelező azt használni (`index.html`).
    - Induló CSS, de nem kötelező azt használni (`style.css`).
    - Induló adathalmaz (`script.js`).
    - Induló readme file (`readme.md`).
- Egyetlen zip filet tölts fel, melynek tartalma:
    - Egy HTML file és a hozzá tartozó CSS (ha van).
    - Egy (vagy több) JS file.
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
A filmzene ipar titánja, Hans Zimmer, koncerteket szervez a világ körül, de a sok zeneszerzés mellé webprogramozni már nem volt ideje megtanulni. Segíts neki elkészíteni a koncertsorozat weboldalát.

## 1. Feladat - 2 pont
Van zeneszám a `Dune` című filmből? A megoldást írd a konzolra (vagy az oldal elejére)!

*Helyes megoldás:*
```js
true
```

## 2. Feladat - 2 pont
Listázd ki a konzolra (vagy az oldal elejére) a filmek hosszát `perc:másodperc` formátumban.  
Ha a `másolás` progtétel tömbfüggvényével csinálod, az egysoros megoldás valahogy így fog kinézni: `console.log(songs.valami(/*valami más*/))`

*Helyes megoldás (formátum lehet más): *
```js
Array(7) [ "3:46", "4:55", "4:11", "4:37", "3:59", "2:26", "5:28" ]
```

## 3. Feladat - 2 pont
Írd ki dinamikusan (javascripttel) a zenéket a táblázatba! Az időpontok mindegyike `perc:másodperc` formátumban legyen! (MintaZH, így a legnehezebbet gyakoroljuk, hogy a könnyebb is menjen)

## 4. Feladat - 2 pont
Ha a legördülő mezőben új elemet választunk ki, akkor a táblázat frissüljön, és csak a kiválasztott filmhez tartozó zenék jelenjenek meg. (A `movieInput` elemen figyeld az `input` eseményt)

## 5. Feladat - 2 pont
Ha rákattintunk egy sorra, növeld a hozzá tartozó zeneszám hosszát 10 másodperccel (és rajzold ki újra a táblázatot).

## +1. Feladat - +2 pont
Az 5. Feladatot delegálással oldd meg, több eseménykezelő és ciklus nélkül.
```JS
function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target
        let eventHandler = this
        let closestChild = eventTarget.closest(child)

        if(eventHandler.contains(closestChild)){
            what(event, closestChild)
        }
    }

    parent.addEventListener(when, eventHandlerFunction)
}
```