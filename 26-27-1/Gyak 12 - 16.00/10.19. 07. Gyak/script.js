const cityRows = document.querySelector('#city-rows')
const inputFilterName = document.querySelector('#filter-name')
const inputFilterCountry = document.querySelector('#filter-country')
const inputFilterPopMin = document.querySelector('#filter-pop-min')
const inputFilterPopMax = document.querySelector('#filter-pop-max')
const buttonFilterGo = document.querySelector('#filter-go')

const divNewPic = document.querySelector('#new-pic')
const inputNewPicName = document.querySelector('#new-pic-name')
const buttonSavePicName = document.querySelector('#save-pic-name')

/**
 * Delegáló függvény, ami kiváltja a sok azonos eseménykezelőt.
 * @param {HTMLElement} parent A szülő összefoglaló elem
 * @param {String} child CSS selector a gyerekre
 * @param {String} when Esemény, pl. click
 * @param {Function} what Két paraméteres függvény, első paraméter: event, mésodik az elem, amire kattintottak
 */
function delegate(parent, child, when, what) {
    function eventHandlerFunction(event) {
        let eventTarget = event.target;
        let eventHandler = this;
        let closestChild = eventTarget.closest(child);

        if (eventHandler.contains(closestChild)) {
            what(event, closestChild);
        }
    }

    parent.addEventListener(when, eventHandlerFunction);
}

function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object))
}

function loadObjectFromLocalStorage(key) {
    let object = localStorage.getItem(key)
    return object ? JSON.parse(object) : null
}

function listCities(cities) {
    let tableHTML = ''
    for (const city of cities) {
        tableHTML += `<tr data-name="${city.name}">
            <td>${city.name}</td>
            <td>${city.country}</td>
            <td>${city.population}</td>
            <td><img src="img/${city.image}.svg"></td>
        </tr>`
    }
    cityRows.innerHTML = tableHTML
}

function listCountries() {
    const countries = []
    CITIES_DATA
        .map(city => city.country)
        .forEach(country => {
            if (!countries.includes(country)) countries.push(country)
        })

    let selectHTML = ''
    for (const country of countries) {
        selectHTML += `<option value="${country}">${country}</option>`
    }
    inputFilterCountry.innerHTML += selectHTML
}

function filterName(city) {
    if (inputFilterName.value == '') return true
    return city.name.toLowerCase().includes(inputFilterName.value.toLowerCase())
}

function filterCountry(city) {
    if (inputFilterCountry.value == 'none') return true
    return city.country.includes(inputFilterCountry.value)
}

function filterPopulation(city) {
    let lowerLimit = -Infinity
    let upperLimit = Infinity
    if (inputFilterPopMin.value != '') lowerLimit = inputFilterPopMin.value
    if (inputFilterPopMax.value != '') upperLimit = inputFilterPopMax.value

    return city.population >= lowerLimit && city.population <= upperLimit
}

delegate(cityRows, 'tr', 'click', (event, tr) => {
    cityRows.querySelector('.selected')?.classList.remove('selected')
    tr.classList.add('selected')
    divNewPic.classList.remove('hidden')

})

buttonSavePicName.addEventListener('click', event => {
    const tr = cityRows.querySelector('.selected')
    const cityName = tr.dataset.name
    const city = CITIES_DATA.find(city => city.name == cityName)
    city.image = inputNewPicName.value

    inputNewPicName.value = ''
    divNewPic.classList.add('hidden')
    listCities(
        CITIES_DATA
            .filter(filterName)
            .filter(filterCountry)
            .filter(filterPopulation)
    )
    saveObjectToLocalStorage('cities', CITIES_DATA)
})

buttonFilterGo.addEventListener('click', () => {
    listCities(
        CITIES_DATA
            .filter(filterName)
            .filter(filterCountry)
            .filter(filterPopulation)
    )
})

listCountries()
listCities(loadObjectFromLocalStorage('cities') ?? CITIES_DATA)