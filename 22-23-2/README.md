# Web-fejlesztés 2. 2022/23 Tavasz

## Delegálás
### Függvény
```js
function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target;
        let eventHandler = this;
        let closestChild = eventTarget.closest(child);

        if(eventHandler.contains(closestChild)){
            what(event, closestChild);
        }
    }

    parent.addEventListener(when, eventHandlerFunction);
}
```

### Hogyan delegáljunk?
1. keressük ki Thor githubjáról a delegate függvényt
2. illesszük be a kódunkba
3. hívjuk meg a függvényt négy paraméterrel
    - Paraméter 1: Ki a fő szülő elem, akiben a sok egyforma kis elemünk helyezkedik el?
                 Ez egy konkrét node legyen, tehát valami querySelectorral, vagy createElementtel szerezzük meg!
    - Paraméter 2: Kik a kis egyforma elemek?
                 Ez egy string selector legyen, például 'p' vagy '.szin' vagy akár komplexebb  
                 'ul li .specialisListaElem table td b'
    - Paraméter 3: Mi az az esemény, amit figyeljen a szülő?
                 Ez is egy string, például 'click', 'keyup', 'input'
    - Paraméter 4: Milyen történjen, ha a szülő meglátja, hogy egy figyelt gyerekkel történik az esemény?
                 Ez egy két paraméteres függvény, aminek az első paramétere egy esemény, a második a gyerek, akivel történt az esemény.

    - Például:
    
    ````JS
    function visitTheTeacher(event, child){
        talkToTheTeacher(event.teacherWhoCalledIn);
        talkToTheChild(child);
    }
    delegate(mother, '.gradeSchoolStudent', 'askForParentToComeIn', visitTheTeacher);
    ````

## LocalStorage

```JS
function permaSaveJSON(attributeName, value){
    window.localStorage.setItem(attributeName, JSON.stringify(value))
}

function permaSaveText(attributeName, value){
    window.localStorage.setItem(attributeName, value)
}

function permaLoadJSON(attributeName){
    return JSON.parse(window.localStorage.getItem(attributeName))
}

function permaLoadText(attributeName){
    return window.localStorage.getItem(attributeName)
}
```

## VSCode téma
Ha szeretnéd ugyanazt a témát használni, mint én:
1. Keress rá a "Gruvbox Theme" extensionre VSCode-ban
2. Telepítsd az extensiont.
3. Nyomd meg az F1 gombot, és írd be, hogy `Preferences: Color Theme`, majd nyomj entert.
4. Írd be, hogy `Gruvbox Dark Medium` és nyomj entert



![Gruvbox Theme kikeresése VSCode extensionök közt](./T%C3%A9ma%20be%C3%A1ll%C3%ADt%C3%A1sa/00_search.png)
![Téma telepítése](./T%C3%A9ma%20be%C3%A1ll%C3%ADt%C3%A1sa/01_extension.png)
![Témák beállításának megynitása](./T%C3%A9ma%20be%C3%A1ll%C3%ADt%C3%A1sa/02_run.png)
![Konkrét téma kiválasztása](./T%C3%A9ma%20be%C3%A1ll%C3%ADt%C3%A1sa/03_theme.png)