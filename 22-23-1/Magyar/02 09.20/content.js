document.querySelector('#pets .cat').innerText = 'Kacagás'

const listItems = document.querySelectorAll('li')
//listItems.filter(li => li.innerText == 'Kacagás') nem fut le, mert ez egy NodeList, nem pedig tömb
listItems.forEach(li => console.log(li))

//people az arrayFunctions-js fileból jön, mert a HTML-ben előbb azt kértem el
const peopleDiv = document.querySelector('#people')
/*
for(const person of people){
    let list = '<ul>'
    for(const pet of person.pets){
        list += `<li>${pet.name}</li>`
    }
    list += '</ul>'
    peopleDiv.innerHTML += `<h1>${person.name}</h1>`
    peopleDiv.innerHTML += list
}*/
for(const person of people){
    const newH1 = document.createElement('h1') // 1. létrehozás
          newH1.innerText = person.name        // 2. tartalommal feltöltés
          peopleDiv.appendChild(newH1)         // 3. hozzáfűzés szülőhöz

    const newUL = document.createElement('ul')
          for(const pet of person.pets){
              const newLI = document.createElement('li')
                    newLI.innerText = pet.name
                    newUL.appendChild(newLI)
          }
          peopleDiv.appendChild(newUL)
}

/* +3 pontért
    táblázat generálás
    állat neve, fajtája, gazda neve
*/