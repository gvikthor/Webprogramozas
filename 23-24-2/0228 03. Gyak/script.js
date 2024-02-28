/*
let A = {name: 'Gergő'}
let B = A
B.name = 'Peti'
console.log(A.name)

// hard copy, amikor úgy másolom le a komplex adatokat, hogy tényleg másolat legyenek, ne csak ugyanoda mutassanak
let C = JSON.decode(JSON.encode(A))
*/

//console.log(document.querySelector('#countries').innerText)
//console.log(document.querySelector('#countries').innerHTML)

//document.body
const countriesUL = document.querySelector('#countries')
//countriesUL.innerHTML += '<li>Germany</li>'

const countries = ['Hungary', 'Austria', 'Germany']

for (const country of countries) {
    countriesUL.innerHTML += `<li>${country}</li>`
}

const euCountries = [
    { name: 'Hungary', capital: 'Budapest', population: 9700000, language: 'Hungarian', areaKM2: 93000 },
    { name: 'Austria', capital: 'Vienna', population: 7000000, language: 'German', areaKM2: 83000 },
    { name: 'Germany', capital: 'Berlin', population: 60000000, language: 'German', areaKM2: 357000 }
]
const euCoutriesTableBody = document.querySelector('#eu-countries tbody')

function updateTable(languageSearchString = '') {
    euCoutriesTableBody.innerHTML = ''

    languageSearchString = languageSearchString.toLowerCase().trim()
    // languageSearchString[0] = languageSearchString[0].toUpperCase()
    //for (const country of euCountries) {
    euCountries.forEach((country, index) => {
        if (languageSearchString == '' || country.language.toLowerCase().includes(languageSearchString)) {
            euCoutriesTableBody.innerHTML += `
                <tr data-index="${index}" class="${country.population < 10000000 ? 'small' : 'large'}">
                    <td>${country.name}</td>
                    <td>${country.capital}</td>
                    <td>${country.population}</td>
                </tr>
                `
        }
    })
}

const searchInput = document.querySelector('#eu-country-search')
searchInput.addEventListener('input', event => {
    updateTable(searchInput.value)
})

updateTable()



const infobox = document.querySelector('#infobox')
const infoName = infobox.querySelector('#name')
const infoPop = infobox.querySelector('#pop')
const infoLang = infobox.querySelector('#lang')
const infoSize = infobox.querySelector('#size')

/*const countryTRs = euCoutriesTableBody.querySelectorAll('tr')
for(const tr of countryTRs){
    tr.addEventListener('click', event => {
        const country = euCountries[tr.dataset.index]
        //console.log(country, tr.dataset.index)
        infoName.innerText = country.name
        infoPop.innerText = country.pop
        infoLang.innerText = country.language
        infoSize.innerText = country.areaKM2
    })
}*/

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

delegate(euCoutriesTableBody, 'tr', 'click', (event, tr) => {
    const country = euCountries[tr.dataset.index]
    infoName.innerText = country.name
    infoPop.innerText = country.pop
    infoLang.innerText = country.language
    infoSize.innerText = country.areaKM2
})