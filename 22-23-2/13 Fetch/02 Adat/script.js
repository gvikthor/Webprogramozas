function fetchke(celnev, fuggveny, json = true){
    if(json) fetch(celnev).then(v => v.json()).then(e => fuggveny(e))
    else     fetch(celnev).then(v => v.text()).then(e => fuggveny(e))
}

const peopleUL = document.querySelector('#people')
const refreshButton = document.querySelector('#refresh')

refreshButton.addEventListener('click', event => {
    fetchke('data.php', response => {
        peopleUL.innerHTML = ''
        response.forEach(person => {
            peopleUL.innerHTML += `<li>${person.name} (${person.age})</li>`
        })
    })
})
