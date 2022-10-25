# Delegálás
## Függvény
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

## Hogyan delegáljunk?
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