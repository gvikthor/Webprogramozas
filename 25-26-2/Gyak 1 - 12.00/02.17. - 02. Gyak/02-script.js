const peopleTable = document.querySelector('#people tbody')
const addYearBtn = document.querySelector('#add-year')
const yearAmountInput = document.querySelector('#year-amount')

const people = [
    { name: 'George', age: 30 },
    { name: 'Peter', age: 28 },
    { name: 'Aaron', age: 25 },
    { name: 'Laury', age: 29 }
]

function generatePeople() {
    peopleTable.innerHTML = ''
    for (const person of people) {
        peopleTable.innerHTML += `
        <tr>
            <td>${person.name}</td>
            <td>${person.age}</td>
        </tr>
    `
    }
}

function addYearToEveryone() {
    const addAge = parseFloat(yearAmountInput.value)
    // .toFixed(2) függvény átalakítja két tizedesre pl.
    if(isNaN(addAge)) return
    if(addAge < 1) return

    for(const person of people) {
        person.age += addAge
    }
    generatePeople()
}

addYearBtn.onclick = addYearToEveryone // ha nincs ott a zárójel, akkor átadjuk, hogy "majd csinálj vele valamit amikor neked releváns" (úgynevezett callback)


generatePeople()