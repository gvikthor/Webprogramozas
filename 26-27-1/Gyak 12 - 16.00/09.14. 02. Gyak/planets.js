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

/*
const planetsList = document.querySelector('#planets-list')

for(const planet of planets) {
    //planetsList.innerHTML = planetsList.innerHTML + '<li>' + planet.name + '</li>'
    //planetsList.innerHTML += '<li>' + planet.name + '</li>'
    planetsList.innerHTML += `<li>${planet.name}</li>` //backtick, altgr+7
}
*/

const planetsTableBody = document.querySelector('#planets-table-body')
const planetNameFilterInput = document.querySelector('#planet-name-filter')
const planetNameFilterInputButton = document.querySelector('#planet-name-filter-button')

function printFilteredPlanets(searchString = ''){
    planetsTableBody.innerHTML = ''

    planets
        .filter(planet => planet
            .name
            .toLowerCase()
            .includes(
                searchString
                .toLowerCase()
            ))
        .forEach(planet => {
            planetsTableBody.innerHTML +=
            `<tr>
                <td>${planet.name}</td>
                <td>${planet.orbit}</td>
                <td>${planet.period.toFixed(2)}</td>
            </tr>`
        })
}

printFilteredPlanets()

planetNameFilterInputButton.addEventListener('click', () => printFilteredPlanets(planetNameFilterInput.value))
planetNameFilterInput.addEventListener('keydown', event => {
    if(event.key == 'Enter') printFilteredPlanets(planetNameFilterInput.value)
})

/*
for(const planet of planets) {
    planetsTableBody.innerHTML +=
        `<tr>
            <td>${planet.name}</td>
            <td>${planet.orbit}</td>
            <td>${planet.period.toFixed(2)}</td>
        </tr>`
}
*/