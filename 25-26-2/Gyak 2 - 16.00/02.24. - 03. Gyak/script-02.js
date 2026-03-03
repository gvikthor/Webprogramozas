const searchField = document.querySelector('#search-field')
const searchButton = document.querySelector('#search-btn')
const peopleUL = document.querySelector('#people-list')

const people = [
    {familyName: 'Smith', givenName: 'Peter', age: 28},
    {familyName: 'Rácz', givenName: 'George', age: 31},
    {familyName: 'Smith', givenName: 'Andrea', age: 24},
    {familyName: 'Pettigrew', givenName: 'Peter', age: 50},
    {familyName: 'Skywalker', givenName: 'Luke', age: 22},
]

function generateUL(list) {
    peopleUL.innerHTML = ''
    for(const person of list) {
        peopleUL.innerHTML += `<li>${person.givenName} ${person.familyName} (${person.age})</li>`
    }
}

/*
searchButton.onclick = () => {
    
}
*/

searchButton.onclick = function() {
    const searchTerm = searchField.value.toLowerCase() // Peter peter
    const filteredPeople = people.filter(person => 
        person.givenName.toLowerCase().includes(searchTerm) ||
        person.familyName.toLowerCase().includes(searchTerm)
    )
    generateUL(filteredPeople)
}

generateUL(people)