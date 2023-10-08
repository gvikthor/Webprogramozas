# JavaScript - CsoportZH

## Információk
- A feladatmegoldására 45 perc van, a Canvas feltöltésre további 5.
- Adott egy induló csomag zip-ként.
    - Induló HTML, de nem kötelező azt használni (`index.html`).
    - Induló adathalmaz (`script.js`).
    - Induló readme file (`readme.md`).
- Egyetlen zip filet tölts fel, melynek tartalma:
    - Egy HTML file.
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
Egy baráti társaság sütögetést szervez a hétvégére. Segíts nekik, hogy minden a lehető legsimábban menjen!

## 1. Feladat - 2 pont
Van olyan ember, akinek nincs semmi feladata? Írd ki konzolra!

*Helyes megoldás:*
```js
true
```

## 2. Feladat - 2 pont
Listázd ki a konzolra azokat az embereket, akiknek legalább 3 feladata van!

*Helyes megoldás (formátum lehet más): *
```js
0: Object { name: "Rezső", responsibilities: (4) […] }
1: Object { name: "Gergő", responsibilities: (5) […] }
2: Object { name: "Bálint", responsibilities: (5) […] }
```

## 3. Feladat - 2 pont
Írd ki dinamikusan (javascripttel) az összes ember nevét egy listába!

*Helyes megoldás:*
```html
<ul id="people">
    <li>Rezső</li>
    <li>Péter</li>
    <li>Gergő</li>
    <li>Áron</li>
    <li>Bálint</li>
    <li>Míra</li>
    <li>László</li>
</ul>
```

## 4. Feladat - 2 pont
Minden név mellé, a `li` tagen belülre helyezd el az adott emberhez tartozó feladatokat külön-külön `span` elemekbe.

*Helyes megoldás:*
```html
<ul id="people">
    <li>Rezső <span>tűzgyújtó folyadék</span><span>öngyújtó</span><span>szalonna</span><span>kenyér</span></li>
    <li>Péter <span>tűzifa</span></li>
    <li>Gergő <span>virsli</span><span>hagyma</span><span>mustár</span><span>ketchup</span><span>kifli</span></li>
    <li>Áron</li>
    <li>Bálint <span>kézi fűrész</span><span>sör</span><span>papírpohár</span><span>papírtányér</span><span>evőeszköz</span></li>
    <li>Míra <span>sió vitatrigris</span><span>papírtörlő</span></li>
    <li>László</li>
</ul>
```
*Ha az előre megadott HTML-be dolgozol, így fog kinézni:*
![Spanek](src/spanek.png)

## 5. Feladat - 2 pont
Ha rákattintunk egy `span` elemre, jelöld meg késznek (alkalmazd rá a `done` stílusosztályt)!

## +1. Feladat - +1 pont
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

## +2. Feladat - +1 pont
Ha rákattintunk egy kész elemre, legyen újra nem kész (vedd le a `done` stílusosztályt).