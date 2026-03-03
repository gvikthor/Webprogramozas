const filterInput = document.querySelector('#filter-value')
const filterButton = document.querySelector('#filter-btn')
const peopleUL = document.querySelector('#people-list')

const people = [
    { familyName: 'Smith', givenName: 'Peter', age: 29 },
    { familyName: 'Rácz', givenName: 'George', age: 31 },
    { familyName: 'Smith', givenName: 'Andrea', age: 25 },
    { familyName: 'Pan', givenName: 'Peter', age: 15 },
    { familyName: 'Skywalker', givenName: 'Luke', age: 19 },
]

function generatePeopleList(list) {
    peopleUL.innerHTML = ''
    for(const person of list) {
        peopleUL.innerHTML += `<li>${person.givenName} ${person.familyName} (${person.age})</li>`
    }
}

generatePeopleList(people)

/*
function isNegative(num){ return num < 0}
filter(num => num < 0)
*/

filterButton.onclick = () => {
    const filterValue = filterInput.value.toLowerCase()
    const filteredPeople = people.filter(
        person => person.givenName.toLowerCase().includes(filterValue) || person.familyName.toLowerCase().includes(filterValue)
    )
    generatePeopleList(filteredPeople)
}