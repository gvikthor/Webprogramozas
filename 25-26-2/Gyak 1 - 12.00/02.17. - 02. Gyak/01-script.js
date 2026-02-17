// console.log(document.body)
// document.body.innerHTML = document.body.innerHTML + 'Doggy'
// document.body.innerHTML += 'Doggy'

// css selector
// szóköz a gyereket jelenti
// # az ID-t jelenti
// . az osztályt jelenti
const animalsUL = document.querySelector('#animals')
const plantsUL = document.querySelector('#plants')
const generateAnimalsBtn = document.querySelector('#generate-animals')
const generatePlantsBtn = document.querySelector('#generate-plants')

/*
animalsUL.innerHTML = '<li>Doggy</li>'
animalsUL.innerHTML += '<li>Kitten</li>'
*/


/*
animalsUL.innerHTML = `
    <li>Doggy</li>
    <li>Kitten</li>
`
*/

function generateAnimalsToList() {
    const animalsAtHome = ['dog', 'cat', 'fish']
    animalsUL.innerHTML = ''
    for (const animal of animalsAtHome) {
        animalsUL.innerHTML += `<li>${animal}</li>`
    }
    /*
    for(const animal of animalsAtHome) {
        const newLI = document.createElement('li')
        newLI.innerHTML = animal
        animalsUL.appendChild(newLI)
    }
    */
}

//generateAnimalsBtn.onclick = generateAnimalsToList
generateAnimalsBtn.addEventListener('click', generateAnimalsToList)
generatePlantsBtn.addEventListener('click', function(){

})
generatePlantsBtn.addEventListener('click', ()=>{
    const plants = ['mint', 'basil', 'tomato']
    plantsUL.innerHTML = ''
    for(const plant of plants) {
        plantsUL.innerHTML += `<li>${plant}</li>`
    }
})

