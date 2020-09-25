# Delegálás
## Hogyan delegáljunk?
1. keressük ki Thor githubjáról a delegal függvényt
2. illesszük be a kódunkba, és ne törődjünk azzal, mi van beleírva
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
    bemegyAzOsztalyfonokhoz(esemeny, gyerek){
        hisztizzenNeki(esemeny.tanarAkiBeirta);
        puszitAd(gyerek);
    }
    delegal(anyuka, '.altalanosIskolasGyerek', 'beirnakAzEllenorzobe', bemegyAzOsztalyfonokhoz);
    ````


## Függvény
````JS
function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }


    szulo.addEventListener(mikor, esemenyKezelo);
}
````