// document.body.innerHTML += 'alma'

const animalUL = document.querySelector('#animal-list')
const animalButton = document.querySelector('#animal-button')

const animals = ['cow', 'chicken', 'pig']

function generateAnimals() {
    animalUL.innerHTML = ''
    for (const animal of animals) {
        animalUL.innerHTML += `<li>${animal}</li>`
    }
}

function exampleEvent() {
    console.log('test')
}

// animalButton.onclick = exampleEvent // ha nincs itt a zárójel, akkor nem rögtön lefut a függvény, hanem továbbadjuk, mint egy változót, és majd kezd vele amit akar az onclick (ezt hívjuk "callback"-nek)

animalButton.onclick = generateAnimals

// animalButton.addEventListener('click', generateAnimals)

