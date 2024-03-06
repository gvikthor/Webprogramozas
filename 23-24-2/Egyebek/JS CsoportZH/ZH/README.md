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
Gergő csapatépítőt szeretne szervezni a munkahelyén. Segíts neki az időbeosztásban!

## 1. Feladat - 2 pont
Listázd ki a konzolra (vagy az oldal tetejére) azokat a szekciókat, amikhez kell étel/ital (`resouce` tömbben van `catering`).

*Helyes megoldás (formátum lehet más, elég akár csak a nevük is):*
```js
Array(3)[
    {name: 'Megérkezés, lepakolás', length: 30, resources: ['catering']},
    {name: '2. Szünet', length: 45, resources: ['catering', 'sztalok', 'székek']},
    {name: '3. Szünet', length: 10, resources: ['catering']}
]
```

## 2. Feladat - 2 pont
Listázd ki a konzolra (vagy az oldal elejére) a szekciók hosszát `óra h perc` formátumban.  

*Helyes megoldás (formátum lehet más): *
```js
Array(10)[`0h30`, `0h15`, `1h00`, `0h10`, `1h30`, `0h45`, `1h30`, `0h10`, `0h30`, `0h30`]
```

## 3. Feladat - 2 pont
Írd ki dinamikusan (JavaScripttel) a szekciók nevét egy listéba, mellettük zárójelben a hosszukat `óra h perc` formátumban.

## 4. Feladat - 2 pont
Ha megnyomjuk a keresés gombot, generáld újra a listát csak azokkal a szekciókkal, amikhez kell a megadott eszköz (`resource`).
- Ha csak pontos egyezést vizsgálsz, akkor 1.5 pont jár.
- Ha részletet is (`iroda` keresés kiadja az `irodaszer`-es szekciókat is), akkor 2 pont jár.

## 5. Feladat - 2 pont
Ha rákattintunk egy listaelemre (szekcióra), növeld a hosszát fél órával és rajzold ki újra a táblázatot.

## +1. Feladat - +2 pont
Az 5. Feladatot delegálással oldd meg, több eseménykezelő és ciklus nélkül. Ha ezt csinálod, nem kell külön a ciklusos megoldást benne hagyni, ez magában megadja az 5. feladat pontját is.
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