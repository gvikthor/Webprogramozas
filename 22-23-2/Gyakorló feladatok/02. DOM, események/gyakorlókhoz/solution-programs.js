const programs = [
    { name: 'Legoland', day: 'Monday', length: 8 },
    { name: 'National Museum', day: 'Tuesday', length: 3 },
    { name: 'Copenhagen Zoo', day: 'Tuesday', length: 4 },
    { name: 'National Aquarium', day: 'Tuesday', length: 4 },
    { name: 'Visiting Helsinborg', day: 'Wednesday', length: 12 },
    { name: 'Transportation Museum', day: 'Thursday', length: 3 },
    { name: 'Museum of Danish Resistance', day: 'Thursday', length: 3 },
    { name: 'Botanical Garden', day: 'Friday', length: 2 },
    { name: 'Planetarium', day: 'Friday', length: 2 },
    { name: 'Experimentarium', day: 'Friday', length: 2 },
]
const programsDiv = document.querySelector('#programs')

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

for(const day of days){
    const newDiv = document.createElement('div')
        const newH3 = document.createElement('h3')
        newH3.innerText = day
        newDiv.appendChild(newH3)

        let sumTime = 0
        for(const program of programs.filter(p => p.day === day)){
            const newSpan = document.createElement('span')
            newSpan.innerHTML = `${program.name}<br>(${program.length} hours)`
            newSpan.style.backgroundColor = randomColor()
            //newSpan.style.width = `${program.length * 100}px`
            sumTime += program.length
            newSpan.style.width = `${100 * program.length/24}%`
            newDiv.appendChild(newSpan)
        }
        const newSpan = document.createElement('span')
        newSpan.innerHTML = `Free time<br>(${sumTime} hours)`
        newSpan.style.backgroundColor = '#008c95'
        newSpan.style.width = `${100*(24 - sumTime)/24}%`
        newDiv.appendChild(newSpan)
    programsDiv.appendChild(newDiv)
}