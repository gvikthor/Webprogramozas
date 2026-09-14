let planets = [
    { name: 'Mercury', orbit: 57909227, period: 0.2408467 },
    { name: 'Venus', orbit: 108209475, period: 0.61519726 },
    { name: 'Earth', orbit: 149598262, period: 	1.0000174 },
    { name: 'Mars', orbit: 	227943824, period: 	1.8808476 },
    { name: 'Jupiter', orbit: 778340821, period: 11.862615 },
    { name: 'Saturn', orbit: 1426666422, period: 29.447498 },
    { name: 'Uranus', orbit: 2870658186, period: 84.016846 },
    { name: 'Neptune', orbit: 4498396441, period: 164.79132 }
]
const planetsUL = document.querySelector('#planets-list');

//Array.from(planets).filter().forEach()


//[...planets] // itt most nem sok értelme van spreadelni, mert egy tömbből csinálunk tömbböt, de így meg lehet mutatni, mi az egyetlen use-case a pontosvesszőre a sor végén
/*planets
    .filter(planet => planet.orbit > 227943820)
    .forEach(planet => planetsUL.innerHTML += `<li>${planet.name}</li>`)*/

function $(selector) {
    return document.querySelector(selector)
    // én nem fogom használni, de ha szeretnétek nyugodtan
}

const filterInput = $('#filter-text')
const filterButton = document.querySelector('#filter-button')
const planetsTbody = document.querySelector('#planets-tbody')

function listPlanets(nameFilter = '') {
    // for(const planet of planets.filter(planet => planet.name.includes(nameFilter))) {
        //planetsUL.innerHTML += '<li>' + planet.name + '</li>'
        //planetsUL.innerHTML += `<li>${planet.name}</li>` // altgr + 7

    planetsTbody.innerHTML = ''
    for(const planet of planets) {
        if(!planet.name.toLowerCase().includes(nameFilter.toLowerCase())) continue

        planetsTbody.innerHTML +=   `<tr>
                                        <td>${planet.name}</td>
                                        <td>${planet.orbit}</td>
                                        <td>${planet.period.toFixed(2)}</td>
                                    </tr>`
    }
}

filterButton.addEventListener('click', event => {
    listPlanets(filterInput.value)
})

filterInput.addEventListener('keydown', event => {
    if(event.key == 'Enter') listPlanets(filterInput.value)
})

filterInput.addEventListener('input', event => {
    listPlanets(filterInput.value)
})

listPlanets()