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
Kovácz Gergely Áron
C2R1Y3
Web-fejlesztés 2. - számonkérés

Ezt a megoldást a fent írt hallgató küldte be és készítette a Web-fejlesztés 2. kurzus számonkéréséhez.
Kijelentem, hogy ez a megoldás a saját munkám. Nem másoltam vagy használtam harmadik féltől 
származó megoldásokat. Nem továbbítottam megoldást hallgatótársaimnak, és nem is tettem közzé. 
Nem használtam mesterséges intelligencia által generált kódot, kódrészletet.
Az ELTE HKR 377/A. § értelmében, ha nem megengedett segédeszközt veszek igénybe,
vagy más hallgatónak nem megengedett segítséget nyújtok, a tantárgyat nem teljesíthetem.

[x] 1. Ez egy példa feladat, ami hibátlanul készen van.
[ ] 2. Ez egy példa feladat, amibe Gergő nem kezdett bele.
[.] 3. Ez egy példa feladat, amibe Gergő belekezdett, de nem fejezte be, vagy nem működik teljesen.
```

## Lore
A Kopájlöt Egyesület minden nyáron tábort szervez tizenéves gyerekeknek. Számos beosztásban várják a jelentkező önkénteseket, és kicsit kaotikus lenne mindezt papíron tárolni. Segíts nekik, hogy egy szép felületen megjeleníthessék, milyen pozícióra hányan jelentkeztek eddig.

## 1. Feladat - 1 pont
Van olyan pozíció, amire senki sem jelentkezett? Írd ki a konzolra!

*Helyes megoldás: true*

## 2. Feladat - 1 pont
Mely pozíciókra jelentkezett legalább 10 ember? Írd ki a konzolra!
- Ha csak a tömböt logolod ki, 0.5 pont.
- Ha valamilyen módon szövegként írod ki (összefűzöd, listázod stb), 1 pont.

*Helyes megoldás (formátum lehet más): Csapatvezető, Ügyeletes, Logisztikai csoport tag*

## 3. Feladat - 2 pont
Összesen hány önkéntes jelentkezett táborszervezőnek? Írd ki a konzolra!

*Helyes megoldás: 73*

## 4. Feladat - 2 pont
Listázd ki a pozíciók neveit egy rendezetlen listába (`ul`)!

## 5. Feladat - 2 pont
Minden pozíció neve mellé/mögé tegyél annyi jelölőt (célszerűen ezt: `💛`), ahányan jelentkeztek, egy-egy `span` elembe.
- `<li>Programkoordinátor<span>💛</span><span>💛</span><span>💛</span></li>`

## 6. Feladat - 2 pont
Ha egy jelölőre rákattintunk, változzon meg a színe (célszerűen: `💚`).
- Ha nem tudtad az 5. feladatot megoldani, változzon meg a pocízió nevének színe.
- Nem kell újabb kattintásra visszaváltoztatni a színt sárgára, elég, ha egyszer változik egy elemre.

## +1. Feladat - +2 pont
A 6. Feladatot delegálással oldd meg.
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