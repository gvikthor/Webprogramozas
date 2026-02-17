// document.body.innerHTML = '<i>Kutyus</i>'
// document.body.innerText = '<i>Kutyus</i>'
function $(id) {
    return document.body.querySelector(`#${id}`)
}

const animalUL = document.body.querySelector('#animal-list')
const animalButton = document.body.querySelector('#animal-button')
//const animalButton = $('animal-button')

const animals = ['doggy', 'kitten', 'hamster']

function generateAnimals() {
    animalUL.innerHTML = ''
    for (const animal of animals) {
        animalUL.innerHTML += `<li>${animal}</li>`
    }
}

animalButton.onclick = generateAnimals // ha nem teszem ki a zárójelet, akkor nem azonnal lefut a függvény, hanem azt mondom, hogy majd ha releváns lesz (oncklick esetében ez pl amikor rányomunk a gombra), akkor hívd meg. ez az ú.n. callback

// animalButton.addEventListener('click', generateAnimals)