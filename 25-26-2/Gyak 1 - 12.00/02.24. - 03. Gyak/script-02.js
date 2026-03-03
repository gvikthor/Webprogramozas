const people = [
    { name: 'Peter',   familyName: 'Smith', age: 28 },
    { name: 'George',  familyName: 'Rácz', age: 31 },
    { name: 'Laure',   familyName: 'Smith', age: 32 },
    { name: 'Matthew', familyName: 'Németh', age: 25 },
    { name: 'Peter',   familyName: 'Pettigrew', age: 31 }
]

const searchInput = document.querySelector('#search-input')
const searchButton = document.querySelector('#search-btn')
const peopleUL = document.querySelector('#people-list')

function generatePeopleList(peopleList) {
    peopleUL.innerHTML =''
    for(const person of peopleList) {
        peopleUL.innerHTML += `<li>${person.name} ${person.familyName} (${person.age})</li>`
    }
}

generatePeopleList(people)

function lower(string){
    return string.toLowerCase()
}
searchButton.onclick = () => {
    const searchValue = searchInput.value.toLowerCase()
    /*const result = people
                    //.map(person => `${person.name} ${person.familyName}`.toLocaleLowerCase())
                    /*
                    .map(person => `${person.name} ${person.familyName}`)
                    .map(personName => personName.toLowerCase())
                    * /
                    .map(person => `${person.name} ${person.familyName}`)
                    .map(lower)
                    .filter(name => name.includes(searchValue))
    */

    const result = people.filter(person => person.name.toLowerCase().includes(searchValue) || person.familyName.toLowerCase().includes(searchValue))

    generatePeopleList(result)
}