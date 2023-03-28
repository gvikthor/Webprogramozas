/**
 * Delegáló függvény sok hasonló cselekvés elvégzéséhez.
 * @param {HTMLElement} parent Ki a fő szülő elem, akiben a sok egyforma kis elemünk helyezkedik el? Ez egy konkrét node legyen, tehát valami querySelectorral, vagy createElementtel szerezzük meg!
 * @param {String} child Kik a kis egyforma elemek? Ez egy string selector legyen, például 'p' vagy '.szin' vagy akár komplexebb 'ul li .specialisListaElem table td b'
 * @param {String} when Mi az az esemény, amit figyeljen a szülő? Ez is egy string, például 'click', 'keyup', 'input'
 * @param {Function} what Milyen történjen, ha a szülő meglátja, hogy egy figyelt gyerekkel történik az esemény? Ez egy két paraméteres függvény, aminek az első paramétere egy esemény, a második a gyerek, akivel történt az esemény.
 */
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

const positions = [
    {
        name: 'Programkoordinátor',
        volunteers: 2
    },
    {
        name: 'Programfelelős',
        volunteers: 9
    },
    {
        name: 'Csapatvezető-koordinátor',
        volunteers: 3,
    },
    {
        name: 'Csapatvezető',
        volunteers: 21
    },
    {
        name: 'Ügyeletkoordinátor',
        volunteers: 3
    },
    {
        name: 'Ügyeletes',
        volunteers: 19
    },
    {
        name: 'Logisztikai koordinátor',
        volunteers: 1
    },
    {
        name: 'Logisztikai csoport tag',
        volunteers: 15
    },
    {
        name: 'Fotós',
        volunteers: 0
    }
]

// Nem muszáj külön-külön megoldani, össze is vonhatod, a kommentek csak segítségként vannak itt, ki is törölheted őket, ha szeretnéd.

// 1. Feladat - 1 pont
// Van olyan pozíció, amire senki sem jelentkezett? Írd ki a konzolra!
console.log(positions.some(p => p.volunteers == 0))

// 2. Feladat - 1 pont
// Mely pozíciókra jelentkezett legalább 10 ember? Írd ki a konzolra!
console.log(positions.filter(p => p.volunteers >= 10).map(p => p.name).join(', '))

// 3. Feladat - 2 pont
// Összesen hány önkéntes jelentkezett táborszervezőnek? Írd ki a konzolra!
console.log(positions.reduce((sum, elem) => elem.volunteers + sum, 0))

// 4. Feladat - 2 pont
// Listázd ki a pozíciók neveit egy rendezetlen listába (`ul`)!

// 5. Feladat - 2 pont
// Minden pozíció neve mellé/mögé tegyél annyi jelölőt (célszerűen ezt: `💛`), ahányan jelentkeztek, egy-egy `span` elembe.
// `<li>Programkoordinátor<span>💛</span><span>💛</span><span>💛</span></li>`
const positionList = document.querySelector('ul')
positions.forEach(position => {
    const newLI = document.createElement('li')
    newLI.innerText = position.name
    for(let i = 0; i < position.volunteers; i++){
        newLI.innerHTML += '<span>💛</span>'
    }
    positionList.appendChild(newLI)
})

// 6. Feladat - 2 pont
// Ha egy jelölőre rákattintunk, változzon meg a színe (célszerűen: `💚`).
// Ha nem tudtad az 5. feladatot megoldani, változzon meg a pocízió nevének színe.
// Nem kell újabb kattintásra visszaváltoztatni a színt sárgára, elég, ha egyszer változik egy elemre.

// +1. Feladat - +2 pont
// A 6. Feladatot delegálással oldd meg.
delegate(positionList, 'span', 'click', (event, elem) => elem.innerText = `💚`)

