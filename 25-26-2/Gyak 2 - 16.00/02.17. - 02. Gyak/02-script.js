const peopleTableBody = document.querySelector('#people-table tbody')
const increaseAgeButton = document.querySelector('#increase-age')
const ageAmountInput = document.querySelector('#age-amount')

const people = [
    { name: 'Peter', age: 28 },
    { name: 'George', age: 30 },
    { name: 'Aaron', age: 26 }
]

function generatePeople() {
    peopleTableBody.innerHTML = ''
    for (const person of people) {
        peopleTableBody.innerHTML += `
        <tr>
            <td>${person.name}</td>
            <td>${person.age}</td>
        </tr>
        `
    }
}

function increaseEveryonesAge(amount) {
    for(const person of people) {
        person.age += amount
    }
}

/*
function handleIncreaseAgeButton() {
    increaseEveryonesAge()
    generatePeople()
}
*/

increaseAgeButton.onclick = () => {
    const amount = parseInt(ageAmountInput.value)
    if(isNaN(amount)) return
    if(amount < 1) return 

    increaseEveryonesAge(amount)
    generatePeople()
}


generatePeople()