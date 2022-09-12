const allatok = [
    {
        nev: 'Mirci',
        faj: 'Macska',
        tomeg: 5
    },
    {
        nev: 'Áron',
        faj: 'Kutya',
        tomeg: 15
    },
    {
        nev: 'Alma',
        faj: 'Mókus',
        tomeg: 1
    }
]

const tablazat = document.querySelector('#allatok')

for(const allat of allatok){
    const ujSor = document.createElement('tr')

        /*
        let ujCella = document.createElement('td')
            ujCella.innerHTML = allat.nev
            ujSor.appendChild(ujCella)

        ujCella = document.createElement('td')
            ujCella.innerHTML = allat.faj
            ujSor.appendChild(ujCella)

        ujCella = document.createElement('td')
            ujCella.innerHTML = `${allat.tomeg}kg`
            ujSor.appendChild(ujCella)
        */

        for(const attributum in allat){
            console.log(attributum, allat[attributum])
            const ujCella = document.createElement('td')
            ujCella.innerHTML = allat[attributum] + (attributum == 'tomeg' ? 'kg' : '')
            ujSor.appendChild(ujCella)
        }

        tablazat.appendChild(ujSor)
}