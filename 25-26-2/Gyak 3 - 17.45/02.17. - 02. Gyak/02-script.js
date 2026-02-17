const increaseAgeButton = document.querySelector('#increase-age')
const peopleTableBody = document.querySelector('#people-table tbody')
const ageStepInput = document.querySelector('#age-step')

const people = [
    { name: 'Aaron', age: 26 },
    { name: 'George', age: 30 },
    { name: 'Peter', age: 28 }
]

function generatePeople() {
    peopleTableBody.innerHTML = ''
    for (const person of people) {
        peopleTableBody.innerHTML += `
        <tr>
            <td>${person.name}</td>
            <td>${person.age}</td>
        </tr>`
    }
}

function increaseAgeForEveryone(step) {
    for(const person of people) {
        person.age += step
    }
}

/*
function handleIncreaseAgeButtonClick() {
    generatePeople()
    increaseAgeForEveryone()
}

increaseAgeButton.onclick = handleIncreaseAgeButtonClick
*/

// increaseAgeButton.onclick = () => {} // arrow function
// increaseAgeButton.onclick = function() {} // névtelen függvény

increaseAgeButton.onclick = () => {
    const step = parseInt(ageStepInput.value)
    if(isNaN(step)) return
    if(step < 1) return

    increaseAgeForEveryone(step)
    generatePeople()
}

generatePeople()